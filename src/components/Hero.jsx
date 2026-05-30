import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";

/* ── Typed text rotator ── */
function TypedText({ phrases, speed = 80, pause = 2200 }) {
  const [display, setDisplay]   = useState("");
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [charIdx, setCharIdx]   = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIdx];
    let timeout;

    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx((c) => c + 1), speed);
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx((c) => c - 1), speed / 2);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setPhraseIdx((p) => (p + 1) % phrases.length);
    }

    setDisplay(current.slice(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, phraseIdx, phrases, speed, pause]);

  return (
    <span>
      {display}
      <span
        style={{
          display: "inline-block",
          width: "2px",
          height: "1em",
          background: "linear-gradient(180deg,#22d3ee,#a78bfa)",
          borderRadius: "1px",
          marginLeft: "2px",
          verticalAlign: "text-bottom",
          animation: "blink 1s step-end infinite",
        }}
      />
    </span>
  );
}

/* ── 3D Tilt Card wrapper ── */
function TiltCard({ children, className = "" }) {
  const card = useRef(null);

  const onMove = (e) => {
    const el = card.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width  - 0.5) * 18;
    const y = ((e.clientY - rect.top)  / rect.height - 0.5) * -18;
    el.style.transform = `perspective(900px) rotateY(${x}deg) rotateX(${y}deg) scale3d(1.025,1.025,1.025)`;
  };
  const onLeave = () => {
    if (card.current)
      card.current.style.transform = "perspective(900px) rotateY(0deg) rotateX(0deg) scale3d(1,1,1)";
  };

  return (
    <div
      ref={card}
      className={className}
      style={{ transition: "transform 0.25s cubic-bezier(.22,1,.36,1)", willChange: "transform" }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </div>
  );
}

/* ── Floating stat badge ── */
function StatBadge({ value, label, style, delay }) {
  return (
    <div
      style={{
        ...style,
        animation: `float-badge ${3 + delay}s ease-in-out ${delay}s infinite alternate`,
      }}
      className="absolute rounded-xl border border-white/20 bg-slate-900/80 px-3 py-2 text-center backdrop-blur-md shadow-xl shadow-black/30"
    >
      <div className="text-base font-bold text-cyan-300" style={{ fontFamily: "'Syne', sans-serif" }}>{value}</div>
      <div className="text-[10px] text-slate-400 mt-0.5">{label}</div>
    </div>
  );
}

const PHRASES = [
  "Machine Learning Engineer",
  "CS Graduate · 3.43 CGPA",
  "ICC UCP President",
  "MUN Best Delegate",
  "Systems & Web Developer",
];

