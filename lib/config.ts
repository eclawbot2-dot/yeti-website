// Single source of truth for external identifiers and derived URLs.
// Anything not yet confirmed is marked with a TODO and surfaced to the user.

export const SITE = {
  name: "YETI™ Tires",
  shortName: "YETI Tires",
  domain: "yeti3.jahdev.com",
  url: "https://yeti3.jahdev.com",
  tagline: "The tire club connecting drivers to the shops that get it right.",
  description:
    "YETI™ Tires is a tire brand and a members club — matching drivers to the right tires and a vetted local shop, and running the relationship (pricing, reminders, seasons, loyalty) for the life of the vehicle.",
  // Contact
  email: "Info@YetiTires.com", // confirmed brand address
  // TODO: confirm a real phone number for the "Call your Yeti Pit Crew" CTA. Until then, no tel: link is rendered.
  phone: "", // empty => CTA falls back to email, no fake number
  established: 2022,
};

// Social links. Only render a link when we have a VERIFIED handle.
// TODO: confirm the real YETI Tires handles before these go live; until confirmed
// they render as labeled "coming soon" placeholders (no guessed URLs).
export const SOCIAL: { label: string; href: string | null }[] = [
  { label: "Instagram", href: null },
  { label: "Facebook", href: null },
  { label: "LinkedIn", href: null },
  { label: "X", href: null },
  { label: "TikTok", href: null },
];

// Lead-capture form. TODO: swap in the real Formspree/Tally endpoint when provided.
// Until then the Join form uses a mailto fallback (which is a real, working path).
export const FORM_ENDPOINT: string | null = null;

// Analytics. TODO: provide a real GA4 measurement ID (G-XXXXXXX) to enable.
export const GA_MEASUREMENT_ID: string | null = null;

export const hasSocial = SOCIAL.some((s) => s.href);
