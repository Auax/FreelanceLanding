# Plan editorial SEO de IB Studio

Última revisión: 2026-08-18  
Total: 80 ideas de artículos  
Mercado principal: negocios locales de Barcelona y España  
Servicios relacionados: diseño web, tiendas online, SEO local, Google Business Profile y analítica web

## Cómo usar este archivo

Este documento es una cola editorial, no una instrucción para publicar 80 textos generados automáticamente sin revisarlos. Cada artículo debe resolver una intención de búsqueda distinta, aportar información útil y tener una razón comercial clara dentro de IB Studio.

Estados de contexto:

- `✅ AUTÓNOMO`: puede redactarse sin información privada de IB Studio. Aun así, deben comprobarse las afirmaciones y fuentes.
- `⚠️ CONTEXTO NEGOCIO`: necesita datos reales sobre precios, plazos, proceso, criterios u opiniones de IB Studio.
- `⚠️ CONTEXTO PROYECTO`: necesita brief, decisiones, capturas, resultados y, cuando corresponda, permiso del cliente.
- `📊 CONTEXTO DATOS`: no puede afirmar resultados sin Analytics, Search Console u otra evidencia.
- `⚖️ REVISIÓN LEGAL`: necesita fuentes oficiales actuales y una revisión responsable; no debe presentarse como asesoramiento jurídico.

Prioridades:

- `P1`: primera ola. Buena relación entre intención comercial, relevancia y capacidad de enlazar a los servicios.
- `P2`: segunda ola. Amplía la autoridad temática y responde objeciones.
- `P3`: publicar después de observar consultas reales en Search Console.
- `HOLD`: no redactar hasta recibir el contexto indicado.

## Decisión de formato para la futura implementación

La opción recomendada para este repositorio es guardar cada artículo como Markdown con frontmatter:

```text
content/blog/<slug>.md
```

Es preferible a guardar los posts en un archivo TypeScript porque separa contenido y código, produce cambios fáciles de revisar en Git y permite que cualquier modelo genere borradores sin tocar componentes de la aplicación. Markdown también reduce la posibilidad de introducir JSX o código no deseado. Si más adelante un artículo necesita componentes interactivos, se puede admitir MDX solo para ese caso.

Frontmatter propuesto:

```yaml
---
title: "Título visible y específico"
description: "Resumen único del artículo, escrito para la persona que busca."
slug: "slug-descriptivo"
editorialId: "B01"
status: "draft"
datePublished: "2026-09-01"
dateModified: "2026-09-01"
author: "IB Studio"
cluster: "diseno-web"
primaryTopic: "cuánto cuesta una página web"
searchIntent: "informational-commercial"
featuredImage: "/blog/slug-descriptivo.webp"
featuredImageAlt: "Descripción literal de la imagen"
relatedPosts:
  - "otro-slug"
ctaLabel: "Pedir presupuesto para mi web"
ctaHref: "/#contacto"
sources:
  - "https://fuente-oficial.example"
---
```

`primaryTopic` sirve para el control editorial; no se debe convertir en una etiqueta `meta keywords`. El sitio deberá generar desde estos archivos las rutas `/blog/<slug>`, metadatos únicos, canonical autorreferente, `BlogPosting`, listado del blog, enlaces relacionados y sitemap.

## Reglas obligatorias para el modelo redactor

