// All site copy in one place (single source of truth). Two-sided tire-club
// strategy: YETI is a tire brand + a members club connecting drivers to a vetted
// network of local tire shops, and running the relationship for both sides.
// Honest — no fabricated stats, reviews, brands, prices, or shop counts.

export const NAV = [
  { label: "For Drivers", href: "#drivers" },
  { label: "For Shops", href: "#shops" },
  { label: "How It Works", href: "#how" },
  { label: "The Network", href: "#network" },
  { label: "FAQ", href: "#faq" },
];

export const HERO = {
  eyebrow: "The Tire Club",
  title: "The tire club that routes you to the right shop —",
  titleAccent: "and handles the details.",
  sub: "YETI™ is a tire brand and a members club that brings drivers and great local shops together. We match you to the right tires and a shop that does the job right, then handle the details — fair pricing, booking, reminders, the next set — so it's easy for you and good business for the shop.",
  trust: "A cooperative, not a middleman — drivers and local shops on the same side, with YETI™ making it work for both.",
};

// ---- For Drivers (the member value) ----
export const CONCIERGE = {
  heading: "For drivers: your crew, your shop, handled",
  lead: "Buying tires shouldn't mean decoding spec sheets or chasing a shop. YETI™ handles the whole job — the right tires, a trusted local shop that does great work, and someone who remembers your vehicle — so it's simple for you and steady business for them.",
  values: [
    { title: "A dedicated human", body: "One concierge who knows your vehicle and how you drive — not a call center, not a chatbot. Same crew, every time." },
    { title: "We do the research", body: "Load index, speed rating, fitment, tread-wear, all-weather grip — we translate the jargon and bring you the right call." },
    { title: "Fair member pricing", body: "Club pricing that's a good deal for you and fair to the shop — a straight number, no games on either side." },
    { title: "Routed to a vetted shop", body: "Matched to a trusted local shop that meets our standard — appointment booked, install coordinated." },
    { title: "We remember, so you don't", body: "Seasonal swaps, replacement reminders before tread runs low, a record of what's on your car. Handled in the background." },
    { title: "One relationship, for life", body: "Tires, rotations, seasons, the next set — one point of contact for the life of your vehicle. That's the club." },
  ],
};

// ---- Tire Finder (splash app) labels ----
export const FINDER = {
  eyebrow: "Free • 30 seconds",
  heading: "Find your tire in 30 seconds",
  sub: "Tell us a little about your driving. We'll point you to the right type of tire — then the club matches you to a shop and the exact set.",
  restart: "Start over",
  resultEyebrow: "Your recommended tire type",
  resultCtaLead: "Want the club to source the exact set and route you to a vetted shop?",
  resultCta: "Get my tire match",
  resultNote: "No commitment. We'll reply with options, pricing, and a shop near you — you decide.",
  back: "Back",
};

export const HOW = {
  heading: "How the club works",
  sub: "One system connecting drivers to the right shop — and keeping them there.",
  steps: [
    { n: "01", title: "Tell us your ride", body: "Your vehicle, your climate, how you drive. Use the tire finder above — 30 seconds." },
    { n: "02", title: "We match tires + a shop", body: "The right tire type at member pricing, and a vetted local shop near you that meets our standard." },
    { n: "03", title: "Booked and handled", body: "Appointment set, install coordinated. You just show up — the club lines it all up." },
    { n: "04", title: "We keep the relationship", body: "Reminders, seasonal swaps, loyalty, the next set — managed for the life of the vehicle." },
  ],
};

// ---- For Shops (the partner side) ----
export const SHOPS = {
  heading: "For shops: a fuller bay and customers for life",
  lead: "YETI™ sends you members who are ready to buy — then runs the marketing, comms, and follow-up so they come back. You do what you do best; the club owns the relationship.",
  values: [
    { title: "Qualified members, not clicks", body: "We route ready-to-buy drivers to your bay, matched by fitment and location. No tire-kickers, no lead forms to chase." },
    { title: "We run the marketing", body: "Advertising, campaigns, and brand — handled by the club. No ad budget to babysit, no agency to manage." },
    { title: "We own the relationship", body: "Reminders, seasonal outreach, loyalty and win-back — the club keeps your members coming back for you." },
    { title: "Steady, predictable demand", body: "A membership base that returns for rotations, seasons, and the next set — not one-and-done walk-ins." },
    { title: "Held to a standard", body: "The network is vetted. Being a YETI™ shop is a mark of trust drivers look for when they choose where to go." },
    { title: "Your brand, amplified", body: "The club manages the life-of-brand between you and the driver — so every touch builds loyalty to your bay." },
  ],
  cta: "Partner your shop",
};

