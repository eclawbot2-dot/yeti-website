"use client";

import { useEffect, useState } from "react";
import { NAV } from "@/lib/content";
import Logo from "./Logo";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-white/10 bg-carbon-950/80 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between" aria-label="Primary">
        <a href="#top" className="flex items-center gap-2.5" aria-label={`${"YETI"} Tires home`}>
          <Logo className="h-8 w-8" />
          <span className="font-display text-lg font-bold tracking-tight text-frost">
            YETI<span className="text-glacier-300">™</span> Tires
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm font-medium text-frost/70 transition-colors hover:text-glacier-200"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a href="#join" className="btn-primary !px-5 !py-2.5 !text-sm">
            Join the Club
          </a>
        </div>

        <button
          type="button"
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-frost"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      <div
        id="mobile-menu"
        hidden={!open}
        className="md:hidden border-t border-white/10 bg-carbon-950/95 backdrop-blur-xl"
      >
        <ul className="container-x flex flex-col py-4">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base font-medium text-frost/80 hover:text-glacier-200"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-3">
              <a href="#join" onClick={() => setOpen(false)} className="btn-primary w-full">
                Join the Club
              </a>
            </li>
        </ul>
      </div>
    </header>
  );
}