1. Escribir para propietarios de pequeños negocios, con lenguaje español natural, claro y útil.
2. Resolver la pregunta principal al comienzo. No escribir introducciones genéricas sobre “la era digital”.
3. No inventar clientes, resultados, estadísticas, testimonios, herramientas utilizadas ni experiencias de IB Studio.
4. Si una idea está marcada con contexto, devolver una lista de preguntas pendientes y no completar el artículo con suposiciones.
5. Usar fuentes primarias actuales para afirmaciones técnicas, legales o sujetas a cambios. Incluir las URLs en `sources`.
6. No copiar ni parafrasear un competidor artículo por artículo. Añadir ejemplos, decisiones, listas de comprobación o marcos propios.
7. No fijar una longitud por SEO. Terminar cuando la intención esté resuelta; eliminar relleno y repeticiones.
8. Usar un solo H1, H2/H3 descriptivos, párrafos breves y listas solo cuando mejoren la lectura.
9. Crear un título y una descripción únicos. No forzar la frase objetivo en cada encabezado.
10. Incluir de dos a cuatro enlaces internos naturales: un servicio, otro artículo relacionado y, cuando encaje, un proyecto o el contacto.
11. No crear versiones casi iguales cambiando solo el sector, la ciudad o una palabra clave.
12. No prometer posiciones, tráfico, clientes o plazos de posicionamiento.
13. Evitar tono artificial y muletillas frecuentes: “en la era digital”, “cabe destacar”, “en conclusión”, “solución innovadora”, “experiencia perfecta” o cadenas de frases grandilocuentes.
14. Diferenciar hechos de opiniones. Las recomendaciones propias deben presentarse como criterio de IB Studio solo cuando exista contexto aprobado.
15. Mantener `status: draft`. La publicación requiere una revisión humana, enlaces válidos, imagen, fecha y comprobación de solapamiento con posts existentes.

## Páginas comerciales que no deben convertirse en posts

Antes o durante la primera ola conviene crear páginas estables para estas búsquedas comerciales. Los artículos deberán apoyarlas mediante enlaces internos, no competir con ellas:

- `/servicios/diseno-web`
- `/servicios/tiendas-online`
- `/servicios/seo-local`
- `/servicios/diseno-web-para-negocios-locales`
- Páginas de sector únicamente cuando IB Studio tenga una propuesta, ejemplos y contenido realmente distintos para ese sector.

No crear páginas por cada municipio sustituyendo el nombre de la localidad. Una página local solo se justifica con experiencia, casos, oferta o información específica de esa zona.

---

## Cluster 1: decidir y planificar una web

Enlace comercial principal futuro: `/servicios/diseno-web`

| ID | Prioridad | Título provisional | Intención o tema principal | Enfoque que debe hacerlo único | Contexto |
|---|---|---|---|---|---|
| B01 | P1 | ¿Necesita mi negocio una página web si ya tiene Instagram? | web o Instagram para negocio | Comparar descubrimiento, confianza, propiedad del canal y conversión; incluir una matriz de decisión. | ✅ AUTÓNOMO |
| B02 | P1 | ¿Cuánto cuesta una página web para un pequeño negocio en 2026? | precio página web negocio | Explicar componentes del precio y escenarios, sin presentar una cifra universal. Los precios de IB Studio deben coincidir con la web. | ⚠️ CONTEXTO NEGOCIO: confirmar planes, extras e impuestos |
| B03 | P1 | Landing page o web completa: cuál necesita tu negocio | landing page vs página web | Decidir según número de servicios, ciclo de compra, SEO y presupuesto; añadir árbol de decisión. | ✅ AUTÓNOMO |
| B04 | P2 | Crear la web uno mismo o contratar a un profesional | hacer web o contratar diseñador | Comparar coste total, tiempo, mantenimiento, límites y riesgo sin despreciar las soluciones DIY. | ✅ AUTÓNOMO |
| B05 | P1 | ¿Cuánto se tarda en crear una página web profesional? | tiempo para crear una web | Desglosar descubrimiento, contenido, diseño, desarrollo, revisión y lanzamiento. | ⚠️ CONTEXTO NEGOCIO: validar plazos y proceso reales |
| B06 | P1 | Dominio, hosting y SSL: qué son y qué necesita un negocio | dominio hosting SSL | Explicación sin jerga con responsabilidades, renovaciones y errores de propiedad frecuentes. | ✅ AUTÓNOMO |
| B07 | P2 | 12 preguntas que debes hacer antes de contratar a un diseñador web | contratar diseñador web | Checklist centrada en alcance, propiedad, soporte, contenido, SEO, analítica y costes futuros. | ✅ AUTÓNOMO |
| B08 | P2 | Cuánto cuesta mantener una página web después de publicarla | mantenimiento web precio | Separar dominio, hosting, licencias, cambios, seguridad y soporte; evitar precios inventados. | ⚠️ CONTEXTO NEGOCIO: confirmar qué incluye IB Studio tras el primer año |
| B09 | P1 | 9 señales de que la web de tu negocio necesita un rediseño | cuándo rediseñar una web | Señales observables: móvil, velocidad, contenido, conversiones, seguridad y coherencia de marca. | ✅ AUTÓNOMO |
| B10 | P2 | Qué preparar antes de pedir presupuesto para una página web | preparar proyecto web | Plantilla de objetivos, público, servicios, referencias, contenidos, integraciones y responsable de aprobación. | ✅ AUTÓNOMO |

