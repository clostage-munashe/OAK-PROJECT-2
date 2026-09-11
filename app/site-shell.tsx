"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CalendarDays, Globe, MapPin, UserRound } from "lucide-react";

const navigation = [
  { label: "Register",   href: "/register",  icon: UserRound },
  { label: "Programme",  href: "/programme", icon: CalendarDays },
  { label: "Partners",   href: "/partners",  icon: Globe },
];

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-[#f4f5f7] text-[#142b4d]">

      {/* ── Desktop Sidebar ── */}
      <aside className="fixed inset-y-0 left-0 z-20 hidden w-[256px] flex-col border-r border-slate-200 bg-white md:flex">

        {/* Logo + Event label */}
        <div className="h-[102px] border-b border-slate-100 px-5 pt-4">
          <div className="text-center">
            <div className="text-[18px] font-black leading-none tracking-[-0.08em] text-[#31567d]">OAK</div>
            <div className="mt-2 text-[8px] font-semibold leading-none tracking-[0.16em] text-[#31567d]">FOUNDATION</div>
          </div>
          <div className="mt-4 text-center text-[8px] font-semibold leading-none tracking-[0.13em] text-slate-400 uppercase">
            Partner Convening 2026
          </div>
        </div>

        {/* Nav links */}
        <nav aria-label="Primary navigation" className="flex-1 space-y-1 px-5 pt-4 text-[11px] text-[#40516d]">
          {navigation.map(({ label, href, icon: Icon }) => {
            const active =
              pathname === href ||
              (href === "/partners" && pathname.startsWith("/partners/"));
            return (
              <Link
                key={href}
                href={href}
                className={`flex h-[40px] items-center gap-3 rounded-[16px] px-4 transition ${
                  active
                    ? "bg-[#142f55] font-semibold text-white shadow-[0_2px_8px_rgba(20,47,85,0.20)]"
                    : "hover:bg-slate-50"
                }`}
              >
                <Icon className="h-3.5 w-3.5 shrink-0" />
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Bottom location */}
        <div className="h-[74px] border-t border-slate-100 px-5 py-4">
          <div className="flex items-start gap-2.5">
            <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-slate-50">
              <MapPin className="h-2.5 w-2.5 text-slate-400" />
            </div>
            <div>
              <div className="text-[10px] font-semibold leading-tight text-slate-700">Harare, Zimbabwe</div>
              <div className="mt-0.5 text-[9px] leading-tight text-slate-400">9–11 March 2026</div>
            </div>
          </div>
        </div>
      </aside>

      {/* ── Main content ── */}
      <main className="min-h-screen px-4 pb-20 pt-5 sm:px-6 md:ml-[256px] md:px-8 md:pb-10">
        <div className="mx-auto w-full max-w-[608px]">{children}</div>
      </main>

      {/* ── Mobile bottom nav ── */}
      <nav
        aria-label="Mobile navigation"
        className="fixed inset-x-0 bottom-0 z-20 grid grid-cols-3 border-t border-slate-200 bg-white/95 px-3 py-2 backdrop-blur md:hidden"
      >
        {navigation.map(({ label, href, icon: Icon }) => {
          const active =
            pathname === href ||
            (href === "/partners" && pathname.startsWith("/partners/"));
          return (
            <Link
              key={href}
              href={href}
              className={`flex flex-col items-center gap-1 text-[9px] ${
                active ? "font-semibold text-[#142f55]" : "text-slate-400"
              }`}
            >
              <Icon className="h-4 w-4" />
              {label}
            </Link>
          );
        })}
      </nav>

    </div>
  );
}
