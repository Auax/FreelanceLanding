import type { Metadata } from "next";
import Link from "next/link";

import {
  LegalList,
  LegalPage,
  LegalSection,
  LegalTable,
} from "../_components/LegalPage";
import { contactInfo } from "../../components/site-data";

const updatedAt = "25 de junio de 2026";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description:
    "Información sobre el tratamiento de datos personales en IB Studio: contacto, seguridad, proveedores y derechos.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Política de privacidad"
      description="Esta política explica qué datos personales se tratan, con qué finalidad, durante cuánto tiempo y cómo puedes ejercer tus derechos."
      updatedAt={updatedAt}
    >
      <LegalSection title="Responsable del tratamiento">
        <LegalTable
          rows={[
            ["Nombre comercial", "IB Studio"],
            [
              "Correo electrónico",
              <a key="email" href={`mailto:${contactInfo.email}`}>
                {contactInfo.email}
              </a>,
            ],
            [
              "Teléfono",
              <a key="phone" href={contactInfo.phoneHref}>
                {contactInfo.phone}
              </a>,
            ],
          ]}
        />
        <p>
          IB Studio opera actualmente como marca personal en fase inicial. Los datos de
          contacto publicados son los necesarios para gestionar solicitudes y ejercer
          derechos de protección de datos.
        </p>
      </LegalSection>

      <LegalSection title="Datos que tratamos">
        <LegalList
          items={[
            "Datos de contacto que envías en el formulario: nombre, correo electrónico, teléfono, web actual y detalles del proyecto.",
            "Datos incluidos voluntariamente en comunicaciones por correo, teléfono, WhatsApp u otros canales que utilices para contactar.",
            "Datos técnicos necesarios para seguridad y funcionamiento: dirección IP, cabeceras técnicas, identificadores de solicitud, información del navegador y resultado de Cloudflare Turnstile.",
            "Datos de control antispam: campo honeypot del formulario, identificador de envío y contador de intentos para limitar abuso.",
          ]}
        />
      </LegalSection>

      <LegalSection title="Finalidades y bases jurídicas">
        <LegalTable
          rows={[
            [
              "Responder solicitudes",
              "Gestionar consultas, presupuestos y comunicaciones precontractuales. Base jurídica: aplicación de medidas precontractuales solicitadas por el interesado e interés legítimo en responder comunicaciones.",
            ],
            [
              "Prestar servicios contratados",
              "Preparar propuestas, ejecutar encargos, mantener comunicaciones de proyecto y gestionar obligaciones administrativas. Base jurídica: ejecución de contrato y cumplimiento de obligaciones legales.",
            ],
            [
              "Seguridad del sitio",
              "Prevenir spam, bots, abuso, fraude y ataques mediante Cloudflare, Turnstile, límites de tasa y registros técnicos. Base jurídica: interés legítimo en mantener el sitio seguro y disponible.",
            ],
            [
              "Comunicaciones comerciales",
              "Enviar información comercial solo cuando exista autorización previa o una relación contractual que lo permita legalmente, con opción sencilla de baja. Base jurídica: consentimiento o interés legítimo conforme a la normativa aplicable.",
            ],
          ]}
        />
      </LegalSection>

      <LegalSection title="Conservación">
        <LegalList
          items={[
            "Consultas no contratadas: durante el tiempo necesario para responder y hacer seguimiento razonable, normalmente hasta 12 meses salvo solicitud de supresión o necesidad de conservarlas ante posibles reclamaciones.",
            "Datos de clientes y proyectos: durante la relación contractual y los plazos legales aplicables en materia fiscal, contable, mercantil y de responsabilidad.",
            "Registros técnicos y seguridad: durante el plazo estrictamente necesario para proteger el sitio, investigar abusos y mantener evidencias de seguridad.",
          ]}
        />
      </LegalSection>

      <LegalSection title="Destinatarios y encargados">
        <p>
          Para operar este sitio y responder solicitudes se utilizan proveedores que
          pueden tratar datos por cuenta de IB Studio o como responsables
          independientes según el servicio concreto:
        </p>
        <LegalList
          items={[
            "Vercel Inc.: alojamiento, ejecución del sitio, infraestructura, registros técnicos y despliegue.",
            "Cloudflare Inc.: protección, DNS/proxy si está configurado, seguridad y Cloudflare Turnstile para verificar que el formulario no se usa de forma automatizada.",
            "Resend: envío y entrega de correos generados por el formulario de contacto.",
            "Upstash: limitación de intentos del formulario mediante Redis cuando esa integración esté configurada.",
            "GoDaddy: registro y gestión del dominio.",
            "Proveedores de comunicaciones que el usuario decida utilizar, como correo electrónico, teléfono o WhatsApp.",
          ]}
        />
      </LegalSection>

      <LegalSection title="Transferencias internacionales">
        <p>
          Algunos proveedores están ubicados fuera del Espacio Económico Europeo o
          pueden operar con infraestructura global. Cuando exista una transferencia
          internacional de datos, deberá apoyarse en una garantía válida conforme al
          RGPD, como decisiones de adecuación, cláusulas contractuales tipo u otros
          mecanismos reconocidos por la normativa aplicable.
        </p>
      </LegalSection>

      <LegalSection title="Cloudflare Turnstile">
        <p>
          El formulario usa Cloudflare Turnstile para distinguir usuarios humanos de
          bots y proteger el sitio frente a abuso. Turnstile puede tratar señales
          técnicas como IP, agente de usuario, huella TLS, clave del sitio y origen.
          El objetivo es seguridad, no publicidad comportamental.
        </p>
      </LegalSection>

      <LegalSection title="Derechos">
        <p>
          Puedes solicitar acceso, rectificación, supresión, oposición, limitación del
          tratamiento y portabilidad, cuando proceda, escribiendo a{" "}
          <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>. También
          puedes retirar tu consentimiento cuando el tratamiento se base en él, sin que
          ello afecte a la licitud del tratamiento anterior.
        </p>
        <p>
          Si consideras que no se han atendido correctamente tus derechos, puedes
          presentar una reclamación ante la Agencia Española de Protección de Datos en{" "}
          <a href="https://www.aepd.es" rel="noreferrer" target="_blank">
            www.aepd.es
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="Decisiones automatizadas">
        <p>
          No se toman decisiones automatizadas con efectos jurídicos o
          significativamente similares sobre los usuarios. Las herramientas de
          seguridad pueden bloquear o limitar solicitudes cuando detecten abuso técnico
          o automatizado.
        </p>
      </LegalSection>

      <LegalSection title="Cambios en esta política">
        <p>
          Esta política puede actualizarse cuando cambien los tratamientos,
          proveedores o requisitos legales. Si el cambio es relevante, se destacará en
          esta página. La información sobre cookies está disponible en la{" "}
          <Link href="/cookies">Política de cookies</Link>.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