## Cluster 2: conversión, reservas y experiencia de usuario

Enlace comercial principal futuro: `/servicios/diseno-web-para-negocios-locales`

| ID | Prioridad | Título provisional | Intención o tema principal | Enfoque que debe hacerlo único | Contexto |
|---|---|---|---|---|---|
| B11 | P1 | Qué debe incluir la página de inicio de un negocio local | página de inicio negocio local | Orden recomendado de secciones según preguntas del cliente, con checklist descargable o copiable. | ✅ AUTÓNOMO |
| B12 | P1 | Cómo escribir llamadas a la acción que consigan más contactos | ejemplos CTA web | Relacionar cada CTA con intención, riesgo percibido y siguiente paso; incluir antes/después. | ✅ AUTÓNOMO |
| B13 | P1 | Cómo integrar WhatsApp en una web sin molestar al visitante | botón WhatsApp página web | Ubicación, mensaje prellenado, contexto, móvil, privacidad y medición de clics. | ✅ AUTÓNOMO |
| B14 | P1 | Cómo crear un formulario de contacto que la gente sí complete | formulario de contacto efectivo | Reducir campos, explicar respuesta esperada, gestionar errores y medir envíos; incluir checklist. | ✅ AUTÓNOMO |
| B15 | P1 | Cómo conseguir más reservas desde la web de un negocio | aumentar reservas web | Recorrido completo desde la búsqueda hasta la confirmación, con puntos de fuga y soluciones. | ✅ AUTÓNOMO |
| B16 | P1 | Por qué una web pensada para móvil consigue más contactos | diseño web móvil negocio | Casos de uso locales: llamar, abrir Maps, reservar y escribir por WhatsApp desde la calle. | ✅ AUTÓNOMO |
| B17 | P2 | 11 elementos que generan confianza en una página web | generar confianza web | Pruebas verificables, identidad, contacto, políticas, proyectos, reseñas y expectativas claras. | ✅ AUTÓNOMO |
| B18 | P2 | Fotos propias o imágenes de stock: qué funciona mejor en una web | fotos para página web negocio | Decidir por sección y presupuesto; pautas para una sesión sencilla con móvil. | ✅ AUTÓNOMO |
| B19 | P1 | Cómo escribir los textos de una web para que el cliente entienda y actúe | textos página web negocio | Convertir características en resultados concretos, responder objeciones y cerrar con siguiente paso. | ✅ AUTÓNOMO |
| B20 | P2 | Las preguntas que una web debe responder antes de que el cliente llame | preguntas frecuentes página web | Crear una taxonomía de dudas sobre precio, proceso, disponibilidad, confianza y riesgo. | ⚠️ CONTEXTO NEGOCIO: añadir preguntas reales recibidas por IB Studio |

## Cluster 3: SEO local y visibilidad en Google

Enlace comercial principal futuro: `/servicios/seo-local`

