/**
 * portfolioData.js
 * Central data store — update your links, projects, and personal info here.
 * All components import from this file so you only edit in one place.
 */

export const personalInfo = {
  name:     "Hafiz Muhammad Faizan",
  title:    "CS Graduate · ICC UCP President · MUN Delegate",
  email:    "faizaniqbal179@gmail.com",
  github:   "https://github.com/hafiz-muhammad-faizan79",
  linkedin: "https://linkedin.com/in/your-handle",  // update with real URL
  resume:   "/resume.pdf",                           // place your resume PDF in /public/
  location: "Lahore, Pakistan",
};

export const projects = [
  {
    id: 1,
    icon: "🤖",
    title: "Machine Learning — SVM Classifier",
    description:
      "Implemented and benchmarked Support Vector Machine classifiers with multiple kernel functions and hyperparameter tuning on real datasets. Demonstrates rigour with the mathematics behind modern ML — not just the API layer.",
    tags: ["Python", "scikit-learn", "SVMs", "ML"],
    github: personalInfo.github,
    accent: "#22d3ee",
  },
  {
    id: 2,
    icon: "⚙️",
    title: "Compiler Construction",
    description:
      "Designed a compiler phase using Syntax-Directed Definitions to translate source constructs into intermediate representation. A deep-systems project proving low-level programming rigour and formal language theory.",
    tags: ["C++", "Formal Languages", "SDDs", "Parser"],
    github: personalInfo.github,
    accent: "#a78bfa",
  },
  {
    id: 3,
    icon: "🏆",
    title: "Think2Code — Competition Organiser",
    description:
      "Conceptualised, planned, and executed Think2Code — a university-level competitive programming event. Managed registration, problem curation, judging logistics, and on-day operations end-to-end.",
    tags: ["Event Leadership", "Logistics", "UCP", "Tech"],
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
    title: "Campus Club Operations",
    description:
      "Oversaw domain management and logistics across the Sports Club and Innovation & Entrepreneurship Club — coordinating schedules, communications, and cross-club resources simultaneously.",
    tags: ["Leadership", "Operations", "Management"],
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