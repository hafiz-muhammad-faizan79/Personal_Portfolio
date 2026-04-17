import Reveal from "./Reveal";
import { personalInfo } from "../data/portfolioData";

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="rounded-2xl border border-slate-200/70 bg-white/70 p-8 backdrop-blur-md shadow-lg shadow-slate-900/5 dark:border-white/10 dark:bg-slate-900/60">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
              Let’s Build Something Meaningful Together
            </h2>
            <p className="mt-4 max-w-2xl text-slate-700 dark:text-slate-300">
              I’m open to internships, graduate roles, and collaborative opportunities in software
              engineering and ML-focused problem solving.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href={personalInfo.resume}
                className="rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-500"
              >
                Download Resume
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-slate-300 bg-white/60 px-5 py-3 font-semibold text-slate-800 backdrop-blur-md hover:border-blue-400 hover:text-blue-600 dark:border-slate-600 dark:bg-slate-900/50 dark:text-slate-200 dark:hover:text-blue-300"
              >
                GitHub
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-slate-300 bg-white/60 px-5 py-3 font-semibold text-slate-800 backdrop-blur-md hover:border-blue-400 hover:text-blue-600 dark:border-slate-600 dark:bg-slate-900/50 dark:text-slate-200 dark:hover:text-blue-300"
              >
                LinkedIn
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="rounded-lg border border-slate-300 bg-white/60 px-5 py-3 font-semibold text-slate-800 backdrop-blur-md hover:border-purple-400 hover:text-purple-600 dark:border-slate-600 dark:bg-slate-900/50 dark:text-slate-200 dark:hover:text-purple-300"
              >
                Email Me
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}