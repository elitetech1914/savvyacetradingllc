import type { ReactNode } from "react";

export const sectionTitleClass = "text-xl font-semibold text-[#483953]";
export const paragraphClass = "mt-3 text-sm leading-7 text-[#6f4f73] sm:text-base";
export const subheadingClass = "mt-6 text-lg font-semibold text-[#5a3760]";

type TermsSectionProps = {
  children: ReactNode;
  title: string;
};

export function TermsSection({ children, title }: TermsSectionProps) {
  return (
    <section>
      <h2 className={sectionTitleClass}>{title}</h2>
      {children}
    </section>
  );
}
