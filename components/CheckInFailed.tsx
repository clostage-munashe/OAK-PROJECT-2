"use client";

import { XCircle, AlertTriangle, RotateCw, Phone } from "lucide-react";

interface CheckInFailedProps {
  reasons: string[];
  onRetry: () => void;
  onContactTeam: () => void;
}

export default function CheckInFailed({
  reasons,
  onRetry,
  onContactTeam,
}: CheckInFailedProps) {
  return (
    <div className="mx-auto max-w-2xl">
      {/* Error banner */}
      <div className="relative mb-6 overflow-hidden rounded-2xl bg-gradient-to-r from-red-500 to-red-600 p-6">
        <div className="absolute -right-6 -top-10 h-40 w-40 rounded-full bg-white/10" />
        <div className="relative flex items-center gap-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/20">
            <XCircle className="text-white" size={24} />
          </div>
          <div>
            <p className="text-xs font-semibold tracking-wide text-red-50">
              CHECK-IN FAILED
            </p>
            <h1 className="text-lg font-bold text-white">QR Not Recognised</h1>
            <p className="text-sm text-red-50">Code is invalid or unregistered</p>
          </div>
        </div>
      </div>

      {/* Reasons card */}
      <div className="mb-4 rounded-2xl bg-white p-6 shadow-card">
        <p className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-800">
          <AlertTriangle size={16} className="text-red-500" />
          Possible reasons
        </p>
        <ul className="space-y-2.5">
          {reasons.map((reason) => (
            <li key={reason} className="flex items-center gap-2.5 text-sm text-slate-500">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />
              {reason}
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={onRetry}
        className="mb-3 flex w-full items-center justify-center gap-2 rounded-xl bg-navy-900 py-4 text-sm font-semibold text-white transition-colors hover:bg-navy-800"
      >
        <RotateCw size={16} />
        Try Again
      </button>

      <button
        onClick={onContactTeam}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-white py-4 text-sm font-semibold text-slate-800 shadow-card transition-colors hover:bg-slate-50"
      >
        <Phone size={16} />
        Contact Coordination Team
      </button>
    </div>
  );
}