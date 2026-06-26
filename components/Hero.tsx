import { HERO } from "@/lib/content";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-32">
      {/* Background image + grade */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/hero.jpg"
          alt="High-performance sports car wheel and tire in detailed studio light"
          className="h-full w-full object-cover object-center"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-carbon-950/70 via-carbon-950/80 to-carbon-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-carbon-950 via-carbon-950/40 to-transparent" />
        <div className="absolute inset-0 bg-ice-grid bg-[length:44px_44px] opacity-[0.35]" />
      </div>

      <div className="container-x pb-20 pt-16 sm:pb-28 sm:pt-24">
        <div className="max-w-2xl animate-fade-up">
          <span className="eyebrow">
            <span className="inline-block h-px w-6 bg-glacier-300" />
            {HERO.eyebrow}
          </span>
          <h1 className="mt-5 font-display text-4xl font-bold leading-[1.04] tracking-tight text-frost sm:text-5xl md:text-6xl">
            {HERO.title}{" "}
            <span className="bg-gradient-to-r from-glacier-200 to-glacier-400 bg-clip-text text-transparent">
              {HERO.titleAccent}
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-frost/75">{HERO.sub}</p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="#join" className="btn-primary">
              {HERO.primaryCta}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="#how" className="btn-ghost">
              {HERO.secondaryCta}
            </a>
          </div>

          <p className="mt-7 text-sm text-frost/55">{HERO.trust}</p>
        </div>
      </div>
    </section>
  );
}
