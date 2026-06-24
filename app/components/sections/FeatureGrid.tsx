"use client";

import {
  CalendarCheck,
  ChartColumn,
  Smartphone,
  type LucideIcon,
} from "lucide-react";
import dynamic from "next/dynamic";

import { featureCards, type FeatureIcon } from "../site-data";
import { Reveal } from "../Motion";
import { SectionHeader } from "../SectionHeader";

const AnalyticsPreview = dynamic(
  () =>
    import("@/components/ui/analytics-preview").then(
      (module) => module.AnalyticsPreview,
    ),
  {
    ssr: false,
    loading: () => (
      <div
        aria-hidden="true"
        className="h-full min-h-[420px] animate-pulse rounded-[22px] border border-black/5 bg-white/70"
      />
    ),
  },
);

const featureIcons: Record<FeatureIcon, LucideIcon> = {
  "calendar-check": CalendarCheck,
  smartphone: Smartphone,
  "chart-column": ChartColumn,
};

export function FeatureGrid() {
  return (
    <section
      id="servicios"
      className="scroll-mt-20 bg-slate-50 py-16 lg:py-24"
    >
      <div className="container mx-auto">
        <SectionHeader
          title="Más llamadas, reservas y clientes desde tu web"
          subtitle="Diseñamos webs que convierten visitas en clientes. Experiencia rápida, clara y orientada a resultados."
        />
        <div className="mt-10 lg:mt-20 items-stretch gap-12 grid lg:grid-cols-[minmax(360px,1fr)_minmax(500px,1fr)] lg:gap-16 xl:gap-20">
          <Reveal delay={0.08}>
            {featureCards.map((feature) => {
              const Icon = featureIcons[feature.icon];
              return (
                <div
                  key={feature.id}
                  className="flex w-full gap-4 py-7 sm:py-8"
                >
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl text-primary">
                    <Icon className="size-5" strokeWidth={1.75} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-xl font-medium tracking-tight text-text-primary">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-sm text-text-secondary">
                      {feature.body}
                    </p>
                  </div>
                </div>
              );
            })}
          </Reveal>
          <Reveal delay={0.16} className="h-full">
            <div className="mx-auto h-full w-full min-w-0 max-w-[620px] lg:max-w-none lg:justify-self-center">
              <AnalyticsPreview />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