| ID | Prioridad | Título provisional | Intención o tema principal | Enfoque que debe hacerlo único | Contexto |
|---|---|---|---|---|---|
| B21 | P1 | Qué es el SEO local y cómo ayuda a conseguir clientes cercanos | qué es SEO local | Explicar resultados locales, web, perfil de empresa y señales de relevancia sin promesas. | ✅ AUTÓNOMO |
| B22 | P1 | Página web o Perfil de Empresa de Google: por qué necesitas ambos | web vs Google Business Profile | Mostrar qué controla el negocio en cada canal y cómo se refuerzan entre sí. | ✅ AUTÓNOMO |
| B23 | P1 | Cómo mejorar la presencia de un negocio en Google Maps | aparecer en Google Maps | Guía basada en documentación oficial: datos, categorías, horarios, fotos, reseñas y web. | ✅ AUTÓNOMO |
| B24 | P2 | Cómo encontrar las búsquedas locales que hacen tus clientes | palabras clave SEO local | Proceso con Search Console, sugerencias reales, conversaciones y términos por servicio; no depender de volumen ficticio. | ✅ AUTÓNOMO |
| B25 | P2 | Qué es el NAP y por qué los datos de tu negocio deben coincidir | NAP SEO local | Auditoría manual de nombre, dirección y teléfono con tabla de control. | ✅ AUTÓNOMO |
| B26 | P1 | Cómo pedir reseñas de Google sin resultar insistente | conseguir reseñas Google | Momentos, canales y ejemplos de mensajes; respetar políticas y no incentivar reseñas falsas. | ✅ AUTÓNOMO |
| B27 | P2 | Cómo crear páginas locales útiles sin duplicar contenido | páginas locales SEO | Distinguir una página local genuina de una página puerta; requisitos de contenido y pruebas locales. | ✅ AUTÓNOMO |
| B28 | P3 | Datos estructurados para negocios locales: qué son y cuándo ayudan | schema LocalBusiness | Explicación práctica de propiedades, límites y validación; dejar claro que no garantizan resultados enriquecidos. | ✅ AUTÓNOMO |
| B29 | P1 | 10 errores de SEO local que hacen más difícil encontrarte | errores SEO local | Diagnóstico priorizado: indexación, categorías, datos, páginas, reseñas, móvil y medición. | ✅ AUTÓNOMO |
| B30 | P2 | Cuánto tarda el SEO local en dar resultados | cuánto tarda SEO local | Explicar variables y señales intermedias; prohibido prometer semanas o posiciones. | ✅ AUTÓNOMO |
| B31 | P2 | Google Search Console para pequeños negocios: qué mirar cada mes | Search Console negocio local | Panel mínimo: consultas, páginas, CTR, indexación y acciones; guía sin jerga. | ✅ AUTÓNOMO |
| B32 | P2 | Cómo saber si tu web genera llamadas, mensajes y reservas | medir conversiones web | Definir eventos y decisiones que permite cada dato; no usar cifras de IB Studio sin acceso. | 📊 CONTEXTO DATOS solo si se muestran ejemplos o resultados reales |

## Cluster 4: webs para sectores concretos

Estos artículos son guías sectoriales. No deben convertirse en quince textos con la misma plantilla. Cada uno debe investigar el recorrido del cliente, integraciones, dudas y contenidos propios del sector.

