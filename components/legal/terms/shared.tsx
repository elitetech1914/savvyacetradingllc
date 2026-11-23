import type { ReactNode } from "react";

export const sectionTitleClass = "text-xl font-semibold text-brand-ink";
export const paragraphClass = "mt-3 text-sm leading-7 text-brand-copy sm:text-base";
export const subheadingClass = "mt-6 text-lg font-semibold text-brand-ink";

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
