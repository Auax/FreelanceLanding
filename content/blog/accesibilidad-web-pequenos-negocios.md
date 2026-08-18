---
title: "Accesibilidad web para pequeños negocios: mejoras que ayudan a todos"
description: "Revisa teclado, contraste, formularios, texto alternativo, estructura, zoom y movimiento para que más personas puedan usar la web de tu negocio."
slug: "accesibilidad-web-pequenos-negocios"
status: "draft"
author: "IB Studio"
editorialId: "B58"
cluster: "rendimiento-web"
primaryTopic: "accesibilidad web negocio"
searchIntent: "informational"
featuredImage: "/blog/accesibilidad-web-pequenos-negocios.webp"
featuredImageAlt: "Persona recorriendo con teclado una página web accesible"
relatedPosts:
  - "elegir-colores-tipografias-web"
  - "core-web-vitals-negocios"
  - "checklist-antes-publicar-web"
ctaLabel: "Revisar la accesibilidad de mi web"
ctaHref: "/#contacto"
sources:
  - "https://www.w3.org/WAI/test-evaluate/preliminary/"
  - "https://www.w3.org/TR/WCAG22/"
  - "https://www.w3.org/WAI/tutorials/images/decision-tree/"
---

Una web accesible permite que más personas consulten un servicio, compren, reserven o contacten. Las mejoras no benefician solo a quienes usan una tecnología de asistencia. También ayudan a quien lleva gafas, tiene una mano ocupada, navega bajo el sol, usa un móvil pequeño o necesita leer con zoom.

Puedes detectar muchos obstáculos con pruebas sencillas. Una revisión completa requiere conocimiento y herramientas adicionales, pero no hace falta esperar para corregir lo evidente.

## Recorre la web usando solo el teclado

Guarda el ratón e intenta llegar a cada enlace, botón, campo y control con la tecla Tab. Usa Mayús + Tab para retroceder, Intro para activar enlaces y Espacio cuando corresponda.

Comprueba tres cosas:

- El foco se ve con un borde o cambio claro.
- El orden sigue la lectura y no salta sin sentido.
- Ningún menú, ventana o selector atrapa el teclado.

Si un botón solo funciona al pasar el ratón, hay personas que no podrán usarlo. Tampoco elimines el contorno de foco por motivos estéticos sin sustituirlo por una indicación igual de visible.

Un enlace para saltar al contenido principal puede ahorrar recorrer el menú en cada página. Debe aparecer al recibir foco y llevar al inicio real del contenido.

## Usa encabezados para describir la estructura

Los encabezados permiten escanear una página y entender la relación entre secciones. El título principal se renderiza como H1 y las secciones se organizan con H2 y H3 en orden lógico.

No elijas un H3 porque tiene el tamaño visual que te gusta. El aspecto se controla con estilos; el nivel comunica estructura. Evita títulos vagos como “Descubre más” cuando “Servicios de reparación disponibles” explica mejor el contenido.

También conviene usar listas, tablas y botones reales en lugar de simularlos con párrafos o elementos que solo responden al clic.

## Comprueba contraste y no dependas solo del color

Un texto gris claro puede parecer elegante en una pantalla de estudio y desaparecer en un teléfono con brillo bajo. WCAG 2.2 establece para el nivel AA una relación mínima de contraste de 4,5:1 en texto normal y 3:1 en texto grande, con excepciones específicas.

Comprueba texto, botones, enlaces, mensajes de error y controles. El contraste de un color aislado no sirve: importa la combinación entre primer plano y fondo.

No uses solo rojo y verde para indicar error y éxito. Añade un icono con significado, un texto o una etiqueta. En un gráfico, combina color con patrones o nombres. La guía de [colores y tipografías para una web](/blog/elegir-colores-tipografias-web) ayuda a construir un sistema legible desde el principio.

## Escribe alternativas útiles para las imágenes

El texto alternativo depende de la función de la imagen:

- Una foto de producto puede describir modelo, vista y detalle relevante.
- Un gráfico necesita comunicar el dato o disponer de una explicación cercana.
- Un icono que funciona como botón necesita un nombre de acción.
- Una imagen decorativa puede tener alternativa vacía para no añadir ruido.

No empieces todas las descripciones por “imagen de” ni rellenes palabras clave. Pregunta qué información perdería una persona si la imagen no cargara. El árbol de decisión de W3C ofrece una pauta breve para distintos casos.

## Haz formularios que expliquen qué necesitan

Cada campo debe tener una etiqueta visible y asociada. El texto dentro del campo puede mostrar un ejemplo, pero desaparece al escribir y no sustituye a la etiqueta.

Indica cuáles son obligatorios antes de enviar. Si hay un error:

1. Resume qué campos necesitan atención.
2. Señala el error junto al campo.
3. Explica cómo corregirlo.
4. Conserva la información que ya era válida.

“Formato incorrecto” aporta poco. “Escribe el teléfono con nueve dígitos” ayuda a corregir. Si aceptas varios formatos internacionales, no impongas un patrón local sin avisar.

Los mensajes de éxito también deben ser claros. Después de enviar, confirma qué se ha recibido y cuándo puede esperar respuesta, sin prometer un plazo que el negocio no cumple.

## Prueba zoom, tamaño de texto y orientación

Aumenta el zoom del navegador al 200 %. El contenido debería seguir disponible sin superponerse ni obligar a desplazarse en dos direcciones para leer un párrafo. Un menú puede transformarse, pero sus opciones no deben desaparecer.

Gira el móvil y prueba tamaños de pantalla estrechos. No bloquees una orientación salvo que la función lo requiera. Los botones flotantes de chat, cookies o reserva suelen ocupar demasiado espacio cuando el texto aumenta; comprueba cómo conviven.

## Ofrece control sobre el movimiento

Animaciones, carruseles y vídeos pueden distraer o causar molestias. No reproduzcas audio sin permiso. Permite pausar contenido que se mueve durante un periodo largo y respeta la preferencia del sistema para reducir movimiento cuando implementes efectos.

Una transición corta puede ayudar a entender un cambio. Un texto que entra, sale y vuelve a entrar suele dificultar la lectura. La animación debe cumplir una función, no convertirse en una prueba para llegar al contenido.

## Revisa enlaces y botones por su nombre

“Haz clic aquí” pierde significado fuera del párrafo. Es mejor “consultar horarios” o “ver condiciones de devolución”. Varias llamadas con el mismo nombre deberían llevar a una acción equivalente.

Un botón ejecuta una acción, como abrir un formulario. Un enlace lleva a otra ubicación. Mantener esa diferencia mejora el uso con teclado y con lectores de pantalla.

## Combina comprobaciones automáticas y humanas

Una herramienta automática puede encontrar contraste insuficiente, etiquetas ausentes o errores de código. No sabe por sí sola si un texto alternativo explica bien la imagen, si el orden tiene sentido o si una reserva resulta comprensible.

Haz al menos estas pruebas:

- Teclado completo.
- Zoom al 200 %.
- Móvil en dos orientaciones.
- Contraste de estados normales, foco y error.
- Formularios con datos válidos e inválidos.
- Revisión automática como apoyo.
- Lectura del contenido sin imágenes.

W3C publica una guía de evaluación preliminar con estas y otras comprobaciones. No equivale a una auditoría de conformidad, pero ayuda a encontrar barreras tempranas.

Incluye la accesibilidad en cada cambio y en la [checklist antes de publicar una web](/blog/checklist-antes-publicar-web), no como una tarea al final. Si necesitas convertir los hallazgos en mejoras de diseño y desarrollo, puedes [consultar a IB Studio](/#contacto).
