import { UniqueAccordion } from "@/components/ui/interactive-accordion";

import { Reveal } from "../Motion";
import { SectionHeader } from "../SectionHeader";
import { faqs } from "../site-data";

const faqAccordionItems = faqs.map((faq, index) => ({
  id: `faq-${index + 1}`,
  number: String(index + 1).padStart(2, "0"),
  title: faq.question,
  content: faq.answer,
}));

export function FAQ() {
  return (
    <section id="faq" className="bg-slate-50 mx-auto scroll-mt-20 py-16 lg:py-24">
      <div className="container mx-auto">
        <SectionHeader
          title="Preguntas frecuentes"
          subtitle="Resolvemos las dudas más habituales antes de crear una web para tu negocio."
        />
        <Reveal delay={0.1}>
          <div className="mx-auto mt-14 max-w-[1480px] lg:mt-16">
            <UniqueAccordion
              items={faqAccordionItems}
              className="max-w-none mx-auto lg:max-w-[900px]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
