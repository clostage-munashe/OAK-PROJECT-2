"use client";

import { useState } from "react";

export default function ProgrammePage() {
	const [scanned, setScanned] = useState(true);

	return (
		<main className="check-in-page">
			<section className="check-in-panel" aria-live="polite">
				<div className="success-banner">
					<span className="status-icon" aria-hidden="true">✓</span>
					<div>
						<p className="eyebrow">Check In Successful</p>
						<h1>Welcome, Meredith</h1>
						<p className="banner-caption">Attendee has been checked in</p>
					</div>
					<span className="banner-watermark" aria-hidden="true" />
				</div>

				<div className="attendee-card">
					<div className="attendee-heading">
						<span className="attendee-avatar">MS</span>
						<div>
							<h2>Meredith Schmidt</h2>
							<p>Oak Security Solutions</p>
							<span className="attendee-tag">Partner</span>
						</div>
					</div>
					<div className="attendee-details">
						<div><span>EVENT ROLE</span><strong>Operating Partner</strong></div>
						<div><span>LOCATION</span><strong>Harare</strong></div>
					</div>
				</div>

				<div className="check-in-time">
					<span aria-hidden="true">✓</span>
					<strong>Checked in at 09:32</strong>
					<small>Today</small>
				</div>

				<button className="primary-action" type="button" onClick={() => setScanned(false)}>
					<span aria-hidden="true">⌁</span> {scanned ? "Scan Next Attendee" : "Ready to Scan"}
				</button>
			</section>
		</main>
	);
}
