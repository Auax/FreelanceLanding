---
title: "HTTPS, copias de seguridad y actualizaciones: seguridad web sin tecnicismos"
description: "Entiende qué protegen HTTPS, las copias y las actualizaciones, quién debe encargarse y qué preguntar a tu proveedor web."
slug: "seguridad-web-https-copias-actualizaciones"
status: "draft"
author: "IB Studio"
editorialId: "B59"
cluster: "rendimiento-web"
primaryTopic: "seguridad página web negocio"
searchIntent: "informational-commercial"
featuredImage: "/blog/seguridad-web-https-copias-actualizaciones.webp"
featuredImageAlt: "Esquema de seguridad web con HTTPS, copia de seguridad y actualización"
relatedPosts:
  - "elegir-metodos-pago-tienda-online"
  - "elegir-nombre-dominio-negocio"
  - "checklist-antes-publicar-web"
ctaLabel: "Revisar el mantenimiento de mi web"
ctaHref: "/#contacto"
sources:
  - "https://letsencrypt.org/how-it-works/"
  - "https://www.cisa.gov/audiences/small-and-medium-businesses/secure-your-business/update-business-software"
  - "https://www.cisa.gov/stopransomware/ransomware-guide"
  - "https://owasp.org/www-project-top-ten/"
---

HTTPS, las copias de seguridad y las actualizaciones cubren riesgos distintos. HTTPS protege la comunicación entre el navegador y la web. Una copia permite recuperar datos y archivos. Las actualizaciones corrigen fallos y mantienen componentes compatibles.

Necesitas las tres, además de contraseñas, permisos y procedimientos adecuados. Ninguna convierte una web en invulnerable.

## HTTPS protege la conexión, no todo el sitio

Cuando una página usa HTTPS, el navegador establece una conexión cifrada con el servidor y comprueba el certificado presentado. Esto dificulta que un tercero lea o modifique la información durante el trayecto.

Para un negocio, HTTPS debe cubrir todas las páginas, no solo el pago o el formulario. Comprueba que:

- La versión `http` redirige a `https`.
- El certificado se renueva antes de caducar.
- No se cargan imágenes, scripts o fuentes mediante conexiones inseguras.
- Los enlaces internos usan la dirección correcta.
- Los servicios externos admiten HTTPS.

El candado no significa que el comercio sea legítimo ni que el servidor esté libre de fallos. Un sitio fraudulento también puede tener certificado. No presentes HTTPS como una garantía total de seguridad.

## Una copia solo sirve si se puede restaurar

“El alojamiento hace copias” es un punto de partida, no una respuesta completa. Necesitas saber:

- Qué se copia: archivos, base de datos, pedidos, configuraciones y contenido.
- Con qué frecuencia.
- Cuánto tiempo se conservan las versiones.
- Dónde se almacenan y si están separadas del sistema principal.
- Quién puede acceder.
- Cómo se solicita o ejecuta una restauración.
- Cuándo se probó por última vez.

Una copia diaria puede perder casi un día de pedidos. Una copia mensual quizá sea suficiente para una web que cambia poco, pero no para una tienda activa. Define el intervalo según cuánto dato puede asumir el negocio que tendría que reconstruir.

No guardes la única copia dentro del mismo servidor y cuenta que quieres recuperar. Un fallo, borrado o acceso no autorizado podría afectar a ambos.

## Prueba una restauración antes de necesitarla

La prueba debe comprobar que la copia está completa, que las credenciales están disponibles y que existe un procedimiento. Puede hacerse en un entorno separado para no sobrescribir la web pública.

Documenta:

1. Quién autoriza la restauración.
2. Qué versión se elige.
3. Cómo se valida la integridad.
4. Qué datos posteriores habría que recuperar.
5. Cómo se vuelve a abrir el servicio.
6. A quién se informa si existe una incidencia.

No hace falta publicar este documento, pero debe estar accesible para las personas que responderán.

## Actualizar reduce exposición y evita incompatibilidades

