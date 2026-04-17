import Reveal from "./Reveal";
import { projects } from "../data/portfolioData";

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Projects & Experience</h2>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="mt-3 max-w-3xl text-slate-700 dark:text-slate-300">
            A blend of technical problem-solving and execution leadership — from academic computing
            projects to organizing high-impact campus tech initiatives.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.08}>
              <article className="rounded-2xl border border-slate-200/70 bg-white/70 p-6 backdrop-blur-md shadow-lg shadow-slate-900/5 transition-transform duration-300 hover:-translate-y-1 hover:rotate-[0.2deg] dark:border-white/10 dark:bg-slate-900/60">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{project.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-xs text-blue-700 dark:text-blue-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400"
                    >
                      GitHub →
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-medium text-purple-600 hover:text-purple-500 dark:text-purple-400"
                    >
                      Live →
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}