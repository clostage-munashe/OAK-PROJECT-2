"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const programmeKey = "oak-programme-editor-v1";
const partnerKey = "oak-partner-editor-v1";

export default function ContentEditorPage() {
  const [programmePost, setProgrammePost] = useState(() => typeof window === "undefined" ? "Daily documentation posts will appear here after each convening day." : window.localStorage.getItem(programmeKey) ?? "Daily documentation posts will appear here after each convening day.");
  const [partnerUrl, setPartnerUrl] = useState(() => typeof window === "undefined" ? "https://opensocietyfoundations.org" : window.localStorage.getItem(partnerKey) ?? "https://opensocietyfoundations.org");
  const [saved, setSaved] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (window.sessionStorage.getItem("oak-admin") !== "true") {
      router.push("/admin");
      return;
    }
  }, [router]);

  function save() {
    window.localStorage.setItem(programmeKey, programmePost);
    window.localStorage.setItem(partnerKey, partnerUrl);
    setSaved(true);
  }

  return <main className="min-h-screen bg-[#f4f5f7] px-4 py-8"><div className="mx-auto max-w-2xl space-y-6"><header><Link href="/admin" className="text-xs font-semibold text-[#142f55] underline">Back to dashboard</Link><h1 className="mt-4 text-2xl font-bold text-[#142f55]">Content editors</h1><p className="mt-1 text-xs text-slate-500">Publish the public programme documentation and partner links.</p></header><section className="space-y-5 rounded-2xl bg-white p-6 shadow-sm"><div><label className="text-xs font-bold text-slate-700">Daily programme documentation</label><textarea value={programmePost} onChange={(event) => setProgrammePost(event.target.value)} rows={6} className="mt-2 w-full rounded-xl bg-slate-100 p-3 text-sm outline-none focus:ring-2 focus:ring-[#142f55]" /></div><div><label className="text-xs font-bold text-slate-700">Open Society Foundations website</label><input value={partnerUrl} onChange={(event) => setPartnerUrl(event.target.value)} type="url" className="mt-2 h-11 w-full rounded-xl bg-slate-100 px-3 text-sm outline-none focus:ring-2 focus:ring-[#142f55]" /></div><button type="button" onClick={save} className="rounded-xl bg-[#142f55] px-5 py-3 text-xs font-semibold text-white">Save public content</button>{saved && <p className="text-xs text-emerald-700">Content saved for this QA session.</p>}</section></div></main>;
}
