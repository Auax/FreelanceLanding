---
title: "Datos estructurados para negocios locales: qué son y cuándo ayudan"
editorialId: "B28"
description: "Guía práctica de LocalBusiness: qué información marcar, dónde añadirla, cómo validarla y por qué no garantiza un resultado enriquecido."
slug: "datos-estructurados-negocios-locales"
status: "draft"
author: "IB Studio"
cluster: "seo-local"
primaryTopic: "schema LocalBusiness"
searchIntent: "informational"
featuredImage: "/blog/datos-estructurados-negocios-locales.webp"
featuredImageAlt: "Código de datos estructurados conectado con la ficha de un negocio local"
relatedPosts:
  - "nap-seo-local-datos-negocio"
  - "errores-seo-local"
  - "paginas-locales-utiles-sin-contenido-duplicado"
ctaLabel: "Revisar los datos estructurados de mi web"
ctaHref: "/#contacto"
sources:
  - "https://developers.google.com/search/docs/appearance/structured-data/local-business?hl=es"
  - "https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data?hl=es"
  - "https://schema.org/LocalBusiness"
  - "https://search.google.com/test/rich-results"
---

Los datos estructurados son información añadida al código de una página para describir su contenido con un vocabulario estándar. El tipo `LocalBusiness` permite identificar un negocio, su ubicación, horarios, teléfono y otros datos. Ayuda a los buscadores a interpretar la página, pero no garantiza visibilidad, posiciones ni un resultado enriquecido.

Para un pequeño negocio tiene sentido cuando la web muestra información local clara y el marcado reproduce esa misma realidad. No compensa una dirección incorrecta, una página vacía o un Perfil de Empresa abandonado.

## Qué ve una persona y qué ve el buscador

Una página de contacto puede mostrar “Carrer de Mallorca, 10”, un horario y un número de teléfono. El marcado expresa esos mismos datos mediante propiedades como `address`, `openingHoursSpecification` y `telephone`.

El formato recomendado habitualmente es JSON-LD, un bloque de código separado del diseño visible. Un ejemplo reducido podría ser:

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Nombre real del negocio",
  "url": "https://www.ejemplo.es/",
  "telephone": "+34 000 000 000",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Dirección real",
    "addressLocality": "Barcelona",
    "postalCode": "00000",
    "addressCountry": "ES"
  }
}
```

No copies este bloque sin sustituir y comprobar todos los valores. El código debe representar el negocio visible en la página.

## Elige el tipo más específico que sea verdadero

`LocalBusiness` es un tipo general. Schema.org ofrece subtipos como `Restaurant`, `Dentist`, `HairSalon` o `Electrician`. Google recomienda usar el subtipo más específico que corresponda.

No elijas un tipo porque parezca atraer mejores resultados. Si no existe una categoría exacta, usa una más amplia y correcta. Tampoco mezcles varias entidades en un único bloque sin definir qué representa cada una.

En un negocio con varias sedes, cada ubicación debe poder identificarse de forma independiente. Lo habitual es que cada sede tenga una página útil con sus datos y su propia entidad, siempre que esas páginas tengan una razón real para existir. La guía de [páginas locales útiles](/blog/paginas-locales-utiles-sin-contenido-duplicado) explica cuándo separar ubicaciones.

## Propiedades que conviene revisar

La selección depende del tipo de negocio y de la documentación de Google, que puede cambiar. Como base, comprueba:

- `name`: nombre real mostrado al público;
- `address`: dirección completa si existe una sede visitable;
- `url`: URL canónica de la entidad o ubicación;
- `telephone`: teléfono vigente;
- `image`: imagen representativa accesible para el buscador;
- `openingHoursSpecification`: horario correcto, con días y horas;
- `geo`: coordenadas verificadas cuando correspondan;
- `priceRange`: solo si se puede describir de manera honesta y consistente;
- `sameAs`: perfiles oficiales que representan la misma entidad.

Las propiedades recomendadas no son una lista de campos que haya que rellenar a cualquier precio. Omite lo que no puedas mantener o lo que no corresponda. Nunca marques reseñas, precios, servicios o calificaciones que no aparecen de forma visible y legítima.

## Dónde colocarlos

Google indica que el marcado puede añadirse a las páginas del sitio, aunque suele tener más sentido en una página que contiene información sobre el negocio. Una implementación habitual coloca la entidad principal en la página de contacto o ubicación y conecta otras páginas con identificadores consistentes.

Evita pegar bloques diferentes mediante varios plugins. Puedes acabar con dos nombres, dos teléfonos o tipos incompatibles en una misma URL. Antes de añadir nada, inspecciona qué marcado genera ya el gestor de contenidos.

La información también debe coincidir con el [NAP del negocio](/blog/nap-seo-local-datos-negocio). Actualizar el teléfono visible y olvidar el JSON-LD crea una contradicción difícil de detectar a simple vista.

## Cómo validar la implementación

Sigue este recorrido:

1. Comprueba que todos los datos aparecen y son correctos en la página.
2. Ejecuta la Prueba de resultados enriquecidos de Google con la URL o el código.
3. Corrige los errores críticos y revisa las advertencias pertinentes.
4. Publica primero en pocas páginas.
5. Usa la inspección de URL de Search Console para comprobar cómo ve Google la página.
6. Revisa después los informes de datos estructurados disponibles en Search Console.

La herramienta de validación confirma que el formato y ciertas propiedades son comprensibles. No certifica la calidad del negocio ni promete que Google mostrará una presentación especial.

## Errores frecuentes

### Marcar información que no se ve

Los datos estructurados deben describir el contenido visible. Añadir una puntuación o una oferta inexistente para intentar cambiar el resultado contradice las directrices.

### Confundir negocio y página

Una URL de artículo puede tener marcado `Article`, mientras que la organización sigue siendo una entidad diferente. No conviertas cada página en un nuevo negocio.

### Dejar datos antiguos

Horarios, teléfonos y sedes cambian. Incluye el marcado en el mismo proceso de actualización que el contenido visible y los perfiles externos.

### Esperar que el código resuelva el SEO local

El marcado no sustituye una web indexable, contenidos útiles, datos exactos, reputación ni experiencia móvil. Trátalo como una capa de precisión técnica.

### Añadir todas las propiedades posibles

Más campos no significan mejores resultados. Cada propiedad añade una responsabilidad de mantenimiento. Incluye solo información verdadera, relevante y conforme con las guías vigentes.

## Cuándo priorizarlo

Da prioridad a `LocalBusiness` cuando la web ya tiene una página clara de negocio o sede, los datos coinciden y puedes mantener el código. Si hay errores de indexación, direcciones antiguas o páginas duplicadas, resuelve primero esos [problemas de SEO local](/blog/errores-seo-local).

Una implementación pequeña y correcta es más valiosa que un bloque enorme sin control. Si quieres revisar qué entidad y propiedades corresponden a tu web, puedes [solicitar una revisión a IB Studio](/#contacto).
