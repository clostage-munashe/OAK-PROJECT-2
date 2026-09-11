"use client";

import { useState } from "react";
import { Star, MapPin, ChevronDown } from "lucide-react";

type SessionType = "Plenary" | "Breakout" | "Workshop" | "Social";

interface Session {
  time: string;
  endTime: string;
  title: string;
  speaker: string;
  org: string;
  location: string;
  type: SessionType;
}

interface Break {
  time: string;
  label: string;
}

interface DayProgramme {
  day: string;
  date: string;
  featured: { time: string; title: string; speaker: string; org: string; location: string };
  items: (Session | Break)[];
}

const typeStyles: Record<SessionType, { badge: string; dot: string }> = {
  Plenary: { badge: "bg-slate-100 text-slate-700", dot: "bg-slate-700" },
  Breakout: { badge: "bg-amber-50 text-amber-700", dot: "bg-amber-500" },
  Workshop: { badge: "bg-violet-50 text-violet-600", dot: "bg-violet-500" },
  Social: { badge: "bg-orange-50 text-orange-600", dot: "bg-orange-500" },
};

const isBreak = (item: Session | Break): item is Break => "label" in item;

const days: DayProgramme[] = [
  {
    day: "Day 1",
    date: "9 Mar",
    featured: {
      time: "09:00 – 10:30",
      title: "Opening Plenary: Pathways to Impact",
      speaker: "Dr. Helena Moreau",
      org: "OAK Foundation",
      location: "Main Hall A",
    },
    items: [
      { time: "08:00", label: "Registration & Welcome Coffee" },
      { time: "10:30", label: "Coffee Break" },
      {
        time: "10:50",
        endTime: "12:00",
        title: "Thematic Dialogue: Climate Justice & Grantmaking",
        speaker: "Samuel Okafor",
        org: "Africa Climate Alliance",
        location: "Conference Room B2",
        type: "Breakout",
      },
      {
        time: "10:50",
        endTime: "12:00",
        title: "Workshop: Measuring Long-term Change",
        speaker: "Dr. Ingrid Holm",
        org: "Nordic Evaluation Centre",
        location: "Workshop Room C",
        type: "Workshop",
      },
      { time: "12:00", label: "Networking Lunch" },
      {
        time: "13:30",
        endTime: "14:30",
        title: "Partner Spotlight: Rights-Based Approaches",
        speaker: "Fatima Zahra Benali",
        org: "MENA Rights Group",
        location: "Main Hall A",
        type: "Plenary",
      },
      {
        time: "14:45",
        endTime: "16:00",
        title: "Digital Rights in Authoritarian Contexts",
        speaker: "Li Wei",
        org: "Digital Frontiers Institute",
        location: "Conference Room B1",
        type: "Breakout",
      },
      {
        time: "18:00",
        endTime: "20:00",
        title: "Welcome Reception & Dinner",
        speaker: "",
        org: "",
        location: "Rooftop Terrace",
        type: "Social",
      },
    ],
  },
  { day: "Day 2", date: "10 Mar", featured: { time: "", title: "", speaker: "", org: "", location: "" }, items: [] },
  { day: "Day 3", date: "11 Mar", featured: { time: "", title: "", speaker: "", org: "", location: "" }, items: [] },
];

const legend: SessionType[] = ["Plenary", "Breakout", "Workshop", "Social"];

