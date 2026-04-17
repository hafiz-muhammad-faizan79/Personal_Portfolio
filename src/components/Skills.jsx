const technicalSkills = [
  "Ubuntu Linux",
  "CLI & Troubleshooting",
  "C",
  "Machine Learning Fundamentals",
  "C++",
  "JAVA",
  "Python",
  "JAVASCRIPT",
  "Git & GitHub",
  "HTML & CSS",
    "React.js",
    "Hadoop & Spark",
    "Cybersecurity",
    "Networking",
];

const softSkills = [
  "Leadership",
  "Public Speaking",
  "Strategic Communication",
  "Negotiation",
  "Event Management",
  "Team Coordination",
  "Problem Solving",
  "Stakeholder Management",
  "Marketing & Branding",
];

function SkillChip({ label }) {
  return (
    <span className="rounded-full border border-blue-400/30 bg-blue-400/10 px-3 py-1 text-sm text-blue-700 dark:text-blue-200">
      {label}
    </span>
  );
}

function Skills() {
  const glassCard =
    "rounded-2xl border border-slate-200/70 bg-white/70 p-6 backdrop-blur-md shadow-lg shadow-slate-900/5 dark:border-white/10 dark:bg-slate-900/60";

  return (
    <section id="skills" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Education & Skills</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className={glassCard}>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Education</h3>
            <ul className="mt-4 space-y-2 text-slate-700 dark:text-slate-300">
              <li>
                <strong>BS Computer Science</strong> — University of Central Punjab
              </li>
              <li>8th Semester (Graduating)</li>
              <li>
                CGPA: <strong>3.43 / 4.00</strong>
              </li>
              <li>Focus: ML, Web Development, Cybersecurity, Hadoop</li>
            </ul>
          </div>

          <div className={glassCard}>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Soft Skills</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {softSkills.map((skill) => (
                <SkillChip key={skill} label={skill} />
              ))}
            </div>
          </div>
        </div>

        <div className={`mt-6 ${glassCard}`}>
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Technical Skills</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {technicalSkills.map((skill) => (
              <SkillChip key={skill} label={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;