| ID | Prioridad | Título provisional | Intención o tema principal | Enfoque que debe hacerlo único | Contexto |
|---|---|---|---|---|---|
| B33 | P1 | Qué debe tener la página web de un restaurante para conseguir reservas | diseño web restaurantes | Carta accesible, reservas, horarios, ubicación, alergias, fotos y búsquedas móviles. | ✅ AUTÓNOMO |
| B34 | P1 | Cómo debe ser la web de una peluquería para convertir visitas en citas | diseño web peluquerías | Servicios, duración, precios orientativos, equipo, galería, reserva y mantenimiento de estilos. | ✅ AUTÓNOMO |
| B35 | P1 | Web para un centro de estética: secciones, reservas y confianza | diseño web centro estética | Tratamientos, contraindicaciones responsables, profesionales, bonos, preguntas y reserva. | ✅ AUTÓNOMO |
| B36 | P1 | Qué necesita la web de un hotel pequeño para conseguir reservas directas | diseño web hoteles | Habitaciones, disponibilidad, políticas, entorno, idiomas, motor de reservas y comparación con OTA. | ✅ AUTÓNOMO |
| B37 | P2 | Cómo crear una web eficaz para una casa rural | diseño web casa rural | Temporadas, capacidad, servicios, entorno, cómo llegar, normas y reserva directa. | ✅ AUTÓNOMO |
| B38 | P2 | Web para una clínica: cómo informar con claridad y generar confianza | diseño web clínicas | Especialidades, profesionales, cita, accesibilidad y revisión rigurosa de afirmaciones de salud. | ✅ AUTÓNOMO |
| B39 | P2 | Qué debe incluir la web de un abogado o despacho profesional | diseño web abogados | Áreas de práctica, jurisdicción, proceso, contacto confidencial y límites de las promesas. | ✅ AUTÓNOMO |
| B40 | P2 | Cómo debe ser la web de una inmobiliaria local | diseño web inmobiliarias | Captación de propietarios, búsqueda de inmuebles, zonas, valoración y seguimiento de contactos. | ✅ AUTÓNOMO |
| B41 | P1 | Web para fontaneros, electricistas y servicios urgentes: qué priorizar | web para profesionales reformas | Teléfono visible, cobertura, disponibilidad real, servicios, prueba de trabajo y búsquedas móviles. | ✅ AUTÓNOMO |
| B42 | P2 | Qué necesita la web de un gimnasio o entrenador personal | diseño web gimnasios | Clases, horarios, niveles, primera visita, precios, reserva y testimonios verificables. | ✅ AUTÓNOMO |
| B43 | P2 | Cómo crear una web de fotografía que muestre el trabajo y consiga consultas | diseño web fotógrafos | Selección de portfolio, velocidad de imágenes, paquetes, proceso, disponibilidad y formulario. | ✅ AUTÓNOMO |
| B44 | P3 | Web para proveedores de bodas: cómo convertir inspiración en solicitudes | diseño web bodas | Galerías, estilos, localizaciones, disponibilidad, proceso y captura de brief. | ✅ AUTÓNOMO |
| B45 | P2 | Qué debe incluir la web de una academia o centro de formación | diseño web academias | Programas, niveles, calendario, profesorado, matrícula, preguntas y contenido actualizable. | ✅ AUTÓNOMO |
| B46 | P3 | Cómo debe ser la web de una empresa de actividades turísticas | diseño web turismo | Fechas, capacidad, requisitos, clima, cancelación, idiomas, mapas y reserva móvil. | ✅ AUTÓNOMO |
| B47 | P2 | Web para consultores y profesionales independientes: cómo explicar lo que haces | diseño web consultores | Posicionamiento, problema, método, entregables, prueba, cualificación del contacto y CTA. | ✅ AUTÓNOMO |

## Cluster 5: tiendas online

Enlace comercial principal futuro: `/servicios/tiendas-online`

| ID | Prioridad | Título provisional | Intención o tema principal | Enfoque que debe hacerlo único | Contexto |
|---|---|---|---|---|---|
| B48 | P1 | ¿Necesitas una tienda online o basta con una web con catálogo? | tienda online o catálogo | Árbol de decisión basado en pago, stock, logística, frecuencia y canal de cierre. | ✅ AUTÓNOMO |
| B49 | P1 | Cuánto cuesta crear una tienda online y qué cambia el presupuesto | precio tienda online | Separar catálogo, pagos, logística, integraciones, diseño, contenido y mantenimiento. | ⚠️ CONTEXTO NEGOCIO: validar precios y alcance ofrecidos por IB Studio |
| B50 | P1 | Cómo crear una página de producto que ayude a comprar | página de producto efectiva | Información, variantes, imágenes, envío, devolución, confianza y preguntas; incluir checklist. | ✅ AUTÓNOMO |
| B51 | P2 | Cómo elegir métodos de pago para una tienda online | métodos de pago ecommerce | Comparar necesidades del cliente, costes, fricción, seguridad y operativa con fuentes actuales. | ✅ AUTÓNOMO |
| B52 | P2 | Envíos y devoluciones en ecommerce: qué debe entender el cliente antes de pagar | envíos y devoluciones tienda online | Claridad de información y experiencia de compra; evitar asesoramiento jurídico. | ⚖️ REVISIÓN LEGAL y fuentes oficiales actuales |
| B53 | P2 | SEO para tiendas online pequeñas: por dónde empezar | SEO ecommerce pequeño | Priorizar categorías, productos, contenido útil, arquitectura, duplicados y datos medibles. | ✅ AUTÓNOMO |
| B54 | P2 | Cómo preparar fotos de producto para una tienda online rápida y convincente | fotos producto ecommerce | Guía práctica de encuadres, consistencia, compresión, formatos, alt y contexto de uso. | ✅ AUTÓNOMO |
| B55 | P2 | Por qué los clientes abandonan una compra online y qué revisar | abandono carrito causas | Auditoría por etapas: producto, carrito, costes, pago, móvil, confianza y errores. | ✅ AUTÓNOMO |

