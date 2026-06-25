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
  title: "Aviso legal",
  description:
    "Condiciones de uso y responsabilidades del sitio web de IB Studio.",
};

export default function LegalNoticePage() {
  return (
    <LegalPage
      title="Aviso legal"
      description="Información general del titular del sitio, condiciones de acceso y reglas de uso del contenido publicado."
      updatedAt={updatedAt}
    >
      <LegalSection title="Titular del sitio web">
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
          IB Studio opera actualmente como marca personal en fase inicial. Si la
          actividad pasa a prestarse de forma profesional continuada o mediante una
          entidad, esta página se actualizará con los datos identificativos que exija
          la normativa aplicable.
        </p>
      </LegalSection>

      <LegalSection title="Objeto">
        <p>
          Este sitio web presenta servicios de diseño web, desarrollo,
          mantenimiento, optimización y consultoría digital ofrecidos bajo la marca
          IB Studio. La información publicada tiene carácter informativo y comercial,
          y no constituye por sí misma una oferta contractual cerrada salvo que se
          indique expresamente en una propuesta o presupuesto aceptado por ambas
          partes.
        </p>
      </LegalSection>

      <LegalSection title="Condiciones de acceso y uso">
        <LegalList
          items={[
            "El usuario se compromete a utilizar el sitio de forma lícita, diligente y respetuosa con los derechos de terceros.",
            "No se permite usar el sitio para introducir código malicioso, provocar interrupciones, intentar acceder a áreas no autorizadas o falsear la identidad del remitente en formularios.",
            "IB Studio puede suspender o bloquear el acceso al sitio cuando existan indicios razonables de uso fraudulento, abusivo o contrario a la seguridad del servicio.",
          ]}
        />
      </LegalSection>

      <LegalSection title="Propiedad intelectual e industrial">
        <p>
          Los textos, diseños, estructura visual, logotipos, imágenes, código y demás
          elementos del sitio pertenecen a IB Studio o a sus legítimos titulares.
          Queda prohibida su reproducción, distribución, comunicación pública o
          transformación sin autorización, salvo los usos permitidos por la ley.
        </p>
      </LegalSection>

      <LegalSection title="Enlaces externos">
        <p>
          El sitio puede incluir enlaces a servicios de terceros, como WhatsApp,
          correo electrónico, proveedores de seguridad, alojamiento o herramientas de
          contacto. IB Studio no controla el contenido ni las políticas de esos sitios
          externos y recomienda revisarlas antes de utilizarlos.
        </p>
      </LegalSection>

      <LegalSection title="Responsabilidad">
        <p>
          IB Studio procura que la información del sitio sea clara, actualizada y
          disponible, pero no garantiza la ausencia total de errores técnicos, caídas,
          interrupciones o contenidos desactualizados. Cuando se detecte un error, se
          corregirá en un plazo razonable.
        </p>
      </LegalSection>

      <LegalSection title="Protección de datos y cookies">
        <p>
          El tratamiento de datos personales se describe en la{" "}
          <Link href="/privacidad">Política de privacidad</Link>. El uso de cookies y
          tecnologías similares se explica en la{" "}
          <Link href="/cookies">Política de cookies</Link>.
        </p>
      </LegalSection>

      <LegalSection title="Legislación aplicable">
        <p>
          Este sitio se rige por la legislación española y europea aplicable, incluida
          la normativa de servicios de la sociedad de la información, protección de
          datos y defensa de consumidores cuando corresponda.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
