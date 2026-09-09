import { BadgeCheck, CheckCircle2, Download } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import Sidebar from '@/Components/Sidebar';

const attendee = {
  name: 'Tinashe Smith',
  organisation: 'uncommon.org',
  role: 'Partner',
  email: 'tinashe@uncommon.org',
  eventDates: '9–11 March 2026',
  location: 'Harare, Zimbabwe',
  qrCode: 'OAK-2026-7842-XKPH',
};

export default function PassPage() {
  return (
    <div className="app-shell">
      <Sidebar active="register" />

      <main className="content-shell">
        <div className="content-panel">
          <div className="pass-banner">
            <div className="pass-banner-badge">
              <CheckCircle2 className="h-5 w-5 text-emerald-300" />
            </div>
            <div className="pass-banner-copy">
              <small>Registration complete</small>
              <h2>You&apos;re Registered, Tinashe!</h2>
              <p>{attendee.organisation}</p>
            </div>
          </div>

          <section className="pass-card">
            <div className="qr-label">Your entry pass</div>
            <div className="qr-box">
              <div className="qr-code">
                <QRCodeSVG value={attendee.qrCode} size={180} bgColor="#ffffff" fgColor="#122d4d" level="H" />
              </div>
              <div className="qr-id">{attendee.qrCode}</div>
              <div className="pass-note">Present at event entrance for check-in</div>
            </div>
          </section>

          <section className="pass-details">
            <h3 className="pass-details-header">Registration details</h3>
            <div className="details-list">
              <div className="detail-row"><span>Name</span><span>{attendee.name}</span></div>
              <div className="detail-row"><span>Organisation</span><span>{attendee.organisation}</span></div>
              <div className="detail-row"><span>Role</span><span>{attendee.role}</span></div>
              <div className="detail-row"><span>Email</span><span>{attendee.email}</span></div>
              <div className="detail-row"><span>Event dates</span><span>{attendee.eventDates}</span></div>
              <div className="detail-row"><span>Location</span><span>{attendee.location}</span></div>
            </div>
          </section>

          <div style={{ display: 'grid', gap: 10 }}>
            <button className="primary-action" type="button">
              <Download className="h-5 w-5" />
              Download QR Code
            </button>
            <button className="secondary-link" type="button" style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}>
              <BadgeCheck className="h-4 w-4 mr-2" />
              Register another attendee
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}