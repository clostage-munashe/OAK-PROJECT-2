import Link from 'next/link';
import { ArrowLeft, ChevronRight, ExternalLink, Globe, Mail } from 'lucide-react';

export default function PartnersContact() {
  return (
  <section className="space-y-4">

    {/* Back button */}
    <Link href="/partners" className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-slate-900">
      <ArrowLeft className="w-3.5 h-3.5" />
      Partner Directory
    </Link>


    {/* Partner Header */}
    <div className="relative overflow-hidden space-y-4 rounded-2xl bg-[#122B49] p-5 text-white shadow-md">

      {/* Decorative circle */}
      <div className="absolute right-[-20px] bottom-[-20px] h-36 w-36 rounded-full bg-white/5" />

      <div className="flex items-center gap-3">

        {/* Logo */}
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-xs font-bold text-white">
          OSF
        </div>

        {/* Partner information */}
        <div>
          <div className="text-[9px] font-bold uppercase tracking-widest text-slate-300">
            FOUNDATION · PARTNER SINCE 2018
          </div>

          <div className="text-base font-bold text-white">
            Open Society Foundations
          </div>
        </div>

      </div>


      {/* Categories */}
      <div className="flex gap-1.5">

        <span className="rounded-full bg-white/15 px-2.5 py-0.5 text-[10px] text-white">
          Democracy
        </span>

        <span className="rounded-full bg-white/15 px-2.5 py-0.5 text-[10px] text-white">
          Human Rights
        </span>

        <span className="rounded-full bg-white/15 px-2.5 py-0.5 text-[10px] text-white">
          Justice
        </span>

      </div>

    </div>


    {/* About */}
    <div className="space-y-1.5 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">

      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
        ABOUT
      </div>

      <p className="text-xs leading-relaxed text-slate-600">
        Open Society Foundations builds vibrant and tolerant democracies.
        OAK partnership covers digital rights and justice initiatives across
        Eastern Europe and Central Asia.
      </p>

    </div>


    {/* Contact */}
    <div className="space-y-2 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">

      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
        CONTACT AT CONVENING
      </div>

      <div className="flex items-center gap-3">

        {/* Contact avatar */}
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#122B49] text-xs font-bold text-white">
          MS
        </div>

        <div>

          <div className="text-xs font-bold text-slate-900">
            Maria Schmidt
          </div>

          <a
            href="mailto:m.schmidt@osf.org"
            className="text-[11px] text-slate-400 hover:underline"
          >
            m.schmidt@osf.org
          </a>

        </div>

      </div>

    </div>


    {/* Actions */}
    <div className="space-y-2 pt-1">

      {/* Website */}
      <a
        href="https://opensocietyfoundations.org"
        className="
          flex w-full items-center justify-center gap-2
          rounded-xl
          bg-[#122B49]
          py-2.5
          text-xs
          font-semibold
          text-white
          shadow-sm
          transition
          hover:bg-slate-800
        "
      >
        <Globe className="h-3.5 w-3.5" />

        Visit Website

        <ExternalLink className="ml-auto h-3 w-3 text-slate-400" />
      </a>


      {/* Send message */}
      <button
        className="
          flex w-full items-center justify-center gap-2
          rounded-xl
          border
          border-slate-200
          bg-white
          py-2.5
          text-xs
          font-semibold
          text-slate-800
          shadow-sm
          transition
          hover:bg-slate-50
        "
      >
        <Mail className="h-3.5 w-3.5 text-slate-500" />

        Send Message

        <ChevronRight className="ml-auto h-3 w-3 text-slate-300" />
      </button>

    </div>

  </section>
  );
}