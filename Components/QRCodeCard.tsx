'use client';

import { QRCodeSVG } from 'qrcode.react';

interface QRCodeCardProps {
  qrCodeId: string;
  size?: number;
}

export default function QRCodeCard({ qrCodeId, size = 200 }: QRCodeCardProps) {
  return (
    <div className="flex flex-col items-center justify-center p-4 bg-white rounded-xl shadow-inner border border-gray-100">
      <QRCodeSVG
        value={qrCodeId}
        size={size}
        level="H" // High error correction for fast camera scanning
        includeMargin={true}
      />
      <p className="mt-2 text-xs font-mono text-gray-400 select-all">
        {qrCodeId}
      </p>
    </div>
  );
}