export default function Programme() {
  const [activeDay, setActiveDay] = useState(0);
  const [activeTab, setActiveTab] = useState<"schedule" | "docs">("schedule");
  const current = days[activeDay];

  return (
    <div className="max-w-3xl">
      <h1 className="text-2xl font-bold text-slate-900">Programme</h1>
      <p className="mb-6 mt-1 text-sm text-slate-500">OAK Partner Convening 2026</p>

      {/* Tabs */}
      <div className="mb-6 flex items-center justify-between rounded-xl bg-slate-100 p-1">
        <div className="flex gap-1">
          <button
            onClick={() => setActiveTab("schedule")}
            className={`rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
              activeTab === "schedule" ? "bg-white text-slate-900 shadow-sm" : "text-slate-500"
            }`}
          >
            Schedule
          </button>
        </div>
        <button
          onClick={() => setActiveTab("docs")}
          className={`px-4 py-2 text-sm font-medium ${
            activeTab === "docs" ? "text-slate-900" : "text-slate-400"
          }`}
        >
          Docs
        </button>
      </div>

      {/* Day selector */}
      <div className="mb-6 grid grid-cols-3 gap-3">
        {days.map((d, i) => (
          <button
            key={d.day}
            onClick={() => setActiveDay(i)}
            className={`rounded-2xl px-4 py-3 text-left transition-colors ${
              i === activeDay ? "bg-navy-900 text-white" : "bg-white text-slate-800 shadow-card"
            }`}
          >
            <p className={`text-xs font-medium tracking-wide ${i === activeDay ? "text-slate-300" : "text-slate-400"}`}>
              {["MON", "TUE", "WED"][i]}
            </p>
            <p className="text-lg font-bold">{d.day}</p>
            <p className={`text-xs ${i === activeDay ? "text-slate-300" : "text-slate-400"}`}>{d.date}</p>
          </button>
        ))}
      </div>

      {activeTab === "schedule" && current.featured.title && (
        <>
          {/* Featured session */}
          <div className="mb-6 rounded-2xl bg-navy-900 p-6 text-white">
            <p className="mb-2 flex items-center gap-1.5 text-xs font-medium tracking-wide text-slate-300">
              <Star size={12} className="fill-current" /> FEATURED · {current.featured.time}
            </p>
            <h2 className="mb-3 text-lg font-bold">{current.featured.title}</h2>
            <p className="mb-1 flex items-center gap-2 text-sm text-slate-300">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20 text-[10px] font-bold">
                {current.featured.speaker.charAt(0)}
              </span>
              {current.featured.speaker} · {current.featured.org}
            </p>
            <p className="flex items-center gap-1 text-sm text-slate-300">
              <MapPin size={13} /> {current.featured.location}
            </p>
          </div>

          {/* Legend */}
          <div className="mb-5 flex flex-wrap gap-4">
            {legend.map((type) => (
              <span key={type} className="flex items-center gap-1.5 text-xs text-slate-500">
                <span className={`h-2 w-2 rounded-full ${typeStyles[type].dot}`} />
                {type}
              </span>
            ))}
          </div>

          {/* Timeline */}
          <div className="flex flex-col gap-3">
            {current.items.map((item, idx) =>
              isBreak(item) ? (
                <div key={idx} className="flex items-center gap-3 py-1">
                  <span className="w-12 shrink-0 text-xs font-medium text-slate-400">{item.time}</span>
                  <div className="h-px flex-1 border-t border-dashed border-slate-200" />
                  <span className="shrink-0 text-xs text-slate-400">{item.label}</span>
                  <div className="h-px flex-1 border-t border-dashed border-slate-200" />
                </div>
              ) : (
                <div key={idx} className="rounded-2xl bg-white p-4 shadow-card">
                  <div className="flex items-start justify-between gap-4">
                    <span className="w-14 shrink-0 text-xs font-medium text-slate-400">
                      {item.time}
                      <br />– {item.endTime}
                    </span>
                    <div className="flex-1">
                      <h3 className="text-sm font-semibold text-slate-800">{item.title}</h3>
                      {item.speaker && (
                        <p className="mt-1 text-xs text-slate-500">
                          {item.speaker} · {item.org}
                        </p>
                      )}
                      <p className="mt-1 flex items-center gap-1 text-xs text-slate-400">
                        <MapPin size={11} /> {item.location}
                      </p>
                    </div>
                    <span
                      className={`inline-flex shrink-0 items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${typeStyles[item.type].badge}`}
                    >
                      <span className={`h-1.5 w-1.5 rounded-full ${typeStyles[item.type].dot}`} />
                      {item.type}
                    </span>
                    <ChevronDown size={16} className="mt-1 shrink-0 text-slate-300" />
                  </div>
                </div>
              )
            )}
          </div>
        </>
      )}
    </div>
  );
}