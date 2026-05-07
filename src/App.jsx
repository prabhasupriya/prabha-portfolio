import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Briefcase,
  Code2,
  ExternalLink,
  Trophy,
  ArrowRight,
} from "lucide-react";
import {
  PROFILE,
  CODING_PROFILES,
  PROJECTS,
  INTERNSHIPS,
  ACHIEVEMENTS,
  SKILL_GROUPS,
} from "./constants";
import { Navbar } from "./components/Navbar";
import { ParallaxDecor } from "./components/ParallaxDecor";

const sectionPad = "max-w-6xl mx-auto px-4 sm:px-6";

function App() {
  const reduceMotion = useReducedMotion();

  const inView = {
    initial: { opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: reduceMotion ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] },
  };

  return (
    <div className="bg-[#030304] min-h-screen text-slate-300 selection:bg-cyan-500/30">
      <ParallaxDecor />
      <Navbar />

      <main>
        {/* Hero */}
        <section
          id="home"
          className="min-h-[100svh] flex flex-col items-center justify-center relative px-4 pt-24 pb-16"
        >
          <div className="absolute top-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,#3b0764,transparent_50%)] -z-[1]" />

          <motion.div
            initial={{ opacity: reduceMotion ? 1 : 0 }}
            animate={{ opacity: 1 }}
            className="text-center max-w-4xl relative z-[1]"
          >
            <div className="mb-8 relative inline-block group/photo">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-violet-500/50 via-fuchsia-500/40 to-cyan-500/50 opacity-90 blur-sm transition duration-500 group-hover/photo:opacity-100 group-hover/photo:blur-md" />
              <img
                src={PROFILE.photoPath}
                alt={PROFILE.name}
                width={136}
                height={136}
                loading="eager"
                className="w-[8.5rem] h-[8.5rem] rounded-2xl border-2 border-white/20 object-cover relative z-10 ring-2 ring-violet-500/30 shadow-lg shadow-violet-900/30 saturate-[1.08] contrast-[1.02] transition-all duration-500 group-hover/photo:scale-[1.04] group-hover/photo:border-cyan-400/50 group-hover/photo:ring-cyan-400/40 group-hover/photo:saturate-125 group-hover/photo:shadow-cyan-900/35"
              />
            </div>

            <p className="text-violet-400/90 text-sm font-semibold uppercase tracking-[0.2em] mb-4">
              {PROFILE.shortTitle}
            </p>
            <h1 className="font-black mb-5 tracking-tight leading-[1.1] text-center px-2 max-w-[min(100%,42rem)] mx-auto text-[clamp(1.375rem,3.5vw+0.85rem,3.625rem)] md:whitespace-nowrap md:max-w-none bg-gradient-to-r from-violet-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
              {PROFILE.name}
            </h1>
            <p className="text-cyan-300/90 text-sm md:text-base font-medium uppercase tracking-[0.16em] mb-3">
              Enthusiastic Learner
            </p>
            <p className="text-xl text-slate-400 mb-8 italic">{PROFILE.tagline}</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
              <motion.a
                href={PROFILE.resumePath}
                target="_blank"
                rel="noreferrer"
                whileHover={reduceMotion ? undefined : { scale: 1.03 }}
                whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 min-w-[200px] px-8 py-3.5 rounded-full font-semibold text-white bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 shadow-lg shadow-violet-900/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
              >
                Download Resume
              </motion.a>
              <motion.button
                type="button"
                whileHover={reduceMotion ? undefined : { scale: 1.03 }}
                whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                onClick={() =>
                  document.getElementById("projects")?.scrollIntoView({
                    behavior: reduceMotion ? "auto" : "smooth",
                  })
                }
                className="inline-flex items-center justify-center gap-2 min-w-[200px] px-8 py-3.5 rounded-full font-semibold border border-white/15 text-white hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
              >
                View projects
                <ArrowRight className="w-4 h-4" aria-hidden />
              </motion.button>
            </div>

            <div className="flex gap-6 justify-center">
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 text-slate-500 hover:text-cyan-400 transition-colors rounded-lg hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
                aria-label="GitHub"
              >
                <Github />
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 text-slate-500 hover:text-violet-400 transition-colors rounded-lg hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
                aria-label="LinkedIn"
              >
                <Linkedin />
              </a>
              <a
                href={PROFILE.email}
                className="p-2 text-slate-500 hover:text-white transition-colors rounded-lg hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
                aria-label="Email"
              >
                <Mail />
              </a>
            </div>
          </motion.div>
        </section>

        {/* About */}
        <section
          id="about"
          className={`${sectionPad} py-20 border-t border-white/5`}
        >
          <motion.div {...inView}>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Code2 className="text-cyan-400 shrink-0" aria-hidden /> Professional persona
            </h2>
            <div className="max-w-3xl space-y-4 leading-relaxed text-slate-400">
              {PROFILE.bioParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Skills */}
        <section id="skills" className={`${sectionPad} py-20 border-t border-white/5`}>
          <motion.div {...inView} className="space-y-6">
            <h2 className="text-2xl font-bold text-white mb-6">Technical skills</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                <h3 className="text-xs font-bold uppercase tracking-widest text-violet-400 mb-3">
                  Core foundations
                </h3>
                <div className="flex flex-wrap gap-2">
                  {SKILL_GROUPS.core.map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1 bg-violet-500/10 text-violet-300 rounded-md text-sm border border-violet-500/20"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-3">
                    AI / ML
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {SKILL_GROUPS.aiml.map((s) => (
                      <span
                        key={s}
                        className="px-3 py-1 bg-cyan-500/10 text-cyan-300 rounded-md text-sm border border-cyan-500/20"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">
                    Tools & stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {SKILL_GROUPS.tools.map((s) => (
                      <span
                        key={s}
                        className="px-3 py-1 bg-white/[0.04] text-slate-300 rounded-md text-sm border border-white/10"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Coding Platforms */}
        <section className={`${sectionPad} py-20 border-t border-white/5`}>
          <motion.div {...inView}>
            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              View My Coding Platforms
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {CODING_PROFILES.map((profile) => (
                <a
                  key={profile.platform}
                  href={profile.url}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 hover:border-cyan-500/40 hover:bg-cyan-500/[0.05] transition-colors"
                >
                  <p className="text-white font-semibold">{profile.platform}</p>
                  <p className="text-sm text-slate-400 mt-1">{profile.metric}</p>
                </a>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Experience & achievements */}
        <section id="experience" className={`${sectionPad} py-20 border-t border-white/5`}>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div {...inView}>
              <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
                <Briefcase className="text-violet-400 shrink-0" aria-hidden /> Experience
              </h2>
              {INTERNSHIPS.map((exp, i) => (
                <div key={i} className="border-l-2 border-violet-500/30 pl-6 mb-8 last:mb-0">
                  <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                  <p className="text-violet-400 text-sm mb-2">
                    {exp.company} · {exp.duration}
                  </p>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">{exp.desc}</p>
                  {exp.bullets?.length ? (
                    <ul className="space-y-2 mb-4">
                      {exp.bullets.map((item) => (
                        <li key={item} className="text-slate-500 text-sm leading-relaxed flex gap-2">
                          <span className="text-cyan-400">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  {exp.platformSummary ? (
                    <p className="text-slate-500 text-sm leading-relaxed mb-4">{exp.platformSummary}</p>
                  ) : null}
                </div>
              ))}
            </motion.div>
            <motion.div {...inView}>
              <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
                <Trophy className="text-cyan-400 shrink-0" aria-hidden /> Highlights
              </h2>
              <ul className="space-y-4">
                {ACHIEVEMENTS.map((ach, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-slate-400 text-sm p-4 bg-white/5 rounded-lg border border-white/5 leading-relaxed"
                  >
                    <span className="h-2 w-2 rounded-full bg-cyan-500 mt-1.5 shrink-0" aria-hidden />
                    {ach}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className={`${sectionPad} py-24 border-t border-white/5`}>
          <motion.h2 {...inView} className="text-2xl font-bold text-white mb-12 text-center">
            Engineered solutions
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {PROJECTS.map((p, i) => (
              <motion.article
                key={p.title}
                initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: reduceMotion ? 0 : 0.45,
                  delay: reduceMotion ? 0 : i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group p-8 bg-[#0a0a0c] rounded-3xl border border-white/5 hover:border-cyan-500/50 transition-colors flex flex-col h-full"
              >
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{p.title}</h3>
                    {p.subtitle ? (
                      <p className="text-sm text-violet-400/90 mt-1 font-medium">{p.subtitle}</p>
                    ) : null}
                  </div>
                  <ExternalLink
                    size={18}
                    className="text-slate-600 group-hover:text-cyan-400 transition-colors shrink-0 mt-1"
                    aria-hidden
                  />
                </div>
                <p className="text-slate-500 text-sm mb-6 flex-grow leading-relaxed">{p.description}</p>
                {p.keyMetrics?.length ? (
                  <ul className="mb-6 space-y-2">
                    {p.keyMetrics.map((metric) => (
                      <li key={metric} className="text-xs text-slate-400 flex gap-2 leading-relaxed">
                        <span className="text-cyan-400">•</span>
                        <span>{metric}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] bg-white/5 px-2 py-1 rounded text-slate-400 uppercase tracking-tighter border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                {p.githubRepo && (
                  <a
                    href={p.githubRepo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded w-fit"
                  >
                    <Github className="w-4 h-4" />
                    View on GitHub
                  </a>
                )}
              </motion.article>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className={`${sectionPad} py-24 border-t border-white/5`}>
          <motion.div
            {...inView}
            className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#14141c] to-[#0a0a0f] p-8 md:p-12 text-center max-w-2xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Contact</h2>
            <p className="text-slate-400 mb-8 text-sm leading-relaxed">
              Reach out for opportunities, collaborations, or to talk backend and ML engineering.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
              <a
                href={PROFILE.email}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-[#030304] font-semibold hover:bg-slate-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
              >
                <Mail className="w-4 h-4" /> Email
              </a>
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/15 font-semibold text-white hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
              >
                <Github className="w-4 h-4" /> GitHub
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/15 font-semibold text-white hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
              >
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="border-t border-white/5 py-10 text-center">
        <p className="text-slate-600 text-sm">
          © {new Date().getFullYear()} {PROFILE.name}. React &middot; Vite &middot; Tailwind
        </p>
      </footer>
    </div>
  );
}

export default App;
