import Reveal from "./Reveal";
import { useRef } from "react";

const leadershipItems = [
  {
    icon: "👑",
    title: "President — ICC UCP · Spring 2026",
    subtitle: "International Crisis Chamber",
    desc: "Ascended from Vice President to President — the highest elected position in ICC UCP. Leading strategic planning, delegate development, crisis scenario design, and session operations for the Spring 2026 term. Architected the society's 2025 season including a 3rd place finish at FORMUN and multiple circuit awards.",
    accent: "#f59e0b",
    badge: "Current Role",
    badgeColor: "#f59e0b",
  },
  {
    icon: "🏅",
    title: "Best Delegate & Outstanding Delegate",
    subtitle: "FORMUN · LGS MUN Circuits",
    desc: "Earned the top peer- and chair-adjudicated awards across major MUN conferences. Best Delegate requires strategic coalition-building, resolution drafting under time pressure, and the ability to steer 50+ delegates toward a position — all within a live crisis environment.",
    accent: "#22d3ee",
    badge: "Multi-Award",
    badgeColor: "#22d3ee",
  },
  {
    icon: "🤝",
    title: "VIS Campaign Director — Clothes Drive",
    subtitle: "UCP Volunteer in Service Program",
    desc: "Directed a large-scale community clothes collection campaign for UCP's VIS program — full ownership of planning, volunteer coordination, sorting operations, and final distribution. Proof that technical execution skills scale directly from the classroom to community impact.",
    accent: "#34d399",
    badge: "Community Service",
    badgeColor: "#34d399",
  },
];

function LeaderCard({ item, delay }) {
  const ref = useRef(null);

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width  - 0.5) * 10;
    const y = ((e.clientY - rect.top)  / rect.height - 0.5) * -10;
    el.style.transform = `perspective(900px) rotateY(${x}deg) rotateX(${y}deg)`;
  };
  const onLeave = () => {
    if (ref.current)
      ref.current.style.transform = "perspective(900px) rotateY(0deg) rotateX(0deg)";
  };

  return (
    <Reveal delay={delay} y={30}>
      <article
        ref={ref}
        className="leader-card"
        style={{
          "--accent": item.accent,
          borderTop: `2px solid ${item.accent}`,
          transition: "transform 0.3s cubic-bezier(.22,1,.36,1)",
          willChange: "transform",
        }}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
      >
        {/* Background glow */}
        <div
          className="leader-glow"
          style={{ background: `radial-gradient(ellipse at top left, ${item.accent}10 0%, transparent 60%)` }}
        />

        <div className="flex items-start justify-between gap-3 mb-4 relative">
          <div
            className="leader-icon-wrap"
            style={{ background: `${item.accent}15`, border: `1px solid ${item.accent}30` }}
          >
            <span style={{ fontSize: "22px" }}>{item.icon}</span>
          </div>
          <span
            className="leader-badge"
            style={{ background: `${item.badgeColor}15`, border: `1px solid ${item.badgeColor}30`, color: item.badgeColor }}
          >
            {item.badge}
          </span>
        </div>

        <div className="relative">
          <h3 className="leader-title">{item.title}</h3>
          <p className="leader-subtitle" style={{ color: item.accent }}>{item.subtitle}</p>
          <p className="leader-desc">{item.desc}</p>
        </div>
      </article>
    </Reveal>
  );
}

const milestones = [
  { year: "2023", event: "VP, ICC UCP" },
  { year: "2024", event: "Best Delegate — FORMUN" },
  { year: "2024", event: "Think2Code Organiser" },
  { year: "2025", event: "Outstanding Delegate — LGS" },
  { year: "2025", event: "VIS Campaign Director" },
  { year: "2026", event: "President, ICC UCP" },
];

