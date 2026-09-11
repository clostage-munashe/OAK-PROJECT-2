import { Download, File, FileText, Image as ImageIcon, Lightbulb, Plus } from "lucide-react";

const notes = [
  ["MS", "Maria Schmidt", "Open Society Foundations", "Day 1 14:32", "The rights-based approaches session surfaced strong demand for a shared learning platform. OSF will follow up with MENA Rights Group on joint programming opportunities in the Mediterranean region."],
  ["JO", "James Odhiambo", "OAK Foundation", "Day 1 16:50", "Digital Rights breakout: participants want a working group to share tools for operating in restricted digital environments. Interested orgs: Digital Frontiers, Access Now, EFF."],
  ["AD", "Awa Diallo", "Geneva Secretariat", "Day 2 11:15", "Strategic communications workshop highly rated. Rashida's adaptive messaging framework is directly applicable across 60% of the portfolio. Requesting follow-up toolkit."],
  ["PAD", "Prof. Amara Diallo", "Sciences Po Paris", "Day 2 16:00", "Fishbowl revealed consensus: philanthropy needs to accept longer time horizons (10+ years) and better share learning. Key ask: OAK to publish failure cases alongside success stories."],
];

const photos = [
  "photo-1540575467063-178a50c2df87", "photo-1475721027785-f74eccf877e2", "photo-1531403009284-440f080d1e12",
  "photo-1517245386807-bb43f82c33c4", "photo-1522071820081-009f0129c71c", "photo-1507679799987-c73779587ccf",
];

const takeaways = [
  "Philanthropy needs to accept 10+ year time horizons for systemic change",
  "Shared learning infrastructure is the most requested resource across the portfolio",
  "Digital rights must be integrated into all programme areas, not siloed",
  "Rights-based framing significantly improves grantee advocacy effectiveness",
  "Peer exchange is rated more valuable than expert-led sessions (92% vs 74%)",
];

const resources = [
  ["Opening Plenary Presentation", "PDF · 3.2 MB · Day 1"],
  ["OAK Portfolio Overview 2024–26", "PDF · 1.8 MB · Day 2"],
  ["Action Planning Workbook", "DOCX · 0.9 MB · Day 3"],
  ["Partner Contact Directory", "XLSX · 0.4 MB · All Days"],
  ["Photo Gallery (High Res)", "ZIP · 184 MB · All Days"],
];

export default function ProgrammeView() {
  return (
    <section className="space-y-5">
      <header className="space-y-1.5">
        <h1 className="text-[18px] font-bold leading-none">Programme</h1>
        <p className="text-[9px] font-medium text-slate-400">OAK Partner Convening 2026</p>
        <div className="flex max-w-[275px] rounded-lg bg-[#e4e7ec] p-0.5 text-[8px] font-medium">
          <button className="flex-1 rounded-md bg-white py-1.5 font-semibold shadow-sm">Schedule</button>
          <button className="flex-1 rounded-md py-1.5 text-slate-600">Docs</button>
        </div>
      </header>

      <section className="space-y-2.5">
        <div className="flex items-center justify-between">
          <h2 className="flex items-center gap-1.5 text-[10px] font-bold"><FileText className="h-3 w-3" /> Session Notes</h2>
          <button className="flex items-center gap-1 rounded-md bg-[#142f55] px-2.5 py-1 text-[8px] font-semibold text-white"><Plus className="h-2.5 w-2.5" /> Add Note</button>
        </div>
        <div className="space-y-2">
          {notes.map(([initials, name, organisation, time, body]) => (
            <article key={name} className="space-y-2 rounded-xl border border-slate-100 bg-white p-3 shadow-[0_3px_9px_rgba(24,42,68,0.08)]">
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#142f55] text-[6px] font-bold text-white">{initials}</div>
                  <div><h3 className="text-[8px] font-bold text-slate-900">{name}</h3><p className="text-[7px] text-slate-400">{organisation}</p></div>
                </div>
                <time className="rounded bg-slate-50 px-1.5 py-0.5 text-[7px] text-slate-400">{time}</time>
              </div>
              <p className="text-[8px] leading-[1.45] text-slate-600">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-2.5">
        <div className="flex items-center justify-between"><h2 className="flex items-center gap-1.5 text-[10px] font-bold"><ImageIcon className="h-3 w-3" /> Photo Gallery</h2><span className="text-[8px] text-slate-400">6 photos</span></div>
        <div className="grid grid-cols-2 gap-1.5">
          {photos.map((photo) => <img key={photo} src={`https://images.unsplash.com/${photo}?w=500&q=80`} alt="Convening moment" className="h-[100px] w-full rounded-lg object-cover" />)}
        </div>
      </section>

      <section className="space-y-2.5">
        <h2 className="flex items-center gap-1.5 text-[10px] font-bold"><Lightbulb className="h-3 w-3" /> Key Takeaways</h2>
        <div className="space-y-2 rounded-xl border border-slate-100 bg-white p-3 shadow-[0_3px_9px_rgba(24,42,68,0.08)]">
          {takeaways.map((takeaway, index) => <div key={takeaway} className="flex items-start gap-2 text-[8px] leading-[1.35] text-slate-700"><span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#142f55] text-[7px] font-bold text-white">{index + 1}</span><span>{takeaway}</span></div>)}
        </div>
      </section>

      <section className="space-y-2.5 pb-4">
        <h2 className="flex items-center gap-1.5 text-[10px] font-bold"><Download className="h-3 w-3" /> Resources</h2>
        <div className="space-y-1.5">
          {resources.map(([title, meta]) => <div key={title} className="flex items-center justify-between rounded-xl border border-slate-100 bg-white p-2.5 shadow-[0_3px_9px_rgba(24,42,68,0.08)]"><div className="flex items-center gap-2"><span className="rounded-lg bg-slate-100 p-1.5 text-slate-500"><File className="h-3 w-3" /></span><div><h3 className="text-[8px] font-semibold text-slate-900">{title}</h3><p className="text-[7px] text-slate-400">{meta}</p></div></div><Download className="h-3 w-3 text-slate-400" /></div>)}
        </div>
      </section>
    </section>
  );
}
