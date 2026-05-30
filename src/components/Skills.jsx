import { useState, useRef, useEffect } from "react";
import Reveal from "./Reveal";

const technicalSkills = [
  { label: "Python",                   level: 82 },
  { label: "Machine Learning / SVMs",  level: 78 },
  { label: "C / C++",                  level: 75 },
  { label: "JavaScript / React.js",    level: 72 },
  { label: "Java",                     level: 68 },
  { label: "Compiler Construction",    level: 74 },
  { label: "Parallel & Distributed",   level: 70 },
  { label: "Ubuntu Linux / CLI",       level: 88 },
  { label: "HTML & CSS",               level: 85 },
  { label: "Git & GitHub",             level: 84 },
  { label: "Hadoop & Spark",           level: 62 },
  { label: "Cybersecurity / Networking", level: 65 },
];

const softSkillChips = [
  "Strategic Leadership", "Parliamentary Procedure", "Crisis Simulation",
  "Public Speaking", "Event Management", "Stakeholder Management",
  "Negotiation & Diplomacy", "Team Coordination", "Problem Decomposition",
  "Marketing & Branding", "Cross-functional Ops",
];

/* ── Animated skill bar ── */
function SkillBar({ label, level, delay = 0 }) {
  const ref = useRef(null);
  const [filled, setFilled] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setFilled(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex justify-between text-xs">
        <span className="text-slate-300 font-medium">{label}</span>
        <span className="text-slate-500">{level}%</span>
      </div>
      <div className="h-1.5 w-full rounded-full bg-slate-800/60 overflow-hidden">
        <div
          style={{
            width: filled ? `${level}%` : "0%",
            transition: `width 1.2s cubic-bezier(.22,1,.36,1) ${delay}s`,
            background: "linear-gradient(90deg, #22d3ee, #a78bfa)",
            height: "100%",
            borderRadius: "99px",
            boxShadow: "0 0 8px rgba(34,211,238,0.4)",
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [tab, setTab] = useState("technical");

  const tabStyle = (id) =>
    `px-4 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
      tab === id
        ? "bg-cyan-500/15 text-cyan-300 border border-cyan-500/30"
        : "text-slate-500 hover:text-slate-300 border border-transparent"
    }`;

  return (
    <>
      <style>{`
        .skills-section-label {
          font-family: 'Syne', sans-serif;
          font-size: 0.7rem; font-weight: 700;
          letter-spacing: 0.15em; text-transform: uppercase;
          background: linear-gradient(90deg, #22d3ee, #a78bfa);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text; display: block; margin-bottom: 0.5rem;
        }
        .skills-heading {
          font-family: 'Syne', sans-serif;
          font-size: clamp(1.75rem, 4vw, 2.5rem);
          font-weight: 800; letter-spacing: -0.02em;
        }
        .dark .skills-heading { color: white; }
        .skills-heading { color: #0f172a; }

        .edu-card {
          border-radius: 18px;
          border: 1px solid rgba(34,211,238,0.18);
          background: linear-gradient(135deg, rgba(34,211,238,0.06) 0%, rgba(167,139,250,0.06) 100%);
          backdrop-filter: blur(20px);
          padding: 1.5rem;
          position: relative;
          overflow: hidden;
        }
        .edu-card::before {
          content: '';
          position: absolute; inset: 0;
          background: radial-gradient(ellipse at top left, rgba(34,211,238,0.08) 0%, transparent 60%);
          pointer-events: none;
        }

        .soft-chip {
          display: inline-block;
          padding: 5px 14px;
          border-radius: 99px;
          font-size: 0.75rem;
          font-weight: 500;
          border: 1px solid rgba(167,139,250,0.25);
          background: rgba(167,139,250,0.08);
          color: #c4b5fd;
          transition: border-color 0.2s, background 0.2s, transform 0.2s;
          cursor: default;
        }
        .soft-chip:hover {
          border-color: rgba(167,139,250,0.5);
          background: rgba(167,139,250,0.15);
          transform: translateY(-1px);
        }

        .glow-panel {
          border-radius: 20px;
          border: 1px solid rgba(255,255,255,0.07);
          background: rgba(15,23,42,0.55);
          backdrop-filter: blur(20px);
          padding: 1.75rem;
        }
        .stat-box {
          text-align: center;
          padding: 1rem;
          border-radius: 14px;
          border: 1px solid rgba(255,255,255,0.06);
          background: rgba(255,255,255,0.03);
          transition: border-color 0.2s;
        }
        .stat-box:hover { border-color: rgba(34,211,238,0.2); }
        .stat-val {
          font-family: 'Syne', sans-serif;
          font-size: 1.6rem; font-weight: 800;
        }
      `}</style>

      <section id="skills" className="py-24">
        <div className="mx-auto max-w-6xl px-6">

          <Reveal>
            <span className="skills-section-label">// Capabilities</span>
            <h2 className="skills-heading">Education & Skills</h2>
          </Reveal>

          {/* Stat row */}
          <Reveal delay={0.08}>
            <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
              {[
                { val: "3.43", sub: "CGPA / 4.00", color: "#22d3ee" },
                { val: "8th",  sub: "Semester",     color: "#a78bfa" },
                { val: "12+",  sub: "Tech Skills",  color: "#f472b6" },
                { val: "9+",   sub: "Soft Skills",  color: "#34d399" },
              ].map((s) => (
                <div key={s.sub} className="stat-box">
                  <div className="stat-val" style={{ color: s.color }}>{s.val}</div>
                  <div className="text-xs text-slate-500 mt-1">{s.sub}</div>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="mt-10 grid gap-8 lg:grid-cols-3">

            {/* Education card */}
            <Reveal delay={0.1}>
              <div className="edu-card h-full">
                <div className="text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-3" style={{ fontFamily: "'Syne',sans-serif" }}>
                  Education
                </div>
                <div className="text-white font-bold text-lg leading-snug" style={{ fontFamily: "'Syne',sans-serif" }}>
                  BS Computer Science
                </div>
                <div className="text-slate-400 text-sm mt-1">University of Central Punjab</div>

                <div className="mt-5 space-y-3 text-sm">
                  <div className="flex justify-between text-slate-400">
                    <span>CGPA</span>
                    <span className="text-cyan-300 font-semibold">3.43 / 4.00</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Status</span>
                    <span className="text-green-400 font-semibold">Graduating · Spring 2026</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Semester</span>
                    <span className="text-slate-300">8th (Final)</span>
                  </div>
                </div>

                <div className="mt-5 text-xs text-slate-500">Focus areas:</div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {["Machine Learning", "Compiler Design", "Distributed Systems", "Cybersecurity"].map((t) => (
                    <span key={t} className="px-2.5 py-1 text-[11px] rounded-full border border-cyan-500/20 bg-cyan-500/08 text-cyan-400">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Skill bars panel — spans 2 cols */}
            <Reveal delay={0.15} className="lg:col-span-2">
              <div className="glow-panel">
                {/* Tab switcher */}
                <div className="flex gap-2 mb-6">
                  <button className={tabStyle("technical")} onClick={() => setTab("technical")}>Technical</button>
                  <button className={tabStyle("soft")}      onClick={() => setTab("soft")}>Leadership & Soft</button>
                </div>

                {tab === "technical" && (
                  <div className="space-y-4">
                    {technicalSkills.map((s, i) => (
                      <SkillBar key={s.label} {...s} delay={i * 0.05} />
                    ))}
                  </div>
                )}

                {tab === "soft" && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {softSkillChips.map((chip, i) => (
                      <span
                        key={chip}
                        className="soft-chip"
                        style={{ animationDelay: `${i * 0.04}s` }}
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Reveal>

          </div>
        </div>
      </section>
    </>
  );
}