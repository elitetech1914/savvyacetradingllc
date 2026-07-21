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
    <main className="min-h-screen bg-linear-to-b from-white via-[#fbf6fb] to-white px-6 py-10 sm:px-8 sm:py-14">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/"
          className="inline-flex items-center rounded-full border border-[#eadff0] bg-white/80 px-4 py-2 text-sm font-medium text-[#6b4a71] shadow-sm transition hover:border-[#d8c4e4] hover:text-[#4d3655]"
        >
          Back to home
        </Link>

        <article className="mt-6 overflow-hidden rounded-[2rem] border border-white/70 bg-white/90 shadow-[0_24px_60px_-28px_rgba(90,55,96,0.35)]">
          <header className="border-b border-[#f1e7f4] bg-linear-to-r from-[#fbf6fb] via-white to-[#f6eefb] px-6 py-8 sm:px-10 sm:py-10">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#8a6d8f]">
              ERS Technologies
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-[#483953] sm:text-4xl">
              {title}
            </h1>

            <div className="mt-4 space-y-3 text-sm leading-7 text-[#6f4f73] sm:text-base">
              {intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <p className="mt-5 text-sm font-medium text-[#8a6d8f]">
              Last updated: {lastUpdated}
            </p>
          </header>

          <div className="px-6 py-8 sm:px-10 sm:py-10">
            <div className="space-y-8">
              {sections.map((section) => (
                <section key={section.title}>
                  <h2 className="text-xl font-semibold text-[#483953]">
                    {section.title}
                  </h2>

                  {section.paragraphs?.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="mt-3 text-sm leading-7 text-[#6f4f73] sm:text-base"
                    >
                      {paragraph}
                    </p>
                  ))}

                  {section.bullets && section.bullets.length > 0 ? (
                    <ul className="mt-4 space-y-3 text-sm leading-7 text-[#6f4f73] sm:text-base">
                      {section.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3">
                          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#8a67d8]" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              ))}
            </div>

            <section className="mt-10 rounded-3xl border border-[#efe3f4] bg-[#fbf6fb] px-6 py-6">
              <h2 className="text-xl font-semibold text-[#483953]">
                Contact & Support
              </h2>
              <p className="mt-3 text-sm leading-7 text-[#6f4f73] sm:text-base">
                If you have questions about this page, your data, or an active
                project, contact ERS Technologies using the details below.
              </p>

              <div className="mt-4 space-y-3 text-sm text-[#6f4f73] sm:text-base">
                <p>
                  Email:{" "}
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="font-medium text-[#5a3760] underline decoration-[#d6c1e3] underline-offset-4"
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
                    className="font-medium text-[#5a3760] underline decoration-[#d6c1e3] underline-offset-4"
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
