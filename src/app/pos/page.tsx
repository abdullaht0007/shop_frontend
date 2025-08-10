// app/page.jsx
"use client";
export default function PosPage() {
  return (
    <main className="wrap">
      <header className="topbar">
        <a className="brand" href="#">
          <span className="logo" aria-hidden="true" />
          <span>BluePOS</span>
        </a>
        <nav className="nav">
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact" className="cta">
            Contact
          </a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero__content">
          <h1>Modern POS for Hardware Shops</h1>
          <p className="lead">
            Clean, professional interface with a calm blue accent. Optimized for
            long cashier shifts, fast lookup, and reliable receipts.
          </p>
          <div className="hero__actions">
            <button className="btn btn--primary">Get Started</button>
            <button className="btn btn--outline">Live Demo</button>
          </div>
        </div>
        <div className="card hero__card">
          <div className="kpi">
            <span className="dot" /> <strong>Uptime</strong>
            <span className="muted"> · 99.95%</span>
          </div>
          <div className="divider" />
          <div className="stats">
            <div>
              <small className="muted">Branches</small>
              <div className="stat">3</div>
            </div>
            <div>
              <small className="muted">SKUs</small>
              <div className="stat">12,480</div>
            </div>
            <div>
              <small className="muted">Avg. Checkout</small>
              <div className="stat">7.2s</div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="section">
        <h2 className="section__title">Core Features</h2>
        <p className="muted">Built for speed, clarity, and control.</p>

        <div className="grid">
          <div className="card">
            <h3 className="card__title">Fast Checkout</h3>
            <p className="muted">
              Barcode-ready input, keyboard shortcuts, and quick totals.
            </p>
          </div>
          <div className="card">
            <h3 className="card__title">Inventory Control</h3>
            <p className="muted">
              Low‑stock alerts, bulk import, and precise cost tracking.
            </p>
          </div>
          <div className="card">
            <h3 className="card__title">Reports</h3>
            <p className="muted">
              Daily sales, tax summaries, and branch‑wise breakdowns.
            </p>
          </div>
        </div>
      </section>

      <section id="pricing" className="section">
        <h2 className="section__title">Simple Pricing</h2>
        <div className="grid grid--pricing">
          <div className="card">
            <h3 className="card__title">Starter</h3>
            <div className="price">Rs 0</div>
            <p className="muted">Local-only. Ideal for trials.</p>
            <button className="btn btn--outline">Choose</button>
          </div>
          <div className="card card--accent">
            <h3 className="card__title">Shop</h3>
            <div className="price">Rs 2,999/mo</div>
            <p className="muted">Cloud sync, backups, basic analytics.</p>
            <button className="btn btn--primary">Choose</button>
          </div>
          <div className="card">
            <h3 className="card__title">Business</h3>
            <div className="price">Custom</div>
            <p className="muted">Multi‑branch & role‑based controls.</p>
            <button className="btn btn--outline">Talk to us</button>
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <h2 className="section__title">Contact</h2>
        <div className="card">
          <p className="muted">
            Questions? Email{" "}
            <a href="mailto:hello@example.com">hello@example.com</a>.
          </p>
          <form className="form">
            <label>
              <span className="lbl">Your Email</span>
              <input className="input" placeholder="you@company.com" />
            </label>
            <label>
              <span className="lbl">Message</span>
              <textarea
                className="input"
                placeholder="Tell us about your shop…"
              />
            </label>
            <button className="btn btn--primary">Send</button>
          </form>
        </div>
      </section>

      <footer className="footer">
        © 2025 BluePOS — Clean, reliable, professional.
      </footer>

      <style jsx>{`
        :root {
          --bg: #f6f7f9; /* soft gray page background */
          --surface: #ffffff; /* cards, header */
          --ink: #111827; /* main text */
          --muted: #6b7280; /* secondary text */
          --border: #e5e7eb; /* hairline */
          --brand: #0b3ea9; /* deep blue */
          --brand-600: #2156c7; /* hover */
          --brand-700: #0a2f82; /* active/focus */
          --accent: #2f6fed; /* brighter blue for highlights */
          --shadow: 0 10px 24px rgba(0, 0, 0, 0.06),
            0 2px 8px rgba(0, 0, 0, 0.05);
          --radius: 14px;
        }

        * {
          box-sizing: border-box;
        }
        body {
          background: var(--bg);
          color: var(--ink);
        }
        .wrap {
          max-width: 1120px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Topbar */
        .topbar {
          position: sticky;
          top: 0;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 0;
          background: var(--surface);
          border-bottom: 1px solid var(--border);
          backdrop-filter: saturate(180%) blur(6px);
        }
        .brand {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          color: inherit;
          font-weight: 700;
        }
        .logo {
          width: 34px;
          height: 34px;
          border-radius: 10px;
          background: linear-gradient(145deg, var(--brand), #2760c4);
          box-shadow: inset 0 -6px 12px rgba(255, 255, 255, 0.16),
            inset 0 8px 14px rgba(0, 0, 0, 0.18);
        }
        .nav a {
          margin-left: 14px;
          color: var(--muted);
          text-decoration: none;
        }
        .nav a:hover {
          color: var(--ink);
        }
        .nav .cta {
          color: var(--brand);
          font-weight: 600;
        }

        /* Hero */
        .hero {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 16px;
          padding: 44px 0 26px;
          border-bottom: 1px solid var(--border);
        }
        .hero__content h1 {
          margin: 0;
          font-size: clamp(28px, 4.2vw, 44px);
          letter-spacing: 0.2px;
        }
        .lead {
          color: var(--muted);
          max-width: 64ch;
          margin: 10px 0 0;
        }
        .hero__actions {
          display: flex;
          gap: 10px;
          margin-top: 16px;
          flex-wrap: wrap;
        }
        .hero__card {
          align-self: start;
        }

        /* Sections & cards */
        .section {
          padding: 36px 0;
        }
        .section__title {
          margin: 0 0 10px;
          font-size: clamp(22px, 2.6vw, 28px);
        }
        .grid {
          display: grid;
          gap: 16px;
          grid-template-columns: repeat(3, 1fr);
        }
        .grid--pricing {
          align-items: stretch;
        }
        @media (max-width: 900px) {
          .hero {
            grid-template-columns: 1fr;
          }
          .grid {
            grid-template-columns: 1fr;
          }
        }
        .card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          box-shadow: var(--shadow);
          padding: 18px;
        }
        .card--accent {
          border-color: color-mix(in oklab, var(--accent) 35%, var(--border));
        }

        .card__title {
          margin: 0.2rem 0 0.4rem;
          font-size: 1.05rem;
        }
        .muted {
          color: var(--muted);
        }
        .divider {
          height: 1px;
          background: var(--border);
          margin: 12px 0;
        }
        .kpi {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--accent);
        }
        .stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
        }
        .stat {
          font-weight: 800;
          color: var(--brand);
        }

        /* Buttons */
        .btn {
          appearance: none;
          border-radius: 12px;
          padding: 10px 14px;
          font-weight: 600;
          cursor: pointer;
          border: 1px solid transparent;
          transition: background 0.18s ease, filter 0.18s ease,
            transform 0.06s ease;
        }
        .btn:active {
          transform: translateY(1px);
        }
        .btn--primary {
          background: var(--accent);
          color: #fff;
        }
        .btn--primary:hover {
          filter: brightness(1.05);
        }
        .btn--outline {
          background: transparent;
          color: var(--accent);
          border-color: var(--accent);
        }
        .btn--outline:hover {
          background: color-mix(in oklab, var(--accent) 10%, transparent);
        }

        /* Form */
        .form {
          display: grid;
          gap: 12px;
          margin-top: 12px;
          max-width: 520px;
        }
        .lbl {
          display: block;
          margin-bottom: 6px;
          color: var(--muted);
        }
        .input {
          width: 100%;
          padding: 10px 12px;
          border: 1px solid var(--border);
          border-radius: 12px;
          outline: none;
          background: #fff;
        }
        .input:focus {
          border-color: var(--brand);
          box-shadow: 0 0 0 3px rgba(11, 62, 169, 0.18);
        }

        /* Pricing */
        .price {
          font-size: 1.6rem;
          font-weight: 800;
          color: var(--brand);
          margin: 6px 0;
        }

        /* Footer */
        .footer {
          padding: 28px 0;
          border-top: 1px solid var(--border);
          color: var(--muted);
          text-align: center;
          margin-top: 20px;
        }
      `}</style>
    </main>
  );
}
