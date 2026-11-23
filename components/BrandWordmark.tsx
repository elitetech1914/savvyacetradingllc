import { brandName } from "@/lib/brand";

export default function BrandWordmark() {
  return (
    <span className="inline-flex items-center gap-2.5 text-brand-ink sm:gap-3">
      <span
        aria-hidden="true"
        className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand-navy text-sm font-bold text-brand-gold"
      >
        SA
      </span>
      <span className="text-sm font-bold leading-tight tracking-tight sm:text-lg">
        {brandName}
      </span>
    </span>
  );
}
