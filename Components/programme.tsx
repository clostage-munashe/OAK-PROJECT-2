import React from "react";
import { Star, MapPin, ChevronDown } from "lucide-react";

// ── Types ──────────────────────────────────────────────────────────────
export type SessionType = "Plenary" | "Breakout" | "Workshop" | "Social";

export interface Session {
  id: string;
  startTime: string;
  endTime: string;
  title: string;
  speaker?: string;
  location: string;
  type: SessionType;
}

// ── Data ───────────────────────────────────────────────────────────────
export const sessions: Session[] = [
  {
    id: "1",
    startTime: "10:50",
    endTime: "12:00",
    title: "Thematic Dialogue: Climate Justice & Grantmaking",
    speaker: "Samuel Okafor · Africa Climate Alliance",
    location: "Conference Room B2",
    type: "Breakout",
  },
  {
    id: "2",
    startTime: "10:50",
    endTime: "12:00",
    title: "Workshop: Measuring Long-term Change",
    speaker: "Dr. Ingrid Holm · Nordic Evaluation Centre",
    location: "Workshop Room C",
    type: "Workshop",
  },
  {
    id: "3",
    startTime: "13:30",
    endTime: "14:30",
    title: "Partner Spotlight: Rights-Based Approaches",
    speaker: "Fatima Zahra Benali · MENA Rights Group",
    location: "Main Hall A",
    type: "Plenary",
  },
  {
    id: "4",
    startTime: "14:45",
    endTime: "16:00",
    title: "Digital Rights in Authoritarian Contexts",
    speaker: "Li Wei · Digital Frontiers Institute",
    location: "Conference Room B1",
    type: "Breakout",
  },
  {
    id: "5",
    startTime: "18:00",
    endTime: "20:00",
    title: "Welcome Reception & Dinner",
    location: "Rooftop Terrace",
    type: "Social",
  },
];

// ── Badge helpers ───────────────────────────────────────────────────────
export const getTagBadgeStyle = (type: SessionType) => {
  switch (type) {
    case "Plenary":  return "bg-indigo-50  text-indigo-800  border-indigo-200/60";
    case "Breakout": return "bg-amber-50   text-amber-700   border-amber-200/60";
    case "Workshop": return "bg-purple-50  text-purple-700  border-purple-200/60";
    case "Social":   return "bg-orange-50  text-orange-700  border-orange-200/60";
  }
};

export const getDotColor = (type: SessionType) => {
  switch (type) {
    case "Plenary":  return "bg-indigo-800";
    case "Breakout": return "bg-amber-500";
    case "Workshop": return "bg-purple-500";
    case "Social":   return "bg-orange-500";
  }
};

// ── Featured Card ───────────────────────────────────────────────────────
export const FeaturedProgramme: React.FC = () => (
  <div className="relative w-full overflow-hidden rounded-[18px] bg-gradient-to-br from-[#172239] via-[#1a2b4c] to-[#253961] px-5 py-5 text-white shadow-lg">
    {/* Decorative circle */}
    <div className="absolute bottom-[-40px] right-[-40px] h-40 w-40 rounded-full bg-white/5" />

    {/* FEATURED · time */}
    <div className="mb-3 flex items-center gap-3">
      <span className="inline-flex items-center gap-1.5 rounded-md bg-white/10 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-slate-200 backdrop-blur-md">
        <Star className="h-2.5 w-2.5 fill-amber-400 text-amber-400" />
        FEATURED
      </span>
      <span className="text-[11px] font-medium text-slate-400">08:00 – 10:30</span>
    </div>

    {/* Title */}
    <h2 className="mb-3 text-[18px] font-extrabold leading-tight tracking-tight text-white">
      Opening Plenary: Pathways to Impact
    </h2>

    {/* Speaker */}
    <div className="mb-2.5 flex items-center gap-2">
      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-700 border border-slate-600 text-[8px] font-bold text-slate-200">
        D
      </div>
      <span className="text-[11px] font-medium text-slate-300">
        Dr. Helena Moreau · OAK Foundation
      </span>
    </div>

    {/* Location */}
    <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
      <MapPin className="h-3 w-3" />
      <span>Main Hall A</span>
    </div>
  </div>
);

