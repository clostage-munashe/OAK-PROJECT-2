"use client";

import Link from "next/link";
import { ChevronRight, ExternalLink, Search } from "lucide-react";

const subPartners = [
  { code: "OSF", name: "OSF", region: "Global" },
  { code: "ACA", name: "ACA", region: "Sub-Saharan Africa" },
  { code: "NEC", name: "NEC", region: "Northern Europe" },
];

const partners = [
  { code: "OSF", name: "Open Society Foundations",   region: "Global",                    tags: ["Foundation", "Democracy", "Human Rights"],  since: "2018", link: "opensocietyfoundations.org" },
  { code: "ACA", name: "Africa Climate Alliance",     region: "Sub-Saharan Africa",        tags: ["NGO", "Climate Justice", "Youth Advocacy"],  since: "2020", link: "africaclimatealliance.org" },
  { code: "NEC", name: "Nordic Evaluation Centre",    region: "Northern Europe",           tags: ["Research", "Evaluation", "Learning"],        since: "2021", link: "nordicevaluation.org" },
  { code: "MRG", name: "MENA Rights Group",           region: "Middle East & North Africa",tags: ["NGO", "Human Rights", "Documentation"],      since: "2019", link: "menarights.org" },
  { code: "DFI", name: "Digital Frontiers Institute", region: "Global / East Africa",      tags: ["Research", "Digital Rights", "Internet Freedom"], since: "2022", link: "digitalfrontiers.org" },
  { code: "GAL", name: "Global Advocacy Lab",         region: "Global",                    tags: ["NGO", "Communications", "Campaigns"],        since: "2023", link: "globaladvocacylab.org" },
  { code: "SP",  name: "Sciences Po Paris",           region: "Western Europe",            tags: ["Academic", "Research", "Policy"],            since: "2020", link: "sciencespo.fr" },
  { code: "EFG", name: "Environmental Funders Group", region: "Europe",                    tags: ["Network", "Environment", "Climate"],         since: "2017", link: "envfunders.eu" },
];

const regions = ["All Regions", "Global", "Sub-Saharan Africa", "Northern Europe", "Middle East & North Africa"];

export default function Partner() {
  return (
    <section className="space-y-5 py-3">

      {/* ── Header ── */}
      <div className="space-y-0.5">
        <h1 className="text-[22px] font-bold text-slate-900">Partner Directory</h1>
        <p className="text-[12px] text-slate-400 font-medium">8 partner organisations</p>
      </div>

      {/* ── Search + Filters ── */}
      <div className="rounded-[16px] border border-slate-100 bg-white p-3 shadow-[0_2px_8px_rgba(24,42,68,0.08)] space-y-2.5">
        {/* Search */}
        <div className="flex h-[48px] items-center gap-2 rounded-[10px] bg-[#f4f6f8] px-3">
          <Search className="h-3.5 w-3.5 shrink-0 text-slate-400" />
          <span className="text-[12px] text-slate-400">Search organisations, focus areas...</span>
        </div>

        {/* Region pills */}
        <div className="flex gap-1.5 overflow-x-auto pb-0.5">
          {regions.map((r, i) => (
            <span
              key={r}
                className={`shrink-0 rounded-full px-3 py-1 text-[10px] font-medium ${
                i === 0
                  ? "bg-[#122B49] text-white"
                  : "bg-white text-slate-600 shadow-sm"
              }`}
            >
              {r}
            </span>
          ))}
        </div>
      </div>

      {/* ── Sub-Partners ── */}
      <div className="space-y-2.5">
        <span className="text-[10px] font-bold tracking-[0.04em] text-[#8b9fbb] uppercase">
          Sub-Partners
        </span>
        <div className="grid grid-cols-3 gap-2.5">
          {subPartners.map((sp) => (
            <div
              key={sp.code}
              className="flex h-[120px] flex-col items-center rounded-[16px] border border-slate-100 bg-white px-2 py-3 shadow-[0_2px_8px_rgba(24,42,68,0.10)] text-center"
            >
              <div className="flex h-[64px] w-[34px] items-center justify-center rounded-[16px] bg-[#122B49] text-[14px] font-bold text-white">
                {sp.code}
              </div>
              <div className="mt-3 text-[16px] font-bold leading-none text-slate-900">{sp.name}</div>
              <div className="mt-3 text-[14px] leading-none text-[#8b9fbb]">{sp.region}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── All Partners ── */}
      <div className="space-y-2.5">
        <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase">
          All Partners
        </span>

        <div className="space-y-2">
          {partners.map((p) => (
            <Link
              href="/partners/osf"
              key={p.code}
              className="relative block h-[144px] rounded-[16px] border border-slate-100 bg-white p-4 shadow-[0_2px_8px_rgba(24,42,68,0.07)] transition hover:-translate-y-0.5"
            >
              <ChevronRight className="absolute right-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-300" />

              {/* Avatar + name */}
              <div className="flex items-center gap-3 mb-2.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-[#122B49] text-[10px] font-bold text-white">
                  {p.code}
                </div>
                <div>
                  <div className="text-[13px] font-bold text-slate-900 leading-tight">{p.name}</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">{p.region}</div>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-3">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-600"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between border-t border-slate-50 pt-2.5 text-[10px] text-slate-400">
                <span>Partner since {p.since}</span>
                <a
                  href={`https://${p.link}`}
                  className="flex items-center gap-1 font-medium text-slate-600 hover:underline"
                  onClick={(e) => e.stopPropagation()}
                >
                  {p.link}
                  <ExternalLink className="h-2.5 w-2.5" />
                </a>
              </div>
            </Link>
          ))}
        </div>
      </div>

    </section>
  );
}
