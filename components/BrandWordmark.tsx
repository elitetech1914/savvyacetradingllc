import Image from "next/image";
import { brandName } from "@/lib/brand";

export default function BrandWordmark() {
  return (
    <Image
      src="/main_logo.png"
      alt={brandName}
      width={160}
      height={64}
      sizes="(min-width: 640px) 160px, 130px"
      className="h-auto w-[130px] sm:w-40"
    />
  );
}