## Cluster 6: rendimiento, medición y fundamentos técnicos

| ID | Prioridad | Título provisional | Intención o tema principal | Enfoque que debe hacerlo único | Contexto |
|---|---|---|---|---|---|
| B56 | P1 | Por qué una web lenta puede hacer perder clientes a un negocio local | velocidad web negocio | Conectar espera con acciones concretas: llamada, reserva, mapa y formulario; proponer diagnóstico. | ✅ AUTÓNOMO |
| B57 | P2 | Core Web Vitals explicadas para propietarios de negocios | qué son Core Web Vitals | Traducir LCP, INP y CLS a problemas visibles y usar umbrales oficiales actuales. | ✅ AUTÓNOMO |
| B58 | P2 | Accesibilidad web para pequeños negocios: mejoras que ayudan a todos | accesibilidad web negocio | Teclado, contraste, formularios, texto alternativo, estructura y pruebas sencillas. | ✅ AUTÓNOMO |
| B59 | P2 | HTTPS, copias de seguridad y actualizaciones: seguridad web sin tecnicismos | seguridad página web negocio | Modelo de responsabilidades y preguntas al proveedor; no prometer seguridad absoluta. | ✅ AUTÓNOMO |
| B60 | P2 | Google Analytics y Search Console: qué mide cada herramienta | Analytics vs Search Console | Tabla de fuentes, métricas, límites y decisiones; considerar consentimiento y privacidad. | ✅ AUTÓNOMO |
| B61 | P3 | Cookies y analítica en una web de negocio: qué debes revisar | cookies página web España | Checklist informativa basada en fuentes españolas y europeas actuales; no dar asesoramiento legal. | ⚖️ REVISIÓN LEGAL obligatoria |
| B62 | P2 | Cómo elegir un buen nombre de dominio para un negocio | elegir dominio negocio | Marca, claridad, longitud, propiedad, renovación, extensiones y comprobaciones antes de comprar. | ✅ AUTÓNOMO |

## Cluster 7: proceso, contenido y diseño

| ID | Prioridad | Título provisional | Intención o tema principal | Enfoque que debe hacerlo único | Contexto |
|---|---|---|---|---|---|
| B63 | P1 | Cómo preparar textos e imágenes antes de empezar una página web | contenido para crear web | Inventario por página, responsables, formatos y checklist de entrega. | ✅ AUTÓNOMO |
| B64 | P2 | Cómo hacer un brief de página web que ahorre tiempo y errores | brief diseño web | Plantilla con objetivos, público, acciones, contenido, referencias, restricciones y aprobadores. | ✅ AUTÓNOMO |
| B65 | P2 | Cómo creamos una página web: del primer contacto al lanzamiento | proceso diseño web IB Studio | Narrar el proceso real y las responsabilidades de cada parte, sin completar huecos con un proceso estándar. | ⚠️ CONTEXTO NEGOCIO: entrevistas, etapas, herramientas y entregables reales |
| B66 | P3 | Cómo gestionamos revisiones y cambios durante un proyecto web | revisiones diseño web | Explicar límites, feedback útil, consolidación y aceptación según la práctica real. | ⚠️ CONTEXTO NEGOCIO: política real de rondas y cambios |
| B67 | P2 | Plantilla o diseño web a medida: ventajas, límites y cómo elegir | plantilla vs diseño a medida | Comparar adecuación, tiempo, presupuesto, diferenciación, mantenimiento y crecimiento. | ✅ AUTÓNOMO |
| B68 | P3 | Cómo elegir colores y tipografías para la web de un negocio | colores y tipografías web | Decisión basada en legibilidad, marca, contraste, cantidad de estilos y consistencia. | ✅ AUTÓNOMO |
| B69 | P3 | Tendencias de diseño web que sí ayudan a un negocio en 2026 | tendencias diseño web 2026 | Separar moda de utilidad; revisar anualmente, citar ejemplos actuales y evitar afirmar que una estética convierte por sí sola. | ✅ AUTÓNOMO, investigación actual obligatoria |
| B70 | P1 | Checklist para revisar una página web antes de publicarla | checklist lanzamiento web | Contenido, móvil, accesibilidad, formularios, SEO, analítica, legal, rendimiento y recuperación. | ✅ AUTÓNOMO |

