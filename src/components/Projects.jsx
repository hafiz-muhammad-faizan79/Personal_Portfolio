import Reveal from "./Reveal";
import { useRef } from "react";

/* ── 3D hover project card ── */
function ProjectCard({ project, delay }) {
  const ref = useRef(null);

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 14;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -14;
    el.style.transform = `perspective(800px) rotateY(${x}deg) rotateX(${y}deg) translateY(-4px)`;
    el.style.boxShadow = `${-x * 1.5}px ${y * 1.5}px 40px rgba(34,211,238,0.12), 0 24px 48px rgba(0,0,0,0.3)`;
  };
  const onLeave = () => {
    const el = ref.current;
    if (el) {
      el.style.transform = "perspective(800px) rotateY(0deg) rotateX(0deg) translateY(0)";
      el.style.boxShadow = "";
    }
  };

  const accentColor = project.accent || "#22d3ee";

  return (
    <Reveal delay={delay} y={32}>
      <article
        ref={ref}
        className="project-card"
        style={{
          "--accent": accentColor,
          transition: "transform 0.28s cubic-bezier(.22,1,.36,1), box-shadow 0.28s ease",
          willChange: "transform",
        }}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
      >
        {/* Top accent line */}
        <div
          className="project-accent-bar"
          style={{ background: `linear-gradient(90deg, ${accentColor}, transparent)` }}
        />

        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div
            className="project-icon"
            style={{ background: `${accentColor}18`, border: `1px solid ${accentColor}30`, color: accentColor }}
          >
            {project.icon}
          </div>
          <div className="flex gap-2 mt-1">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="project-link"
                style={{ color: accentColor }}
              >
                GitHub ↗
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="project-link"
                style={{ color: "#a78bfa" }}
              >
                Live ↗
              </a>
            )}
          </div>
        </div>

        <h3 className="project-title" style={{ color: "white" }}>{project.title}</h3>
        <p className="project-desc">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="project-tag"
              style={{
                background: `${accentColor}12`,
                border: `1px solid ${accentColor}28`,
                color: accentColor,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </article>
    </Reveal>
  );
}

const projects = [
  {
    id: 1,
    icon: "🤖",
    title: "Machine Learning — SVM Classifier Model Training",
    description:
      "Implemented and benchmarked Support Vector Machine classifiers with multiple kernel functions and hyperparameter tuning on real datasets. Demonstrates rigour with the mathematics behind modern ML — not just the API layer.",
    tags: ["Python", "scikit-learn", "SVMs", "ML"],
    github: "#",
    accent: "#22d3ee",
  },
  {
    id: 2,
    icon: "⚙️",
    title: "Personal Portfolio Website",
    description:
      "Designed a portfolio using javascript & REACT representation. A deep-systems project proving ability-level programming and formal display of coding.",
    tags: ["Js", "Formal Languages", "REACT", "Github"],
    github: "#",
    accent: "#a78bfa",
  },
  {
    id: 3,
    icon: "🏆",
    title: "Hackerrank — 5 star in sql and certified advanced",
    description:
      "Conceptualised, planned, and executed Hackerrank — a university-level competitive programming event. Managed registration, problem curation, judging logistics, and on-day operations end-to-end.",
    tags: ["Event Leadership", "Query master", "UCP", "Tech"],
    accent: "#f472b6",
  },
  {
    id: 4,
    icon: "🌐",
    title: "Parallel & Distributed Computing",
    description:
      "Explored distributed system architectures and parallel algorithm design using Hadoop and Spark. Tackled real-world big-data problems through coursework and hands-on cluster simulation.",
    tags: ["Hadoop", "Spark", "Distributed Systems", "Java"],
    accent: "#34d399",
  },
  {
    id: 5,
    icon: "🏗️",
    title: "Appium Automation scripts",
    description:
      "Appium test scripts for mobile application testing, demonstrating proficiency in automating user interactions and validating app functionality across different platforms.",
    tags: ["Automation", "Testing", "Mobile Apps"],
    accent: "#f59e0b",
  },
  {
    id: 6,
    icon: "🔐",
    title: "Cybersecurity & Networking",
    description:
      "Applied cryptography principles, network security protocols, and penetration testing fundamentals through coursework. Solid foundation in threat modelling and secure systems design.",
    tags: ["Cybersecurity", "Networking", "Cryptography"],
    accent: "#ef4444",
  },
];

export default function Projects() {
  return (
    <>
      <style>{`
        .project-card {
          border-radius: 18px;
          border: 1px solid rgba(255,255,255,0.07);
          background: rgba(15,23,42,0.6);
          backdrop-filter: blur(20px);
          padding: 1.5rem;
          position: relative;
          overflow: hidden;
          height: 100%;
        }
        .dark .project-card {
          background: rgba(15,23,42,0.6);
        }
        .project-card:not(.dark .project-card) {
          background: rgba(255,255,255,0.7);
          border-color: rgba(0,0,0,0.07);
        }
        .project-accent-bar {
          position: absolute; top: 0; left: 0; right: 0;
          height: 2px;
        }
        .project-icon {
          width: 38px; height: 38px;
          border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          font-size: 18px; flex-shrink: 0;
        }
        .project-link {
          font-size: 0.72rem;
          font-weight: 700;
          font-family: 'Syne', sans-serif;
          letter-spacing: 0.04em;
          text-decoration: none;
          transition: opacity 0.2s;
          opacity: 0.85;
        }
        .project-link:hover { opacity: 1; }
        .project-title {
          font-family: 'Syne', sans-serif;
          font-size: 1rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          line-height: 1.3;
        }
        .dark .project-title { color: white; }
        .project-title { color: #1e293b; }
        .project-desc {
          font-size: 0.8125rem;
          line-height: 1.65;
          color: rgb(100 116 139);
        }
        .dark .project-desc { color: rgb(148 163 184); }
        .project-tag {
          font-size: 0.7rem;
          font-weight: 600;
          padding: 3px 10px;
          border-radius: 99px;
          font-family: 'Syne', sans-serif;
          letter-spacing: 0.03em;
        }
        .projects-section-label {
          font-family: 'Syne', sans-serif;
          font-size: 0.7rem; font-weight: 700;
          letter-spacing: 0.15em; text-transform: uppercase;
          background: linear-gradient(90deg, #22d3ee, #a78bfa);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text; display: block; margin-bottom: 0.5rem;
        }
        .projects-heading {
          font-family: 'Syne', sans-serif;
          font-size: clamp(1.75rem, 4vw, 2.5rem);
          font-weight: 800; letter-spacing: -0.02em;
        }
        .dark .projects-heading { color: white; }
        .projects-heading { color: #0f172a; }
      `}</style>

      <section id="projects" className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <span className="projects-section-label">// Work & projects</span>
            <h2 className="projects-heading">Projects & Experience</h2>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="mt-4 max-w-2xl text-sm text-slate-400 leading-relaxed">
              A blend of technical problem-solving and execution leadership — from mathematical ML
              implementations to organising high-impact campus tech initiatives.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <ProjectCard key={p.id} project={p} delay={i * 0.07} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}