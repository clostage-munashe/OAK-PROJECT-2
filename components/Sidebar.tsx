"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ScanLine, UserPlus, Calendar, Globe2, LayoutGrid, MapPin } from "lucide-react";

const navItems = [
  { label: "Check In", href: "/", icon: ScanLine },
  { label: "Register", href: "/register", icon: UserPlus },
  { label: "Programme", href: "/programme", icon: Calendar },
  { label: "Partners", href: "/partners", icon: Globe2 },
  { label: "Attendance", href: "/attendance", icon: LayoutGrid },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-screen w-64 shrink-0 flex-col justify-between border-r border-slate-200 bg-white px-6 py-8">
      <div>
        <div className="mb-1 flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-navy-900 text-xs font-bold text-navy-900">
            OAK
          </div>
          <span className="text-sm font-semibold tracking-wide text-navy-900">
            FOUNDATION
          </span>
        </div>
        <p className="mb-8 text-xs font-medium tracking-wide text-slate-400">
          PARTNER CONVENING 2026
        </p>

        <nav className="flex flex-col gap-1">
          {navItems.map(({ label, href, icon: Icon }) => {
            const active = pathname === href;
            return (
              <Link
                key={label}
                href={href}
                className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                  active
                    ? "bg-navy-900 text-white"
                    : "text-slate-500 hover:bg-slate-50"
                }`}
              >
                <Icon size={18} />
                {label}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="flex items-center gap-3 border-t border-slate-100 pt-4">
        <MapPin size={18} className="text-slate-400" />
        <div>
          <p className="text-sm font-medium text-slate-700">Harare, Zimbabwe</p>
          <p className="text-xs text-slate-400">9–11 March 2026</p>
        </div>
      </div>
    </aside>
  );
}