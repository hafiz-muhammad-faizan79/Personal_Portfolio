import Reveal from "./Reveal";

const timeline = [
  {
    year: "2022",
    title: "Enrolled at UCP",
    body: "Began the BS Computer Science journey with a clear goal: build things that matter. Discovered a deep affinity for low-level systems and mathematical computation.",
    color: "#22d3ee",
  },
  {
    year: "2025",
    title: "ICC UCP — Vice President",
    body: "Elected VP of the International Crisis Chamber. Gained a second education in structured argumentation, crisis diplomacy, and high-stakes communication under pressure.Earned Best Delegate and Outstanding Delegate across FORMUN and LGS MUN circuits.",
    color: "#a78bfa",
  },
  {
    year: "2024",
    title: "IEEE Member",
    body: "Organised the IEEE events competitive programming event. Led  technical workshops on Machine Learning and Data Structures for 100+ attendees. Expanded leadership beyond MUN into the broader tech community.",
    color: "#f472b6",
  },
  {
    year: "2026",
    title: "President, ICC UCP · Graduating",
    body: "Ascending to President in Spring 2026 while completing final-semester coursework in Parallel & Distributed Computing and advanced ML. Preparing to graduate with 3.43 CGPA.",
    color: "#34d399",
  },
];

export default function About() {
  return (
    <>
      <style>{`
        .about-timeline-dot {
          width: 12px; height: 12px;
          border-radius: 50%;
          flex-shrink: 0;
          margin-top: 4px;
          box-shadow: 0 0 0 3px rgba(255,255,255,0.08), 0 0 12px currentColor;
        }
        .about-year {
          font-family: 'Syne', sans-serif;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }
        .about-tl-title {
          font-family: 'Syne', sans-serif;
          font-size: 0.95rem;
          font-weight: 700;
          color: white;
          margin-bottom: 4px;
        }
        .about-tl-body {
          font-size: 0.8375rem;
          line-height: 1.65;
          color: rgb(148 163 184);
        }
        .about-quote-bar {
          position: relative;
          border-left: 3px solid;
          border-image: linear-gradient(180deg, #22d3ee, #a78bfa) 1;
          padding: 1rem 1.25rem;
          background: linear-gradient(90deg, rgba(34,211,238,0.06) 0%, transparent 100%);
          border-radius: 0 10px 10px 0;
        }
        .about-section-label {
          font-family: 'Syne', sans-serif;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          background: linear-gradient(90deg, #22d3ee, #a78bfa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 0.5rem;
          display: block;
        }
        .about-heading {
          font-family: 'Syne', sans-serif;
          font-size: clamp(1.75rem, 4vw, 2.5rem);
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -0.02em;
        }
        .glow-card {
          border-radius: 20px;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(15,23,42,0.5);
          backdrop-filter: blur(20px);
          padding: 1.5rem;
          transition: border-color 0.3s, box-shadow 0.3s;
        }
        .glow-card:hover {
          border-color: rgba(34,211,238,0.25);
          box-shadow: 0 0 40px rgba(34,211,238,0.08), 0 8px 32px rgba(0,0,0,0.3);
        }
        .dark .about-heading { color: white; }
        .about-heading { color: #0f172a; }
        .dark .about-tl-body { color: rgb(148 163 184); }
        .about-tl-body { color: rgb(71 85 105); }
        .dark .about-tl-title { color: white; }
        .about-tl-title { color: #1e293b; }
      `}</style>

      <section id="about" className="py-24 relative">
        <div className="mx-auto max-w-6xl px-6">

          <div className="grid gap-16 lg:grid-cols-2 items-start">

            {/* LEFT: Narrative */}
            <div>
              <Reveal>
                <span className="about-section-label">// Who I am</span>
                <h2 className="about-heading">
                  Engineer by training.<br />
                  <span style={{
                    background: "linear-gradient(135deg, #22d3ee 0%, #a78bfa 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}>
                    Leader by choice.
                  </span>
                </h2>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="mt-7 space-y-5 text-[0.875rem] leading-relaxed text-slate-400 dark:text-slate-400">
                  <p>
                    I'm a final-year Computer Science student at the{" "}
                    <span className="text-slate-200 font-medium">University of Central Punjab</span> with a 3.43 CGPA,
                    where I've built a deliberate technical stack across Machine Learning, Compiler Construction,
                    and Parallel & Distributed Computing — not just as coursework, but as frameworks for thinking.
                  </p>
                  <p>
                    In parallel, <span className="text-cyan-400 font-medium">Model United Nations</span> gave me a second education:
                    structured argumentation, crisis diplomacy, and the ability to synthesise complex information under pressure
                    in front of hundreds of delegates. The path from Vice President to President of ICC UCP is a story of earned trust.
                  </p>
                  <p>
                    The insight I keep coming back to:{" "}
                    <span className="text-purple-300 font-medium">building a compiler and chairing a crisis committee are the same problem at different scales</span> —
                    decompose a complex system, define responsibilities, anticipate failure modes, and ship.
                    That's the lens I bring to every role.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.18}>
                <div className="about-quote-bar mt-8">
                  <p className="text-sm italic text-slate-300 leading-relaxed">
                    "Whether fine-tuning an SVM or running parliamentary procedure for 200 delegates,
                    my approach is the same: understand the system, find the constraint, resolve it cleanly."
                  </p>
                </div>
              </Reveal>

              {/* Quick facts */}
              <Reveal delay={0.25}>
                <div className="mt-8 grid grid-cols-2 gap-3">
                  {[
                    { icon: "🎓", label: "BS Computer Science, UCP" },
                    { icon: "⚙️", label: "Ubuntu Linux daily driver" },
                    { icon: "🏆", label: "Best & Outstanding Delegate" },
                    { icon: "🤝", label: "4+ campus orgs managed" },
                  ].map((f) => (
                    <div key={f.label} className="flex items-center gap-3 text-xs text-slate-400">
                      <span className="text-base">{f.icon}</span>
                      <span>{f.label}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* RIGHT: Timeline */}
            <div className="glow-card">
              <Reveal delay={0.05}>
                <span className="about-section-label">// Journey timeline</span>
              </Reveal>

              <div className="mt-4 relative">
                {/* Vertical connector */}
                <div
                  className="absolute left-[5px] top-3 bottom-3 w-px"
                  style={{ background: "linear-gradient(180deg, #22d3ee22, #a78bfa22)" }}
                />

                <div className="space-y-8 pl-6">
                  {timeline.map((item, i) => (
                    <Reveal key={item.year} delay={i * 0.1}>
                      <div className="relative">
                        {/* Dot */}
                        <div
                          className="about-timeline-dot absolute -left-[26px] top-1"
                          style={{ background: item.color, color: item.color }}
                        />
                        <span className="about-year" style={{ color: item.color }}>{item.year}</span>
                        <p className="about-tl-title">{item.title}</p>
                        <p className="about-tl-body">{item.body}</p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}