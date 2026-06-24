import { ArrowRight } from "lucide-react";
import { Button } from "../Button";
import { Entrance } from "../Motion";
import { ToolCarousel } from "../ToolCarousel";
import { websiteTools } from "../site-data";

export function Hero() {
  return (
    <section
      id="inicio"
      className="z-10 isolate flex flex-col min-h-[100vh] justify-center pt-6 sm:pt-28 md:pt-24"
    >
      {/* <AmbientGlow className="pointer-events-none absolute -left-[10%] top-[14%] -z-10 size-[clamp(220px,30vw,420px)] rounded-full bg-primary/10 blur-3xl" />
      <AmbientGlow className="pointer-events-none absolute -right-[8%] bottom-[8%] -z-10 size-[clamp(240px,32vw,460px)] rounded-full bg-brand-muted/25 blur-3xl" />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-20 bg-linear-to-b from-transparent to-white"
      /> */}

      <div className="container relative z-10 mx-auto flex flex-col text-center items-center justify-center mt-20">
        <Entrance delay={0.04}>
          <h1 className="font-medium tracking-tight text-text-primary max-w-3xl text-6xl leading-[1.08] sm:text-7xl lg:text-6xl xl:text-7xl">
            Descubre la web que tu negocio merece.
          </h1>
        </Entrance>
        <Entrance delay={0.14}>
          <p className="mt-5 max-w-md text-md sm:text-lg font-light text-text-secondary sm:mt-6 md:mx-0">
            Consigue clientes y mejora su experiencia con una buena presencia online.
          </p>
        </Entrance>
        <Entrance delay={0.24} className="w-full sm:w-auto">
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row md:mt-10">
            <Button variant="primary" href="#contacto" className="gap-2">
              Hablemos de tu web
              <ArrowRight className="size-4 shrink" strokeWidth={1.9} />
            </Button>
            <Button variant="outline" href="#proyectos" className="gap-2">
              Ver proyectos
            </Button>
          </div>
        </Entrance>
        
      </div>
      <div className="flex flex-col text-center items-center justify-center mt-20 sm:mt-30">
      <Entrance delay={0.34} className="w-full">
          <div className="container mx-auto max-w-4xl">
            <p className="text-sm font-light text-slate-400/90 ">
              Herramientas que uso
            </p>
            <div className="mb-8">
              <ToolCarousel tools={websiteTools} />
            </div>
          </div>
        </Entrance>
      </div>
    </section>
  );
}
