import Reveal from "./Reveal";
import { useState } from "react";

const EMAIL = "faizaniqbal179@gmail.com"; // replace with real

const links = [
  {
    label: "Download Resume",
    href: "/resume.pdf",
    icon: "📄",
    accent: "#22d3ee",
    primary: true,
    desc: "Latest CV (PDF)",
  },
  {
    label: "GitHub",
    href: "https://github.com/hafiz-muhammad-faizan79",
    icon: "⌨️",
    accent: "#a78bfa",
    desc: "hafiz-muhammad-faizan79",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: "💼",
    accent: "#38bdf8",
    desc: "Professional profile",
  },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <style>{`
        .contact-section-label {
          font-family: 'Syne', sans-serif;
          font-size: 0.7rem; font-weight: 700;
          letter-spacing: 0.15em; text-transform: uppercase;
          background: linear-gradient(90deg, #22d3ee, #a78bfa);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text; display: block; margin-bottom: 0.5rem;
        }
        .contact-heading {
          font-family: 'Syne', sans-serif;
          font-size: clamp(1.75rem, 4vw, 2.5rem);
          font-weight: 800; letter-spacing: -0.02em;
        }
        .dark .contact-heading { color: white; }
        .contact-heading { color: #0f172a; }

        .contact-card {
          border-radius: 24px;
          border: 1px solid rgba(34,211,238,0.15);
          background: rgba(15,23,42,0.55);
          backdrop-filter: blur(24px);
          padding: 2.5rem;
          position: relative;
          overflow: hidden;
          transition: border-color 0.3s, box-shadow 0.3s;
        }
        .contact-card::before {
          content: '';
          position: absolute;
          top: -80px; left: -80px; right: -80px;
          height: 200px;
          background: radial-gradient(ellipse, rgba(34,211,238,0.1) 0%, transparent 60%);
          pointer-events: none;
        }
        .contact-card:hover {
          border-color: rgba(34,211,238,0.3);
          box-shadow: 0 0 60px rgba(34,211,238,0.08), 0 24px 48px rgba(0,0,0,0.35);
        }

        .contact-link-btn {
          display: flex; align-items: center; gap: 12px;
          border-radius: 14px;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.04);
          padding: 1rem 1.25rem;
          text-decoration: none;
          transition: border-color 0.25s, background 0.25s, transform 0.2s;
          cursor: pointer;
        }
        .contact-link-btn:hover {
          transform: translateY(-2px);
        }

        .contact-link-icon {
          width: 40px; height: 40px;
          border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          font-size: 18px; flex-shrink: 0;
        }

        .contact-link-label {
          font-family: 'Syne', sans-serif;
          font-size: 0.875rem; font-weight: 700;
          color: white;
        }
        .dark .contact-link-label { color: white; }
        .contact-link-label { color: #1e293b; }
        .contact-link-desc {
          font-size: 0.72rem; color: rgb(100 116 139);
          margin-top: 1px;
        }

        .email-copy-btn {
          display: flex; align-items: center; justify-content: space-between;
          gap: 12px;
          border-radius: 14px;
          border: 1px dashed rgba(34,211,238,0.3);
          background: rgba(34,211,238,0.04);
          padding: 1rem 1.25rem;
          cursor: pointer;
          transition: border-color 0.25s, background 0.25s;
          width: 100%;
          margin-top: 1.5rem;
        }
        .email-copy-btn:hover {
          border-color: rgba(34,211,238,0.6);
          background: rgba(34,211,238,0.08);
        }

        .availability-dot {
          width: 8px; height: 8px; border-radius: 50%;
          background: #34d399;
          box-shadow: 0 0 0 3px rgba(52,211,153,0.2);
          animation: pulse-dot 2s ease infinite;
          display: inline-block; flex-shrink: 0;
        }
        @keyframes pulse-dot {
          0%,100% { box-shadow: 0 0 0 3px rgba(52,211,153,0.2); }
          50%      { box-shadow: 0 0 0 6px rgba(52,211,153,0.08); }
        }
      `}</style>

      <section id="contact" className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <span className="contact-section-label">// Get in touch</span>
            <h2 className="contact-heading">Let's Build Something<br />Meaningful Together.</h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-4 max-w-xl text-sm text-slate-400 leading-relaxed">
              I'm open to internships, graduate roles, research collaborations, and
              software engineering positions. Whether you're a recruiter, a fellow builder,
              or a team looking for someone who ships code <em>and</em> leads people — let's talk.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-8 lg:grid-cols-2 items-start">

            {/* Left: CTA card */}
            <Reveal delay={0.15}>
              <div className="contact-card">
                {/* Availability badge */}
                <div className="flex items-center gap-2 mb-6">
                  <span className="availability-dot" />
                  <span className="text-xs text-green-400 font-semibold" style={{ fontFamily: "'Syne',sans-serif" }}>
                    Available · Based in Lahore, Pakistan
                  </span>
                </div>

                {/* Links */}
                <div className="space-y-3">
                  {links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="contact-link-btn"
                      style={{ borderColor: link.primary ? `${link.accent}40` : undefined }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = `${link.accent}50`;
                        e.currentTarget.style.background = `${link.accent}08`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                        e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                      }}
                    >
                      <div
                        className="contact-link-icon"
                        style={{ background: `${link.accent}18`, border: `1px solid ${link.accent}30` }}
                      >
                        {link.icon}
                      </div>
                      <div className="flex-1">
                        <div className="contact-link-label">{link.label}</div>
                        <div className="contact-link-desc">{link.desc}</div>
                      </div>
                      <span style={{ color: link.accent, fontSize: "16px" }}>↗</span>
                    </a>
                  ))}
                </div>

                {/* Email copy */}
                <button className="email-copy-btn" onClick={copyEmail}>
                  <div>
                    <div className="text-xs text-slate-500 mb-0.5">Email</div>
                    <div className="text-sm text-cyan-300 font-medium" style={{ fontFamily: "'Syne',sans-serif" }}>{EMAIL}</div>
                  </div>
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-lg"
                    style={{
                      background: copied ? "rgba(52,211,153,0.15)" : "rgba(34,211,238,0.12)",
                      color: copied ? "#34d399" : "#22d3ee",
                      border: `1px solid ${copied ? "rgba(52,211,153,0.3)" : "rgba(34,211,238,0.3)"}`,
                      fontFamily: "'Syne',sans-serif",
                      transition: "all 0.2s",
                    }}
                  >
                    {copied ? "Copied ✓" : "Copy"}
                  </span>
                </button>
              </div>
            </Reveal>

            {/* Right: Summary card */}
            <Reveal delay={0.22}>
              <div
                className="contact-card"
                style={{ borderColor: "rgba(167,139,250,0.15)", padding: "2rem" }}
              >
                <div className="text-xs text-purple-400 font-bold uppercase tracking-widest mb-4" style={{ fontFamily: "'Syne',sans-serif" }}>
                  // Quick profile
                </div>

                <div className="space-y-5">
                  {[
                    { label: "Role target",    value: "Software Engineer · ML Engineer · Graduate Research" },
                    { label: "Availability",   value: "Immediate · Open to remote & on-site" },
                    { label: "Location",       value: "Lahore, Pakistan" },
                    { label: "Response time",  value: "Within 24 hours" },
                    { label: "Languages",      value: "Urdu (native) · English (professional)" },
                    { label: "Interests",      value: "ML, Systems Programming, Open Source, Cricket" },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between gap-4 text-sm border-b border-white/5 pb-4 last:border-0 last:pb-0">
                      <span className="text-slate-500 flex-shrink-0">{item.label}</span>
                      <span className="text-slate-300 text-right">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>
    </>
  );
}