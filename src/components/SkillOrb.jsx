import { useMemo } from "react";

/**
 * SkillOrb — fixed version.
 * All CSS (orbit animation, skill-pill styles) are injected inline via <style>
 * so they don't depend on external Tailwind classes that may not exist.
 */
export default function SkillOrb({ skills = [], size = 480, duration = 24 }) {
  const items = useMemo(() => {
    const total = skills.length;
    return skills.map((label, i) => {
      const rings   = [130, 168, 206];
      const radius  = rings[i % rings.length];
      const angle   = (360 / total) * i;
      const speed   = duration + (i % 4) * 3;
      const delay   = -(i * 1.1);
      return { label, angle, radius, speed, delay };
    });
  }, [skills, duration]);

  const half = size / 2;

  return (
    <>
      <style>{`
        @keyframes orb-spin {
          from { transform: rotate(var(--start-angle)); }
          to   { transform: rotate(calc(var(--start-angle) + 360deg)); }
        }
        .orb-wrapper {
          position: absolute;
          top: 50%; left: 50%;
          margin: -4px 0 0 -4px;
          transform-origin: 4px 4px;
        }
        .orb-label {
          position: absolute;
          top: -10px;
          left: 8px;
          white-space: nowrap;
          font-family: 'Syne', sans-serif;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.04em;
          padding: 3px 10px;
          border-radius: 99px;
          border: 1px solid rgba(34,211,238,0.3);
          background: rgba(2,6,23,0.75);
          color: #67e8f9;
          backdrop-filter: blur(8px);
          box-shadow: 0 0 10px rgba(34,211,238,0.15);
          pointer-events: none;
          /* counter-rotate to stay upright */
          animation: inherit;
          animation-direction: reverse;
        }
        .orb-dot {
          width: 8px; height: 8px; border-radius: 50%;
          background: #22d3ee;
          box-shadow: 0 0 6px #22d3ee, 0 0 12px rgba(34,211,238,0.4);
        }
      `}</style>

      <div
        className="relative mx-auto select-none"
        style={{ width: `${size}px`, height: `${size}px` }}
      >
        {/* Background glow */}
        <div
          style={{
            position: "absolute", inset: 0, borderRadius: "50%",
            background: "radial-gradient(circle, rgba(34,211,238,0.08) 0%, rgba(167,139,250,0.06) 40%, transparent 70%)",
          }}
        />

        {/* Ring guides */}
        {[130, 168, 206].map((r) => (
          <div
            key={r}
            style={{
              position: "absolute",
              top: `${half - r}px`, left: `${half - r}px`,
              width: `${r * 2}px`, height: `${r * 2}px`,
              borderRadius: "50%",
              border: "1px dashed rgba(34,211,238,0.12)",
            }}
          />
        ))}

        {/* Center orb */}
        <div
          style={{
            position: "absolute",
            top: `${half - 36}px`, left: `${half - 36}px`,
            width: "72px", height: "72px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(34,211,238,0.3) 0%, rgba(167,139,250,0.2) 60%, transparent 80%)",
            border: "1px solid rgba(34,211,238,0.3)",
            backdropFilter: "blur(8px)",
            boxShadow: "0 0 30px rgba(34,211,238,0.2)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}
        >
          <span style={{ fontSize: "24px" }}>⚡</span>
        </div>

        {/* Orbiting items */}
        {items.map((item, idx) => (
          <div
            key={`${item.label}-${idx}`}
            className="orb-wrapper"
            style={{
              "--start-angle": `${item.angle}deg`,
              animation: `orb-spin ${item.speed}s linear ${item.delay}s infinite`,
              transformOrigin: `4px ${item.radius}px`,
              top: `${half - item.radius}px`,
            }}
          >
            <div className="orb-dot" />
            <div className="orb-label">{item.label}</div>
          </div>
        ))}
      </div>
    </>
  );
}