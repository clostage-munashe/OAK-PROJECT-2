"use client";

import { useState } from "react";
import { FeaturedProgramme, ProgrammeLegend } from "./programme";
import Programme from "./programme";

const days = [
  { day: 1, dayName: "MON", date: "9 Mar" },
  { day: 2, dayName: "TUE", date: "10 Mar" },
  { day: 3, dayName: "WED", date: "11 Mar" },
];

export default function ScheduleView() {
  const [selectedDay, setSelectedDay] = useState(1);

  return (
    <section className="space-y-3">
      <div className="grid grid-cols-3 gap-2">
        {days.map((item) => {
          const isSelected = selectedDay === item.day;

          return (
            <button type="button" key={item.day} onClick={() => setSelectedDay(item.day)} className={`rounded-[13px] p-2 text-left shadow-[0_3px_9px_rgba(24,42,68,0.08)] transition ${isSelected ? "bg-[#172f58] text-white" : "border border-slate-100 bg-white text-slate-900 hover:border-slate-300"}`}>
              <div className={`text-[8px] font-bold tracking-[0.16em] ${isSelected ? "text-slate-300" : "text-slate-400"}`}>{item.dayName}</div>
              <div className="mt-1 text-[12px] font-extrabold">Day {item.day}</div>
              <div className={`mt-0.5 text-[9px] ${isSelected ? "text-slate-300" : "text-slate-400"}`}>{item.date}</div>
            </button>
          );
        })}
      </div>
      <FeaturedProgramme />
      <div className="overflow-x-auto pb-1"><ProgrammeLegend /></div>
      <Programme />
    </section>
  );
}