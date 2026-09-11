import Link from 'next/link';
import { ChevronRight, ExternalLink, Search } from 'lucide-react';

export default function Partner() {
  return (
    <section className="space-y-6">
{/* ================= PARTNER DIRECTORY MAIN LIST ================= */}
        <section className="space-y-6">
          <div className="hero-content space-y-1">
            <h3 className="text-2xl font-bold text-slate-900">Partner Directory</h3>
            <h5 className="text-xs text-slate-500 font-medium">8 partner organisations</h5>
          </div>

          <div className="cards bg-slate-200/60 p-4 rounded-2xl space-y-3">
            <div className="card1-header flex items-center gap-2 bg-white px-3 py-2 rounded-xl text-xs text-slate-400 shadow-sm">
              <Search className="w-4 h-4 text-slate-400" />
              search organisations, focus areas...
            </div>
            <div className="partners-min-section flex gap-1.5 overflow-x-auto text-[11px] font-medium pb-1">
              <span className="part1 bg-[#122B49] text-white px-3 py-1 rounded-full shrink-0">All Regions</span>
              <span className="part2 bg-white text-slate-600 px-3 py-1 rounded-full shrink-0">Global</span>
              <span className="part3 bg-white text-slate-600 px-3 py-1 rounded-full shrink-0">Sub-Saharan Africa</span>
              <span className="part4 bg-white text-slate-600 px-3 py-1 rounded-full shrink-0">Northern Europe</span>
              <span className="part5 bg-white text-slate-600 px-3 py-1 rounded-full shrink-0">Middle East & North Africa</span>
            </div>
          </div>

          {/* Sub Partners Row */}
          <div className="space-y-2">
            <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase">SUB-PARTNERS</span>
            <div className="grid grid-cols-3 gap-3">
              {[
                { topic: "OSF", name: "OSF", region: "Global" },
                { topic: "ACA", name: "ACA", region: "Sub-Saharan Africa" },
                { topic: "NEC", name: "NEC", region: "Northern Europe" },
              ].map((sub, i) => (
                <div key={i} className="sub-partners-cards bg-white p-3 rounded-2xl shadow-sm text-center space-y-1 border border-slate-100">
                  <div className="card1-topic w-9 h-9 bg-[#122B49] text-white text-xs font-bold rounded-full mx-auto flex items-center justify-center">{sub.topic}</div>
                  <div className="card1-header font-bold text-xs text-slate-900">{sub.name}</div>
                  <div className="card1-section text-[10px] text-slate-400">{sub.region}</div>
                </div>
              ))}
            </div>
          </div>

          {/* All Partners Cards */}
          <div className="all-partners-cards space-y-3">
            <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase">ALL PARTNERS</span>
            
            {[
              { code: "OSF", name: "Open Society Foundations", reg: "Global", tags: ["Foundation", "Democracy", "Human Rights"], since: "2018", link: "opensocietyfoundations.org" },
              { code: "ACA", name: "Africa Climate Alliance", reg: "Sub-Saharan Africa", tags: ["NGO", "Climate Justice", "Youth Advocacy"], since: "2020", link: "africaclimatealliance.org" },
              { code: "NEC", name: "Nordic Evaluation Centre", reg: "Northern Europe", tags: ["Research", "Evaluation", "Learning"], since: "2021", link: "nordicevaluation.org" },
              { code: "MRG", name: "MENA Rights Group", reg: "Middle East & North Africa", tags: ["NGO", "Human Rights", "Documentation"], since: "2019", link: "menarights.org" },
              { code: "DFI", name: "Digital Frontiers Institute", reg: "Global / East Africa", tags: ["Research", "Digital Rights", "Internet Freedom"], since: "2022", link: "digitalfrontiers.org" },
              { code: "GAL", name: "Global Advocacy Lab", reg: "Global", tags: ["NGO", "Communications", "Campaigns"], since: "2023", link: "globaladvocacylab.org" },
              { code: "SP", name: "Sciences Po Paris", reg: "Western Europe", tags: ["Academic", "Research", "Policy"], since: "2020", link: "sciencespo.fr" },
              { code: "EFG", name: "Environmental Funders Group", reg: "Europe", tags: ["Network", "Environment", "Climate"], since: "2017", link: "envfunders.eu" },
            ].map((p, i) => (
              <Link href="/partners/osf" key={i} className="block rounded-2xl border border-slate-100 bg-white p-4 shadow-[0_3px_9px_rgba(24,42,68,0.08)] transition hover:-translate-y-0.5">
                <ChevronRight className="w-4 h-4 text-slate-300 absolute top-4 right-4" />
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#122B49] text-white text-xs font-bold rounded-full flex items-center justify-center shrink-0">{p.code}</div>
                  <div>
                    <h5 className="font-bold text-xs text-slate-900">{p.name}</h5>
                    <div className="text-[10px] text-slate-400">{p.reg}</div>
                  </div>
                </div>
                <div className="flex gap-1.5 flex-wrap">
                  {p.tags.map((t, idx) => (
                    <span key={idx} className="bg-slate-100 text-slate-600 text-[10px] px-2 py-0.5 rounded-full font-medium">{t}</span>
                  ))}
                </div>
                <div className="flex justify-between items-center text-[10px] text-slate-400 pt-1 border-t border-slate-50">
                  <div className="partnership-section">Partner since {p.since}</div>
                  <a href={`https://${p.link}`} className="card1-link flex items-center gap-1 font-semibold text-slate-700 hover:underline">
                    {p.link} <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <hr className="border-slate-300 my-8" />
    </section>
  );
}
