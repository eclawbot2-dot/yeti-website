import { JOIN } from "@/lib/content";
import { SITE } from "@/lib/config";
import JoinForm from "./JoinForm";
import Reveal from "./Reveal";

export default function Join() {
  return (
    <section id="join" className="relative overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent to-carbon-900/60" />
      <div className="container-x grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <span className="eyebrow">
            <span className="inline-block h-px w-6 bg-glacier-300" />
            Membership
          </span>
          <h2 className="section-heading mt-4">{JOIN.heading}</h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-frost/70">{JOIN.sub}</p>

          <div className="mt-8 flex flex-col gap-3">
            <a
              href={`mailto:${SITE.email}?subject=${encodeURIComponent("Call your YETI pit crew")}`}
              className="group inline-flex items-center gap-3 text-frost"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-glacier-400/15 text-glacier-300 transition-colors group-hover:bg-glacier-400/25">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M4 6h16v12H4zM4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span>
                <span className="block text-xs uppercase tracking-wider text-frost/50">{JOIN.cta}</span>
                <span className="font-display font-semibold text-glacier-200 group-hover:text-glacier-100">{SITE.email}</span>
              </span>
            </a>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <JoinForm />
        </Reveal>
      </div>
    </section>
  );
}
