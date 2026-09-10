"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { QRCodeSVG } from "qrcode.react";
import { useEffect, useState } from "react";
import SiteShell from "../../site-shell";
import { createClient } from "@/lib/supabase/client";

type Attendee = {
  id: string;
  full_name: string;
  organisation: string | null;
  job_title: string | null;
};

export default function PassPage() {
  const params = useParams<{ id: string }>();

  const [attendee, setAttendee] = useState<Attendee | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadAttendeePass() {
      const supabase = createClient();

      const { data, error } = await supabase.rpc(
        "get_attendee_pass",
        {
          attendee_id: params.id,
        }
      );

      if (error) {
        console.error("Pass lookup error:", error);
        setAttendee(null);
        setLoading(false);
        return;
      }

      const pass = Array.isArray(data) ? data[0] : data;

      setAttendee(pass ?? null);
      setLoading(false);
    }

    if (params.id) {
      loadAttendeePass();
    }
  }, [params.id]);

  return (
    <SiteShell>
      <section className="space-y-5">

        {/* Header */}
        <header>
          <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-slate-400">
            OAK Partner Convening 2026
          </p>

          <h1 className="mt-1 text-[22px] font-bold text-[#142b4d]">
            Attendee pass
          </h1>
        </header>

        {/* Loading */}
        {loading && (
          <div className="rounded-2xl bg-white p-6 text-sm text-slate-500 shadow-sm">
            Loading your attendee pass...
          </div>
        )}

        {/* Not Found */}
        {!loading && !attendee && (
          <div className="rounded-2xl bg-white p-6 text-sm text-slate-500 shadow-sm">
            This pass could not be found. Please use the link from your
            registration confirmation.
          </div>
        )}

        {/* Pass */}
        {!loading && attendee && (
          <article className="overflow-hidden rounded-3xl bg-white shadow-[0_8px_30px_rgba(24,42,68,0.12)]">

            {/* Pass Header */}
            <div className="bg-[#142f55] p-6 text-white">

              <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-slate-300">
                Official attendee
              </p>

              <h2 className="mt-3 text-2xl font-bold">
                {attendee.full_name}
              </h2>

              <p className="mt-1 text-sm text-slate-300">
                {attendee.organisation || "Partner organisation"}
              </p>

              <p className="mt-4 text-xs text-slate-300">
                {attendee.job_title || "Partner attendee"}
              </p>

            </div>

            {/* QR Code */}
            <div className="flex flex-col items-center gap-4 p-7">

              <div className="rounded-2xl border border-slate-100 bg-white p-4">
                <QRCodeSVG
                  value={`oak-attendee:${attendee.id}`}
                  size={190}
                  level="M"
                  includeMargin
                />
              </div>

              <p className="text-center text-xs text-slate-500">
                Show this QR code at the welcome desk. It is unique to this
                attendee.
              </p>

              <Link
                href="/programme"
                className="text-xs font-semibold text-[#142f55] underline"
              >
                View programme
              </Link>

            </div>
          </article>
        )}

      </section>
    </SiteShell>
  );
}