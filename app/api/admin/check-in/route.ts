import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function GET(request: Request) {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    return NextResponse.json({ configured: false, checkIns: [] });
  }
  const date = new URL(request.url).searchParams.get("date") || new Date().toISOString().slice(0, 10);
  const supabase = await createClient();
  const { data, error } = await supabase.from("check_ins").select("attendee_id, date, checked_in_at").eq("date", date).order("checked_in_at", { ascending: false });
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ configured: true, checkIns: data ?? [] });
}

export async function POST(request: Request) {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    return NextResponse.json({ configured: false });
  }

  const body = await request.json().catch(() => null) as { attendeeId?: string; date?: string } | null;
  if (!body?.attendeeId) return NextResponse.json({ error: "attendeeId is required" }, { status: 400 });

  const date = body.date || new Date().toISOString().slice(0, 10);
  const supabase = await createClient();
  const { data: existing, error: lookupError } = await supabase
    .from("check_ins")
    .select("attendee_id, date, checked_in_at")
    .eq("attendee_id", body.attendeeId)
    .eq("date", date)
    .maybeSingle();

  if (lookupError) return NextResponse.json({ error: lookupError.message }, { status: 500 });
  if (existing) return NextResponse.json({ configured: true, added: false, checkIn: existing });

  const { data, error } = await supabase
    .from("check_ins")
    .insert({ attendee_id: body.attendeeId, date, checked_in_at: new Date().toISOString() })
    .select("attendee_id, date, checked_in_at")
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ configured: true, added: true, checkIn: data });
}