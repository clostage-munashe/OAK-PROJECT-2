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
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = event.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (event.target as HTMLInputElement).checked : value,
    }));

    // Clear the field's error as soon as the person fixes it
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const next: Partial<Record<keyof FormState, string>> = {};

    if (!form.name.trim()) next.name = "Enter your full name";
    if (!form.email.trim()) {
      next.email = "Enter your email";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      next.email = "Enter a valid email address";
    }
    if (!form.organization.trim()) next.organization = "Enter your organization";
    if (!form.role) next.role = "Select a role";
    if (!form.consent) next.consent = "Consent is required to register";

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) return;

    // TODO: replace with your API call, e.g.
    // await fetch("/api/register", { method: "POST", body: JSON.stringify(form) });
    console.log("Submitting registration:", form);
    setSubmitted(true);
  };

  const inputClass = (field: keyof FormState) =>
    `w-full rounded-xl border px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-navy-900/20 focus:border-navy-900 transition-colors ${
      errors[field] ? "border-red-400" : "border-slate-200"
    }`;

  if (submitted) {
    return (
      <main className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
        <div className="w-full max-w-lg rounded-2xl bg-white p-10 text-center shadow-card">
          <h1 className="mb-2 text-2xl font-bold text-slate-900">You're registered</h1>
          <p className="mb-6 text-sm text-slate-500">
            A confirmation has been sent to {form.email}.
          </p>
          <button
            onClick={() => {
              setForm(initialForm);
              setSubmitted(false);
            }}
            className="rounded-xl bg-navy-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-navy-800 transition-colors"
          >
            Register another attendee
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
      <form
        className="w-full max-w-lg rounded-2xl bg-white p-8 shadow-card"
        onSubmit={handleSubmit}
        noValidate
      >
        <h1 className="mb-1 text-2xl font-bold text-slate-900">Registration</h1>
        <p className="mb-6 text-sm text-slate-500">
          Fields marked with * are required.
        </p>

        <div className="mb-4">
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-slate-700">
            Full name *
          </label>
          <input
            id="name"
            className={inputClass("name")}
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Maria Schmidt"
          />
          {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-700">
            Email *
          </label>
          <input
            id="email"
            className={inputClass("email")}
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="maria@example.org"
          />
          {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="organization" className="mb-1.5 block text-sm font-medium text-slate-700">
            Organization *
          </label>
          <input
            id="organization"
            className={inputClass("organization")}
            name="organization"
            value={form.organization}
            onChange={handleChange}
            placeholder="Open Society Foundations"
          />
          {errors.organization && (
            <p className="mt-1 text-xs text-red-500">{errors.organization}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="role" className="mb-1.5 block text-sm font-medium text-slate-700">
            Role *
          </label>
          <select
            id="role"
            className={inputClass("role")}
            name="role"
            value={form.role}
            onChange={handleChange}
          >
            <option value="">Select role</option>
            <option value="developer">Developer</option>
            <option value="designer">Designer</option>
            <option value="manager">Manager</option>
            <option value="student">Student</option>
          </select>
          {errors.role && <p className="mt-1 text-xs text-red-500">{errors.role}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="dietary" className="mb-1.5 block text-sm font-medium text-slate-700">
            Dietary requirements
          </label>
          <input
            id="dietary"
            className={inputClass("dietary")}
            name="dietary"
            value={form.dietary}
            onChange={handleChange}
            placeholder="e.g. vegetarian, nut allergy"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="accessibility" className="mb-1.5 block text-sm font-medium text-slate-700">
            Accessibility needs
          </label>
          <input
            id="accessibility"
            className={inputClass("accessibility")}
            name="accessibility"
            value={form.accessibility}
            onChange={handleChange}
            placeholder="e.g. wheelchair access, sign language interpreter"
          />
        </div>

        <div className="mb-5">
          <label htmlFor="travelNeeds" className="mb-1.5 block text-sm font-medium text-slate-700">
            Travel needs
          </label>
          <input
            id="travelNeeds"
            className={inputClass("travelNeeds")}
            name="travelNeeds"
            value={form.travelNeeds}
            onChange={handleChange}
            placeholder="e.g. airport pickup, visa letter"
          />
        </div>

        <label className="mb-5 flex items-start gap-3 rounded-xl bg-slate-50 p-3">
          <input
            className="mt-0.5 h-4 w-4 rounded border-slate-300 text-navy-900 focus:ring-navy-900/30"
            type="checkbox"
            name="consent"
            checked={form.consent}
            onChange={handleChange}
          />
          <span className="text-sm text-slate-600">
            I consent to the collection and processing of my personal data. *
          </span>
        </label>
        {errors.consent && <p className="-mt-3 mb-4 text-xs text-red-500">{errors.consent}</p>}

        <button
          type="submit"
          className="w-full rounded-xl bg-navy-900 p-3 text-sm font-semibold text-white transition-colors hover:bg-navy-800"
        >
          Register
        </button>
      </form>
    </main>
  );
}