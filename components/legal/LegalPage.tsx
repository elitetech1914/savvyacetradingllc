import Link from "next/link";

type LegalSection = {
  title: string;
  paragraphs?: readonly string[];
  bullets?: readonly string[];
};

type LegalPageProps = {
  title: string;
  intro: readonly string[];
  sections: readonly LegalSection[];
  lastUpdated: string;
};

const CONTACT_EMAIL = "support@erstechnologiesllc.com";
const CONTACT_ADDRESS = [
  "4607 COLONY HILLS DR",
  "SUGAR LAND, TX 77479",
];

export default function LegalPage({
  title,
  intro,
  sections,
  lastUpdated,
}: LegalPageProps) {
  return (
    <main className="min-h-screen bg-linear-to-b from-white via-brand-sand to-white px-6 py-10 sm:px-8 sm:py-14">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/"
          className="inline-flex items-center rounded-full border border-brand-line bg-white/80 px-4 py-2 text-sm font-medium text-brand-copy shadow-sm transition hover:border-brand-line-strong hover:text-brand-ink"
        >
          Back to home
        </Link>

        <article className="mt-6 overflow-hidden rounded-[2rem] border border-white/70 bg-white/90 shadow-[0_24px_60px_-28px_color-mix(in_srgb,var(--color-brand-navy)_35%,transparent)]">
          <header className="border-b border-brand-line bg-linear-to-r from-brand-sand via-white to-brand-mist px-6 py-8 sm:px-10 sm:py-10">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-muted">
              Savvy Ace Trading LLC
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
              {title}
            </h1>

            <div className="mt-4 space-y-3 text-sm leading-7 text-brand-copy sm:text-base">
              {intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <p className="mt-5 text-sm font-medium text-brand-muted">
              Last updated: {lastUpdated}
            </p>
          </header>

          <div className="px-6 py-8 sm:px-10 sm:py-10">
            <div className="space-y-8">
              {sections.map((section) => (
                <section key={section.title}>
                  <h2 className="text-xl font-semibold text-brand-ink">
                    {section.title}
                  </h2>

                  {section.paragraphs?.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="mt-3 text-sm leading-7 text-brand-copy sm:text-base"
                    >
                      {paragraph}
                    </p>
                  ))}

                  {section.bullets && section.bullets.length > 0 ? (
                    <ul className="mt-4 space-y-3 text-sm leading-7 text-brand-copy sm:text-base">
                      {section.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3">
                          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand-teal" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              ))}
            </div>

            <section className="mt-10 rounded-3xl border border-brand-line bg-brand-sand px-6 py-6">
              <h2 className="text-xl font-semibold text-brand-ink">
                Contact & Support
              </h2>
              <p className="mt-3 text-sm leading-7 text-brand-copy sm:text-base">
                If you have questions about this page, your data, or an active
                project, contact Savvy Ace Trading LLC using the details below.
              </p>

              <div className="mt-4 space-y-3 text-sm text-brand-copy sm:text-base">
                <p>
                  Email:{" "}
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="font-medium text-brand-ink underline decoration-brand-line-strong underline-offset-4"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </p>

                <address className="not-italic leading-7">
                  {CONTACT_ADDRESS.map((line) => (
                    <div key={line}>{line}</div>
                  ))}
                </address>

                <p>
                  You can also use our{" "}
                  <Link
                    href="/#contact"
                    className="font-medium text-brand-ink underline decoration-brand-line-strong underline-offset-4"
                  >
                    contact form
                  </Link>
                  .
                </p>
              </div>
            </section>
          </div>
        </article>
      </div>
    </main>
  );
}
