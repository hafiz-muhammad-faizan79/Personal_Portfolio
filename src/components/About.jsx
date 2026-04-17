import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-3">
        <Reveal>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">About Me</h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="space-y-5 text-slate-700 leading-relaxed md:col-span-2 dark:text-slate-300">
            <p>
              I am an 8th-semester Computer Science student at the University of Central Punjab,
              where I’ve built a strong technical foundation in Machine Learning, Compiler
              Construction, and Parallel & Distributed Computing.
            </p>
            <p>
              My work includes model-focused ML learning (including SVMs), deep compiler concepts
              like Syntax-Directed Definitions, and solving system-level computing problems with a
              structured mindset.
            </p>
            <p>
              Alongside academics, I’ve developed leadership under pressure — currently serving as
              President of ICC UCP after my tenure as Vice President. This blend of engineering
              depth and communication strength helps me deliver outcomes across technical and
              operational environments.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}