---
title: "Core Web Vitals explicadas para propietarios de negocios"
description: "Entiende LCP, INP y CLS con ejemplos de carga, respuesta y estabilidad, sus umbrales actuales y qué decisiones puede tomar un negocio."
slug: "core-web-vitals-negocios"
status: "draft"
author: "IB Studio"
editorialId: "B57"
cluster: "rendimiento-web"
primaryTopic: "qué son Core Web Vitals"
searchIntent: "informational"
featuredImage: "/blog/core-web-vitals-negocios.webp"
featuredImageAlt: "Panel sencillo con las métricas LCP, INP y CLS de una página web"
relatedPosts:
  - "web-lenta-negocio-local"
  - "google-analytics-vs-search-console"
  - "checklist-antes-publicar-web"
ctaLabel: "Entender el rendimiento de mi web"
ctaHref: "/#contacto"
sources:
  - "https://web.dev/articles/lcp"
  - "https://web.dev/articles/inp"
  - "https://web.dev/articles/optimize-cls"
  - "https://web.dev/articles/optimize-cwv-business"
---

Las Core Web Vitals son tres métricas que describen cómo se siente una página para personas reales: cuándo aparece el contenido principal, cuánto tarda en responder y si los elementos cambian de sitio mientras carga.

Sus nombres son LCP, INP y CLS. No miden si el texto convence, si el precio es adecuado o si el formulario pide lo correcto. Sirven para detectar problemas de experiencia y rendimiento que pueden interferir con esas tareas.

## Resumen de las tres métricas

| Métrica | Pregunta que responde | Umbral “bueno” oficial |
| --- | --- | --- |
| LCP | ¿Cuándo aparece el contenido principal? | 2,5 segundos o menos |
| INP | ¿Cuánto tarda la página en responder a una interacción? | 200 milisegundos o menos |
| CLS | ¿Cuánto se mueve el contenido sin que el usuario lo provoque? | 0,1 o menos |

Google recomienda evaluar estos umbrales en el percentil 75 de las visitas, separando móvil y ordenador. En lenguaje sencillo, no basta con que la web funcione bien en tu portátil: debería ofrecer una buena experiencia en la gran mayoría de las visitas medidas.

## LCP: cuándo se ve lo que importa

Largest Contentful Paint mide el tiempo hasta que se renderiza el mayor bloque de texto, imagen o vídeo visible en la primera pantalla. Suele ser una imagen principal, un titular grande o el contenido que confirma el propósito de la página.

Ejemplo: abres la web de un restaurante. Ves el fondo y el menú superior, pero la carta destacada tarda varios segundos en aparecer. La página ha empezado a dibujarse, aunque el elemento principal todavía no está listo. LCP intenta representar ese momento.

Un LCP lento puede venir de:

- Servidor que tarda en responder.
- Imagen principal pesada o descubierta demasiado tarde.
- Fuentes o estilos que bloquean el texto.
- Contenido principal generado mediante demasiado JavaScript.
- Recursos externos que compiten durante la carga.

La solución no siempre es comprimir todas las imágenes. Primero identifica cuál es el elemento LCP y qué parte de su recorrido retrasa la aparición.

## INP: si el clic obtiene respuesta

Interaction to Next Paint observa la latencia de las interacciones durante una visita y resume la capacidad de respuesta de la página. Incluye clics, toques y pulsaciones de teclado que califican para la métrica.

Ejemplo: eliges una fecha para reservar y la interfaz tarda en mostrar la selección. Puede que el toque se haya registrado, pero durante ese intervalo no hay una señal visual. La persona duda, vuelve a pulsar y termina creando un error.

Un INP alto suele relacionarse con trabajo excesivo en el hilo principal del navegador:

- Scripts de terceros.
- Menús o filtros que procesan demasiado al abrirse.
- Gestores de etiquetas cargados de reglas antiguas.
- Componentes que vuelven a dibujar gran parte de la página.
- Tareas largas que bloquean el feedback visual.

Para el propietario, una revisión de plugins, widgets y campañas antiguas puede ser un buen inicio. La corrección técnica necesita después localizar qué interacción y qué tarea provocan el retraso.

## CLS: si la página cambia de sitio

Cumulative Layout Shift mide la inestabilidad visual. No se expresa en segundos. Calcula cuánto contenido visible se desplaza y a qué distancia durante cambios inesperados.

Ejemplo: vas a tocar “Llamar”, termina de cargar una imagen y el botón baja. Pulsas en otro enlace. Otro caso común es empezar a leer y perder la línea cuando aparece un aviso encima.

Entre las causas frecuentes están:

- Imágenes sin ancho y alto reservados.
- Anuncios, mapas o vídeos que ocupan espacio tarde.
- Banners insertados sobre contenido ya visible.
- Fuentes que cambian mucho las dimensiones del texto.

El objetivo no es impedir cualquier cambio. Una sección que se abre porque la persona la pulsa no se trata igual que un salto inesperado durante la lectura.

## Por qué PageSpeed puede mostrar dos historias

Una prueba de laboratorio ejecuta la página con unas condiciones controladas. Los datos de campo proceden de visitas reales agregadas, cuando hay suficiente información. Dispositivos, redes, ubicaciones y acciones varían, por lo que los resultados no tienen que coincidir.

Usa el laboratorio para reproducir y diagnosticar. Usa los datos de campo para saber qué experimenta la población real a lo largo del tiempo. Una página nueva o con pocas visitas puede no disponer de datos propios y mostrar información del conjunto del sitio, o ninguna.

La guía sobre [por qué una web lenta afecta a un negocio](/blog/web-lenta-negocio-local) explica cómo probar las tareas principales sin quedarse solo con una nota.

## Qué puede decidir el negocio sin tocar código

Muchas causas requieren desarrollo, pero el propietario influye en la carga que se añade. Puede:

- Elegir una imagen principal útil y preparada para web.
- Reducir vídeos automáticos y efectos que no ayudan a decidir.
- Retirar chats, mapas o widgets sin uso.
- Limitar familias y variantes de fuentes.
- Pedir que las campañas caducadas se eliminen del gestor de etiquetas.
- Priorizar velocidad al seleccionar una plataforma o integración.
- Evitar instalar un complemento para cada necesidad menor.

Cada retirada debe comprobarse para no romper medición, reservas o funciones necesarias.

## Cómo encargar una mejora sin pedir “un 100”

Formula el objetivo alrededor de una tarea y una métrica:

- “La imagen principal de la página de servicio tarda en aparecer en móvil”.
- “El selector de reserva responde tarde”.
- “El botón cambia de posición durante la carga”.

Pide una medición anterior, la causa, el cambio realizado y una comprobación posterior. Una puntuación perfecta en una prueba concreta no garantiza la misma experiencia para todas las personas.

## Cuándo revisar las Core Web Vitals

Revísalas antes de lanzar, después de un rediseño y al añadir elementos que cargan código: chat, reservas, vídeo, consentimiento, publicidad o analítica. También cuando Search Console señale un grupo de URLs con problemas.

No esperes a que una métrica sea roja para probar llamadas, formularios y compra. Incluye estos controles en la [checklist antes de publicar](/blog/checklist-antes-publicar-web) y usa [Analytics y Search Console](/blog/google-analytics-vs-search-console) para no confundir rendimiento técnico con comportamiento o visibilidad.

Si necesitas traducir el informe a prioridades concretas para tu negocio, puedes [consultar a IB Studio](/#contacto).
