"use client";

import { useState } from "react";

interface FormState {
  name: string;
  email: string;
  organization: string;
  role: string;
  dietary: string;
  accessibility: string;
  travelNeeds: string;
  consent: boolean;
}

const initialForm: FormState = {
  name: "",
  email: "",
  organization: "",
  role: "",
  dietary: "",
  accessibility: "",
  travelNeeds: "",
  consent: false,
};

export default function Home() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value, type } = event.target;
    setForm((previous) => ({
      ...previous,
      [name]: type === "checkbox" ? (event.target as HTMLInputElement).checked : value,
    }));
    setErrors((previous) => ({ ...previous, [name]: undefined }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) nextErrors.name = "Enter your full name";
    if (!form.email.trim()) nextErrors.email = "Enter your email";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) nextErrors.email = "Enter a valid email address";
    if (!form.organization.trim()) nextErrors.organization = "Enter your organization";
    if (!form.role) nextErrors.role = "Select a role";
    if (!form.consent) nextErrors.consent = "Consent is required to register";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) setSubmitted(true);
  }

  const inputClass = (field: keyof FormState) =>
    `mt-1 w-full rounded-xl border px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-navy-900/20 ${errors[field] ? "border-red-400" : "border-slate-200"}`;

  if (submitted) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-100 p-6">
        <div className="w-full max-w-lg rounded-2xl bg-white p-10 text-center shadow-card">
          <h1 className="mb-2 text-2xl font-bold text-slate-900">You&apos;re registered</h1>
          <p className="mb-6 text-sm text-slate-500">A confirmation has been sent to {form.email}.</p>
          <button onClick={() => { setForm(initialForm); setSubmitted(false); }} className="rounded-xl bg-navy-900 px-5 py-2.5 text-sm font-semibold text-white">Register another attendee</button>
        </div>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 p-6">
      <form className="w-full max-w-lg rounded-2xl bg-white p-8 shadow-card" onSubmit={handleSubmit} noValidate>
        <h1 className="mb-1 text-2xl font-bold text-slate-900">Registration</h1>
        <p className="mb-6 text-sm text-slate-500">Fields marked with * are required.</p>
        <label className="mb-4 block text-sm font-medium text-slate-700">Full name *<input className={inputClass("name")} name="name" value={form.name} onChange={handleChange} /></label>
        {errors.name && <p className="-mt-3 mb-3 text-xs text-red-500">{errors.name}</p>}
        <label className="mb-4 block text-sm font-medium text-slate-700">Email *<input className={inputClass("email")} name="email" type="email" value={form.email} onChange={handleChange} /></label>
        {errors.email && <p className="-mt-3 mb-3 text-xs text-red-500">{errors.email}</p>}
        <label className="mb-4 block text-sm font-medium text-slate-700">Organization *<input className={inputClass("organization")} name="organization" value={form.organization} onChange={handleChange} /></label>
        {errors.organization && <p className="-mt-3 mb-3 text-xs text-red-500">{errors.organization}</p>}
        <label className="mb-4 block text-sm font-medium text-slate-700">Role *<select className={inputClass("role")} name="role" value={form.role} onChange={handleChange}><option value="">Select role</option><option>Partner</option><option>OAK Staff</option><option>Presenter</option></select></label>
        {errors.role && <p className="-mt-3 mb-3 text-xs text-red-500">{errors.role}</p>}
        <label className="mb-4 block text-sm font-medium text-slate-700">Dietary requirements<input className={inputClass("dietary")} name="dietary" value={form.dietary} onChange={handleChange} /></label>
        <label className="mb-4 block text-sm font-medium text-slate-700">Accessibility needs<input className={inputClass("accessibility")} name="accessibility" value={form.accessibility} onChange={handleChange} /></label>
        <label className="mb-5 block text-sm font-medium text-slate-700">Travel needs<input className={inputClass("travelNeeds")} name="travelNeeds" value={form.travelNeeds} onChange={handleChange} /></label>
        <label className="mb-5 flex items-start gap-3 rounded-xl bg-slate-50 p-3"><input className="mt-0.5 h-4 w-4" type="checkbox" name="consent" checked={form.consent} onChange={handleChange} /><span className="text-sm text-slate-600">I consent to the collection and processing of my personal data. *</span></label>
        {errors.consent && <p className="-mt-3 mb-4 text-xs text-red-500">{errors.consent}</p>}
        <button type="submit" className="w-full rounded-xl bg-navy-900 p-3 text-sm font-semibold text-white">Register</button>
      </form>
    </main>
  );
}
