import { CLUB, HOW, BENEFITS, PERFORMANCE, SUSTAINABILITY } from "@/lib/content";
import Reveal from "./Reveal";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="eyebrow">
      <span className="inline-block h-px w-6 bg-glacier-300" />
      {children}
    </span>
  );
}

export function Club() {
  return (
    <section id="club" className="container-x py-20 sm:py-28">
      <Reveal>
        <Eyebrow>The Club</Eyebrow>
        <h2 className="section-heading mt-4 max-w-3xl">{CLUB.heading}</h2>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-frost/70">{CLUB.body}</p>
      </Reveal>
      <div className="mt-12 grid gap-5 sm:grid-cols-3">
        {CLUB.pillars.map((p, i) => (
          <Reveal key={p.title} delay={i * 90}>
            <div className="glass h-full p-6 transition-colors hover:border-glacier-300/30">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-glacier-400/15 text-glacier-300">
                <span className="font-display text-sm font-bold">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="font-display text-lg font-semibold text-frost">{p.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-frost/65">{p.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function How() {
  return (
    <section id="how" className="relative py-20 sm:py-28">
      <div className="container-x">
        <Reveal>
          <Eyebrow>How It Works</Eyebrow>
          <h2 className="section-heading mt-4">{HOW.heading}</h2>
          <p className="mt-4 max-w-xl text-lg text-frost/70">{HOW.sub}</p>
        </Reveal>
        <ol className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] sm:grid-cols-2 lg:grid-cols-4">
          {HOW.steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 80}>
              <li className="relative h-full bg-carbon-900/40 p-7">
                <span className="font-display text-4xl font-bold text-glacier-400/30">{s.n}</span>
                <h3 className="mt-3 font-display text-lg font-semibold text-frost">{s.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-frost/65">{s.body}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Benefits() {
  return (
    <section id="benefits" className="container-x py-20 sm:py-28">
      <Reveal>
        <Eyebrow>Club Benefits</Eyebrow>
        <h2 className="section-heading mt-4">{BENEFITS.heading}</h2>
        <p className="mt-4 max-w-xl text-lg text-frost/70">{BENEFITS.sub}</p>
      </Reveal>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {BENEFITS.items.map((b, i) => (
          <Reveal key={b.title} delay={(i % 4) * 70}>
            <div className="glass group h-full p-5">
              <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-glacier-400/12 text-glacier-300 transition-colors group-hover:bg-glacier-400/25">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="font-display text-base font-semibold text-frost">{b.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-frost/60">{b.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Performance() {
  return (
    <section id="performance" className="relative overflow-hidden py-20 sm:py-28">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-white/10">
            <img
              src="/images/performance.jpg"
              alt="Close detail of a performance tire tread and alloy wheel"
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-carbon-950/60 to-transparent" />
          </div>
        </Reveal>
        <div>
          <Reveal>
            <Eyebrow>Performance</Eyebrow>
            <h2 className="section-heading mt-4">{PERFORMANCE.heading}</h2>
            <p className="mt-5 text-lg leading-relaxed text-frost/70">{PERFORMANCE.body}</p>
          </Reveal>
          <dl className="mt-8 grid gap-4 sm:grid-cols-3">
            {PERFORMANCE.stats.map((s, i) => (
              <Reveal key={s.k} delay={i * 90}>
                <div className="glass h-full p-4">
                  <dt className="text-xs font-semibold uppercase tracking-wider text-glacier-300">{s.k}</dt>
                  <dd className="mt-1 font-display text-lg font-bold text-frost">{s.v}</dd>
                  <dd className="mt-1 text-xs leading-snug text-frost/55">{s.note}</dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

export function Sustainability() {
  return (
    <section className="container-x py-20 sm:py-24">
      <Reveal>
        <div className="glass relative overflow-hidden p-8 sm:p-12">
          <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-glacier-400/10 blur-3xl" aria-hidden="true" />
          <div className="relative max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-glacier-300/30 bg-glacier-400/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-glacier-200">
              {SUSTAINABILITY.badge}
            </span>
            <h2 className="section-heading mt-5">{SUSTAINABILITY.heading}</h2>
            <p className="mt-4 text-lg leading-relaxed text-frost/70">{SUSTAINABILITY.body}</p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
