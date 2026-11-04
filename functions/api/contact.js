/**
 * Cloudflare Pages Function: POST /api/contact
 *
 * Emails each "Schedule a Call" request via Resend.
 * Environment variables (Cloudflare Pages → Settings → Variables and Secrets):
 *   RESEND_API_KEY  (secret, required)  — shared Resend key used across client sites
 *   LEAD_TO         (optional) — recipient(s), comma-separated. Default: stevenJohn@cantandoDigital.com
 *   LEAD_FROM       (optional) — verified Resend sender. Default: Pool Builder Web Design <leads@cantandodigital.com>
 *   CRM_ENDPOINT    (optional) — if set, the lead JSON is also POSTed here (e.g. the cantandoDigital CRM).
 */
const json = (body, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { "content-type": "application/json" } });

const esc = (s) =>
  String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

export async function onRequestPost({ request, env }) {
  let d;
  try {
    d = await request.json();
  } catch {
    return json({ ok: false, error: "Invalid JSON" }, 400);
  }

  // Honeypot: pretend success for bots.
  if (d.company_website_hp) return json({ ok: true });

  const name = String(d.full_name || "").trim().slice(0, 120);
  const email = String(d.email || "").trim().slice(0, 200);
  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json({ ok: false, error: "Name and a valid email are required" }, 422);
  }

  const lead = {
    full_name: name,
    email,
    company: String(d.company || "").slice(0, 200),
    phone: String(d.phone || "").slice(0, 40),
    website: String(d.website || "").slice(0, 300),
    best_time: String(d.best_time || "").slice(0, 60),
    services: Array.isArray(d.services) ? d.services.slice(0, 10).map((s) => String(s).slice(0, 60)) : [],
    message: String(d.message || "").slice(0, 4000),
    source_site: "poolbuilderwebdesign.com",
    source_page: String(d.source_page || "/contact").slice(0, 200),
    submitted_at: new Date().toISOString(),
  };

  if (!env.RESEND_API_KEY) return json({ ok: false, error: "Email not configured" }, 500);

  const rows = [
    ["Name", lead.full_name],
    ["Company", lead.company],
    ["Email", lead.email],
    ["Phone", lead.phone],
    ["Website", lead.website],
    ["Best time", lead.best_time],
    ["Interested in", lead.services.join(", ")],
    ["Message", lead.message],
    ["Page", lead.source_page],
  ]
    .filter(([, v]) => v)
    .map(([k, v]) => `<tr><td style="padding:6px 12px 6px 0;color:#666;vertical-align:top">${k}</td><td style="padding:6px 0">${esc(v).replace(/\n/g, "<br>")}</td></tr>`)
    .join("");

  const to = (env.LEAD_TO || "stevenJohn@cantandoDigital.com").split(",").map((s) => s.trim()).filter(Boolean);
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { authorization: `Bearer ${env.RESEND_API_KEY}`, "content-type": "application/json" },
    body: JSON.stringify({
      from: env.LEAD_FROM || "Pool Builder Web Design <leads@cantandodigital.com>",
      to,
      reply_to: lead.email,
      subject: `New call request: ${lead.company || lead.full_name} (poolbuilderwebdesign.com)`,
      html: `<div style="font-family:system-ui,sans-serif;font-size:15px"><h2 style="margin:0 0 12px">New Schedule a Call request</h2><table>${rows}</table></div>`,
    }),
  });

  if (env.CRM_ENDPOINT) {
    // Best effort; never blocks the visitor.
    try {
      await fetch(env.CRM_ENDPOINT, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(lead),
      });
    } catch {}
  }

  if (!res.ok) return json({ ok: false, error: "Send failed" }, 502);
  return json({ ok: true });
}

