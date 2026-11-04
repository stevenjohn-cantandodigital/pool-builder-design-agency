"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import { Arrow } from "./Icons";

const services = ["New website", "Website redesign", "Pool builder SEO", "Google Business Profile", "Google / Meta Ads", "Not sure yet"];
const times = ["Morning (8–11am ET)", "Midday (11am–2pm ET)", "Afternoon (2–5pm ET)", "Anytime"];

type Status = { kind: "idle" | "sending" | "ok" | "err"; msg?: string };

export default function ContactForm() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      full_name: String(fd.get("full_name") || "").trim(),
      company: String(fd.get("company") || "").trim(),
      email: String(fd.get("email") || "").trim(),
      phone: String(fd.get("phone") || "").trim(),
      website: String(fd.get("website") || "").trim(),
      best_time: String(fd.get("best_time") || ""),
      services: fd.getAll("services").map(String),
      message: String(fd.get("message") || "").trim(),
      company_website_hp: String(fd.get("company_website_hp") || ""),
      source_page: typeof window !== "undefined" ? window.location.pathname : "/contact",
    };
    if (!payload.full_name || !payload.email) {
      setStatus({ kind: "err", msg: "Please add your name and email so we can reach you." });
      return;
    }
    setStatus({ kind: "sending" });
    const ctrl = new AbortController();
    const t = setTimeout(() => ctrl.abort(), 15000);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
        signal: ctrl.signal,
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus({
        kind: "ok",
        msg: "Thanks! Your request is in. We'll reach out within one business day to set up your call.",
      });
    } catch {
      setStatus({ kind: "err" });
    } finally {
      clearTimeout(t);
    }
  }

  return (
    <form className="form-grid" onSubmit={onSubmit} noValidate={false} aria-describedby="form-status">
      <div className="field">
        <label htmlFor="full_name">Full name</label>
        <input id="full_name" name="full_name" autoComplete="name" required placeholder="Jane Smith" />
      </div>
      <div className="field">
        <label htmlFor="company">
          Company name <span className="opt">(optional)</span>
        </label>
        <input id="company" name="company" autoComplete="organization" placeholder="Blue Lagoon Pools LLC" />
      </div>
      <div className="field">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" autoComplete="email" required placeholder="you@company.com" />
      </div>
      <div className="field">
        <label htmlFor="phone">
          Phone <span className="opt">(optional)</span>
        </label>
        <input id="phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" placeholder="(555) 555-5555" />
      </div>
      <div className="field">
        <label htmlFor="website">
          Current website <span className="opt">(optional)</span>
        </label>
        <input id="website" name="website" type="text" inputMode="url" autoComplete="url" placeholder="yourpoolcompany.com" />
      </div>
      <div className="field">
        <label htmlFor="best_time">Best time for a call</label>
        <select id="best_time" name="best_time" defaultValue="Anytime">
          {times.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </div>
      <fieldset className="field full">
        <legend>
          What can we help with? <span className="opt">(pick any)</span>
        </legend>
        <div className="chips" style={{ marginTop: 8 }}>
          {services.map((s) => (
            <label key={s}>
              <input type="checkbox" name="services" value={s} />
              <span>{s}</span>
            </label>
          ))}
        </div>
      </fieldset>
      <div className="field full">
        <label htmlFor="message">
          Anything we should know? <span className="opt">(optional)</span>
        </label>
        <textarea id="message" name="message" placeholder="Where you build, the work you want more of (custom gunite, fiberglass, renovations…), what's not working with your current site…" />
      </div>
      <div className="hp" aria-hidden="true">
        <label htmlFor="company_website_hp">Leave this empty</label>
        <input id="company_website_hp" name="company_website_hp" tabIndex={-1} autoComplete="off" />
      </div>

      <div id="form-status" aria-live="polite" style={{ gridColumn: "1 / -1" }}>
        {status.kind === "ok" && <p className="form-status ok">{status.msg}</p>}
        {status.kind === "err" && (
          <p className="form-status err">
            {status.msg ?? (
              <>
                Something went wrong sending your request. Please call or text{" "}
                <a href={site.phoneHref}>{site.phone}</a> or email <a href={`mailto:${site.email}`}>{site.email}</a>.
              </>
            )}
          </p>
        )}
      </div>

      <div style={{ gridColumn: "1 / -1" }}>
        <button type="submit" className="btn btn-block" disabled={status.kind === "sending"}>
          {status.kind === "sending" ? "Sending…" : (
            <>
              Schedule My Call <Arrow />
            </>
          )}
        </button>
      </div>
      <p className="form-fine">We&rsquo;ll only use your details to contact you about your request.</p>
    </form>
  );
}
