"use client";

import Link from "next/link";
import { useState } from "react";
import SiteShell from "../site-shell";
import { createClient } from "@/lib/supabase/client";
import { UsersRound, CalendarDays, Layers3 } from "lucide-react";

export default function RegisterPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [organisation, setOrganisation] = useState("");
  const [subPartner, setSubPartner] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dietary, setDietary] = useState("");
  const [accessibility, setAccessibility] = useState("");
  const [travel, setTravel] = useState("");
  const [consent, setConsent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [savedId, setSavedId] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!firstName.trim() || !lastName.trim() || !email.trim() || !organisation.trim() || !role || !consent) {
      setError("Please complete all required fields and accept the privacy policy.");
      return;
    }
    setError("");
    setSavedId("");
    setLoading(true);
    try {
      const supabase = createClient();
      const attendeeId = crypto.randomUUID();
      const { error: supabaseError } = await supabase.from("attendees").insert({
        id: attendeeId,
        full_name: `${firstName.trim()} ${lastName.trim()}`,
        email: email.trim(),
        phone: phone.trim() || null,
        organisation: organisation.trim(),
        job_title: role || null,
        dietary_requirements: dietary.trim() || null,
        accessibility_requirements: accessibility.trim() || null,
        consent,
      });
      if (supabaseError) throw new Error(supabaseError.message);
      setSavedId(attendeeId);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Registration could not be saved. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const inputClass =
    "h-9 w-full rounded-[10px] bg-[#eef2f6] px-3 text-[12px] text-[#334155] outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-[#162e53]/20 transition";

  return (
    <SiteShell>
      <div className="space-y-3 py-3">

        {/* ── Hero ── */}
        <div className="rounded-[20px] bg-gradient-to-br from-[#172b4d] to-[#1c3d6e] px-6 py-6 text-white shadow-[0_4px_16px_rgba(20,43,77,0.18)]">
          <h1 className="text-[22px] font-extrabold leading-[1.15] tracking-tight">
            Partner
            <br />
            Convening 2026
          </h1>
          <p className="mt-2 text-[12px] text-slate-300">Geneva · 9–11 March 2026</p>
        </div>

        {/* ── Stats ── */}
        <div className="grid grid-cols-3 gap-2.5">
          {[
            { value: "110+", label: "Attendees", Icon: UsersRound },
            { value: "24",   label: "Sessions",  Icon: CalendarDays },
            { value: "38",   label: "Partners",  Icon: Layers3 },
          ].map(({ value, label, Icon }) => (
            <div
              key={label}
              className="flex flex-col gap-1.5 rounded-[14px] bg-white px-3 py-3 shadow-[0_2px_8px_rgba(20,43,77,0.07)]"
            >
              <Icon className="h-4 w-4 text-slate-400" strokeWidth={1.5} />
              <div>
                <div className="text-[16px] font-extrabold leading-none text-[#142b4d]">{value}</div>
                <div className="mt-0.5 text-[11px] text-slate-400">{label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Registration Form ── */}
        <div className="rounded-[20px] bg-white px-5 py-5 shadow-[0_2px_8px_rgba(20,43,77,0.07)]">
          <h2 className="mb-4 text-[16px] font-bold text-[#142b4d]">Registration Form</h2>

          <form className="space-y-3.5" onSubmit={handleSubmit} noValidate>

            {/* First / Last Name */}
            <div className="grid grid-cols-2 gap-2.5">
              <div>
                <label className="mb-1 block text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Maria"
                  className={inputClass}
                />
              </div>
              <div>
                <label className="mb-1 block text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Schmidt"
                  className={inputClass}
                />
              </div>
            </div>

            {/* Organisation */}
            <div>
              <label className="mb-1 block text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                Organisation <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={organisation}
                onChange={(e) => setOrganisation(e.target.value)}
                placeholder="Your organisation name"
                className={inputClass}
              />
            </div>

            {/* Sub-Partner */}
            <div>
              <label className="mb-1 block text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                Sub-Partner / Programme Area
              </label>
              <input
                type="text"
                value={subPartner}
                onChange={(e) => setSubPartner(e.target.value)}
                placeholder="Optional"
                className={inputClass}
              />
            </div>

            {/* Role / Capacity */}
            <div>
              <label className="mb-1 block text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                Role / Capacity <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="h-9 w-full appearance-none rounded-[10px] bg-[#eef2f6] px-3 text-[12px] text-[#334155] outline-none focus:ring-2 focus:ring-[#162e53]/20 transition"
                >
                  <option value="" disabled>Select your role</option>
                  <option value="partner">Partner</option>
                  <option value="staff">OAK Staff</option>
                  <option value="sub-partner">Sub-Partner</option>
                  <option value="coordination">Coordination Team</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-slate-400">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="mb-1 block text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@organisation.org"
                className={inputClass}
              />
            </div>

            {/* Phone */}
            <div>
              <label className="mb-1 block text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                Phone Number
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+41 xx xxx xx xx"
                className={inputClass}
              />
            </div>

            {/* Requirements box */}
            <div className="rounded-[12px] bg-[#eef2f6] px-3.5 py-3 space-y-3">
              <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">Requirements</p>

              {/* Dietary */}
              <div>
                <p className="mb-1 text-[9px] font-semibold uppercase tracking-wider text-slate-400">
                  Dietary Requirements
                </p>
                <input
                  type="text"
                  value={dietary}
                  onChange={(e) => setDietary(e.target.value)}
                  placeholder="e.g. Vegetarian, Halal, Gluten-free"
                  className="w-full bg-transparent text-[12px] text-slate-500 outline-none placeholder:text-slate-400"
                />
              </div>

              {/* Accessibility */}
              <div>
                <p className="mb-1 text-[9px] font-semibold uppercase tracking-wider text-slate-400">
                  Accessibility Requirements
                </p>
                <input
                  type="text"
                  value={accessibility}
                  onChange={(e) => setAccessibility(e.target.value)}
                  placeholder="e.g. Wheelchair access, hearing loop"
                  className="w-full bg-transparent text-[12px] text-slate-500 outline-none placeholder:text-slate-400"
                />
              </div>

              {/* Travel */}
              <div>
                <p className="mb-1 text-[9px] font-semibold uppercase tracking-wider text-slate-400">
                  Travel &amp; Accommodation
                </p>
                <input
                  type="text"
                  value={travel}
                  onChange={(e) => setTravel(e.target.value)}
                  placeholder="e.g. Flight from London, hotel needed"
                  className="w-full bg-transparent text-[12px] text-slate-500 outline-none placeholder:text-slate-400"
                />
              </div>
            </div>

            {/* Consent */}
            <label className="flex cursor-pointer items-start gap-2.5">
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-0.5 h-3.5 w-3.5 rounded accent-[#162e53]"
              />
              <span className="text-[11px] leading-[1.55] text-slate-500">
                I agree to OAK Foundation&apos;s{" "}
                <span className="underline cursor-pointer">privacy policy</span> and consent
                to my registration data being used for event coordination.
              </span>
            </label>

            {/* Error */}
            {error && (
              <p role="alert" className="rounded-xl bg-rose-50 px-3 py-2 text-[11px] text-rose-700">
                {error}
              </p>
            )}

            {/* Success */}
            {savedId && (
              <div className="rounded-xl bg-emerald-50 px-3 py-2 text-[11px] text-emerald-700">
                Registration saved!{" "}
                <Link href={`/pass/${savedId}`} className="font-semibold underline">
                  View your pass
                </Link>
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="h-11 w-full rounded-[12px] bg-[#162e53] text-[13px] font-semibold text-white shadow-sm transition hover:bg-[#1e3d6e] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Registering…" : "Register"}
            </button>

          </form>
        </div>

        {/* ── Footer ── */}
        <p className="text-center text-[10px] text-slate-400">
          Your data is secured and handled by OAK Foundation in accordance with GDPR.
        </p>

      </div>
    </SiteShell>
  );
}