// ── Legend ─────────────────────────────────────────────────────────────
export const ProgrammeLegend: React.FC = () => {
  const types: SessionType[] = ["Plenary", "Breakout", "Workshop", "Social"];
  return (
    <div className="flex items-center gap-5 text-[11px] font-semibold text-slate-500">
      {types.map((type) => (
        <div key={type} className="flex items-center gap-1.5">
          <span className={`h-2 w-2 rounded-full ${getDotColor(type)}`} />
          <span>{type}</span>
        </div>
      ))}
    </div>
  );
};

// ── Time Divider ────────────────────────────────────────────────────────
interface TimeDividerProps {
  time: string;
  label: string;
}

export const TimeDivider: React.FC<TimeDividerProps> = ({ time, label }) => (
  <div className="flex items-center gap-3 text-[11px] text-slate-400">
    <span className="shrink-0 font-mono font-semibold text-slate-500">{time}</span>
    <div className="h-px flex-1 bg-slate-200" />
    <span className="shrink-0">{label}</span>
    <div className="h-px flex-1 bg-slate-200" />
  </div>
);

// ── Session Card ────────────────────────────────────────────────────────
interface SessionCardProps {
  session: Session;
}

export const SessionCard: React.FC<SessionCardProps> = ({ session }) => (
  <div className="flex items-start gap-4 rounded-[14px] border border-slate-100 bg-white px-4 py-3.5 shadow-[0_2px_8px_rgba(24,42,68,0.07)] transition hover:shadow-md">

    {/* Time column */}
    <div className="shrink-0 pt-0.5 font-mono text-[11px] font-bold text-slate-700 leading-tight">
      {session.startTime}
      <span className="block text-[10px] font-normal text-slate-400">
        -{session.endTime}
      </span>
    </div>

    {/* Content */}
    <div className="flex-1 min-w-0">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-[13px] font-bold text-slate-900 leading-snug">
          {session.title}
        </h3>

        {/* Badge */}
        <span
          className={`inline-flex shrink-0 items-center gap-1 rounded-full border px-2.5 py-0.5 text-[10px] font-semibold ${getTagBadgeStyle(session.type)}`}
        >
          <span className={`h-1.5 w-1.5 rounded-full ${getDotColor(session.type)}`} />
          {session.type}
        </span>
      </div>

      {session.speaker && (
        <p className="mt-1 text-[11px] text-slate-500">{session.speaker}</p>
      )}

      <div className="mt-1.5 flex items-center gap-1 text-[11px] text-slate-400">
        <MapPin className="h-3 w-3 shrink-0" />
        <span>{session.location}</span>
      </div>
    </div>

    {/* Expand */}
    <button
      type="button"
      aria-label={`Expand ${session.title}`}
      className="shrink-0 pt-0.5 text-slate-300 hover:text-slate-500 transition"
    >
      <ChevronDown className="h-4 w-4" />
    </button>
  </div>
);

// ── Programme List ──────────────────────────────────────────────────────
interface ProgrammeProps {
  filteredSessions?: Session[];
}

const Programme: React.FC<ProgrammeProps> = ({ filteredSessions = sessions }) => (
  <div className="space-y-3">
    <TimeDivider time="08:00" label="Registration & Welcome Coffee" />
    <TimeDivider time="10:30" label="Coffee Break" />

    {filteredSessions.slice(0, 2).map((s) => (
      <SessionCard key={s.id} session={s} />
    ))}

    <TimeDivider time="12:00" label="Networking Lunch" />

    {filteredSessions.slice(2).map((s) => (
      <SessionCard key={s.id} session={s} />
    ))}
  </div>
);

export default Programme;