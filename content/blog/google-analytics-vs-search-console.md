---
title: "Google Analytics y Search Console: qué mide cada herramienta"
description: "Distingue qué ocurre dentro de tu web y cómo aparece en Google para interpretar Analytics y Search Console sin mezclar sus métricas."
slug: "google-analytics-vs-search-console"
status: "draft"
author: "IB Studio"
editorialId: "B60"
cluster: "rendimiento-web"
primaryTopic: "Analytics vs Search Console"
searchIntent: "informational"
featuredImage: "/blog/google-analytics-vs-search-console.webp"
featuredImageAlt: "Comparación entre los informes de Google Analytics y Search Console"
relatedPosts:
  - "search-console-pequenos-negocios"
  - "como-saber-si-web-genera-llamadas-mensajes-reservas"
  - "cookies-analitica-web-negocio-espana"
ctaLabel: "Planificar la medición de mi web"
ctaHref: "/#contacto"
sources:
  - "https://support.google.com/analytics/answer/12159447"
  - "https://support.google.com/analytics/answer/11593727"
  - "https://support.google.com/webmasters/answer/7042828"
  - "https://support.google.com/webmasters/answer/17011259"
---

Google Analytics explica lo que ocurre en tu web y aplicación cuando la medición está configurada. Search Console explica cómo Google encuentra, interpreta y muestra tu sitio en sus resultados de búsqueda. Necesitas ambas si quieres conectar visibilidad con comportamiento, pero sus números no tienen por qué coincidir.

No uses Analytics para saber todas las palabras buscadas en Google ni Search Console para medir cada envío de formulario.

## Comparación rápida

| Pregunta | Herramienta más útil |
| --- | --- |
| ¿Con qué consultas aparece mi página en Google? | Search Console |
| ¿Cuántos clics recibe desde los resultados de Google? | Search Console |
| ¿Qué páginas visita una persona durante una sesión medida? | Analytics |
| ¿Se pulsa el teléfono o se envía el formulario? | Analytics, si el evento está configurado |
| ¿Google ha indexado una URL concreta? | Search Console |
| ¿Dónde se abandona un proceso de compra medido? | Analytics |
| ¿Qué páginas tienen impresiones pero pocos clics en Google? | Search Console |
| ¿Qué canales medidos generan contactos? | Analytics, con atribución y eventos revisados |

## Qué mide Google Analytics

Google describe Analytics como una plataforma que recoge datos de webs y aplicaciones para crear informes. En una web, una etiqueta envía información cuando se cargan páginas o se producen eventos configurados.

Puede ayudarte a ver:

- Páginas y pantallas consultadas.
- Fuentes y campañas atribuidas a las sesiones.
- Dispositivo, navegador y ubicación aproximada.
- Eventos como clic en teléfono, descarga, formulario o compra.
- Recorridos entre páginas y pasos de un embudo.

Una instalación no mide automáticamente los objetivos de tu negocio. “Formulario enviado” debe representar una confirmación real, no un clic que también se registra cuando hay errores. Una compra debe incluir un identificador que evite duplicados al recargar la página.

La documentación de Google indica que la implementación web predeterminada puede usar un identificador de cliente en una cookie propia llamada `_ga` para distinguir usuarios y sesiones. La configuración de consentimiento y privacidad debe definirse para el caso, territorio y herramientas concretos. Este artículo no sustituye una revisión legal.

## Qué mide Search Console

Search Console reúne datos relacionados con la presencia en servicios de Google. El informe de rendimiento puede mostrar:

- Consultas que activaron una impresión.
- Páginas mostradas.
- Clics desde los resultados.
- Impresiones.
- CTR, que relaciona clics e impresiones.
- Posición media según la forma de agregación.
- País, dispositivo y tipo de búsqueda.

También permite inspeccionar URLs, consultar indexación, sitemaps y algunos problemas de experiencia o resultados enriquecidos.

No es un registro completo de cada búsqueda. Google omite consultas anonimizadas por privacidad y aplica límites a las filas de datos. Además, gran parte del rendimiento se asigna a la URL canónica que Google selecciona, no siempre a la variante que una persona abrió.

## Por qué los clics y las sesiones no coinciden

Un clic de Search Console no equivale siempre a una sesión de Analytics. Hay varias razones:

- La etiqueta no llega a cargarse antes de que la persona cierre.
- La medición depende de una elección de consentimiento.
- Un bloqueador impide la solicitud de Analytics.
- Una persona hace varios clics que se agrupan de forma distinta.
- La zona horaria, atribución y filtros no coinciden.
- Search Console asigna datos a la URL canónica.
- Analytics atribuye la visita a otro canal por sus reglas.

Busca tendencias coherentes, no una igualdad exacta. Si la diferencia cambia de forma brusca, revisa etiquetas, consentimiento, redirecciones, canonicals y configuración.

## Elige el informe según la pregunta

No necesitas duplicar una rutina completa dentro de las dos herramientas. Empieza por la decisión que quieres tomar:

- Si quieres revisar consultas, impresiones, CTR o indexación, sigue la [rutina mensual de Search Console](/blog/search-console-pequenos-negocios).
- Si quieres saber qué páginas generan llamadas, mensajes, formularios o reservas, define y prueba esas acciones con la guía para [medir contactos desde la web](/blog/como-saber-si-web-genera-llamadas-mensajes-reservas).
- Si una herramienta depende de cookies o identificadores, comprueba la configuración y las obligaciones aplicables antes de interpretar ausencias de datos. La guía de [cookies y analítica](/blog/cookies-analitica-web-negocio-espana) ayuda a preparar esa revisión.

Analytics necesita eventos que representen una acción real. Si el equipo recibe diez formularios y el informe registra cien, revisa la implementación antes de tomar decisiones. Search Console, por su parte, debe leerse como información sobre presencia en Google, no como un registro de clientes.

## Un ejemplo de lectura conjunta

Supón que una guía recibe más impresiones y clics en Search Console. Analytics muestra visitas medidas, pero casi nadie abre el producto relacionado.

No concluyas que “el SEO no vende”. Revisa:

- Si la consulta es informativa o comercial.
- Si el enlace al producto resuelve el siguiente paso.
- Si el producto realmente corresponde a la guía.
- Si el evento está bien configurado.
- Si la decisión ocurre más tarde o por otro canal.

Otra situación: Analytics muestra menos contactos, pero Search Console mantiene clics relevantes. Puede haber un formulario roto, un cambio de medición o una pérdida de conversión dentro de la web, no necesariamente una caída de visibilidad.

## Define una pregunta antes de abrir los informes

Evita recorrer gráficos sin una decisión asociada. Formula preguntas como:

- ¿Qué páginas aparecen para servicios que el negocio quiere priorizar?
- ¿Qué consulta trae visitas a dos artículos que se solapan?
- ¿En qué paso falla la reserva?
- ¿Los clics de llamada proceden de páginas de servicio o de contacto?

Después elige la herramienta y valida la calidad del dato. Si necesitas construir un plan de medición que conecte búsquedas, páginas y contactos, puedes [consultar a IB Studio](/#contacto).
