import { FAQ } from "@/lib/content";
import Reveal from "./Reveal";

export default function Faq() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <section id="faq" className="container-x py-20 sm:py-28">
      <Reveal>
        <span className="eyebrow">
          <span className="inline-block h-px w-6 bg-glacier-300" />
          FAQ
        </span>
        <h2 className="section-heading mt-4">{FAQ.heading}</h2>
      </Reveal>

      <div className="mx-auto mt-10 max-w-3xl divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
        {FAQ.items.map((item, i) => (
          <details key={i} className="group px-6">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left font-display text-[17px] font-semibold text-frost transition-colors hover:text-glacier-200">
              {item.q}
              <span className="shrink-0 text-glacier-300 transition-transform duration-200 group-open:rotate-45" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </span>
            </summary>
            <p className="pb-5 text-[15px] leading-relaxed text-frost/65">{item.a}</p>
          </details>
        ))}
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    </section>
  );
}
