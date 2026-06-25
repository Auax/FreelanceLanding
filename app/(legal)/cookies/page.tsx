import type { Metadata } from "next";

import {
  LegalList,
  LegalPage,
  LegalSection,
  LegalTable,
} from "../_components/LegalPage";
import { contactInfo } from "../../components/site-data";

const updatedAt = "25 de junio de 2026";

export const metadata: Metadata = {
  title: "Política de cookies",
  description:
    "Información sobre cookies técnicas y tecnologías similares utilizadas en el sitio de IB Studio.",
};

export default function CookiesPage() {
  return (
    <LegalPage
      title="Política de cookies"
      description="Esta página explica qué cookies o tecnologías similares usa el sitio y cuándo sería necesario solicitar consentimiento."
      updatedAt={updatedAt}
    >
      <LegalSection title="Uso actual">
        <p>
          Según el código actual del sitio, no se cargan cookies de analítica,
          publicidad comportamental ni seguimiento de terceros. El sitio puede utilizar
          tecnologías estrictamente necesarias para seguridad, prevención de abuso,
          entrega técnica del servicio y funcionamiento del formulario.
        </p>
      </LegalSection>

      <LegalSection title="Cookies y tecnologías necesarias">
        <LegalTable
          rows={[
            [
              "Cloudflare / Turnstile",
              "Verificación antispam y antibots, protección del formulario y seguridad del sitio. Puede tratar señales técnicas y usar cookies o tecnologías equivalentes estrictamente necesarias.",
            ],
            [
              "Vercel / infraestructura",
              "Entrega del sitio, disponibilidad, seguridad, balanceo, registros técnicos y funcionamiento básico.",
            ],
            [
              "Formulario de contacto",
              "Identificador de envío, validación técnica y limitación de intentos para evitar abuso.",
            ],
          ]}
        />
      </LegalSection>

      <LegalSection title="Cookies no exentas">
        <p>
          Si en el futuro se activan herramientas de analítica, mapas embebidos,
          publicidad, remarketing, píxeles sociales o personalización no imprescindible,
          esta política deberá actualizarse y se mostrará un mecanismo de
          consentimiento previo, granular y revocable antes de cargar esas tecnologías.
        </p>
      </LegalSection>

      <LegalSection title="Cómo gestionar cookies">
        <p>
          Puedes bloquear, borrar o limitar cookies desde la configuración del
          navegador. Ten en cuenta que bloquear cookies técnicas o de seguridad puede
          impedir que el formulario funcione correctamente o que el sitio pueda
          protegerse frente a abuso automatizado.
        </p>
        <LegalList
          items={[
            <a
              key="chrome"
              href="https://support.google.com/chrome/answer/95647"
              rel="noreferrer"
              target="_blank"
            >
              Google Chrome
            </a>,
            <a
              key="firefox"
              href="https://support.mozilla.org/es/kb/Borrar%20cookies"
              rel="noreferrer"
              target="_blank"
            >
              Mozilla Firefox
            </a>,
            <a
              key="safari"
              href="https://support.apple.com/es-es/guide/safari/sfri11471/mac"
              rel="noreferrer"
              target="_blank"
            >
              Safari
            </a>,
            <a
              key="edge"
              href="https://support.microsoft.com/es-es/windows/administrar-cookies-en-microsoft-edge-ver-permitir-bloquear-eliminar-y-usar-168dab11-0753-043d-7c16-ede5947fc64d"
              rel="noreferrer"
              target="_blank"
            >
              Microsoft Edge
            </a>,
          ]}
        />
      </LegalSection>

      <LegalSection title="Contacto">
        <p>
          Para cualquier duda sobre esta política, puedes escribir a{" "}
          <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
