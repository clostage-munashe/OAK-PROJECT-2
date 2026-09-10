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
    <section className="space-y-5">
      <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
        {days.map((item) => {
          const isSelected = selectedDay === item.day;

          return (
            <button type="button" key={item.day} onClick={() => setSelectedDay(item.day)} className={`rounded-2xl p-3 text-left shadow-sm transition sm:p-4 ${isSelected ? "bg-[#172f58] text-white" : "border border-slate-100 bg-white text-slate-900 hover:border-slate-300"}`}>
              <div className={`text-[8px] font-bold tracking-[0.16em] ${isSelected ? "text-slate-300" : "text-slate-400"}`}>{item.dayName}</div>
              <div className="mt-1 text-[15px] font-extrabold sm:text-base">Day {item.day}</div>
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