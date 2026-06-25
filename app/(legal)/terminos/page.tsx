import type { Metadata } from "next";
import Link from "next/link";

import { LegalList, LegalPage, LegalSection } from "../_components/LegalPage";
import { contactInfo } from "../../components/site-data";

const updatedAt = "25 de junio de 2026";

export const metadata: Metadata = {
  title: "Condiciones de servicio",
  description:
    "Condiciones generales orientativas para solicitudes, presupuestos y servicios de IB Studio.",
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Condiciones de servicio"
      description="Condiciones generales aplicables al uso del sitio y a las solicitudes de información o presupuesto realizadas a través de IB Studio."
      updatedAt={updatedAt}
    >
      <LegalSection title="Alcance">
        <p>
          El sitio permite solicitar información o presupuesto sobre servicios
          digitales. No existe contratación automática, pago online ni aceptación
          cerrada de un servicio únicamente por enviar el formulario. Cada proyecto
          requiere propuesta o presupuesto específico y aceptación expresa.
        </p>
      </LegalSection>

      <LegalSection title="Presupuestos y precios">
        <LegalList
          items={[
            "Los precios publicados en la web son orientativos salvo que se indique expresamente lo contrario.",
            "El presupuesto final dependerá del alcance, contenidos, integraciones, plazos, revisiones y requisitos técnicos de cada proyecto.",
            "El presupuesto indicará, cuando proceda, impuestos aplicables, forma de pago, entregables, plazos, condiciones de mantenimiento y costes recurrentes como dominio, hosting o servicios de terceros.",
          ]}
        />
      </LegalSection>

      <LegalSection title="Información aportada por el cliente">
        <p>
          El cliente debe aportar información veraz, contenidos, materiales, accesos y
          autorizaciones necesarios para ejecutar el proyecto. El cliente declara que
          dispone de derechos suficientes sobre textos, marcas, imágenes, vídeos,
          tipografías, bases de datos y demás materiales que entregue para su uso.
        </p>
      </LegalSection>

      <LegalSection title="Propiedad y licencias">
        <p>
          Salvo pacto distinto, una vez abonado el proyecto, el cliente recibirá los
          derechos de uso sobre los entregables finales acordados. Quedan excluidos
          herramientas internas, librerías de terceros, plantillas, código base
          reutilizable, know-how, componentes preexistentes y licencias sujetas a sus
          propios términos.
        </p>
      </LegalSection>

      <LegalSection title="Servicios de terceros">
        <p>
          Algunos proyectos pueden requerir servicios externos como dominios, hosting,
          correo, analítica, pasarelas de pago, herramientas de reservas,
          automatización o mensajería. Esos servicios se rigen por sus propias
          condiciones, precios y políticas de privacidad.
        </p>
      </LegalSection>

      <LegalSection title="Cancelaciones y cambios de alcance">
        <p>
          Las cancelaciones, pausas, ampliaciones o cambios sustanciales de alcance se
          gestionarán según lo pactado en el presupuesto aceptado. Si no existe pacto
          específico, el trabajo ya realizado, costes de terceros y compromisos
          asumidos podrán facturarse proporcionalmente.
        </p>
      </LegalSection>

      <LegalSection title="Privacidad">
        <p>
          El tratamiento de datos personales derivado de consultas, presupuestos y
          proyectos se regula en la{" "}
          <Link href="/privacidad">Política de privacidad</Link>.
        </p>
      </LegalSection>

      <LegalSection title="Contacto">
        <p>
          Para dudas sobre estas condiciones puedes escribir a{" "}
          <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a> o llamar al{" "}
          <a href={contactInfo.phoneHref}>{contactInfo.phone}</a>.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
