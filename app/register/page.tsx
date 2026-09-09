import Link from 'next/link';
import { Download, UserRound, CalendarRange, Building2 } from 'lucide-react';
import Sidebar from '@/Components/Sidebar';

export default function RegisterPage() {
  return (
    <div className="app-shell">
      <Sidebar active="register" />

      <main className="content-shell">
        <div className="content-panel">
          <header className="event-header">
            <h1>Partner Convening 2026</h1>
            <p>Harare — 9–11 Nov 2026</p>
          </header>

          <div className="stats-grid">
            <div className="stat-card">
              <div className="icon"><UserRound className="h-5 w-5" /></div>
              <strong>110+</strong>
              <span>Attendees</span>
            </div>
            <div className="stat-card">
              <div className="icon"><CalendarRange className="h-5 w-5" /></div>
              <strong>24</strong>
              <span>Sessions</span>
            </div>
            <div className="stat-card">
              <div className="icon"><Building2 className="h-5 w-5" /></div>
              <strong>38</strong>
              <span>Partners</span>
            </div>
          </div>

          <section className="register-card">
            <h2 className="form-heading">Registration Form</h2>

            <form>
              <div className="form-grid">
                <label className="field">
                  <span className="field-label">First name *</span>
                  <input className="form-input" defaultValue="Maria" aria-label="First name" />
                </label>

                <label className="field">
                  <span className="field-label">Last name *</span>
                  <input className="form-input" defaultValue="Schmidt" aria-label="Last name" />
                </label>

                <label className="field full">
                  <span className="field-label">Organisation *</span>
                  <input className="form-input" placeholder="Your organisation name" aria-label="Organisation" />
                </label>

                <label className="field full">
                  <span className="field-label">Sub-partner / Programme area</span>
                  <input className="form-input" placeholder="Optional" aria-label="Sub-partner or programme area" />
                </label>

                <label className="field full">
                  <span className="field-label">Role / capacity *</span>
                  <select className="form-select" defaultValue="Partner" aria-label="Role or capacity">
                    <option value="">Select your role</option>
                    <option value="Partner">Partner</option>
                    <option value="OAK Staff">OAK Staff</option>
                    <option value="Coordination Team">Coordination Team</option>
                    <option value="Presenter">Presenter</option>
                    <option value="Observer">Observer</option>
                  </select>
                </label>
              </div>

              <div className="form-note">
                <h3>Requirements</h3>
                <ul>
                  <li>
                    <strong>Dietary requirements</strong>
                    e.g. Vegetarian, Halal, Gluten-free
                  </li>
                  <li>
                    <strong>Accessibility requirements</strong>
                    e.g. Wheelchair access, hearing loop
                  </li>
                  <li>
                    <strong>Travel &amp; accommodation</strong>
                    e.g. Flight from London hotel needed
                  </li>
                </ul>
              </div>

              <label className="checkbox-row">
                <input type="checkbox" />
                <span>I agree to OAK Foundation&apos;s privacy policy and consent to my registration data being used for event coordination.</span>
              </label>

              <div style={{ marginTop: 18 }}>
                <Link href="/pass" className="primary-btn" aria-label="Register for the event">
                  Register
                </Link>
              </div>
            </form>
          </section>

          <div className="form-footer">
            Your data is secured and handled by OAK Foundation in accordance with GDPR.
          </div>
        </div>
      </main>
    </div>
  );
}
