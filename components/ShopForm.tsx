"use client";

import { useState } from "react";
import { SHOP_JOIN } from "@/lib/content";
import { SITE, FORM_ENDPOINT } from "@/lib/config";

export default function ShopForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    shop: "",
    name: "",
    email: "",
    phone: "",
    location: "",
    bays: "",
    message: "",
  });

  const update = (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "generate_lead", {
        method: FORM_ENDPOINT ? "form" : "mailto",
        lead_type: "shop_partner",
      });
    }
    if (FORM_ENDPOINT) {
      try {
        await fetch(FORM_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({ ...form, lead_type: "shop_partner" }),
        });
        setSent(true);
        return;
      } catch {
        /* fall through to mailto */
      }
    }
    const subject = encodeURIComponent("New YETI shop partner application");
    const body = encodeURIComponent(
      `Shop: ${form.shop}\nContact: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n` +
        `Location: ${form.location}\nBays: ${form.bays}\n\n${form.message}`,
    );
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  const inputCls =
    "w-full rounded-xl border border-paper-200 bg-white px-4 py-3 text-[15px] text-ink-900 placeholder:text-ink-400 focus:border-brand-400 focus:outline-none";

  if (sent) {
    return (
      <div className="card p-8 text-center" role="status">
        <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-50 text-brand-600">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <p className="font-display text-lg font-semibold text-ink-900">{SHOP_JOIN.success}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="card p-6 sm:p-8" noValidate>
      <p className="mb-5 text-[15px] text-ink-600">{SHOP_JOIN.formLead}</p>
      <div>
        <label htmlFor="shop" className="mb-1.5 block text-xs font-medium text-ink-600">{SHOP_JOIN.fields.shop}</label>
        <input id="shop" name="shop" required value={form.shop} onChange={update("shop")} className={inputCls} autoComplete="organization" />
      </div>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="shop-name" className="mb-1.5 block text-xs font-medium text-ink-600">{SHOP_JOIN.fields.name}</label>
          <input id="shop-name" name="name" required value={form.name} onChange={update("name")} className={inputCls} autoComplete="name" />
        </div>
        <div>
          <label htmlFor="shop-email" className="mb-1.5 block text-xs font-medium text-ink-600">{SHOP_JOIN.fields.email}</label>
          <input id="shop-email" name="email" type="email" required value={form.email} onChange={update("email")} className={inputCls} autoComplete="email" />
        </div>
      </div>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="shop-phone" className="mb-1.5 block text-xs font-medium text-ink-600">{SHOP_JOIN.fields.phone}</label>
          <input id="shop-phone" name="phone" type="tel" value={form.phone} onChange={update("phone")} className={inputCls} autoComplete="tel" />
        </div>
        <div>
          <label htmlFor="shop-location" className="mb-1.5 block text-xs font-medium text-ink-600">{SHOP_JOIN.fields.location}</label>
          <input id="shop-location" name="location" value={form.location} onChange={update("location")} className={inputCls} placeholder="e.g. Charleston, SC" />
        </div>
      </div>
      <div className="mt-4">
        <label htmlFor="shop-bays" className="mb-1.5 block text-xs font-medium text-ink-600">{SHOP_JOIN.fields.bays}</label>
        <input id="shop-bays" name="bays" inputMode="numeric" value={form.bays} onChange={update("bays")} className={inputCls} placeholder="e.g. 6" />
      </div>
      <div className="mt-4">
        <label htmlFor="shop-message" className="mb-1.5 block text-xs font-medium text-ink-600">{SHOP_JOIN.fields.message}</label>
        <textarea id="shop-message" name="message" rows={3} value={form.message} onChange={update("message")} className={inputCls} />
      </div>
      <button type="submit" className="btn-primary mt-6 w-full">{SHOP_JOIN.fields.submit}</button>
    </form>
  );
}