Un gestor de contenidos, plugin, tema o dependencia puede recibir correcciones de seguridad. CISA recomienda instalar las actualizaciones de software y activar las automáticas cuando sea apropiado.

En una web de negocio conviene distinguir:

- **Corrección urgente de seguridad:** se evalúa e instala con prioridad.
- **Actualización de mantenimiento:** corrige errores y compatibilidad.
- **Cambio mayor:** puede modificar funciones y requiere más pruebas.

Actualizar a ciegas en producción puede romper una reserva o pago. No actualizar durante años también acumula riesgo. El proceso responsable hace copia, revisa notas, prueba las funciones críticas y comprueba la web después.

## Menos componentes significa menos superficie que mantener

Cada plugin, integración o script añade una relación de confianza y una tarea futura. Antes de instalar, pregunta:

- ¿Resuelve una necesidad real?
- ¿Quién lo mantiene y con qué frecuencia?
- ¿Qué permisos solicita?
- ¿Qué datos recibe?
- ¿Se puede retirar sin perder contenido?
- ¿Quién comprobará sus actualizaciones?

Elimina componentes abandonados, no solo los desactives si siguen presentes y no se necesitan. Hazlo con una copia y una prueba para evitar dependencias ocultas.

## Reparte las responsabilidades por escrito

El alojamiento puede cubrir servidor y red, pero no necesariamente el código de la web. El desarrollador puede actualizar la aplicación, pero no saber quién administra el dominio. El negocio controla usuarios y contraseñas, aunque quizá delegue la restauración.

Una tabla sencilla evita huecos:

| Tarea | Responsable | Frecuencia o disparador | Evidencia |
| --- | --- | --- | --- |
| Renovar certificado | Proveedor definido | Antes de caducar | Fecha y alerta |
| Crear copias | Proveedor definido | Según necesidad del negocio | Registro de copia |
| Probar restauración | Persona definida | Periódicamente y tras cambios grandes | Acta de prueba |
| Actualizar componentes | Persona definida | Aviso de seguridad o ciclo acordado | Registro de versión |
| Revisar usuarios | Negocio | Cambio de equipo y revisión periódica | Lista actualizada |

No dejes “proveedor” como responsable genérico. Escribe el nombre de la empresa, cuenta o persona y el canal para incidencias.

## Protege los accesos cotidianos

Usa contraseñas únicas y un gestor de contraseñas. Activa autenticación multifactor donde esté disponible, sobre todo en dominio, alojamiento, repositorio, correo y administración. Cada persona debería tener su propia cuenta con los permisos mínimos necesarios.

Retira el acceso cuando alguien deja el proyecto. Evita compartir por correo una contraseña común que nadie sabe cambiar. Conserva códigos de recuperación en un lugar protegido y comprueba que los datos de recuperación pertenecen al negocio.

En pagos, usa proveedores adecuados y no recibas datos de tarjeta mediante formularios o mensajes. La guía para [elegir métodos de pago](/blog/elegir-metodos-pago-tienda-online) explica la responsabilidad compartida.

## Preguntas para tu proveedor web

Antes de contratar mantenimiento o revisar el actual, pregunta:

- ¿Qué cubre exactamente el alojamiento y qué cubre el mantenimiento?
- ¿Cómo se reciben y priorizan alertas de seguridad?
- ¿Qué se prueba después de actualizar?
- ¿Dónde están las copias y cuánto se conservan?
- ¿Se ha ensayado una restauración?
- ¿Quién conserva la propiedad de dominio, cuentas y código?
- ¿Cuál es el canal para una incidencia urgente?

Incluye estas respuestas en la [checklist de lanzamiento web](/blog/checklist-antes-publicar-web) y verifica que el [dominio esté registrado y controlado correctamente](/blog/elegir-nombre-dominio-negocio). Si necesitas ordenar responsabilidades técnicas sin depender de supuestos, puedes [hablar con IB Studio](/#contacto).
