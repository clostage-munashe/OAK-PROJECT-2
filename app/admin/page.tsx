"use client";

import { useMemo, useRef, useState } from "react";
import { Download, LogOut, Search, ShieldCheck, Users, Camera } from "lucide-react";
import { Attendee, getAttendees, getCheckIns, recordCheckIn } from "../../lib/event-store";

const ADMIN_EMAIL = "admin@oak.org";
const ADMIN_PASSWORD = "OAK2026!";

export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState(() => typeof window !== "undefined" && window.sessionStorage.getItem("oak-admin") === "true");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [attendees] = useState<Attendee[]>(() => getAttendees());
  const [checkIns, setCheckIns] = useState(getCheckIns());
  const [query, setQuery] = useState("");
  const [message, setMessage] = useState("");
  const scannerRef = useRef<{ stop: () => Promise<void> } | null>(null);

  const today = new Date().toISOString().slice(0, 10);
  const checkedToday = checkIns.filter((item) => item.date === today).length;
  const filtered = useMemo(() => attendees.filter((item) => `${item.name} ${item.organisation} ${item.email}`.toLowerCase().includes(query.toLowerCase())), [attendees, query]);

  function login(event: React.FormEvent) {
    event.preventDefault();
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      window.sessionStorage.setItem("oak-admin", "true");
      setAuthenticated(true);
      setMessage("");
    } else setMessage("The administrator email or password is incorrect.");
  }

  function logout() {
    window.sessionStorage.removeItem("oak-admin");
    setAuthenticated(false);
    stopScanner();
  }

  function checkIn(id: string) {
    const result = recordCheckIn(id, today);
    setCheckIns(getCheckIns());
    setMessage(result.added ? "Attendee checked in for today." : "Already checked in today. No duplicate was added.");
  }

  async function startScanner() {
    const { Html5Qrcode } = await import("html5-qrcode");
    const scanner = new Html5Qrcode("oak-qr-reader");
    scannerRef.current = scanner;
    await scanner.start({ facingMode: "environment" }, { fps: 10, qrbox: 220 }, (value: string) => {
      const id = value.replace("oak-attendee:", "");
      if (attendees.some((item) => item.id === id)) checkIn(id);
    }, () => undefined);
  }

  async function stopScanner() {
    if (scannerRef.current) {
      await scannerRef.current.stop().catch(() => undefined);
      scannerRef.current = null;
    }
  }

  function exportCsv() {
    const rows = [["Name", "Organisation", "Email", "Dietary requirements", "Accessibility requirements"], ...attendees.map((item) => [item.name, item.organisation, item.email, item.dietaryRequirements, item.accessibilityRequirements])];
    const csv = rows.map((row) => row.map((value) => `"${value.replaceAll('"', '""')}"`).join(",")).join("\n");
    const url = URL.createObjectURL(new Blob([csv], { type: "text/csv" }));
    const link = document.createElement("a"); link.href = url; link.download = "oak-accommodations.csv"; link.click(); URL.revokeObjectURL(url);
  }

  if (!authenticated) return <main className="flex min-h-screen items-center justify-center bg-[#f4f5f7] px-4"><form onSubmit={login} className="w-full max-w-sm space-y-5 rounded-3xl bg-white p-7 shadow-[0_8px_30px_rgba(24,42,68,0.12)]"><div><ShieldCheck className="h-7 w-7 text-[#142f55]" /><h1 className="mt-4 text-xl font-bold text-[#142f55]">Admin sign in</h1><p className="mt-1 text-xs text-slate-500">Attendee information is restricted to authorised administrators.</p></div><input aria-label="Admin email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="admin@oak.org" className="h-11 w-full rounded-xl bg-slate-100 px-3 text-sm outline-none focus:ring-2 focus:ring-[#142f55]" /><input aria-label="Admin password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Password" className="h-11 w-full rounded-xl bg-slate-100 px-3 text-sm outline-none focus:ring-2 focus:ring-[#142f55]" />{message && <p role="alert" className="text-xs text-rose-600">{message}</p>}<button className="h-11 w-full rounded-xl bg-[#142f55] text-sm font-semibold text-white">Sign in</button></form></main>;

  return <main className="min-h-screen bg-[#f4f5f7] px-4 py-6 sm:px-8"><div className="mx-auto max-w-6xl space-y-6"><header className="flex items-start justify-between"><div><p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">OAK Partner Convening 2026</p><h1 className="mt-1 text-2xl font-bold text-[#142f55]">Admin dashboard</h1></div><button type="button" onClick={logout} className="flex items-center gap-2 text-xs font-semibold text-slate-500"><LogOut className="h-4 w-4" /> Sign out</button></header><div className="grid gap-3 sm:grid-cols-3"><div className="rounded-2xl bg-white p-5 shadow-sm"><Users className="h-5 w-5 text-[#142f55]" /><p className="mt-4 text-3xl font-bold text-[#142f55]">{attendees.length}</p><p className="text-xs text-slate-500">Registered attendees</p></div><div className="rounded-2xl bg-white p-5 shadow-sm"><p className="text-3xl font-bold text-[#142f55]">{checkedToday}</p><p className="text-xs text-slate-500">Checked in today</p></div><div className="rounded-2xl bg-white p-5 shadow-sm"><p className="text-3xl font-bold text-[#142f55]">{Math.max(attendees.length - checkedToday, 0)}</p><p className="text-xs text-slate-500">Not yet checked in</p></div></div><div className="grid gap-6 lg:grid-cols-[340px_1fr]"><section className="rounded-2xl bg-white p-5 shadow-sm"><h2 className="font-bold text-[#142f55]">Daily check-in</h2><div id="oak-qr-reader" className="mt-4 min-h-[220px] overflow-hidden rounded-xl bg-slate-100" /><div className="mt-3 flex gap-2"><button type="button" onClick={startScanner} className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#142f55] py-2.5 text-xs font-semibold text-white"><Camera className="h-4 w-4" /> Start camera</button><button type="button" onClick={stopScanner} className="rounded-xl border border-slate-200 px-3 text-xs">Stop</button></div><p className="mt-3 text-[11px] text-slate-500">Each attendee can be counted once per calendar day.</p>{message && <p className="mt-3 rounded-lg bg-blue-50 p-2 text-xs text-blue-800">{message}</p>}</section><section className="rounded-2xl bg-white p-5 shadow-sm"><div className="flex flex-wrap items-center justify-between gap-3"><h2 className="font-bold text-[#142f55]">Attendees</h2><button type="button" onClick={exportCsv} className="flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2 text-xs font-semibold"><Download className="h-4 w-4" /> Export accommodations CSV</button></div><label className="mt-4 flex items-center gap-2 rounded-xl bg-slate-100 px-3"><Search className="h-4 w-4 text-slate-400" /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search name, organisation, email" className="h-10 flex-1 bg-transparent text-xs outline-none" /></label><div className="mt-4 overflow-x-auto"><table className="w-full min-w-[620px] text-left text-xs"><thead className="border-b border-slate-100 text-slate-400"><tr><th className="pb-3">Attendee</th><th className="pb-3">Organisation</th><th className="pb-3">Dietary</th><th className="pb-3">Status</th></tr></thead><tbody>{filtered.map((item) => <tr key={item.id} className="border-b border-slate-50"><td className="py-3"><div className="font-semibold text-slate-800">{item.name}</div><div className="text-[10px] text-slate-400">{item.email}</div></td><td className="py-3 text-slate-600">{item.organisation}</td><td className="py-3 text-slate-600">{item.dietaryRequirements || "None"}</td><td className="py-3">{checkIns.some((checkIn) => checkIn.attendeeId === item.id && checkIn.date === today) ? <span className="text-emerald-700">Checked in</span> : <button type="button" onClick={() => checkIn(item.id)} className="font-semibold text-[#142f55] underline">Check in</button>}</td></tr>)}</tbody></table></div></section></div></div></main>;
}
