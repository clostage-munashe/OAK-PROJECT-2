'use client';

import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { CheckCircle2, Download, RotateCcw } from 'lucide-react';

interface QRCodeCardProps {
  qrCodeId?: string;
  size?: number;
  userName?: string;
  organisation?: string;
  role?: string;
  email?: string;
  eventDates?: string;
  location?: string;
}

export default function QRCodeCard({
  qrCodeId = 'OAK-2026-7842-XKPH',
  size = 180,
  userName = 'tinashe smith',
  organisation = 'uncommon.org',
  role = 'Partner',
  email = 'tinashe@uncommon.org',
  eventDates = '9–11 March 2026',
  location = 'Harare, Zimbabwe',
}: QRCodeCardProps) {
  return (
    <div className="w-full max-w-xl mx-auto space-y-6">
      {/* Success Banner */}
      <div className="bg-[#0f1e38] text-white rounded-2xl p-6 shadow-md relative overflow-hidden flex items-center justify-between">
        <div className="space-y-1">
          <div className="text-[11px] font-semibold tracking-widest uppercase text-blue-300">
            Registration Complete
          </div>
          <h2 className="text-2xl font-bold tracking-tight">
            You&apos;re Registered, {userName.split(' ')[0]}!
          </h2>
          <p className="text-xs text-gray-300">{organisation}</p>
        </div>
        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
          <CheckCircle2 className="w-6 h-6 text-emerald-400" />
        </div>
      </div>

      {/* QR Code Container */}
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center space-y-4">
        <div className="text-xs font-semibold tracking-widest text-gray-400 uppercase">
          Your Entry Pass
        </div>
        
        {/* Dynamic QR Code from qrcode.react */}
        <div className="flex justify-center py-2">
          <div className="p-4 bg-white border border-gray-100 rounded-2xl shadow-sm inline-block">
            <QRCodeSVG
              value={qrCodeId}
              size={size}
              level="H" // High error correction for fast camera scanning
              includeMargin={false}
            />
          </div>
        </div>

        <div className="space-y-1">
          <p className="text-xs font-mono font-medium text-gray-600 tracking-wider select-all">
            {qrCodeId}
          </p>
          <p className="text-[11px] text-gray-400">
            Present at event entrance for check-in
          </p>
        </div>
      </div>

      {/* Registration Details Table */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
        <div className="text-[11px] font-semibold tracking-widest text-gray-400 uppercase">
          Registration Details
        </div>

        <div className="divide-y divide-gray-100 text-sm">
          <div className="py-2.5 flex justify-between items-center">
            <span className="text-gray-400">Name</span>
            <span className="font-medium text-gray-800">{userName}</span>
          </div>
          <div className="py-2.5 flex justify-between items-center">
            <span className="text-gray-400">Organisation</span>
            <span className="font-medium text-gray-800">{organisation}</span>
          </div>
          <div className="py-2.5 flex justify-between items-center">
            <span className="text-gray-400">Role</span>
            <span className="font-medium text-gray-800">{role}</span>
          </div>
          <div className="py-2.5 flex justify-between items-center">
            <span className="text-gray-400">Email</span>
            <span className="font-medium text-gray-800">{email}</span>
          </div>
          <div className="py-2.5 flex justify-between items-center">
            <span className="text-gray-400">Event Dates</span>
            <span className="font-medium text-gray-800">{eventDates}</span>
          </div>
          <div className="py-2.5 flex justify-between items-center">
            <span className="text-gray-400">Location</span>
            <span className="font-medium text-gray-800">{location}</span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3 pt-2">
        <button className="w-full bg-[#0f1e38] hover:bg-[#162b4d] text-white font-medium py-3.5 px-4 rounded-xl shadow-sm flex items-center justify-center gap-2 transition-colors cursor-pointer">
          <Download className="w-4 h-4" />
          Download QR Code
        </button>

        <div className="text-center">
          <button className="inline-flex items-center gap-1.5 text-xs text-gray-500 hover:text-gray-800 transition-colors py-1 cursor-pointer">
            <RotateCcw className="w-3.5 h-3.5" />
            Register another attendee
          </button>
        </div>
      </div>
    </div>
  );
}