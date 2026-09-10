"use client";

import Link from "next/link";
import { useState } from "react";
import SiteShell from "../site-shell";
import { createClient } from "@/lib/supabase/client";

export default function RegisterPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [organization, setOrganization] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [dietaryRequirements, setDietaryRequirements] = useState("");
  const [accessibilityRequirements, setAccessibilityRequirements] =
    useState("");
  const [consent, setConsent] = useState(false);
  const [error, setError] = useState("");
  const [savedId, setSavedId] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (
      !fullName.trim() ||
      !email.trim() ||
      !organization.trim() ||
      !consent
    ) {
      setError(
        "Please complete your name, email, organisation, and consent before registering."
      );
      return;
    }

    setError("");
    setSavedId("");
    setLoading(true);

    const supabase = createClient();

    const attendeeId = crypto.randomUUID();

    const { error: supabaseError } = await supabase
      .from("attendees")
      .insert({
        id: attendeeId,
        full_name: fullName.trim(),
        email: email.trim(),
        phone: phone.trim() || null,
        organisation: organization.trim(),
        job_title: jobTitle.trim() || null,
        dietary_requirements: dietaryRequirements.trim() || null,
        accessibility_requirements:
          accessibilityRequirements.trim() || null,
        consent: consent,
      });

    if (supabaseError) {
      console.error("Registration error:", supabaseError);

      setError(supabaseError.message);

      setLoading(false);
      return;
    }

    setSavedId(attendeeId);
    setLoading(false);
  }

  return (
    <SiteShell>
      <main className="min-h-screen py-2">
        <div className="mx-auto w-full max-w-[576px] space-y-6">

          {/* Hero */}
          <section className="rounded-3xl bg-gradient-to-r from-[#172B4D] to-[#203D66] p-8 text-white">
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.05em] text-slate-300">
              OAK Partner Convening 2026
            </p>

            <h1 className="text-[30px] font-extrabold leading-[36px]">
              Register for the Event
            </h1>

            <p className="mt-3 max-w-[450px] text-[14px] leading-5 text-slate-300">
              Complete the form below to register for the OAK Partner Convening
              2026.
            </p>
          </section>

          {/* Form */}
          <section className="rounded-3xl border border-[#F1F5F9] bg-white p-8 shadow-sm">
            <div className="mb-6">
              <h2 className="text-[18px] font-bold leading-7 text-[#162E53]">
                Registration Details
              </h2>

              <p className="mt-1 text-[11px] text-slate-400">
                Please provide your details below.
              </p>
            </div>

            <form
              className="space-y-5"
              onSubmit={handleSubmit}
              noValidate
            >
              {/* Full Name */}
              <div>
                <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.05em] text-slate-500">
                  Full Name
                </label>

                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Enter your full name"
                  required
                  className="h-12 w-full rounded-xl border border-transparent bg-[#EEF2F6] px-4 py-3 text-[14px] text-[#334155] outline-none transition focus:border-[#162E53]"
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.05em] text-slate-500">
                  Email Address
                </label>

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  className="h-12 w-full rounded-xl border border-transparent bg-[#EEF2F6] px-4 py-3 text-[14px] text-[#334155] outline-none transition focus:border-[#162E53]"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.05em] text-slate-500">
                  Phone Number
                </label>

                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter your phone number"
                  className="h-12 w-full rounded-xl border border-transparent bg-[#EEF2F6] px-4 py-3 text-[14px] text-[#334155] outline-none transition focus:border-[#162E53]"
                />
              </div>

              {/* Organisation */}
              <div>
                <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.05em] text-slate-500">
                  Organisation
                </label>

                <input
                  type="text"
                  value={organization}
                  onChange={(e) => setOrganization(e.target.value)}
                  placeholder="Enter your organisation"
                  required
                  className="h-12 w-full rounded-xl border border-transparent bg-[#EEF2F6] px-4 py-3 text-[14px] text-[#334155] outline-none transition focus:border-[#162E53]"
                />
              </div>

              {/* Job Title */}
              <div>
                <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.05em] text-slate-500">
                  Job Title
                </label>

                <input
                  type="text"
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                  placeholder="Enter your job title"
                  className="h-12 w-full rounded-xl border border-transparent bg-[#EEF2F6] px-4 py-3 text-[14px] text-[#334155] outline-none transition focus:border-[#162E53]"
                />
              </div>

              {/* Requirements */}
              <div className="space-y-4 rounded-2xl bg-[#EEF2F6] p-5">

                {/* Dietary Requirements */}
                <div>
                  <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.05em] text-slate-500">
                    Dietary Requirements
                  </label>

                  <input
                    type="text"
                    value={dietaryRequirements}
                    onChange={(e) =>
                      setDietaryRequirements(e.target.value)
                    }
                    placeholder="e.g. Vegetarian, None"
                    className="h-12 w-full rounded-xl bg-white px-4 py-3 text-[14px] text-[#334155] outline-none focus:ring-1 focus:ring-[#162E53]"
                  />
                </div>

                {/* Accessibility Requirements */}
                <div>
                  <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.05em] text-slate-500">
                    Accessibility Requirements
                  </label>

                  <input
                    type="text"
                    value={accessibilityRequirements}
                    onChange={(e) =>
                      setAccessibilityRequirements(e.target.value)
                    }
                    placeholder="Enter any accessibility requirements"
                    className="h-12 w-full rounded-xl bg-white px-4 py-3 text-[14px] text-[#334155] outline-none focus:ring-1 focus:ring-[#162E53]"
                  />
                </div>

              </div>

              {/* Consent */}
              <label className="flex cursor-pointer items-start gap-3">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  required
                  className="mt-1 h-4 w-4 accent-[#162E53]"
                />

                <span className="text-[11px] leading-5 text-slate-500">
                  I consent to OAK Foundation collecting and using my personal
                  data for event registration, access management,
                  accommodation planning, and event administration. My
                  personal data is visible only to authorised event
                  administrators.
                </span>
              </label>

              {/* Error */}
              {error && (
                <p
                  role="alert"
                  className="rounded-xl bg-rose-50 px-4 py-3 text-[11px] text-rose-700"
                >
                  {error}
                </p>
              )}

              {/* Success */}
              {savedId && (
                <div className="rounded-xl bg-emerald-50 px-4 py-3 text-[11px] text-emerald-800">
                  Registration saved. Your digital pass is ready below.
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="h-12 w-full rounded-xl bg-[#162E53] px-4 py-3 text-[14px] font-bold text-white transition hover:bg-[#203D66] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Saving Registration..." : "Save Registration"}
              </button>

              {/* View Pass */}
              {savedId && (
                <Link
                  href={`/pass/${savedId}`}
                  className="block text-center text-[11px] font-semibold text-[#162E55] underline"
                >
                  View attendee pass
                </Link>
              )}
            </form>
          </section>

          <p className="text-center text-[11px] text-slate-400">
            OAK Partner Convening 2026
          </p>

        </div>
      </main>
    </SiteShell>
  );
}