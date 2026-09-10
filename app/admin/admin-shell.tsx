"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CalendarDays, ClipboardCheck, LogOut, UsersRound, UserPlus } from "lucide-react";

const items = [
  { label: "Register", href: "/register", icon: UserPlus },
  { label: "Check-in", href: "/admin/checkin", icon: ClipboardCheck },
  { label: "Programme", href: "/programme", icon: CalendarDays },
  { label: "Partners", href: "/partners", icon: UsersRound },
  { label: "Attendees", href: "/admin/attendance", icon: UsersRound },
];

export default function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return <div className="min-h-screen bg-[#f4f5f7] text-[#142b4d]"><aside className="fixed inset-y-0 left-0 z-20 hidden w-[168px] flex-col border-r border-slate-200 bg-white md:flex"><div className="border-b border-slate-100 px-4 pb-5 pt-4"><div className="text-center text-[18px] font-bold tracking-[-0.08em] text-[#31567d]">OAK</div><div className="mt-2 text-center text-[8px] font-semibold tracking-[0.14em] text-slate-500">PARTNER CONVENING 2026</div></div><nav className="space-y-1 px-2.5 pt-5 text-[9px] text-[#40516d]">{items.map(({ label, href, icon: Icon }) => { const active = pathname === href || (href === "/admin" && pathname.startsWith("/admin")); return <Link key={href} href={href} className={`flex min-h-8 items-center gap-2 rounded-lg px-3 py-2 transition ${active ? "bg-[#142f55] font-semibold text-white shadow-[0_3px_8px_rgba(20,47,85,0.22)]" : "hover:bg-slate-50"}`}><Icon className="h-3 w-3" />{label}</Link>; })}</nav><div className="mt-auto border-t border-slate-100 px-4 py-4 text-[8px] leading-tight text-slate-500"><div className="font-semibold text-slate-700">Harare, Zimbabwe</div><div>9–11 March 2026</div><Link href="/admin" className="mt-3 flex items-center gap-1 text-slate-400"><LogOut className="h-3 w-3" /> Admin</Link></div></aside><main className="min-h-screen px-4 pb-8 pt-6 sm:px-6 md:ml-[168px] md:px-10 md:pt-5"><div className="mx-auto w-full max-w-[700px]">{children}</div></main><nav className="fixed inset-x-0 bottom-0 z-20 grid grid-cols-3 border-t border-slate-200 bg-white/95 px-3 py-2 backdrop-blur md:hidden"><Link href="/admin/checkin" className="flex flex-col items-center gap-1 text-[9px] text-[#142f55]"><ClipboardCheck className="h-4 w-4" />Check-in</Link><Link href="/admin/attendance" className="flex flex-col items-center gap-1 text-[9px] text-slate-500"><UsersRound className="h-4 w-4" />Attendance</Link><Link href="/programme" className="flex flex-col items-center gap-1 text-[9px] text-slate-500"><CalendarDays className="h-4 w-4" />Programme</Link></nav></div>;
}
