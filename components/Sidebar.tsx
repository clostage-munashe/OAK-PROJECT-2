"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Sidebar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Register", href: "/register" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <aside className="hidden md:flex fixed top-0 left-0 z-40 h-screen w-72 flex-col justify-between">
      {/* HEADER */}
      <div className="flex items-center justify-between px-5 py-5">
        <img src="/logo.png" alt="Oak Foundation logo" className="h-10 w-10" />
        <p className="mt-1 text font-medium text-gray-500">PARTNER CONVENING 2026</p>
      </div>

      {/* MOBILE BUTTON */}
      <button
        type="button"
        onClick={() => setMenuOpen((prev) => !prev)}
        className="rounded-lg border border-gray-300 bg-white p-2 lg:hidden"
        aria-label="Toggle navigation menu"
      >
        <span className="block h-0.5 w-4 bg-gray-700" />
        <span className="mt-1 block h-0.5 w-4 bg-gray-700" />
        <span className="mt-1 block h-0.5 w-4 bg-gray-700" />
      </button>

      {/* NAVIGATION */}
      <nav className={`px-4 ${menuOpen ? "block" : "hidden"} lg:block lg:px-3`}>
        <div className="border-t border-dashed border-sky-400 pt-4">
          <ul className="list-none p-0 m-0">
            {links.map((link) => {
              const isActive = pathname === link.href;

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`mb-2 block rounded-xl px-4 py-3 text-sm font-medium ${
                      isActive ? "bg-gray-900 text-white" : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* BOTTOM INFORMATION */}
      <div className="hidden border-t p-5 lg:absolute lg:bottom-0 lg:left-0 lg:right-0 lg:block">
        <p className="text-sm text-gray-500">Harare, Zimbabwe</p>
        <p className="mt-1 text-xs text-gray-400">9-11 March 2026</p>
      </div>
    </aside>
  );
}