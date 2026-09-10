"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Sidebar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Check In", href: "/" , icon: "⌾"},
    { name: "Programme", href: "/programme", icon: "▤" },
    { name: "Partners", href: "/partners", icon: "♧" },
    { name: "Attendance", href: "/attendance", icon: "♢" },
  ];

  return (
    <aside className="app-sidebar">
      {/* HEADER */}
      <div className="sidebar-brand">
        <img src="/Logo-Oak-Foundation.svg (1) 1.svg" alt="Oak Foundation logo" />
        <p>PARTNER CONVENING 2026</p>
      </div>

      {/* MOBILE BUTTON */}
      <button
        type="button"
        onClick={() => setMenuOpen((prev) => !prev)}
        className="sidebar-toggle"
        aria-label="Toggle navigation menu"
      >
        <span className="block h-0.5 w-4 bg-gray-700" />
        <span className="mt-1 block h-0.5 w-4 bg-gray-700" />
        <span className="mt-1 block h-0.5 w-4 bg-gray-700" />
      </button>

      {/* NAVIGATION */}
      <nav className={`sidebar-nav ${menuOpen ? "is-open" : ""}`}>
        <div className="sidebar-nav-rule">
          <ul>
            {links.map((link) => {
              const isActive = pathname === link.href;

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`sidebar-link ${isActive ? "is-active" : ""}`}
                  >
                    <span className="sidebar-link-icon" aria-hidden="true">{link.icon}</span>
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* BOTTOM INFORMATION */}
      <div className="sidebar-footer">
        <span className="avatar">H</span>
        <div>
          <p>Harare, Zimbabwe</p>
          <small>9-11 March 2026</small>
        </div>
      </div>
    </aside>
  );
}