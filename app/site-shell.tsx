"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { CalendarDays, CircleUserRound, UserRound } from "lucide-react";

const navigation = [
  { label: "Register", href: "/register", icon: UserRound },
  { label: "Programme", href: "/programme", icon: CalendarDays },
  { label: "Partners", href: "/partners", icon: CircleUserRound },
];

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-[#f4f5f7] text-[#142b4d]">
      <aside className="fixed inset-y-0 left-0 z-20 hidden w-[168px] flex-col border-r border-slate-200 bg-white md:flex">
        <div className="border-b border-slate-100 px-4 pb-5 pt-4">
          <Image src="/Logo-Oak-Foundation.svg (1) 1 (2).svg" alt="OAK Foundation" width={46} height={28} className="mx-auto h-auto w-[42px]" />
          <div className="mt-4 text-center text-[8px] font-semibold tracking-[0.14em] text-slate-500">PARTNER CONVENING 2026</div>
        </div>
        <nav aria-label="Primary navigation" className="space-y-1 px-2.5 pt-5 text-[9px] text-[#40516d]">
          {navigation.map(({ label, href, icon: Icon }) => {
            const active = pathname === href || (href === "/partners" && pathname.startsWith("/partners/"));
            return (
              <Link
                key={href}
                href={href}
                className={`flex min-h-8 items-center gap-2 rounded-lg px-3 py-2 transition ${active ? "bg-[#142f55] font-semibold text-white shadow-[0_3px_8px_rgba(20,47,85,0.22)]" : "hover:bg-slate-50"}`}
              >
                <Icon className="h-3 w-3" />
                {label}
              </Link>
            );
          })}
        </nav>
        <div className="mt-auto border-t border-slate-100 px-4 py-4 text-[8px] leading-tight text-slate-500">
          <div className="font-semibold text-slate-700">Harare, Zimbabwe</div>
          <div>9–11 March 2026</div>
        </div>
      </aside>

      <main className="min-h-screen px-4 pb-20 pt-6 sm:px-6 md:ml-[168px] md:px-10 md:pb-10 md:pt-5">
        <div className="mx-auto w-full max-w-[540px]">{children}</div>
      </main>

      <nav aria-label="Mobile navigation" className="fixed inset-x-0 bottom-0 z-20 grid grid-cols-3 border-t border-slate-200 bg-white/95 px-3 py-2 backdrop-blur md:hidden">
        {navigation.map(({ label, href, icon: Icon }) => {
          const active = pathname === href || (href === "/partners" && pathname.startsWith("/partners/"));
          return (
            <Link key={href} href={href} className={`flex flex-col items-center gap-1 text-[9px] ${active ? "font-semibold text-[#142f55]" : "text-slate-400"}`}>
              <Icon className="h-4 w-4" />
              {label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
