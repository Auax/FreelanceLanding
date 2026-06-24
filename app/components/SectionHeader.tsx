import { Reveal } from "./Motion";

type SectionHeaderProps = {
  title: string;
  subtitle: string;
  className?: string;
};

export function SectionHeader({
  title,
  subtitle,
  className = "",
}: SectionHeaderProps) {
  return (
    <Reveal>
      <header
        className={`mx-auto flex flex-col gap-8 text-center ${className}`}
      >
        <h2 className="mx-auto max-w-2xl text-[clamp(2.5rem,4.5vw,5rem)] font-light leading-[0.9] tracking-[-0.075em] text-text-primary">
          {title}
        </h2>
        <p className="mx-auto max-w-xl pb-2 text-sm leading-relaxed text-text-secondary">
          {subtitle}
        </p>
      </header>
    </Reveal>
  );
}
