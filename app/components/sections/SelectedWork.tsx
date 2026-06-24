import Image from "next/image";

import { RevealCard } from "../Motion";
import { selectedWork } from "../site-data";
import { SectionHeader } from "../SectionHeader";

export function SelectedWork() {
  return (
    <section id="proyectos" className="scroll-mt-20 py-16 lg:py-24">
      <div className="container mx-auto">
        <SectionHeader title="Nuestros proyectos" subtitle="Algunos de nuestros proyectos recientes" />

        <div className="mt-14 grid grid-cols-1 gap-20 lg:gap-x-5 lg:gap-y-8 lg:grid-cols-2 lg:mt-16">
          {selectedWork.map((project, index) => (
            <RevealCard key={project.name} delay={index * 0.08} className="group">
              <article>
                <div className="relative aspect-[1.2/1] overflow-hidden rounded-md bg-neutral-200">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035] motion-reduce:transform-none motion-reduce:transition-none"
                  />
                </div>
                <div className="mt-3 flex items-start justify-between gap-5 text-text-primary">
                  <div>
                    <h3 className="text-base font-medium">{project.name}</h3>
                    <p className="mt-1 text-xs text-text-secondary">{project.category}</p>
                  </div>
                  <p className="pt-1 text-xs text-text-secondary">{project.year}</p>
                </div>
              </article>
            </RevealCard>
          ))}
        </div>
      </div>
    </section>
  );
}