export default function Leadership() {
  return (
    <>
      <style>{`
        .leader-card {
          border-radius: 18px;
          border: 1px solid rgba(255,255,255,0.07);
          border-top: 2px solid var(--accent);
          background: rgba(15,23,42,0.55);
          backdrop-filter: blur(20px);
          padding: 1.5rem;
          position: relative;
          overflow: hidden;
          height: 100%;
        }
        .leader-glow {
          position: absolute; inset: 0; pointer-events: none;
        }
        .leader-icon-wrap {
          width: 52px; height: 52px;
          border-radius: 14px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .leader-badge {
          font-family: 'Syne', sans-serif;
          font-size: 0.65rem; font-weight: 700;
          letter-spacing: 0.08em; text-transform: uppercase;
          padding: 3px 10px; border-radius: 99px;
        }
        .leader-title {
          font-family: 'Syne', sans-serif;
          font-size: 1rem; font-weight: 800;
          line-height: 1.3; margin-bottom: 4px;
          color: white;
        }
        .dark .leader-title { color: white; }
        .leader-title { color: #1e293b; }
        .leader-subtitle {
          font-family: 'Syne', sans-serif;
          font-size: 0.72rem; font-weight: 600;
          letter-spacing: 0.04em; text-transform: uppercase;
          margin-bottom: 10px;
        }
        .leader-desc {
          font-size: 0.8125rem; line-height: 1.65;
          color: rgb(148 163 184);
        }
        .dark .leader-desc { color: rgb(148 163 184); }
        .leader-desc { color: rgb(71 85 105); }

        .leader-section-label {
          font-family: 'Syne', sans-serif;
          font-size: 0.7rem; font-weight: 700;
          letter-spacing: 0.15em; text-transform: uppercase;
          background: linear-gradient(90deg, #22d3ee, #a78bfa);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text; display: block; margin-bottom: 0.5rem;
        }
        .leader-heading {
          font-family: 'Syne', sans-serif;
          font-size: clamp(1.75rem, 4vw, 2.5rem);
          font-weight: 800; letter-spacing: -0.02em;
        }
        .dark .leader-heading { color: white; }
        .leader-heading { color: #0f172a; }

        /* Milestone strip */
        .milestone-strip {
          display: flex; gap: 0;
          border-radius: 14px; overflow: hidden;
          border: 1px solid rgba(255,255,255,0.07);
        }
        .milestone-item {
          flex: 1; padding: 1rem 0.5rem; text-align: center;
          border-right: 1px solid rgba(255,255,255,0.06);
          background: rgba(15,23,42,0.4);
          transition: background 0.2s;
        }
        .milestone-item:last-child { border-right: none; }
        .milestone-item:hover { background: rgba(34,211,238,0.05); }
        .milestone-year {
          font-family: 'Syne', sans-serif;
          font-size: 0.7rem; font-weight: 800;
          color: #22d3ee; letter-spacing: 0.04em;
        }
        .milestone-event {
          font-size: 0.65rem; color: rgb(100 116 139);
          margin-top: 3px; line-height: 1.4;
        }
        .dark .milestone-event { color: rgb(100 116 139); }
      `}</style>

      <section id="leadership" className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <span className="leader-section-label">// Leadership & impact</span>
            <h2 className="leader-heading">Leadership & Advocacy</h2>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="mt-4 max-w-2xl text-sm text-slate-400 leading-relaxed">
              Leadership, for me, is a technical problem: define the goal state, model the constraints,
              and iterate until the system converges. From crisis chamber diplomacy to community campaigns,
              I lead with structure, communication, and accountability.
            </p>
          </Reveal>

          {/* Cards */}
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {leadershipItems.map((item, i) => (
              <LeaderCard key={item.title} item={item} delay={i * 0.09} />
            ))}
          </div>

          {/* Milestone timeline strip */}
          <Reveal delay={0.2}>
            <div className="mt-10 milestone-strip">
              {milestones.map((m) => (
                <div key={m.event} className="milestone-item">
                  <div className="milestone-year">{m.year}</div>
                  <div className="milestone-event">{m.event}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}