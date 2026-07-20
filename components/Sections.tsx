import { CONCIERGE, HOW, SHOPS, NETWORK, BENEFITS, PERFORMANCE, SUSTAINABILITY, COOP } from "@/lib/content";
import Reveal from "./Reveal";

function CheckList({ points, onDark = false }: { points: string[]; onDark?: boolean }) {
  return (
    <ul className="mt-5 space-y-3">
      {points.map((p) => (
        <li key={p} className="flex items-start gap-3">
          <span className={`mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full ${onDark ? "bg-brand-500/20 text-brand-300" : "bg-brand-50 text-brand-600"}`}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span className={`text-[15px] leading-snug ${onDark ? "text-white/85" : "text-ink-700"}`}>{p}</span>
        </li>
      ))}
    </ul>
  );
}

/* The co-op thesis: drivers ⇄ YETI ⇄ shops, everybody wins. */
export function CoOp() {
  return (
    <section id="coop" className="bg-paper-0 py-20 sm:py-28">
      <div className="container-x">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex justify-center">
              <Eyebrow>{COOP.eyebrow}</Eyebrow>
            </div>
            <h2 className="section-heading mt-4">{COOP.heading}</h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-600">{COOP.lead}</p>
          </div>
        </Reveal>

        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-[1fr_0.9fr_1fr]">
          {/* Drivers */}
          <Reveal>
            <div className="card h-full p-7">
              <span className="eyebrow"><span className="inline-block h-px w-6 bg-brand-500" />For Drivers</span>
              <h3 className="mt-3 font-display text-xl font-bold text-ink-900">{COOP.drivers.label}</h3>
              <CheckList points={COOP.drivers.points} />
            </div>
          </Reveal>

          {/* YETI hub — the connective tissue */}
          <Reveal delay={90}>
            <div className="flex h-full flex-col justify-center rounded-2xl bg-carbon-950 p-7 text-center text-white shadow-lg">
              <div className="mx-auto mb-4 flex items-center justify-center gap-3 text-brand-400" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M11 7l-5 5 5 5M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-500 font-display text-lg font-bold text-white">Y</span>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M13 7l5 5-5 5M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h3 className="font-display text-lg font-bold text-white">{COOP.hub.label}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-white/75">{COOP.hub.body}</p>
            </div>
          </Reveal>

          {/* Shops */}
          <Reveal delay={180}>
            <div className="card h-full p-7">
              <span className="eyebrow"><span className="inline-block h-px w-6 bg-brand-500" />For Shops</span>
              <h3 className="mt-3 font-display text-xl font-bold text-ink-900">{COOP.shops.label}</h3>
              <CheckList points={COOP.shops.points} />
            </div>
          </Reveal>
        </div>

        <Reveal>
          <p className="mx-auto mt-10 max-w-2xl text-center font-display text-lg font-semibold text-ink-900">{COOP.footnote}</p>
        </Reveal>
      </div>
    </section>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="eyebrow">
      <span className="inline-block h-px w-6 bg-brand-500" />
      {children}
    </span>
  );
}

