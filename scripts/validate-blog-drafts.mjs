import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const contentDirectory = path.resolve("content/blog");
const expectedIndex = process.argv.indexOf("--expected");
const expectedCount =
  expectedIndex >= 0 ? Number(process.argv[expectedIndex + 1]) : undefined;
const checkSafeSet = process.argv.includes("--safe-set");
const blockedEditorialIds = new Set([
  "B02",
  "B05",
  "B08",
  "B20",
  "B49",
  "B65",
  "B66",
  "B71",
  "B72",
  "B73",
  "B74",
  "B75",
  "B76",
  "B77",
  "B78",
  "B79",
  "B80",
]);
const safeEditorialIds = new Set(
  Array.from({ length: 80 }, (_, index) => `B${String(index + 1).padStart(2, "0")}`)
    .filter((editorialId) => !blockedEditorialIds.has(editorialId)),
);

const requiredFields = [
  "title",
  "description",
  "slug",
  "editorialId",
  "status",
  "author",
  "cluster",
  "primaryTopic",
  "searchIntent",
  "featuredImage",
  "featuredImageAlt",
  "relatedPosts",
  "ctaLabel",
  "ctaHref",
  "sources",
];

const discouragedPhrases = [
  "en la era digital",
  "en el mundo digital actual",
  "cabe destacar",
  "es importante destacar",
  "en conclusión",
  "sin más preámbulos",
  "solución innovadora",
  "experiencia perfecta",
];

function parseScalar(value) {
  const trimmed = value.trim();

  if (trimmed === "[]") return [];
  if (trimmed === "null") return null;
  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    return trimmed.slice(1, -1);
  }

  return trimmed;
}

function parseFrontmatter(source, filename) {
  if (!source.startsWith("---\n")) {
    throw new Error(`${filename}: falta el delimitador inicial de frontmatter`);
  }

  const endIndex = source.indexOf("\n---\n", 4);
  if (endIndex < 0) {
    throw new Error(`${filename}: falta el delimitador final de frontmatter`);
  }

  const frontmatterSource = source.slice(4, endIndex);
  const body = source.slice(endIndex + 5).trim();
  const data = {};
  let listKey;

  for (const line of frontmatterSource.split("\n")) {
    const fieldMatch = line.match(/^([A-Za-z][A-Za-z0-9]*):(?:\s*(.*))?$/);
    if (fieldMatch) {
      const [, key, rawValue = ""] = fieldMatch;
      if (rawValue.trim() === "") {
        data[key] = [];
        listKey = key;
      } else {
        data[key] = parseScalar(rawValue);
        listKey = undefined;
      }
      continue;
    }

    const itemMatch = line.match(/^\s+-\s+(.+)$/);
    if (itemMatch && listKey) {
      data[listKey].push(parseScalar(itemMatch[1]));
    }
  }

  return { data, body };
}

