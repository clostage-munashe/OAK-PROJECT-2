import Link from "next/link";
import { ArrowLeft, ChevronRight, ExternalLink, Globe, Mail } from "lucide-react";

export default function PartnersContact() {
  return (
    <section className="space-y-3 py-3">

      {/* ── Back link ── */}
      <Link
        href="/partners"
        className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#142b4d] hover:text-slate-900 transition"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        Partner Directory
      </Link>

      {/* ── Partner Hero Card ── */}
      <div className="relative overflow-hidden rounded-[18px] bg-gradient-to-br from-[#172b4d] to-[#1c3d6e] p-4 text-white shadow-[0_4px_16px_rgba(20,43,77,0.18)]">
        {/* Decorative circle */}
        <div className="absolute bottom-[-32px] right-[-28px] h-32 w-32 rounded-full bg-white/10" />

        <div className="flex items-center gap-3 mb-3">
          {/* Logo box */}
          <div className="flex h-11 w-11 items-center justify-center rounded-[12px] border border-white/20 bg-white/15 text-[11px] font-bold text-white shrink-0">
            OSF
          </div>

          {/* Name + meta */}
          <div>
            <div className="text-[8px] font-semibold uppercase tracking-[0.16em] text-slate-300 mb-0.5">
              FOUNDATION · PARTNER SINCE 2018
            </div>
            <div className="text-[18px] font-bold leading-tight text-white">
              Open Society Foundations
            </div>
          </div>
        </div>

        {/* Category tags */}
        <div className="flex gap-1.5">
          {["Democracy", "Human Rights", "Justice"].map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-white/15 px-2.5 py-1 text-[10px] font-medium text-white"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* ── About ── */}
      <div className="rounded-[16px] border border-slate-100 bg-white px-4 py-4 shadow-[0_2px_8px_rgba(20,43,77,0.07)]">
        <div className="mb-2 text-[9px] font-bold uppercase tracking-[0.16em] text-slate-400">
          About
        </div>
        <p className="text-[12px] leading-[1.55] text-slate-600">
          Open Society Foundations builds vibrant and tolerant democracies. OAK partnership
          covers digital rights and justice initiatives across Eastern Europe and Central Asia.
        </p>
      </div>

      {/* ── Contact at Convening ── */}
      <div className="rounded-[16px] border border-slate-100 bg-white px-4 py-4 shadow-[0_2px_8px_rgba(20,43,77,0.07)]">
        <div className="mb-3 text-[9px] font-bold uppercase tracking-[0.16em] text-slate-400">
          Contact at Convening
        </div>
        <div className="flex items-center gap-3">
          {/* Avatar */}
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-[#19365f] text-[10px] font-bold text-white">
            MS
          </div>
          <div>
            <div className="text-[13px] font-bold text-slate-900">Maria Schmidt</div>
            <a
              href="mailto:m.schmidt@osf.org"
              className="text-[11px] text-slate-400 hover:underline"
            >
              m.schmidt@osf.org
            </a>
          </div>
        </div>
      </div>

      {/* ── Actions ── */}
      <div className="space-y-2.5">
        {/* Visit Website */}
        <a
          href="https://opensocietyfoundations.org"
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center gap-2 rounded-[13px] bg-[#19365f] px-4 py-3 text-[12px] font-semibold text-white shadow-sm transition hover:bg-[#1e3d6e]"
        >
          <Globe className="h-4 w-4 shrink-0" />
          Visit Website
          <ExternalLink className="ml-auto h-3.5 w-3.5 text-slate-300" />
        </a>

        {/* Send Message */}
        <button
          type="button"
          className="flex w-full items-center gap-2 rounded-[13px] border border-slate-200 bg-white px-4 py-3 text-[12px] font-semibold text-slate-800 shadow-sm transition hover:bg-slate-50"
        >
          <Mail className="h-4 w-4 shrink-0 text-slate-500" />
          Send Message
          <ChevronRight className="ml-auto h-4 w-4 text-slate-300" />
        </button>
      </div>

    </section>
  );
}