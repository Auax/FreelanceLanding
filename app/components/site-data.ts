export const navItems = ["Inicio", "Servicios", "Proyectos", "Planes", "Contacto", "FAQ"];

export const contactInfo = {
  email: "ibaifo8@gmail.com",
  phone: "+34 652 56 46 94",
  whatsappHref: "https://wa.me/34652564694",
  phoneHref: "tel:+34652564694",
};

const navAnchors: Record<string, string> = {
  Inicio: "inicio",
  Servicios: "servicios",
  Proyectos: "proyectos",
  Planes: "planes",
  Contacto: "contacto",
  FAQ: "faq",
};

export function getNavHref(item: string): string {
  const anchor = navAnchors[item] ?? item.toLowerCase();
  return `/#${anchor}`;
}

export const websiteTools = [
  { name: "Figma", logo: "/images/tools/figma.svg" },
  { name: "Next.js", logo: "/images/tools/nextjs.svg" },
  { name: "Tailwind", logo: "/images/tools/tailwindcss.svg" },
  { name: "Vercel", logo: "/images/tools/vercel.svg" },
  { name: "Analytics", logo: "/images/tools/google-analytics.svg" },
] as const;

export type FeatureIcon = "calendar-check" | "smartphone" | "chart-column";

export type FeatureCard = {
  id: string;
  title: string;
  body: string;
  icon: FeatureIcon;
};

export const featureCards: FeatureCard[] = [
  {
    id: "contact",
    title: "Reservas y contacto fácil",
    body: "Reservas, WhatsApp y llamadas sin complicaciones. Integrado con herramientas que ya usas.",
    icon: "calendar-check",
  },
  {
    id: "mobile-design",
    title: "Diseño moderno y optimizado para móvil",
    body: "La mayoría de clientes te visitan desde el móvil. Tu web se verá clara, profesional y adaptada a la imagen de tu negocio.",
    icon: "smartphone",
  },
  {
    id: "analytics",
    title: "Entiende a tus clientes",
    body: "Ve visitas, clics, llamadas, formularios y cómo interactúan tus clientes con tu web, todo en un solo lugar.",
    icon: "chart-column",
  },
];

export const analyticsPreviewData = {
  title: "Reservas - Analytics",
  metrics: [
  { label: "Clientes", value: "428", increase: "18,2%" },
  { label: "Reservas", value: "93", increase: "11,4%" },
],

chartLabel: "Gráfico interactivo de clientes durante los últimos 30 días",

chartData: [
  { day: "28 abr", clientes: 17 },
  { day: "30 abr", clientes: 36 },
  { day: "2 may", clientes: 49 },
  { day: "4 may", clientes: 71 },
  { day: "6 may", clientes: 83 },
  { day: "8 may", clientes: 112 },
  { day: "10 may", clientes: 124 },
  { day: "12 may", clientes: 158 },
  { day: "14 may", clientes: 169 },
  { day: "16 may", clientes: 198 },
  { day: "18 may", clientes: 216 },
  { day: "20 may", clientes: 257 },
  { day: "22 may", clientes: 271 },
  { day: "24 may", clientes: 329 },
  { day: "26 may", clientes: 351 },
  { day: "28 may", clientes: 428 },
]
};

export const selectedWork = [
  {
    name: "Bioacting",
    category: "Ecommerce / Tienda online",
    year: "2025",
    image: "/project-images/nuria-web.webp",
    alt: "Bioacting website project",
  },
  {
    name: "Aurelian",
    category: "Web design demo",
    year: "2026",
    image: "/project-images/aurelian-demo.webp",
    alt: "Urban Bites restaurant website project",
  },
];

export const plans = [
  {
    name: "Esencial",
    price: "300 €",
    body: "Todo lo necesario para empezar a vender online.",
    features: [
      "Una página",
      "Diseño moderno + móvil",
      "Whatsapp Integrado",
      "Botón de reservas",
      "Formulario de contacto",
      "Google Maps",
    ],
  },
  {
    name: "Profesional",
    price: "550 €",
    body: "Pack pensado para generar confianza y aumentar tus ventas.",
    popular: true,
    features: [
      "Todo lo del plan esencial",
      "Hasta 5 páginas",
      "Páginas personalizadas",
      "Formularios avanzados",
      "Optimización de Google My Business",
      "Más rondas de cambios",
    ],
  },
  {
    name: "Enterprise",
    price: "800 €",
    body: "Maximum features, zero limits.",
    features: [
      "Todo lo del plan profesional",
      "Hasta 8 páginas",
      "Funcionalidades adaptadas al negocio",
      "Integraciones con herramientas externas",
      "Diseño premium",
      "Automatizaciones IA",
    ],
  },
];

export const faqs = [
  {
    question: "¿Tengo que pagar una cuota todos los meses?",
    answer:
      "No. El diseño de la web es un pago único (además puedes pagar de manera flexible). La web es tuya para siempre. Solo hay un pequeño coste anual (dominio y alojamiento) que es necesario para que la web exista en internet, pero no tienes ninguna permanencia conmigo si no quieres.",
  },
  {
    question: "¿Podré editar los textos o imágenes yo mismo?",
    answer:
      "Sí, tú eliges cómo quieres trabajar. Me adapto a lo que sea más cómodo para ti: Opción Tranquilidad (Recomendada): Yo me encargo de todo. Si necesitas cambiar un precio, una foto o un horario, simplemente me mandas un WhatsApp y yo lo actualizo por ti en 24h. Es ideal si no quieres perder tiempo peleándote con la tecnología. Opción Autogestión: Si prefieres tener el control total, te configuro un Panel de Administración visual (muy sencillo, similar a editar un documento de Word). Te daré tus claves para que tú mismo puedas modificar textos, imágenes o menús en tiempo real, sin depender de nadie.",
  },
  {
    question: "¿Cuánto tiempo tarda en estar lista mi web?",
    answer:
      "Depende de la complejidad del proyecto. Una web básica o landing page suele estar lista en 1-2 semanas. Proyectos más grandes como e-commerce o webs corporativas pueden llevar de 3 a 4 semanas. Siempre te daré un cronograma claro antes de empezar.",
  },
  {
    question: "¿Incluyes el dominio y hosting?",
    answer:
      "Sí, en todos mis planes incluyo el registro de tu dominio y el alojamiento durante el primer año gratis. Te lo dejo todo configurado para que no tengas que preocuparte por nada técnico.",
  },
  {
    question: "Ya tengo Instagram, ¿para qué necesito una web?",
    answer:
      "Instagram es genial para tus seguidores actuales, pero una Web optimizada te sirve para conseguir clientes nuevos que buscan en Google cosas como 'Restaurante en Maresme' o 'Fontanero cerca de mí'. Instagram no aparece bien en esas búsquedas; tu web sí",
  },
];