export default function Hero() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;700;800&family=DM+Sans:wght@300;400;500&display=swap');

        @keyframes blink {
          0%,100% { opacity: 1 } 50% { opacity: 0 }
        }
        @keyframes float-badge {
          from { transform: translateY(0px) rotate(-1deg); }
          to   { transform: translateY(-8px) rotate(1deg); }
        }
        @keyframes hero-glow-pulse {
          0%,100% { opacity: 0.55; transform: scale(1); }
          50%      { opacity: 0.75; transform: scale(1.06); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes counter-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(-360deg); }
        }

        .hero-gradient-text {
          background: linear-gradient(135deg, #e2e8f0 0%, #22d3ee 40%, #a78bfa 70%, #f472b6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          background-size: 200%;
          animation: gradient-shift 6s ease infinite;
        }
        @keyframes gradient-shift {
          0%,100% { background-position: 0% 50%; }
          50%      { background-position: 100% 50%; }
        }

        .orbit-ring {
          position: absolute; inset: 0;
          border-radius: 50%;
          border: 1px dashed rgba(34,211,238,0.25);
          animation: spin-slow 14s linear infinite;
        }
        .orbit-ring-2 {
          position: absolute; inset: -24px;
          border-radius: 50%;
          border: 1px dashed rgba(167,139,250,0.18);
          animation: counter-spin 20s linear infinite;
        }
        .orbit-dot {
          position: absolute;
          top: -4px; left: calc(50% - 4px);
          width: 8px; height: 8px;
          border-radius: 50%;
          background: #22d3ee;
          box-shadow: 0 0 8px #22d3ee, 0 0 16px rgba(34,211,238,0.5);
        }
        .orbit-dot-2 {
          position: absolute;
          bottom: -4px; right: calc(50% - 4px);
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #a78bfa;
          box-shadow: 0 0 8px #a78bfa, 0 0 16px rgba(167,139,250,0.5);
        }

        .hero-btn-primary {
          position: relative; overflow: hidden;
          background: linear-gradient(135deg, #0891b2, #6d28d9);
          border-radius: 10px;
          padding: 12px 28px;
          font-weight: 700;
          font-family: 'Syne', sans-serif;
          font-size: 0.875rem;
          letter-spacing: 0.04em;
          color: white;
          transition: transform 0.2s, box-shadow 0.2s;
          box-shadow: 0 4px 24px rgba(8,145,178,0.35);
        }
        .hero-btn-primary::before {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(135deg, #22d3ee, #8b5cf6);
          opacity: 0;
          transition: opacity 0.25s;
        }
        .hero-btn-primary:hover::before { opacity: 1; }
        .hero-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 32px rgba(8,145,178,0.5); }
        .hero-btn-primary span { position: relative; z-index: 1; }

        .hero-btn-ghost {
          border: 1px solid rgba(148,163,184,0.3);
          background: rgba(15,23,42,0.4);
          border-radius: 10px;
          padding: 12px 28px;
          font-weight: 600;
          font-family: 'Syne', sans-serif;
          font-size: 0.875rem;
          letter-spacing: 0.04em;
          color: #cbd5e1;
          transition: border-color 0.25s, color 0.25s, transform 0.2s, background 0.25s;
          backdrop-filter: blur(12px);
        }
        .hero-btn-ghost:hover {
          border-color: rgba(34,211,238,0.5);
          color: #22d3ee;
          background: rgba(34,211,238,0.06);
          transform: translateY(-2px);
        }

        .terminal-badge {
          font-family: 'DM Mono', 'Fira Code', monospace;
          font-size: 0.7rem;
          background: rgba(2,6,23,0.7);
          border: 1px solid rgba(34,211,238,0.3);
          border-radius: 8px;
          padding: 6px 14px;
          color: #22d3ee;
          backdrop-filter: blur(12px);
          letter-spacing: 0.08em;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        .terminal-dot { width: 6px; height: 6px; border-radius: 50%; background: #22d3ee; box-shadow: 0 0 6px #22d3ee; }
      `}</style>

      <section id="home" className="relative pt-32 pb-24 overflow-hidden">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">

            {/* ── LEFT: COPY ── */}
            <div>
              <Reveal delay={0}>
                <div className="terminal-badge mb-6">
                  <span className="terminal-dot" />
                  &gt;_ currently · BS CS · UCP · Spring 2026
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <h1
                  className="hero-gradient-text mt-2 text-4xl font-extrabold leading-tight md:text-6xl"
                  style={{ fontFamily: "'Syne', sans-serif", letterSpacing: "-0.02em" }}
                >
                  Building Intelligent<br />Ideas. Creating<br />Impact.
                </h1>
              </Reveal>

              <Reveal delay={0.2}>
                <div
                  className="mt-5 text-xl font-semibold text-cyan-300"
                  style={{ fontFamily: "'Syne', sans-serif", minHeight: "2rem" }}
                >
                  <TypedText phrases={PHRASES} />
                </div>
              </Reveal>

              <Reveal delay={0.28}>
                <p
                  className="mt-5 max-w-lg text-base leading-relaxed text-slate-400"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  I'm <strong className="text-slate-200 font-semibold">Hafiz Muhammad Faizan</strong> — CS graduate from UCP (CGPA 3.43),
                  specialising in Machine Learning, OOP & DSA, and MERN stack development. 
                  As President of <strong className="text-cyan-400 font-semibold">ICC UCP</strong> and
                  a multi-award MUN delegate, I bridge deep technical rigour with executive-level leadership.
                </p>
              </Reveal>

              <Reveal delay={0.36}>
                <div className="mt-9 flex flex-wrap gap-4">
                  <a href="#projects" className="hero-btn-primary">
                    <span>View Projects</span>
                  </a>
                  <a href="#contact" className="hero-btn-ghost">Let's Connect →</a>
                </div>
              </Reveal>

              {/* Stat strip */}
              <Reveal delay={0.44}>
                <div className="mt-10 flex gap-6 flex-wrap">
                  {[
                    { val: "3.43", lbl: "CGPA" },
                    { val: "3+",   lbl: "MUN Awards" },
                    { val: "4+",   lbl: "Clubs Led" },
                    { val: "2026", lbl: "Graduating" },
                  ].map((s) => (
                    <div key={s.lbl} className="text-center">
                      <div
                        className="text-2xl font-bold text-cyan-300"
                        style={{ fontFamily: "'Syne', sans-serif" }}
                      >
                        {s.val}
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5">{s.lbl}</div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* ── RIGHT: 3D TILT PHOTO CARD ── */}
            <Reveal delay={0.18} y={40}>
              <TiltCard className="relative mx-auto w-full max-w-[360px]">
                {/* Outer glow */}
                <div
                  className="absolute -inset-4 rounded-3xl"
                  style={{
                    background: "radial-gradient(ellipse, rgba(34,211,238,0.3) 0%, rgba(167,139,250,0.2) 50%, transparent 70%)",
                    animation: "hero-glow-pulse 4s ease-in-out infinite",
                    filter: "blur(18px)",
                  }}
                />

                {/* Orbit rings */}
                <div style={{ position: "absolute", inset: "-30px", zIndex: 10, pointerEvents: "none" }}>
                  <div className="orbit-ring"><div className="orbit-dot" /></div>
                  <div className="orbit-ring-2"><div className="orbit-dot-2" /></div>
                </div>

                {/* Photo card */}
                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 p-2 shadow-2xl shadow-black/40 backdrop-blur-md">
                  <img
                    src="/profile.jpg"
                    alt="Hafiz Muhammad Faizan"
                    className="h-[420px] w-full rounded-2xl object-cover"
                    style={{ filter: "brightness(0.95) contrast(1.05) saturate(1.1)" }}
                  />

                  {/* Glass overlay at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-24 rounded-b-2xl"
                    style={{ background: "linear-gradient(to top, rgba(2,6,23,0.7) 0%, transparent 100%)" }}
                  />
                </div>

                {/* Floating badges */}
                <StatBadge
                  value="ICC UCP"
                  label="President '26"
                  delay={0}
                  style={{ bottom: "-18px", left: "-18px", zIndex: 20 }}
                />
                <StatBadge
                  value="★ Best"
                  label="Delegate · MUN"
                  delay={1.2}
                  style={{ top: "24px", right: "-24px", zIndex: 20 }}
                />
              </TiltCard>
            </Reveal>

          </div>
        </div>

        {/* Section scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40">
          <div className="h-8 w-px bg-gradient-to-b from-cyan-400 to-transparent" />
          <span className="text-[10px] tracking-widest text-slate-500 uppercase">scroll</span>
        </div>
      </section>
    </>
  );
}