## Cluster 8: experiencia, proyectos y prueba propia

No pasar estos artículos al modelo redactor hasta proporcionar los datos indicados. Son los posts con más capacidad de diferenciar a IB Studio, pero también los más dañinos si contienen detalles inventados.

| ID | Prioridad | Título provisional | Intención o tema principal | Enfoque que debe hacerlo único | Contexto |
|---|---|---|---|---|---|
| B71 | HOLD | Caso de estudio: cómo se diseñó la tienda online de Bioacting | caso estudio ecommerce | Problema, objetivos, restricciones, decisiones, proceso, antes/después y resultados demostrables. | ⚠️ CONTEXTO PROYECTO: brief, alcance, capturas, testimonio, métricas y permiso |
| B72 | HOLD | Qué aprendimos creando una tienda online de bienestar | aprendizajes proyecto ecommerce | Cinco decisiones reales y qué se haría igual o diferente; no duplicar B71. | ⚠️ CONTEXTO PROYECTO: retrospectiva y datos del proyecto Bioacting |
| B73 | HOLD | Cómo diseñamos la experiencia de reserva para una peluquería | caso diseño web peluquería | Explicar decisiones de Lumière y aclarar de forma visible si es una demo conceptual. | ⚠️ CONTEXTO PROYECTO: objetivo de la demo, flujo, decisiones y capturas |
| B74 | HOLD | Cómo planteamos una web de hotel centrada en la reserva directa | caso diseño web hotel | Decisiones de Aurelian, hipótesis y límites; identificarla siempre como demo si no es cliente real. | ⚠️ CONTEXTO PROYECTO: brief conceptual, recorrido, componentes y capturas |
| B75 | HOLD | Cómo construimos la web de IB Studio y qué cambiaríamos hoy | caso estudio propia web | Objetivos, stack, arquitectura, decisiones, concesiones y mejoras futuras. | ⚠️ CONTEXTO NEGOCIO: historia real, decisiones técnicas y retrospectiva |
| B76 | HOLD | Por qué IB Studio ofrece tres planes de diseño web | planes diseño web | Relacionar cada plan con situaciones reales y explicar límites, propiedad y costes sin presión comercial. | ⚠️ CONTEXTO NEGOCIO: lógica de precios, cliente ideal, inclusiones y exclusiones |
| B77 | HOLD | Los errores que más vemos en webs de negocios locales | errores webs negocios | Hallazgos anonimizados y frecuencia cualitativa basada en auditorías reales; no fingir una muestra. | ⚠️ CONTEXTO NEGOCIO: notas reales de auditorías y permiso si un caso es reconocible |
| B78 | HOLD | Antes y después: cómo mejoramos la experiencia móvil de una web real | rediseño web móvil caso real | Comparación visual y medición bajo las mismas condiciones. | ⚠️ CONTEXTO PROYECTO + 📊 DATOS: capturas, método, métricas y permiso |
| B79 | HOLD | Qué salió bien y qué corregimos después de lanzar un proyecto web | retrospectiva proyecto web | Postmortem honesto con problemas, decisiones y solución, sin culpar al cliente. | ⚠️ CONTEXTO PROYECTO: cronología, incidencias, solución y permiso |
| B80 | HOLD | Lecciones aprendidas de nuestros primeros proyectos web | experiencia diseñador web | Principios concretos derivados de situaciones reales, con ejemplos anonimizados. | ⚠️ CONTEXTO NEGOCIO: número de proyectos, situaciones y aprendizajes reales |

---

## Primera ola recomendada

Crear como borradores, revisar y publicar primero estos 18 artículos:

`B01`, `B03`, `B06`, `B09`, `B11`, `B12`, `B13`, `B14`, `B15`, `B16`, `B19`, `B21`, `B22`, `B23`, `B26`, `B29`, `B56`, `B70`.

Esta selección cubre decisiones de compra, conversión y SEO local sin depender de afirmaciones privadas. Después se puede publicar la segunda ola según las impresiones y consultas que aparezcan en Search Console. Los borradores pueden generarse juntos, pero la revisión e indexación deben ser controladas.

