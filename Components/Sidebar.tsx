'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { UserCheck, CalendarDays, Globe, MapPin } from 'lucide-react';

type SidebarProps = {
  active?: 'register' | 'programme' | 'partners';
};

export default function Sidebar({ active }: SidebarProps) {
  const pathname = usePathname();
  const current = active ?? (pathname.startsWith('/programme') ? 'programme' : pathname.startsWith('/partners') ? 'partners' : 'register');

  const navItems = [
    { key: 'register', label: 'Register', href: '/register', icon: UserCheck },
    { key: 'programme', label: 'Programme', href: '/programme', icon: CalendarDays },
    { key: 'partners', label: 'Partners', href: '/partners', icon: Globe },
  ] as const;

  return (
    <aside className="w-[280px] bg-white/80 border-r border-slate-200/80 backdrop-blur-sm hidden md:flex flex-col justify-between h-screen sticky top-0 left-0 shadow-[inset_-1px_0_0_rgba(15,23,42,0.06)]">
      <div>
        <div className="px-6 pt-8 pb-5">
          <div className="flex items-center gap-2">
            <div className="text-[2.1rem] font-semibold tracking-[-0.09em] text-slate-800 leading-none">OAK</div>
          </div>
          <p className="mt-1 text-[9px] tracking-[0.32em] uppercase text-slate-500 font-semibold">Foundation</p>
          <div className="mt-7 text-[0.72rem] tracking-[0.16em] text-slate-500 uppercase font-semibold">
            Partner Convening 2026
          </div>
        </div>

        <nav className="px-4 py-2 space-y-2">
          {navItems.map(({ key, label, href, icon: Icon }) => {
            const isActive = current === key;

            return (
              <Link
                key={key}
                href={href}
                className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-medium transition-colors ${
                  isActive ? 'bg-[#122d4d] text-white shadow-sm' : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <Icon className="h-4 w-4" />
                {label}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="px-5 pb-5 pt-4 border-t border-slate-200/80">
        <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white border border-slate-200 text-slate-400">
            <MapPin className="h-4 w-4" />
          </div>
          <div>
            <div className="text-[0.8rem] font-semibold text-slate-800">Harare, Zimbabwe</div>
            <div className="text-[0.68rem] text-slate-400">9–11 March 2026</div>
          </div>
        </div>
      </div>
    </aside>
  );
}