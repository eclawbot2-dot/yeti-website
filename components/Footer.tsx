import { SITE } from "@/lib/config";
import { SOCIAL } from "@/lib/config";
import { FOOTER, NAV } from "@/lib/content";
import Logo from "./Logo";

export default function Footer() {
  const year = 2026;
  return (
    <footer className="border-t border-white/10 bg-carbon-950">
      <div className="container-x py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <Logo className="h-8 w-8" />
              <span className="font-display text-lg font-bold tracking-tight text-frost">
                YETI<span className="text-glacier-300">™</span> Tires
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-frost/55">{FOOTER.blurb}</p>
          </div>

          <nav aria-label="Footer">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-frost/45">Explore</h2>
            <ul className="mt-4 space-y-2.5">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="text-sm text-frost/65 transition-colors hover:text-glacier-200">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-frost/45">Connect</h2>
            <a
              href={`mailto:${SITE.email}`}
              className="mt-4 block text-sm text-glacier-200 transition-colors hover:text-glacier-100"
            >
              {SITE.email}
            </a>
            <ul className="mt-4 flex flex-wrap gap-3">
              {SOCIAL.map((s) =>
                s.href ? (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg border border-white/12 px-3 py-1.5 text-xs text-frost/70 transition-colors hover:border-glacier-300/50 hover:text-glacier-200"
                    >
                      {s.label}
                    </a>
                  </li>
                ) : (
                  <li key={s.label}>
                    <span
                      className="cursor-default rounded-lg border border-white/8 px-3 py-1.5 text-xs text-frost/30"
                      title="Coming soon"
                    >
                      {s.label}
                    </span>
                  </li>
                ),
              )}
            </ul>
            <p className="mt-3 text-[11px] text-frost/30">Social channels coming soon.</p>
          </div>
        </div>

        <div className="hairline mt-12" />
        <div className="mt-6 flex flex-col items-start justify-between gap-3 text-xs text-frost/40 sm:flex-row sm:items-center">
          <p>
            © {year} {SITE.shortName}. {FOOTER.rights}
          </p>
          <p>Your Automotive Concierge.</p>
        </div>
      </div>
    </footer>
  );
}
