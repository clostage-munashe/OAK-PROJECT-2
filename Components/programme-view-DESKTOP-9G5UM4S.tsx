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
      <div className="grid h-[85px] w-full max-w-[608px] grid-cols-3 gap-[10px]">
        {days.map((item) => {
          const isSelected = selectedDay === item.day;

          return (
            <button type="button" key={item.day} onClick={() => setSelectedDay(item.day)} className={`h-[85px] min-w-0 rounded-[13px] p-2 text-left shadow-[0_3px_9px_rgba(24,42,68,0.08)] transition ${isSelected ? "bg-[#172f58] text-white" : "border border-slate-100 bg-white text-slate-900 hover:border-slate-300"}`}>
              <div className={`h-[20px] w-full max-w-[166px] pt-[2px] text-[8px] font-bold tracking-[0.16em] ${isSelected ? "text-slate-300" : "text-slate-400"}`}>{item.dayName}</div>
              <div className="h-[15px] w-full max-w-[166px] text-[12px] font-extrabold">Day {item.day}</div>
              <div className={`h-[16px] w-[37px] text-[9px] ${isSelected ? "text-slate-300" : "text-slate-400"}`}>{item.date}</div>
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