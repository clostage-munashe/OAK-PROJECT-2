import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function GET() {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    return NextResponse.json({ configured: false, attendees: [] });
  }

  const supabase = await createClient();
  const { data, error } = await supabase
    .from("attendees")
    .select("id, full_name, email, phone, organisation, job_title, dietary_requirements, accessibility_requirements, consent, created_at")
    .order("created_at", { ascending: false });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({
    configured: true,
    attendees: (data ?? []).map((attendee) => ({
      id: attendee.id,
      name: attendee.full_name,
      email: attendee.email,
      phone: attendee.phone ?? "",
      organisation: attendee.organisation ?? "",
      jobTitle: attendee.job_title ?? "",
      dietaryRequirements: attendee.dietary_requirements ?? "",
      accessibilityRequirements: attendee.accessibility_requirements ?? "",
      consentedAt: attendee.created_at,
      createdAt: attendee.created_at,
    })),
  });
}