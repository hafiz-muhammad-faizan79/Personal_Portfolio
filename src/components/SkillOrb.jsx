import { useMemo } from "react";

export default function SkillOrb({ skills = [], size = 520, duration = 26 }) {
  const items = useMemo(() => {
    const total = skills.length;
    return skills.map((label, i) => {
      const angle = (360 / total) * i;
      const radius = 140 + (i % 3) * 28; // layered rings
      const speed = duration + (i % 5) * 2; // slight speed variance
      const delay = -(i * 0.7);

      return { label, angle, radius, speed, delay };
    });
  }, [skills, duration]);

  return (
    <div
      className="relative mx-auto"
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      {/* glow rings */}
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(236,72,153,0.22)_0%,rgba(99,102,241,0.12)_35%,rgba(2,6,23,0)_70%)]" />
      <div className="absolute inset-[10%] rounded-full border border-fuchsia-400/20" />
      <div className="absolute inset-[22%] rounded-full border border-purple-400/20" />
      <div className="absolute inset-[34%] rounded-full border border-cyan-400/20" />

      {/* center core */}
      <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-fuchsia-500/35 via-violet-500/25 to-cyan-400/25 blur-sm" />
      <div className="absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/30 bg-white/10 backdrop-blur-md" />

      {/* orbiting labels */}
      {items.map((item, idx) => (
        <div
          key={`${item.label}-${idx}`}
          className="orbit absolute left-1/2 top-1/2"
          style={{
            "--angle": `${item.angle}deg`,
            "--radius": `${item.radius}px`,
            "--speed": `${item.speed}s`,
            "--delay": `${item.delay}s`,
          }}
        >
          <span className="skill-pill whitespace-nowrap">{item.label}</span>
        </div>
      ))}
    </div>
  );
}