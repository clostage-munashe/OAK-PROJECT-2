"use client";

import { useState } from "react";
import { ScanLine } from "lucide-react";

interface SimAttendee {
  name: string;
  initials: string;
  code: string;
  role: "Partner" | "OAK Staff" | "Coordination Team";
}

const simAttendees: SimAttendee[] = [
  { name: "Maria Schmidt", initials: "MS", code: "OAK-2026-7842-XKPH", role: "Partner" },
  { name: "James Odhiambo", initials: "JO", code: "OAK-2026-1193-JWQA", role: "OAK Staff" },
  { name: "Awa Diallo", initials: "AD", code: "OAK-2026-3310-ADGE", role: "Coordination Team" },
  { name: "Fatima Z. Benali", initials: "FZB", code: "OAK-2026-5592-FWBN", role: "Partner" },
];

const roleStyles: Record<SimAttendee["role"], string> = {
  Partner: "bg-indigo-50 text-indigo-600",
  "OAK Staff": "bg-emerald-50 text-emerald-600",
  "Coordination Team": "bg-orange-50 text-orange-600",
};

const roleDot: Record<SimAttendee["role"], string> = {
  Partner: "bg-indigo-500",
  "OAK Staff": "bg-emerald-500",
  "Coordination Team": "bg-orange-500",
};

interface CheckInScannerProps {
  onScan: (attendee: SimAttendee) => void;
  onManualCheck: (code: string) => void;
}

export default function CheckInScanner({ onScan, onManualCheck }: CheckInScannerProps) {
  const [manualCode, setManualCode] = useState("");

  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-bold text-slate-900">Event Check-In</h1>
      <p className="mb-6 mt-1 text-sm text-slate-500">
        Scan an attendee QR code to check them in
      </p>

      {/* Camera viewfinder */}
      <div className="mb-6 overflow-hidden rounded-2xl bg-slate-950">
        <div className="relative flex h-96 items-center justify-center">
          <div className="relative h-48 w-48">
            <span className="absolute left-0 top-0 h-8 w-8 rounded-tl-lg border-l-2 border-t-2 border-slate-500" />
            <span className="absolute right-0 top-0 h-8 w-8 rounded-tr-lg border-r-2 border-t-2 border-slate-500" />
            <span className="absolute bottom-0 left-0 h-8 w-8 rounded-bl-lg border-b-2 border-l-2 border-slate-500" />
            <span className="absolute bottom-0 right-0 h-8 w-8 rounded-br-lg border-b-2 border-r-2 border-slate-500" />
          </div>
          <p className="absolute bottom-6 text-xs text-slate-400">
            Position QR code within the frame
          </p>
        </div>
        <div className="flex items-center gap-2 border-t border-slate-800 px-5 py-3">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-800">
            <ScanLine size={12} className="text-slate-400" />
          </span>
          <p className="text-xs text-slate-400">
            Hold camera steady · Auto-scans in 1–2 seconds
          </p>
        </div>
      </div>

      {/* Simulate scan list */}
      <div className="mb-6 rounded-2xl bg-white p-6 shadow-card">
        <p className="mb-4 text-xs font-medium tracking-wide text-slate-400">
          SIMULATE QR SCAN
        </p>
        <div className="flex flex-col gap-3">
          {simAttendees.map((attendee) => (
            <button
              key={attendee.code}
              onClick={() => onScan(attendee)}
              className="flex items-center justify-between rounded-xl border border-slate-100 px-4 py-3 text-left transition-colors hover:bg-slate-50"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy-900 text-xs font-bold text-white">
                  {attendee.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-800">{attendee.name}</p>
                  <p className="text-xs text-slate-400">{attendee.code}</p>
                </div>
              </div>
              <span
                className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${roleStyles[attendee.role]}`}
              >
                <span className={`h-1.5 w-1.5 rounded-full ${roleDot[attendee.role]}`} />
                {attendee.role}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Manual entry */}
      <div className="rounded-2xl bg-white p-6 shadow-card">
        <p className="mb-3 text-xs font-medium tracking-wide text-slate-400">
          MANUAL CODE ENTRY
        </p>
        <div className="flex gap-3">
          <input
            value={manualCode}
            onChange={(e) => setManualCode(e.target.value)}
            placeholder="OAK-2026-XXXX-XXXX"
            className="flex-1 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 placeholder:text-slate-400 focus:border-navy-900 focus:outline-none focus:ring-2 focus:ring-navy-900/20"
          />
          <button
            onClick={() => onManualCheck(manualCode)}
            className="rounded-xl bg-navy-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-800"
          >
            Check
          </button>
        </div>
      </div>
    </div>
  );
}