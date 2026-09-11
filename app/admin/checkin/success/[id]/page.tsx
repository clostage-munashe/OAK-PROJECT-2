"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { CheckCircle2, ChevronRight, Clock3, MapPin, QrCode } from "lucide-react";
import { useEffect, useState } from "react";
import AdminShell from "../../../admin-shell";
import { getAttendees, recordCheckIn } from "../../../../../lib/event-store";

export default function CheckInSuccessPage() {
  const params = useParams<{ id: string }>();
  const [attendee, setAttendee] = useState(() => getAttendees().find((item) => item.id === params.id));
  const [result, setResult] = useState<{ added: boolean } | null>(null);
  useEffect(() => {
    fetch("/api/admin/attendees")
      .then((response) => response.json())
      .then((payload) => {
        const remoteAttendee = payload.attendees?.find((item: { id: string }) => item.id === params.id);
        if (remoteAttendee) setAttendee(remoteAttendee);
      })
      .catch(() => undefined);
  }, [params.id]);
  useEffect(() => {
    if (!attendee) return;
    void fetch("/api/admin/check-in", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ attendeeId: attendee.id }) })
      .then(async (response) => {
        const payload = await response.json();
        setResult(payload.configured ? payload : recordCheckIn(attendee.id));
      })
      .catch(() => setResult(recordCheckIn(attendee.id)));
  }, [attendee]);
  if (!attendee) return <AdminShell><NotFoundState /></AdminShell>;
  const initials = attendee.name.split(" ").map((part) => part[0]).join("").slice(0, 2);
  return <AdminShell><section className="space-y-4"><header><p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-slate-400">Event check-in</p><h1 className="mt-1 text-[18px] font-bold">Check-in result</h1></header><section className="overflow-hidden rounded-2xl bg-white shadow-sm"><div className="flex items-center gap-3 bg-gradient-to-r from-[#0cae70] to-[#1cc58d] p-4 text-white"><CheckCircle2 className="h-7 w-7" /><div><h2 className="text-sm font-bold">Checked in successfully</h2><p className="text-[9px] text-emerald-50">{result?.added ? "Arrival recorded for today" : "Already checked in today"}</p></div></div><div className="p-4"><div className="flex items-center gap-3"><div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#142f55] text-xs font-bold text-white">{initials}</div><div><h3 className="text-[12px] font-bold">{attendee.name}</h3><p className="text-[9px] text-slate-400">{attendee.organisation}</p></div></div><div className="mt-4 grid grid-cols-2 gap-2"><div className="rounded-lg bg-slate-100 p-2"><p className="text-[7px] uppercase text-slate-400">Role</p><p className="mt-1 text-[9px] font-semibold">{attendee.jobTitle || "Partner"}</p></div><div className="rounded-lg bg-slate-100 p-2"><p className="text-[7px] uppercase text-slate-400">Status</p><p className="mt-1 text-[9px] font-semibold text-emerald-700">Present today</p></div></div><div className="mt-4 space-y-2 border-t border-slate-100 pt-3 text-[9px] text-slate-500"><p className="flex items-center gap-2"><Clock3 className="h-3 w-3" /> {new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</p><p className="flex items-center gap-2"><MapPin className="h-3 w-3" /> Welcome desk · Main entrance</p></div></div></section><Link href="/admin/checkin" className="flex items-center justify-center gap-2 rounded-xl bg-[#142f55] py-3 text-[10px] font-semibold text-white"><QrCode className="h-3.5 w-3.5" /> Scan next attendee <ChevronRight className="h-3 w-3" /></Link><Link href="/admin/attendance" className="block text-center text-[9px] font-semibold text-slate-500 underline">View attendance</Link></section></AdminShell>;
}

function NotFoundState() { return <div className="rounded-2xl bg-white p-6 text-center text-sm text-slate-500">Attendee record not found.</div>; }
