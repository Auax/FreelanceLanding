import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5 focus-visible:outline-primary">
      <Image
        src="/logo-big.webp"
        alt="Logotipo de IB Studio"
        width={100}
        height={100}
        unoptimized
        priority
      />
    </Link>
  );
}
