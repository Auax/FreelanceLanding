import Image from "next/image";

export function Logo() {
  return (
    <a href="/" className="flex items-center gap-2.5 focus-visible:outline-primary">
      <Image
        src="/logo-big.png"
        alt="IB Studio"
        width={100}
        height={100}
        unoptimized
        priority
      />
    </a>
  );
}
