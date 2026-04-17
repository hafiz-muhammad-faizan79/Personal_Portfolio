import Reveal from "./Reveal";

const leadershipItems = [
  {
    title: "President — ICC UCP (Spring 2026)",
    desc: "Leading strategic planning, delegate development, and team execution after serving as Vice President. Core strategies behind the successful 2025 season, including a 3rd place finish at FORMUN and multiple awards across circuits.",
  },
  {
    title: "Model United Nations Distinctions",
    desc: "Awarded Best Delegate and Outstanding Delegate across major MUN circuits including FORMUN and LGS.",
  },
  {
    title: "Sports indoor Community",
    desc: "Co-founded a community of 100+ members focused on indoor sports, fostering camaraderie and promoting physical activity through regular events and tournaments. Including gym training and fitness challenges.",
  },
];

export default function Leadership() {
  return (
    <section id="leadership" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Leadership & Advocacy</h2>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="mt-3 max-w-3xl text-slate-700 dark:text-slate-300">
            I lead with structure, communication, and accountability — from International crisis chamber
            leadership to community service and cross-functional coordination.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {leadershipItems.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <article className="rounded-2xl border border-slate-200/70 bg-white/70 p-6 backdrop-blur-md shadow-lg shadow-slate-900/5 dark:border-white/10 dark:bg-slate-900/60">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300">{item.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}