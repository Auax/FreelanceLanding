export function Logo() {
  return (
    <a href="/" className="flex items-center gap-2.5 focus-visible:outline-primary">
      <span className="relative grid size-9 shrink-0 place-items-center rounded-[10px] bg-brand-muted">
        <span className="absolute left-2 top-2 h-1.5 w-5 rounded-full bg-text-primary" />
        <span className="absolute bottom-2 left-2 h-1.5 w-3 rounded-full bg-text-primary" />
        <span className="size-2 rounded-full bg-text-primary" />
      </span>
      <span className="text-xl font-medium tracking-normal text-text-primary lg:text-[28px] lg:leading-9">
        IB Studio
      </span>
    </a>
  );
}
