"use client";

import { CheckCircle2, Clock, Users, MapPin } from "lucide-react";

interface CheckInSuccessProps {
  attendee: {
    name: string;
    initials: string;
    organisation: string;
    role: string;
  };
  session: {
    time: string;
    date: string;
    nextSession: string;
    venue: string;
  };
  liveStatus: {
    sessionName: string;
    startTime: string;
    checkedIn: number;
    capacity: number;
    venue: string;
  };
  onScanNext: () => void;
}

export default function CheckInSuccess({
  attendee,
  session,
  liveStatus,
  onScanNext,
}: CheckInSuccessProps) {
  const progress = (liveStatus.checkedIn / liveStatus.capacity) * 100;

  return (
    <div className="mx-auto max-w-2xl">
      {/* Success banner */}
      <div className="relative mb-6 overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 p-6">
        <div className="absolute -right-6 -top-10 h-40 w-40 rounded-full bg-white/10" />
        <div className="relative flex items-center gap-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/20">
            <CheckCircle2 className="text-white" size={24} />
          </div>
          <div>
            <h1 className="text-lg font-bold text-white">
              Checked In Successfully
            </h1>
            <p className="mt-0.5 flex items-center gap-1 text-sm text-emerald-50">
              <Clock size={13} />
              {session.time} · {session.date}
            </p>
          </div>
        </div>
      </div>

      {/* Attendee card */}
      <div className="mb-6 rounded-2xl bg-white p-6 shadow-card">
        <div className="mb-5 flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-navy-900 text-lg font-bold text-white">
            {attendee.initials}
          </div>
          <div>
            <h2 className="text-base font-bold text-slate-900">
              {attendee.name}
            </h2>
            <p className="text-sm text-slate-500">{attendee.organisation}</p>
            <span className="mt-1 inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2.5 py-0.5 text-xs font-medium text-indigo-600">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
              {attendee.role}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 border-t border-slate-100 pt-5">
          <div className="rounded-xl bg-slate-50 p-3">
            <p className="mb-1 flex items-center gap-1 text-xs text-slate-400">
              Next session
            </p>
            <p className="text-sm font-semibold text-slate-800">
              {session.nextSession}
            </p>
          </div>
          <div className="rounded-xl bg-slate-50 p-3">
            <p className="mb-1 flex items-center gap-1 text-xs text-slate-400">
              <MapPin size={12} /> Venue
            </p>
            <p className="text-sm font-semibold text-slate-800">
              {session.venue}
            </p>
          </div>
        </div>
      </div>

      {/* Live status */}
      <div className="mb-6 rounded-2xl bg-white p-6 shadow-card">
        <p className="mb-3 flex items-center gap-1 text-xs font-medium text-slate-400">
          <Users size={13} /> Live event status
        </p>
        <p className="mb-1 flex items-center gap-2 text-sm font-semibold text-slate-900">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          {liveStatus.sessionName} starting at {liveStatus.startTime}
        </p>
        <p className="mb-3 text-sm text-slate-500">
          {liveStatus.checkedIn} of {liveStatus.capacity} attendees checked in
          · {liveStatus.venue}
        </p>
        <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
          <div
            className="h-full rounded-full bg-navy-900 transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <button
        onClick={onScanNext}
        className="w-full rounded-xl bg-navy-900 py-4 text-sm font-semibold text-white transition-colors hover:bg-navy-800"
      >
        Scan Next Attendee
      </button>
    </div>
  );
}