import React from "react";
import {
  Star,
  MapPin,
  ChevronDown,
} from "lucide-react";

// ==============================
// DATA TYPES
// ==============================

export type SessionType =
  | "Plenary"
  | "Breakout"
  | "Workshop"
  | "Social";

export interface Session {
  id: string;
  startTime: string;
  endTime: string;
  title: string;
  speaker?: string;
  location: string;
  type: SessionType;
}

// ==============================
// PROGRAMME DATA
// ==============================

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

// ==============================
// CATEGORY COLORS
// ==============================

export const getTagBadgeStyle = (type: SessionType) => {
  switch (type) {
    case "Plenary":
      return "bg-indigo-50 text-indigo-900 border-indigo-200/60";

    case "Breakout":
      return "bg-amber-50 text-amber-700 border-amber-200/60";

    case "Workshop":
      return "bg-purple-50 text-purple-700 border-purple-200/60";

    case "Social":
      return "bg-orange-50 text-orange-700 border-orange-200/60";
  }
};

export const getDotColor = (type: SessionType) => {
  switch (type) {
    case "Plenary":
      return "bg-indigo-900";

    case "Breakout":
      return "bg-amber-500";

    case "Workshop":
      return "bg-purple-500";

    case "Social":
      return "bg-orange-500";
  }
};

// ==============================
// FEATURED PROGRAMME
// ==============================

export const FeaturedProgramme: React.FC = () => {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#172239] via-[#1a2b4c] to-[#253961] p-6 text-white shadow-lg mb-8">
      
      {/* Featured Label */}
      <div className="flex items-center gap-3 mb-4">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/10 backdrop-blur-md text-[10px] font-bold tracking-wider uppercase text-slate-200">
          <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
          FEATURED
        </span>

        <span className="text-xs text-slate-400 font-medium">
          09:00 – 10:30
        </span>
      </div>

      {/* Title */}
      <h2 className="text-2xl font-extrabold tracking-tight mb-4 text-white">
        Opening Plenary: Pathways to Impact
      </h2>

      {/* Speaker */}
      <div className="flex items-center gap-2 mb-3">
        <div className="w-6 h-6 rounded-full bg-slate-700 border border-slate-600 flex items-center justify-center text-[10px] font-bold text-slate-200">
          D
        </div>

        <span className="text-xs text-slate-300 font-medium">
          Dr. Helena Moreau · OAK Foundation
        </span>
      </div>

      {/* Location */}
      <div className="flex items-center gap-1.5 text-xs text-slate-400">
        <MapPin className="w-3.5 h-3.5" />
        <span>Main Hall A</span>
      </div>
    </div>
  );
};

// ==============================
// PROGRAMME LEGEND
// ==============================

export const ProgrammeLegend: React.FC = () => {
  const types: SessionType[] = [
    "Plenary",
    "Breakout",
    "Workshop",
    "Social",
  ];

  return (
    <div className="flex items-center gap-6 text-xs font-semibold mb-8 text-slate-600">
      {types.map((type) => (
        <div
          key={type}
          className="flex items-center gap-2 cursor-pointer"
        >
          <span
            className={`w-2.5 h-2.5 rounded-full ${getDotColor(type)}`}
          />

          <span>{type}</span>
        </div>
      ))}
    </div>
  );
};

// ==============================
// TIME DIVIDER
// ==============================

interface TimeDividerProps {
  time: string;
  label: string;
}

export const TimeDivider: React.FC<TimeDividerProps> = ({
  time,
  label,
}) => {
  return (
    <div className="relative flex items-center justify-between text-xs font-medium text-slate-400">
      <span className="font-mono text-slate-500 font-semibold">
        {time}
      </span>

      <div className="h-[1px] bg-slate-200 flex-1 mx-4" />

      <span>{label}</span>

      <div className="h-[1px] bg-slate-200 flex-1 ml-4" />
    </div>
  );
};

// ==============================
// SESSION CARD
// ==============================

interface SessionCardProps {
  session: Session;
}

export const SessionCard: React.FC<SessionCardProps> = ({
  session,
}) => {
  return (
    <div className="bg-white rounded-2xl p-5 border border-slate-200/70 shadow-sm hover:shadow-md transition flex items-start gap-6">
      
      {/* Time */}
      <div className="text-xs font-mono font-bold text-slate-700 pt-1 shrink-0">
        {session.startTime}

        <span className="block text-[10px] text-slate-400 font-normal text-right">
          –{session.endTime}
        </span>
      </div>

      {/* Session Information */}
      <div className="flex-1">
        <div className="flex items-start justify-between gap-4">
          
          <h3 className="text-sm font-bold text-slate-900">
            {session.title}
          </h3>

          {/* Category Badge */}
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5 shrink-0 border ${getTagBadgeStyle(
              session.type
            )}`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full ${getDotColor(
                session.type
              )}`}
            />

            {session.type}
          </span>
        </div>

        {/* Speaker */}
        {session.speaker && (
          <p className="text-xs text-slate-500 mt-2">
            {session.speaker}
          </p>
        )}

        {/* Location */}
        <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-2">
          <MapPin className="w-3.5 h-3.5" />

          <span>{session.location}</span>
        </div>
      </div>

      {/* Expand Button */}
      <button
        type="button"
        className="text-slate-400 hover:text-slate-600 pt-1"
        aria-label={`Expand ${session.title}`}
      >
        <ChevronDown className="w-4 h-4" />
      </button>
    </div>
  );
};

// ==============================
// PROGRAMME LIST
// ==============================

interface ProgrammeProps {
  filteredSessions?: Session[];
}

const Programme: React.FC<ProgrammeProps> = ({
  filteredSessions = sessions,
}) => {
  return (
    <div className="space-y-6">
      
      {/* Registration */}
      <TimeDivider
        time="08:00"
        label="Registration & Welcome Coffee"
      />

      {/* Coffee Break */}
      <TimeDivider
        time="10:30"
        label="Coffee Break"
      />

      {/* Sessions */}
      {filteredSessions.slice(0, 2).map((session) => (
        <SessionCard
          key={session.id}
          session={session}
        />
      ))}

      {/* Lunch */}
      <div className="pt-2">
        <TimeDivider
          time="12:00"
          label="Networking Lunch"
        />
      </div>

      {/* Remaining Sessions */}
      {filteredSessions.slice(2).map((session) => (
        <SessionCard
          key={session.id}
          session={session}
        />
      ))}
    </div>
  );
};

export default Programme;