/* The spine of the site: the concierge value. */
export function Concierge() {
  return (
    <section id="drivers" className="bg-paper-0 py-20 sm:py-28">
      <div className="container-x">
        <Reveal>
          <div className="max-w-3xl">
            <Eyebrow>For Drivers</Eyebrow>
            <h2 className="section-heading mt-4">{CONCIERGE.heading}</h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-600">{CONCIERGE.lead}</p>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CONCIERGE.values.map((v, i) => (
            <Reveal key={v.title} delay={(i % 3) * 90}>
              <div className="card h-full p-6 transition-transform duration-200 hover:-translate-y-1">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <span className="font-display text-sm font-bold">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="font-display text-lg font-semibold text-ink-900">{v.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-600">{v.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function How() {
  return (
    <section id="how" className="bg-paper-50 py-20 sm:py-28">
      <div className="container-x">
        <Reveal>
          <Eyebrow>How It Works</Eyebrow>
          <h2 className="section-heading mt-4">{HOW.heading}</h2>
          <p className="mt-4 max-w-xl text-lg text-ink-600">{HOW.sub}</p>
        </Reveal>
        <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {HOW.steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 80}>
              <li className="card h-full p-6">
                <span className="font-display text-4xl font-bold text-brand-200">{s.n}</span>
                <h3 className="mt-3 font-display text-lg font-semibold text-ink-900">{s.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-600">{s.body}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* For Shops: the partner side. Dark band to separate the audience. */
export function Shops() {
  return (
    <section id="shops" className="bg-carbon-950 py-20 text-white sm:py-28">
      <div className="container-x">
        <Reveal>
          <div className="max-w-3xl">
            <span className="eyebrow-on-photo">
              <span className="inline-block h-px w-6 bg-brand-400" />
              For Shops
            </span>
            <h2 className="section-heading mt-4 text-white">{SHOPS.heading}</h2>
            <p className="mt-5 text-lg leading-relaxed text-white/75">{SHOPS.lead}</p>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SHOPS.values.map((v, i) => (
            <Reveal key={v.title} delay={(i % 3) * 90}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6 transition-transform duration-200 hover:-translate-y-1">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500/20 text-brand-400">
                  <span className="font-display text-sm font-bold">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="font-display text-lg font-semibold text-white">{v.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-white/70">{v.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="mt-10">
            <a href="#partner" className="btn-primary">
              {SHOPS.cta}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* The Network: the trust layer. Light band, 3-up stat row like Performance. */
export function Network() {
  return (
    <section id="network" className="bg-paper-50 py-20 sm:py-28">
      <div className="container-x">
        <Reveal>
          <div className="max-w-3xl">
            <Eyebrow>The Network</Eyebrow>
            <h2 className="section-heading mt-4">{NETWORK.heading}</h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-600">{NETWORK.body}</p>
          </div>
        </Reveal>
        <dl className="mt-10 grid gap-4 sm:grid-cols-3">
          {NETWORK.points.map((s, i) => (
            <Reveal key={s.k} delay={i * 90}>
              <div className="card h-full p-4">
                <dt className="text-xs font-bold uppercase tracking-wider text-brand-600">{s.k}</dt>
                <dd className="mt-1 font-display text-lg font-bold text-ink-900">{s.v}</dd>
                <dd className="mt-1 text-xs leading-snug text-ink-500">{s.note}</dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}

export function Benefits() {
  return (
    <section id="benefits" className="bg-paper-0 py-20 sm:py-28">
      <div className="container-x">
        <Reveal>
          <Eyebrow>Club Benefits</Eyebrow>
          <h2 className="section-heading mt-4">{BENEFITS.heading}</h2>
          <p className="mt-4 max-w-xl text-lg text-ink-600">{BENEFITS.sub}</p>
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.items.map((b, i) => (
            <Reveal key={b.title} delay={(i % 4) * 70}>
              <div className="card h-full p-5">
                <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="font-display text-base font-semibold text-ink-900">{b.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-600">{b.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Performance() {
  return (
    <section id="performance" className="bg-paper-50 py-20 sm:py-28">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <div className="overflow-hidden rounded-3xl border border-paper-200 shadow-lift">
            <img
              src="/images/wheel-yellow.jpg"
              alt="Sports car alloy wheel fitted with a performance tire"
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        </Reveal>
        <div>
          <Reveal>
            <Eyebrow>Performance</Eyebrow>
            <h2 className="section-heading mt-4">{PERFORMANCE.heading}</h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-600">{PERFORMANCE.body}</p>
          </Reveal>
          <dl className="mt-8 grid gap-4 sm:grid-cols-3">
            {PERFORMANCE.stats.map((s, i) => (
              <Reveal key={s.k} delay={i * 90}>
                <div className="card h-full p-4">
                  <dt className="text-xs font-bold uppercase tracking-wider text-brand-600">{s.k}</dt>
                  <dd className="mt-1 font-display text-lg font-bold text-ink-900">{s.v}</dd>
                  <dd className="mt-1 text-xs leading-snug text-ink-500">{s.note}</dd>
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
    <section className="bg-paper-0 py-20 sm:py-24">
      <div className="container-x">
        <Reveal>
          <div className="grid items-stretch gap-0 overflow-hidden rounded-3xl border border-paper-200 shadow-lift md:grid-cols-2">
            <div className="order-2 bg-carbon-950 p-8 sm:p-12 md:order-1">
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                {SUSTAINABILITY.badge}
              </span>
              <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
                {SUSTAINABILITY.heading}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-white/75">{SUSTAINABILITY.body}</p>
            </div>
            <div className="order-1 min-h-[260px] md:order-2">
              <img
                src="/images/wheel-chrome.jpg"
                alt="Detail of a polished performance alloy wheel"
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
