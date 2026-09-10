import Link from 'next/link';
import Sidebar from '@/Components/Sidebar';
import { ArrowRight, Building2, Globe2, Sparkles } from 'lucide-react';

const partners = [
  { name: 'Uncommon.org', category: 'Education', focus: 'Youth advocacy & systems change' },
  { name: 'Aga Khan Foundation', category: 'Development', focus: 'Inclusive growth & community resilience' },
  { name: 'Open Society Initiative', category: 'Advocacy', focus: 'Policy influence & collaborative learning' },
  { name: 'Local Relief Network', category: 'Humanitarian', focus: 'Cross-sector response planning' },
];

export default function PartnersPage() {
  return (
    <div className="app-shell">
      <Sidebar active="partners" />

      <main className="content-shell">
        <div className="content-panel">
          <header className="event-header">
            <h1>Partner Directory</h1>
            <p>People and organisations shaping this convening</p>
          </header>

          <div className="register-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
              <Building2 className="h-4 w-4 text-slate-500" />
              <h2 className="form-heading" style={{ margin: 0 }}>Featured partners</h2>
            </div>

            <div style={{ display: 'grid', gap: 14 }}>
              {partners.map((partner) => (
                <Link
                  key={partner.name}
                  href="/pass"
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, border: '1px solid #e2e8f0', background: '#f8fafc', borderRadius: 16, padding: '18px 18px', boxShadow: '0 8px 18px rgba(15, 28, 44, 0.03)' }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                    <div style={{ width: 42, height: 42, borderRadius: 12, display: 'grid', placeItems: 'center', background: '#e5edf8', color: '#173259', fontWeight: 700 }}>
                      {partner.name.slice(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, color: '#17263b', fontSize: '1.02rem' }}>{partner.name}</div>
                      <div style={{ fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#72829a', marginTop: 4 }}>{partner.category}</div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div style={{ color: '#607389', fontSize: '0.78rem', textAlign: 'right' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6, justifyContent: 'flex-end' }}>
                        <Globe2 className="h-3.5 w-3.5" />
                        <span>{partner.focus}</span>
                      </div>
                    </div>
                    <ArrowRight className="h-4 w-4 text-slate-500" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="pass-details" style={{ marginTop: 6 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
              <Sparkles className="h-4 w-4 text-slate-500" />
              <div className="pass-details-header" style={{ margin: 0 }}>Why it matters</div>
            </div>
            <div style={{ color: '#4d617b', lineHeight: 1.6 }}>
              This convening brings together practitioners, funders, and partners to share ideas, deepen collaboration, and shape practical next steps for the year ahead.
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

import SiteShell from "../site-shell";
import Partner from "../partner";

export default function PartnersPage() {
  return <SiteShell><Partner /></SiteShell>;
}
