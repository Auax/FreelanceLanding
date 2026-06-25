import Link from "next/link";
import type { ReactNode } from "react";

type LegalPageProps = {
  title: string;
  description: string;
  updatedAt: string;
  children: ReactNode;
};

export function LegalPage({
  title,
  description,
  updatedAt,
  children,
}: LegalPageProps) {
  return (
    <main className="bg-surface pt-32 pb-20">
      <article className="container mx-auto max-w-4xl">
        <header className="border-b border-border-subtle pb-10">
          <Link
            href="/"
            className="text-sm font-medium text-primary transition-colors hover:text-primary-hover"
          >
            Volver al inicio
          </Link>
          <h1 className="mt-6 text-display-md font-semibold tracking-normal text-text-primary">
            {title}
          </h1>
          <p className="mt-4 max-w-3xl text-md leading-relaxed text-text-secondary">
            {description}
          </p>
          <p className="mt-4 text-sm text-text-tertiary">
            Última actualización: {updatedAt}
          </p>
        </header>

        <div className="mt-10 space-y-10 text-sm leading-7 text-text-secondary">
          {children}
        </div>
      </article>
    </main>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-semibold text-text-primary">{title}</h2>
      {children}
    </section>
  );
}

export function LegalList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="list-disc space-y-2 pl-5">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export function LegalTable({
  rows,
}: {
  rows: Array<[ReactNode, ReactNode]>;
}) {
  return (
    <div className="overflow-hidden rounded-lg border border-border-subtle">
      <dl className="divide-y divide-border-subtle">
        {rows.map(([term, description], index) => (
          <div
            key={index}
            className="grid gap-2 bg-surface px-4 py-4 sm:grid-cols-[180px_minmax(0,1fr)]"
          >
            <dt className="font-medium text-text-primary">{term}</dt>
            <dd>{description}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export function LegalNotice({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-lg border border-border bg-surface-raised p-4 text-text-secondary">
      {children}
    </div>
  );
}
