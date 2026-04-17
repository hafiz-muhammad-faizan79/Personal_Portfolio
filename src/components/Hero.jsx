import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* LEFT: TEXT */}
          <div>
            <Reveal>
              <p className="inline-block rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1 text-xs tracking-wider text-blue-200">
                Creative with Faizi
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-5 text-4xl font-extrabold leading-tight text-white md:text-6xl">
                Building Intelligent Ideas. 
                Creating Impactful Solutions.
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
                I’m Hafiz Muhammad Faizan, Currently 8th-semester Computer Science student at UCP (CGPA 3.43).
                Focused on Machine Learning, Web Development, and Entrepreneurship skills,with leadership experience as President of ICC UCP and award-winning MUN delegate.
                High profile in sports, with a passion for cricket,Participated in many cricket tournaments and won many awards.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500"
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="rounded-lg border border-slate-600 bg-slate-900/40 px-6 py-3 font-semibold text-slate-200 transition hover:border-blue-400 hover:text-blue-300"
                >
                  Let’s Connect
                </a>
              </div>
            </Reveal>
          </div>

          {/* RIGHT: IMAGE */}
          <Reveal delay={0.15}>
            <div className="relative mx-auto w-full max-w-sm">
              {/* glow ring */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-400/30 via-blue-500/20 to-purple-500/30 blur-xl" />

              {/* image card */}
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/50 p-2 backdrop-blur-md">
                <img
                  src="/profile.jpg"
                  alt="Hafiz Muhammad Faizan"
                  className="h-[420px] w-full rounded-2xl object-cover"
                />
              </div>

              {/* floating badge */}
              <div className="absolute -bottom-4 -left-4 rounded-xl border border-blue-300/30 bg-slate-900/80 px-4 py-2 text-sm text-blue-200 backdrop-blur-md">
                ML • Developer • Learnenr
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}