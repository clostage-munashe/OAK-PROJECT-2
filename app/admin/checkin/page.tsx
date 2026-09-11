"use client";

import { useEffect, useRef, useState } from "react";
import { Camera, ChevronRight, CircleHelp, ScanLine, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import AdminShell from "../admin-shell";
import { Attendee, getAttendees } from "../../../lib/event-store";

export default function CheckInPage() {
  const router = useRouter();
  const [attendees, setAttendees] = useState<Attendee[]>(() => getAttendees());
  const [manualCode, setManualCode] = useState("");
  const scannerRef = useRef<{ stop: () => Promise<void> } | null>(null);

  useEffect(() => {
    fetch("/api/admin/attendees")
      .then((response) => response.json())
      .then((payload: { configured?: boolean; attendees?: Attendee[] }) => {
        if (payload.configured && payload.attendees) setAttendees(payload.attendees);
      })
      .catch(() => undefined);
  }, []);

  async function startCamera() {
    const { Html5Qrcode } = await import("html5-qrcode");
    const scanner = new Html5Qrcode("checkin-camera");
    scannerRef.current = scanner;
    await scanner.start({ facingMode: "environment" }, { fps: 10, qrbox: 210 }, (value: string) => {
      const id = value.replace("oak-attendee:", "");
      const attendee = attendees.find((item) => item.id === id);
      void stopCamera();
      router.push(attendee ? `/admin/checkin/success/${attendee.id}` : "/admin/checkin/not-recognised");
    }, () => undefined);
  }

  async function stopCamera() {
    await scannerRef.current?.stop().catch(() => undefined);
    scannerRef.current = null;
  }

  function handleManual(event: React.FormEvent) {
    event.preventDefault();
    const value = manualCode.replace("oak-attendee:", "").trim();
    const attendee = attendees.find((item) => item.id === value);
    router.push(attendee ? `/admin/checkin/success/${attendee.id}` : "/admin/checkin/not-recognised");
  }

  return <AdminShell><section className="space-y-4"><header><p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-slate-400">Event check-in</p><h1 className="mt-1 text-[18px] font-bold">Event Check-in</h1><p className="text-[9px] text-slate-400">Scan an attendee QR code to record today&apos;s arrival.</p></header><section className="rounded-2xl bg-[#0d192d] p-3 shadow-[0_8px_25px_rgba(24,42,68,0.18)]"><div id="checkin-camera" className="flex aspect-square items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-[#101d31]"><div className="relative flex h-48 w-48 items-center justify-center"><ScanLine className="h-36 w-36 text-slate-500/70" /><p className="absolute bottom-0 text-[8px] text-slate-400">Position QR code within the frame</p></div></div><div className="mt-3 flex items-center justify-between text-[8px] text-slate-500"><span>Camera ready</span><span className="flex items-center gap-1"><CircleHelp className="h-3 w-3" /> Need help?</span></div></section><div className="flex items-center gap-2"><button type="button" onClick={startCamera} className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#142f55] py-3 text-[10px] font-semibold text-white"><Camera className="h-3.5 w-3.5" /> Start camera</button><button type="button" onClick={stopCamera} className="rounded-xl border border-slate-200 bg-white px-3 py-3 text-[10px]">Stop</button></div><form onSubmit={handleManual} className="flex gap-2 rounded-xl bg-white p-2 shadow-sm"><Search className="ml-1 h-4 w-4 self-center text-slate-400" /><input value={manualCode} onChange={(event) => setManualCode(event.target.value)} placeholder="Paste QR value for QA" className="min-w-0 flex-1 text-[10px] outline-none" /><button className="rounded-lg bg-[#142f55] px-3 py-2 text-[9px] font-semibold text-white">Check</button></form><section className="rounded-2xl bg-white p-3 shadow-sm"><div className="flex items-center justify-between"><h2 className="text-[10px] font-bold">Recent check-ins</h2><span className="text-[8px] text-slate-400">Today</span></div>{attendees.slice(0, 4).map((attendee) => <div key={attendee.id} className="mt-3 flex items-center gap-2 border-t border-slate-100 pt-2"><div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#142f55] text-[6px] font-bold text-white">{attendee.name.split(" ").map((part) => part[0]).join("").slice(0, 2)}</div><div className="flex-1"><p className="text-[8px] font-semibold">{attendee.name}</p><p className="text-[7px] text-slate-400">{attendee.organisation}</p></div><ChevronRight className="h-3 w-3 text-slate-300" /></div>)}</section></section></AdminShell>;
}
