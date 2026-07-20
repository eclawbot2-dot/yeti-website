import { SHOP_JOIN } from "@/lib/content";
import { SITE } from "@/lib/config";
import ShopForm from "./ShopForm";
import Reveal from "./Reveal";

/* The shop side of the two-sided club: a dedicated partner intake, distinct
   from the driver Join. Dark band to match the "For Shops" audience. */
export default function ShopJoin() {
  return (
    <section id="partner" className="relative overflow-hidden bg-carbon-950 py-20 sm:py-28">
      <div className="absolute inset-0 -z-0 bg-gradient-to-b from-carbon-950 to-ink-900" />
      <div className="container-x relative grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <span className="eyebrow-on-photo">
            <span className="inline-block h-px w-6 bg-brand-400" />
            For Shops
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-[2.75rem]">
            {SHOP_JOIN.heading}
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-white/80">{SHOP_JOIN.sub}</p>

          <a
            href={`mailto:${SITE.email}?subject=${encodeURIComponent(SHOP_JOIN.cta)}`}
            className="group mt-8 inline-flex items-center gap-3 text-white"
          >
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand-500 text-white transition-colors group-hover:bg-brand-400">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M4 6h16v12H4zM4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span>
              <span className="block text-xs uppercase tracking-wider text-white/55">{SHOP_JOIN.cta}</span>
              <span className="font-display font-semibold text-white group-hover:text-brand-300">{SITE.email}</span>
            </span>
          </a>
        </Reveal>

        <Reveal delay={120}>
          <ShopForm />
        </Reveal>
      </div>
    </section>
  );
}