## Comprobación anticanibalización antes de publicar

Para cada borrador:

1. Escribir en una frase la pregunta exacta que resuelve.
2. Compararla con todos los artículos publicados y con las páginas comerciales.
3. Si dos URLs ofrecen esencialmente la misma respuesta, fusionarlas o cambiar claramente una de las intenciones.
4. Elegir una sola URL principal para cada intención comercial.
5. Enlazar desde el artículo informativo a esa URL principal con texto descriptivo y natural.
6. No crear etiquetas o categorías indexables hasta que tengan contenido editorial propio y utilidad real.

## Control de calidad antes de cambiar `draft` a `published`

- [ ] El artículo ayuda a un propietario de negocio incluso si nunca contrata a IB Studio.
- [ ] La intención es distinta a la de cualquier URL existente.
- [ ] No contiene hechos, cifras, casos o experiencia inventados.
- [ ] Las afirmaciones actuales tienen fuentes primarias accesibles.
- [ ] El título, descripción, slug, imagen y texto alternativo son únicos.
- [ ] Incluye enlaces internos útiles y no está huérfano.
- [ ] El CTA encaja con el tema y no interrumpe la respuesta.
- [ ] Se ha leído en móvil y los encabezados describen bien el contenido.
- [ ] La fecha de modificación solo cambia cuando existe una actualización sustancial.
- [ ] El artículo aparecerá en el sitemap y devolverá una URL canónica propia.
- [ ] El marcado `BlogPosting` representa exactamente el contenido visible.
- [ ] Una persona responsable ha firmado la revisión editorial.

## Prompt base para el modelo redactor

Copiar una sola fila del plan y usar este encargo:

```text
Redacta un borrador en español para IB Studio a partir de la ficha editorial adjunta.

Audiencia: propietarios de pequeños negocios de Barcelona y España que no tienen por qué conocer términos de marketing o desarrollo web.
Objetivo: resolver por completo la intención indicada y ayudar al lector a tomar una decisión informada. El texto no debe existir solo para posicionar.

Entrega un archivo Markdown con el frontmatter definido en el plan editorial. Mantén status: draft.

Reglas:
- No inventes experiencias, clientes, resultados, estadísticas, precios ni políticas de IB Studio.
- Si la ficha solicita contexto que no se ha proporcionado, no redactes el artículo. Devuelve las preguntas necesarias.
- Investiga afirmaciones actuales en fuentes primarias y registra sus URLs en sources.
- Responde la pregunta principal en el inicio y evita introducciones genéricas.
- Usa ejemplos concretos, una estructura natural y solo la extensión necesaria.
- Propón de dos a cuatro enlaces internos por su destino y texto de enlace; no inventes URLs que no estén confirmadas.
- No repitas palabras clave de forma artificial.
- No añadas una sección de conclusión vacía. Termina con el siguiente paso más útil.
- Señala al final cualquier afirmación que necesite revisión humana.

Ficha editorial:
[PEGAR AQUÍ UNA FILA Y, SI CORRESPONDE, EL CONTEXTO APROBADO]
```

## Fuentes de referencia para el proceso

- Google Search Central, contenido útil y centrado en las personas: https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- Google Search Central, políticas de spam y abuso de contenido escalado: https://developers.google.com/search/docs/essentials/spam-policies
- Google Search Central, guía básica de SEO: https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- Google Search Central, guía para desarrolladores: https://developers.google.com/search/docs/fundamentals/get-started-developers
- Google Search Central, datos estructurados de artículos: https://developers.google.com/search/docs/appearance/structured-data/article
- Google Search Central, buenas prácticas de enlaces: https://developers.google.com/search/docs/crawling-indexing/links-crawlable

## Notas de medición

Estas ideas no incluyen estimaciones de volumen porque no se ha usado una herramienta de palabras clave ni datos de Search Console. El orden es una hipótesis editorial basada en relevancia comercial e intención. Tras publicar la primera ola, registrar para cada URL impresiones, consultas, clics, CTR, contactos asistidos y fecha de última revisión. Repriorizar el resto según evidencia real.
