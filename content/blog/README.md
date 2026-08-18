# Contenido del blog

Esta carpeta contiene artículos editoriales en Markdown. Ningún archivo con `status: "draft"` se publica ni se incluye en las rutas o el sitemap. Los artículos aprobados usan `status: "published"` y fechas reales.

## Contrato de contenido

Cada artículo debe incluir este frontmatter:

```yaml
---
title: "Título único"
description: "Descripción única"
slug: "slug-unico"
editorialId: "B01"
status: "draft"
author: "IB Studio"
cluster: "nombre-del-cluster"
primaryTopic: "tema principal"
searchIntent: "informational"
featuredImage: "/blog/slug-unico.webp"
featuredImageAlt: "Descripción de la imagen pendiente"
relatedPosts:
  - "slug-relacionado"
ctaLabel: "Pedir presupuesto para mi web"
ctaHref: "/#contacto"
sources: []
---
```

`datePublished` y `dateModified` se añadirán al aprobar y programar el artículo. No se deben inventar fechas para borradores.

La web usa temporalmente el logotipo de IB Studio como imagen social. `featuredImage` y `featuredImageAlt` dejan preparado cada artículo para añadir una portada propia más adelante sin cambiar el formato del contenido.

## Revisión mínima

- Comprobar que no inventa experiencia, cifras, casos o resultados de IB Studio.
- Revisar todas las fuentes y afirmaciones que puedan haber cambiado.
- Confirmar que resuelve una intención distinta a las páginas existentes.
- Revisar título, descripción, encabezados, enlaces y CTA.
- Crear la imagen y confirmar su texto alternativo.
- Añadir la fecha real y cambiar el estado solo cuando vaya a publicarse.
- Mantener fuera del sitemap cualquier borrador.

El inventario completo, los artículos bloqueados y el prompt editorial están en `../plan-editorial-blog.md` y `../blog-contexto-pendiente.md`.