function bodyWordCount(body) {
  return body
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/<[^>]+>/g, " ")
    .replace(/[#>*_`|\-[\]]/g, " ")
    .split(/\s+/)
    .filter(Boolean).length;
}

function bodyFiveGrams(body) {
  const words = body
    .toLocaleLowerCase("es")
    .replace(/https?:\/\/\S+/g, " ")
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .split(/\s+/)
    .filter((word) => word.length > 2);
  const grams = new Set();

  for (let index = 0; index <= words.length - 5; index += 1) {
    grams.add(words.slice(index, index + 5).join(" "));
  }

  return grams;
}

function jaccard(left, right) {
  if (!left.size || !right.size) return 0;
  let intersection = 0;
  for (const value of left) {
    if (right.has(value)) intersection += 1;
  }
  return intersection / (left.size + right.size - intersection);
}

const allFiles = await readdir(contentDirectory);
const markdownFiles = allFiles
  .filter((filename) => filename.endsWith(".md") && filename !== "README.md")
  .sort();

const errors = [];
const warnings = [];
const posts = [];

if (Number.isFinite(expectedCount) && markdownFiles.length !== expectedCount) {
  errors.push(
    `Se esperaban ${expectedCount} borradores y se encontraron ${markdownFiles.length}.`,
  );
}

for (const filename of markdownFiles) {
  const source = await readFile(path.join(contentDirectory, filename), "utf8");

  try {
    const parsed = parseFrontmatter(source, filename);
    posts.push({ filename, source, ...parsed });
  } catch (error) {
    errors.push(error.message);
  }
}

const valuesByField = new Map([
  ["slug", new Map()],
  ["editorialId", new Map()],
  ["title", new Map()],
  ["description", new Map()],
]);

for (const post of posts) {
  const { filename, data, body, source } = post;

  for (const field of requiredFields) {
    if (!(field in data) || data[field] === "") {
      errors.push(`${filename}: falta el campo ${field}.`);
    }
  }

  for (const [field, values] of valuesByField) {
    const value = data[field];
    if (typeof value !== "string") continue;
    if (values.has(value)) {
      errors.push(
        `${filename}: ${field} duplicado con ${values.get(value)} (${value}).`,
      );
    } else {
      values.set(value, filename);
    }
  }

  if (data.status !== "draft" && data.status !== "published") {
    errors.push(`${filename}: status debe ser draft o published.`);
  }

  if (
    typeof data.editorialId === "string" &&
    !/^B(?:0[1-9]|[1-7][0-9]|80)$/.test(data.editorialId)
  ) {
    errors.push(`${filename}: editorialId no válido (${data.editorialId}).`);
  }

  if (data.slug && filename !== `${data.slug}.md`) {
    errors.push(`${filename}: el nombre no coincide con el slug ${data.slug}.`);
  }

  if (data.slug && data.featuredImage !== `/blog/${data.slug}.webp`) {
    errors.push(`${filename}: featuredImage no coincide con el slug.`);
  }

  if (data.ctaHref !== "/#contacto") {
    warnings.push(`${filename}: revisar el destino CTA ${data.ctaHref}.`);
  }

  if (data.status === "draft" && ("datePublished" in data || "dateModified" in data)) {
    errors.push(`${filename}: un borrador no debe declarar fechas de publicación.`);
  }

  if (data.status === "published") {
    for (const field of ["datePublished", "dateModified"]) {
      if (typeof data[field] !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(data[field])) {
        errors.push(`${filename}: un artículo publicado necesita ${field} en formato YYYY-MM-DD.`);
      }
    }
  }

  if (typeof data.description === "string") {
    if (data.description.length < 70 || data.description.length > 180) {
      warnings.push(
        `${filename}: descripción de ${data.description.length} caracteres.`,
      );
    }
  }

  if (/^#\s+/m.test(body)) {
    warnings.push(
      `${filename}: contiene un H1 en el cuerpo; el título se renderizará desde frontmatter.`,
    );
  }

  const h2Count = (body.match(/^##\s+/gm) ?? []).length;
  if (h2Count < 2) {
    errors.push(`${filename}: necesita al menos dos secciones H2.`);
  }

  const wordCount = bodyWordCount(body);
  if (wordCount < 500) {
    errors.push(`${filename}: solo tiene ${wordCount} palabras de cuerpo.`);
  }

  if (source.includes("—")) {
    warnings.push(`${filename}: contiene raya larga.`);
  }

  if (/\b(?:TODO|TBD|LOREM IPSUM)\b/.test(source)) {
    errors.push(`${filename}: contiene un marcador pendiente.`);
  }

  if (/https?:\/\/(?:www\.)?example\.com/i.test(source)) {
    errors.push(`${filename}: contiene una URL de ejemplo.`);
  }

  const lowercaseSource = source.toLocaleLowerCase("es");
  for (const phrase of discouragedPhrases) {
    if (lowercaseSource.includes(phrase)) {
      warnings.push(`${filename}: contiene la frase desaconsejada “${phrase}”.`);
    }
  }

  if (!Array.isArray(data.relatedPosts)) {
    errors.push(`${filename}: relatedPosts debe ser una lista.`);
  }

  if (!Array.isArray(data.sources)) {
    errors.push(`${filename}: sources debe ser una lista.`);
  } else {
    for (const sourceUrl of data.sources) {
      if (typeof sourceUrl !== "string" || !sourceUrl.startsWith("https://")) {
        errors.push(`${filename}: fuente no válida (${sourceUrl}).`);
      }
    }

    const declaredSources = new Set(data.sources);
    const externalBodyLinks = [
      ...body.matchAll(/\]\((https:\/\/[^)]+)\)/g),
    ].map((match) => match[1]);
    for (const externalUrl of externalBodyLinks) {
      if (!declaredSources.has(externalUrl)) {
        errors.push(
          `${filename}: enlace externo no declarado en sources (${externalUrl}).`,
        );
      }
    }
  }
}

const knownSlugs = new Set(
  posts.map((post) => post.data.slug).filter((slug) => typeof slug === "string"),
);
const statusBySlug = new Map(
  posts
    .filter((post) => typeof post.data.slug === "string")
    .map((post) => [post.data.slug, post.data.status]),
);
const inboundLinks = new Map([...knownSlugs].map((slug) => [slug, 0]));

if (checkSafeSet) {
  const presentIds = new Set(
    posts
      .map((post) => post.data.editorialId)
      .filter((editorialId) => typeof editorialId === "string"),
  );

  for (const editorialId of safeEditorialIds) {
    if (!presentIds.has(editorialId)) {
      errors.push(`Falta el borrador seguro ${editorialId}.`);
    }
  }

  for (const editorialId of presentIds) {
    if (!safeEditorialIds.has(editorialId)) {
      errors.push(`El conjunto incluye un ID bloqueado o desconocido: ${editorialId}.`);
    }
  }
}

for (const post of posts) {
  if (!Array.isArray(post.data.relatedPosts)) continue;
  for (const relatedSlug of post.data.relatedPosts) {
    if (!knownSlugs.has(relatedSlug)) {
      warnings.push(
        `${post.filename}: relatedPosts apunta a un borrador inexistente (${relatedSlug}).`,
      );
    } else if (relatedSlug !== post.data.slug) {
      inboundLinks.set(relatedSlug, inboundLinks.get(relatedSlug) + 1);
    }
  }

  const bodyLinks = [...post.body.matchAll(/\]\(\/blog\/([^/#?)]+)(?:[?#][^)]*)?\)/g)];
  for (const match of bodyLinks) {
    const linkedSlug = match[1];
    if (!knownSlugs.has(linkedSlug)) {
      warnings.push(
        `${post.filename}: enlace interno a un borrador inexistente (${linkedSlug}).`,
      );
    } else if (
      post.data.status === "published" &&
      statusBySlug.get(linkedSlug) !== "published"
    ) {
      errors.push(
        `${post.filename}: un artículo publicado enlaza a un borrador (${linkedSlug}).`,
      );
    } else if (linkedSlug !== post.data.slug) {
      inboundLinks.set(linkedSlug, inboundLinks.get(linkedSlug) + 1);
    }
  }
}

for (const [slug, inboundCount] of inboundLinks) {
  if (inboundCount === 0) {
    warnings.push(`El borrador ${slug} no recibe ningún enlace interno.`);
  }
}

const gramsByPost = posts.map((post) => ({
  filename: post.filename,
  grams: bodyFiveGrams(post.body),
}));

for (let leftIndex = 0; leftIndex < gramsByPost.length; leftIndex += 1) {
  for (
    let rightIndex = leftIndex + 1;
    rightIndex < gramsByPost.length;
    rightIndex += 1
  ) {
    const left = gramsByPost[leftIndex];
    const right = gramsByPost[rightIndex];
    const similarity = jaccard(left.grams, right.grams);
    if (similarity >= 0.18) {
      warnings.push(
        `${left.filename} y ${right.filename}: similitud textual ${(similarity * 100).toFixed(1)}%.`,
      );
    }
  }
}

const wordCounts = posts.map((post) => bodyWordCount(post.body)).sort((a, b) => a - b);
const totalWords = wordCounts.reduce((sum, count) => sum + count, 0);
const medianWords = wordCounts.length
  ? wordCounts[Math.floor(wordCounts.length / 2)]
  : 0;

console.log(`Artículos revisados: ${posts.length}`);
console.log(`Palabras de cuerpo: ${totalWords} (mediana: ${medianWords})`);
console.log(`Errores: ${errors.length}`);
console.log(`Avisos: ${warnings.length}`);

if (errors.length) {
  console.error("\nERRORES");
  for (const error of errors) console.error(`- ${error}`);
}

if (warnings.length) {
  console.warn("\nAVISOS");
  for (const warning of warnings) console.warn(`- ${warning}`);
}

if (errors.length) process.exitCode = 1;
