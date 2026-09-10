"use client";
import { deprecated_requestOptimisticRouteCacheEntry } from "next/dist/client/components/segment-cache/cache";
import { BARREL_OPTIMIZATION_PREFIX } from "next/dist/shared/lib/constants";
import {useState} from "react";

export default function Home() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    organization: "",
    role: "",
    dietary: "",
    accsessibility: "",
    travelNeeds: "",
    consent: false,
  });

return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center -6">
      <form className="w-full max-w-lg bg-white p-8 rounded-xl shadow">
        <h1 className="text-3xl font-bold mb-6">Registration</h1>
       
       <input
       className="w-full border p-3 rounded mb-4"
       placeholder="Full Name"
      />

      <input
       className="w-full border p-3 rounded mb-4"
       placeholder="Email"
      />

      <input
       className="w-full border p-3 rounded mb-4"
       placeholder="Organization"
      />

      <select className="w-full border p-3 rounded mb-4">
        <option value="">Select Role</option>
        <option value="developer">Developer</option>
        <option value="designer">Designer</option>
        <option value="manager">Manager</option>
        <option value="student">Student</option>
      </select>
      
      <input
       className="w-full border p-3 rounded mb-4"
       placeholder="Dietary Requirements"
      />

       <input
       className="w-full border p-3 rounded mb-4"
       placeholder="Travel Needs"
      />

      <label className="w-full p-3 rounded mb-4">
        <input
          type="checkbox"
        />

        <span>
        I consent to the collection and processing of my personal data.
        </span>

      </label>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-600 transition-colors"
      >
        Register
      </button>

      </form>
    </main>
  );
}                                          