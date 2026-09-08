import { createClient } from '@/lib/supabase/server';
import QRCodeCard from '@/Components/QRCodeCard';
import { notFound } from 'next/navigation';

export default async function PassPage({ params }: { params: { id: string } }) {
  const { id } = params;

  // Initialize Supabase server client from your lib/supabase/server.ts
  const supabase = await createClient();

  // Fetch attendee details using the unique QR ID
  const { data: attendee, error } = await supabase
    .from('attendees')
    .select('full_name, organization, role, qr_code_id')
    .eq('qr_code_id', id)
    .single();

  if (error || !attendee) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
        
        {/* Pass Header Banner */}
        <div className="bg-emerald-700 text-white p-6 text-center">
          <p className="text-xs font-semibold tracking-wider uppercase opacity-90">
            OAK Zimbabwe Partner Gathering
          </p>
          <h1 className="text-xl font-bold mt-1">Digital Access Pass</h1>
          <p className="text-xs opacity-75 mt-0.5">Cresta Lodge, Harare · 2026</p>
        </div>

        {/* Pass Content Body */}
        <div className="p-6 flex flex-col items-center text-center space-y-6">
          
          {/* Attendee Info */}
          <div className="space-y-1">
            <h2 className="text-2xl font-bold text-gray-900 leading-tight">
              {attendee.full_name}
            </h2>
            <p className="text-sm font-medium text-emerald-800">
              {attendee.role}
            </p>
            <p className="text-sm text-gray-500 font-medium">
              {attendee.organization}
            </p>
          </div>

          {/* QR Code Container */}
          <div className="w-full flex justify-center py-2">
            <QRCodeCard qrCodeId={attendee.qr_code_id} size={210} />
          </div>

          {/* Scanning Instructions */}
          <div className="bg-emerald-50 rounded-lg p-3 text-xs text-emerald-900 border border-emerald-100 w-full">
            Show this QR code at the check-in desk upon arrival each day for rapid scanning.
          </div>

        </div>

        {/* Card Footer */}
        <div className="bg-gray-50 px-6 py-3 border-t border-gray-100 text-center">
          <p className="text-[11px] text-gray-400">
            Official Event Pass · Non-Transferable
          </p>
        </div>

      </div>
    </main>
  );
}