// ---- The Network (the trust layer) ----
export const NETWORK = {
  heading: "A network held to a standard",
  body: "YETI™ is a cooperative — drivers and local shops on the same team. Every shop in the network is vetted for workmanship and fair pricing, and the club is the trust layer between the driver and the bay: drivers get a shop that does it right, shops get loyal members who keep coming back. Everybody wins, and the brand is stronger for it.",
  points: [
    { k: "Vetted shops", v: "Workmanship & pricing", note: "every partner meets the standard" },
    { k: "Member pricing", v: "Through the network", note: "club rates, brought to you straight" },
    { k: "Life-of-vehicle", v: "One relationship", note: "managed for drivers and shops" },
  ],
};

export const BENEFITS = {
  heading: "Everything tires, handled",
  sub: "Membership is the easy button — the club covers all of it, then keeps you and your shop connected.",
  items: [
    { title: "Concierge support", body: "A dedicated crew that owns the whole job." },
    { title: "Fitment guidance", body: "Exact sizing confirmed for your vehicle — no mismatches." },
    { title: "Product recommendations", body: "Tires matched to your driving, climate, and budget." },
    { title: "Vetted local shops", body: "Routed to a trusted shop near you that meets our standard." },
    { title: "Seasonal assistance", body: "Winter, summer, all-season — switched on your schedule." },
    { title: "Replacement reminders", body: "A heads-up before tread runs low. Never caught out." },
    { title: "Member pricing", body: "Network pricing, brought to you straight." },
    { title: "One point of contact", body: "No phone trees. The same crew, every time." },
  ],
};

export const PERFORMANCE = {
  heading: "Held to a performance standard",
  body: "YETI™ is a tire brand, too — and every tire we recommend has to earn it. We hold our picks to industry standards for tread-wear, grip, and handling across wet, dry, and winter conditions, so the tire on your car is the right tool for the road, not just whatever's in stock.",
  stats: [
    { k: "Tread-wear", v: "Rated & matched", note: "to how far and how hard you drive" },
    { k: "All-weather grip", v: "Wet · dry · winter", note: "handling verified across conditions" },
    { k: "Fitment", v: "100% confirmed", note: "exact sizing for your vehicle" },
  ],
};

export const SUSTAINABILITY = {
  heading: "Recycle a set, for every set",
  body: "For every set of tires we sell, YETI™ recycles a set. Old rubber doesn't belong in a landfill — it becomes roads, playgrounds, and fuel. Performance and responsibility ride together.",
  badge: "1 sold = 1 recycled",
};

export const FAQ = {
  heading: "Questions, answered",
  items: [
    { q: "What is YETI™ exactly — a brand or a club?", a: "Both. YETI™ is a tire brand and a members club. The club connects you to the right tires and a vetted local shop, then runs the relationship — pricing, reminders, seasons — for the life of your vehicle." },
    { q: "What does it cost to join as a driver?", a: "There are no commitments and no membership games — you get the best tires at the best price we can secure, routed to a trusted local shop, with the concierge built in. Use the tire finder or reach out and your crew will walk you through it." },
    { q: "How do you pick my tires and my shop?", a: "We match tires to your exact fitment, climate, and how you drive, then route you to a vetted shop in the network near you. Sizing is confirmed before anything's booked." },
    { q: "I own a tire shop — how do I join the network?", a: "Use the “Partner your shop” button. YETI™ sends you qualified members and runs the marketing, comms, and follow-up; you do the work in the bay. Every shop is vetted to a standard before joining." },
    { q: "Is this a franchise?", a: "No. Shops stay independent and keep their own brand. The club is the marketing and relationship layer that drives members to the bay and keeps them coming back." },
    { q: "Do you really recycle tires?", a: "Yes — for every set sold, we recycle a set. It's part of how the club operates." },
  ],
};

export const JOIN = {
  heading: "Join the YETI™ Tire Club",
  sub: "Drivers: the best tires at the best price, routed to a trusted shop. Shops: qualified members and a club that markets for you.",
  cta: "Call your YETI crew",
  formLead: "Tell us your ride and we'll take it from here.",
  fields: {
    name: "Your name",
    email: "Email",
    vehicle: "Year / Make / Model",
    message: "How and where do you drive? (optional)",
    submit: "Get my tire match",
  },
  success: "Thanks — your crew will be in touch shortly.",
};

export const FOOTER = {
  blurb: "A tire brand and a members club — connecting drivers to the shops that get it right, and running the relationship for both.",
  rights: "YETI™ is a trademark of YETI Tires. All rights reserved.",
};

// ---- Shop partner intake (the shop side of the club) ----
export const SHOP_JOIN = {
  heading: "Partner your shop with YETI™",
  sub: "Join the network. We send you qualified members and run the marketing, comms, and loyalty — you keep the bay full and the customers for life.",
  cta: "Talk to our partner team",
  formLead: "Tell us about your shop and we'll be in touch.",
  fields: {
    shop: "Shop name",
    name: "Your name",
    email: "Email",
    phone: "Phone (optional)",
    location: "City / State",
    bays: "Number of bays (optional)",
    message: "Anything else about your shop? (optional)",
    submit: "Apply to the network",
  },
  success: "Thanks — our partner team will reach out shortly.",
};
