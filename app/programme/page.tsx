import Sidebar from '@/Components/Sidebar';
import { CalendarDays, Clock3, MapPin, Sparkles } from 'lucide-react';

const sessions = [
  { time: '09:00', title: 'Opening welcome', track: 'Main Hall' },
  { time: '10:30', title: 'Partner spotlight', track: 'Strategy Room' },
  { time: '13:00', title: 'Collaboration roundtables', track: 'Breakout Lab' },
  { time: '15:30', title: 'Closing reflection', track: 'Main Hall' },
];

export default function ProgrammePage() {
  return (
    <div className="app-shell">
      <Sidebar active="programme" />

      <main className="content-shell">
        <div className="content-panel">
          <header className="event-header" style={{ textAlign: 'left', paddingBottom: 20 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div className="pass-banner-badge" style={{ width: 42, height: 42, background: 'rgba(255,255,255,0.08)' }}>
                <CalendarDays className="h-5 w-5" />
              </div>
              <div>
                <h1 style={{ fontSize: 'clamp(2rem, 2vw, 2.4rem)' }}>Programme</h1>
                <p style={{ marginTop: 6, textAlign: 'left' }}>Harare • 9–11 March 2026</p>
              </div>
            </div>
          </header>

          <div className="register-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
              <Sparkles className="h-4 w-4 text-slate-500" />
              <h2 className="form-heading" style={{ margin: 0 }}>Featured agenda</h2>
            </div>

            <div style={{ display: 'grid', gap: 12 }}>
              {sessions.map((session) => (
                <div key={session.time} style={{ border: '1px solid #e2e8f0', borderRadius: 14, background: '#f7f9fb', padding: '16px 18px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                    <div style={{ background: '#e8edf6', borderRadius: 10, minWidth: 70, textAlign: 'center', padding: '8px 10px', color: '#122d4d', fontWeight: 700 }}>
                      {session.time}
                    </div>
                    <div>
                      <div style={{ fontSize: '1.02rem', fontWeight: 700, color: '#17263b' }}>{session.title}</div>
                      <div style={{ fontSize: '0.75rem', color: '#74839a', letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: 4 }}>{session.track}</div>
                    </div>
                  </div>
                  <div style={{ color: '#6a7d96', display: 'flex', alignItems: 'center', gap: 6 }}>
                    <Clock3 className="h-4 w-4" />
                    <span style={{ fontSize: '0.8rem' }}>Session</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pass-details" style={{ marginTop: 6 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
              <MapPin className="h-4 w-4 text-slate-500" />
              <div className="pass-details-header" style={{ margin: 0 }}>Venue</div>
            </div>
            <div style={{ color: '#354563', fontWeight: 600, fontSize: '1rem' }}>The Heritage Centre, Harare, Zimbabwe</div>
          </div>
        </div>
      </main>
    </div>
  );
}
