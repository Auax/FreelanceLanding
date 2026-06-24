import { Check } from "lucide-react";

import { Button } from "../Button";
import { RevealCard } from "../Motion";
import { SectionHeader } from "../SectionHeader";
import { plans } from "../site-data";

export function Pricing() {
  return (
    <section id="planes" className="scroll-mt-20 bg-slate-50 py-16 lg:py-24">
      <div className="container mx-auto">
        <SectionHeader
          title="Planes flexibles"
          subtitle="Elige un plan que se adapte a tus necesidades, con opciones flexibles y precios transparentes."
        />
        <div className="mx-auto mt-14 grid gap-5 lg:grid-cols-3 lg:mt-16">
          {plans.map((plan, index) => (
            <RevealCard key={plan.name} delay={index * 0.08} className="h-full">
              <article
                className={`relative h-full overflow-hidden rounded-2xl border-4 border-white p-6 transition-shadow duration-300 hover:shadow-xl hover:shadow-primary/[0.06] ${
                  plan.popular
                    ? "bg-linear-to-b from-white to-primary/5"
                    : "bg-white"
                }`}
              >
                {plan.popular && (
                  <span className="absolute right-5 top-5 rounded-full bg-primary/10 px-2 py-1 text-xs font-normal text-primary">
                    Más elegido
                  </span>
                )}
                <h3 className="text-lg font-normal text-text-primary">{plan.name}</h3>
                <p className="mt-4 text-display-lg font-normal text-text-primary">
                  {plan.price}
                </p>
                <p className="mt-3 text-sm font-light text-text-secondary">{plan.body}</p>
                <Button
                  href="#contacto"
                  className={`mt-6 w-full ${plan.popular ? "" : "bg-white"}`}
                  variant={plan.popular ? "primary" : "outline"}
                >
                  Empezar
                </Button>
                <ul className="mt-6 space-y-3 border-t border-border pt-6">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm font-light text-text-secondary"
                    >
                      <Check className="size-4 text-text-primary" strokeWidth={2} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            </RevealCard>
          ))}
        </div>
        <div className="mx-auto mt-14 pt-6 text-center">
          <p className="mx-auto max-w-xl text-sm leading-relaxed text-text-secondary">
            Los planes son orientativos. Si necesitas algo diferente, podemos hablar y
            llegar a un acuerdo adaptado a tu negocio.
          </p>
        </div>
      </div>
    </section>
  );
}
