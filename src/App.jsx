import { FiArrowRight, FiGithub, FiLinkedin, FiMail, FiMapPin } from 'react-icons/fi';
import { GlassCard } from './components/GlassCard';
import { SectionHeading } from './components/SectionHeading';
import {
  certifications,
  contacts,
  journey,
  projects,
  skills,
  socialLinks,
} from './data/content';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#home" className="flex items-center gap-3 font-semibold tracking-wide text-white">
            <span className="grid h-10 w-10 place-items-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 shadow-glow">
              UA
            </span>
            <span>Usman Ali</span>
          </a>

          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a className="transition hover:text-cyan-300" href="#about">About</a>
            <a className="transition hover:text-cyan-300" href="#skills">Skills</a>
            <a className="transition hover:text-cyan-300" href="#projects">Projects</a>
            <a className="transition hover:text-cyan-300" href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main className="relative overflow-hidden">
        <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden="true" />

        <section id="home" className="relative mx-auto w-full max-w-7xl px-4 pb-16 pt-14 sm:px-6 lg:px-8 lg:pb-24 lg:pt-20">
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="reveal-up space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200 backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(34,211,238,0.8)]" />
                Available for internships and DevOps projects
              </div>

              <div className="space-y-5">
                <p className="text-sm font-medium uppercase tracking-[0.35em] text-cyan-300/90">DevOps Engineer Intern</p>
                <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                  Hi, I&apos;m <span className="text-gradient">Usman Ali</span>.
                  <br />
                  I build clean, reliable cloud-first systems.
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-slate-300">
                  I am learning DevOps, Cloud, Linux, Git, Docker, CI/CD, and automation by building real projects that
                  solve practical problems and strengthen modern deployment workflows.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 font-semibold text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:shadow-glow"
                >
                  View Projects <FiArrowRight />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/40 hover:bg-white/10"
                >
                  Contact Me <FiMail />
                </a>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  ['Cloud Ready', 'Learning AWS and infrastructure basics'],
                  ['Automation Focused', 'Building repeatable deployment workflows'],
                  ['Linux First', 'Comfortable working in terminal-driven environments'],
                ].map(([title, description]) => (
                  <GlassCard key={title} className="p-5">
                    <p className="text-sm font-semibold text-cyan-300">{title}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{description}</p>
                  </GlassCard>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-8 top-10 h-28 w-28 rounded-full bg-cyan-400/20 blur-3xl animate-float" />
              <div className="absolute -right-6 bottom-8 h-36 w-36 rounded-full bg-blue-500/20 blur-3xl animate-float-delayed" />

              <GlassCard className="relative overflow-hidden p-8">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.16),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.14),transparent_36%)]" />
                <div className="relative space-y-8">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm text-slate-400">Currently focused on</p>
                      <h2 className="mt-2 text-2xl font-semibold text-white">Learning by shipping real systems</h2>
                    </div>
                    <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-medium text-cyan-200">
                      Active
                    </span>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {[
                      { label: 'Stack', value: 'React, Docker, Kubernetes, AWS' },
                      { label: 'Workflow', value: 'Git, CI/CD, monitoring, automation' },
                      { label: 'Environment', value: 'Linux, Nginx, Bash scripting' },
                      { label: 'Mindset', value: 'Build, test, improve, repeat' },
                    ].map((item) => (
                      <div key={item.label} className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
                        <p className="text-xs uppercase tracking-[0.24em] text-slate-400">{item.label}</p>
                        <p className="mt-2 text-sm font-medium text-white">{item.value}</p>
                      </div>
                    ))}
                  </div>

                  <div className="rounded-3xl border border-cyan-300/15 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 p-5">
                    <p className="text-sm text-slate-300">
                      I enjoy learning DevOps by building practical projects that connect development, automation, and deployment.
                    </p>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="About Me"
            title="Passionate about DevOps and cloud engineering"
            description="I like understanding how software gets built, packaged, deployed, monitored, and improved in the real world."
          />

          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <GlassCard className="p-7">
              <p className="text-lg leading-8 text-slate-300">
                I am passionate about DevOps and Cloud Engineering. I am currently learning Linux, Git, GitHub, Docker,
                Kubernetes, CI/CD, AWS, Nginx, Jenkins, and infrastructure automation. I enjoy learning by building real
                projects because it helps me understand how each tool fits into an end-to-end workflow.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {['Problem Solving', 'Deployment Automation', 'Cloud Fundamentals', 'Team Collaboration'].map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
                    {item}
                  </span>
                ))}
              </div>
            </GlassCard>

            <GlassCard className="grid gap-4 p-7 sm:grid-cols-2">
              {[
                ['Learning style', 'Hands-on experimentation'],
                ['Goal', 'Reliable production-ready delivery'],
                ['Focus', 'Automation and observability'],
                ['Platform interest', 'Cloud-native infrastructure'],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-400">{label}</p>
                  <p className="mt-2 text-sm font-medium text-white">{value}</p>
                </div>
              ))}
            </GlassCard>
          </div>
        </section>

        <section id="skills" className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Skills"
            title="Tools and technologies I work with"
            description="A compact view of the technologies I am learning and applying across development and operations."
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {skills.map((skill) => {
              const Icon = skill.icon;

              return (
                <GlassCard
                  key={skill.name}
                  className="group flex items-center gap-4 p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/10"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-cyan-300/15 bg-cyan-300/10 text-cyan-200 transition group-hover:scale-105">
                    <Icon className="text-xl" />
                  </span>
                  <div>
                    <p className="font-semibold text-white">{skill.name}</p>
                    <p className="text-sm text-slate-400">{skill.note}</p>
                  </div>
                </GlassCard>
              );
            })}
          </div>
        </section>

        <section id="projects" className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Projects"
            title="Selected portfolio work"
            description="Placeholder project cards designed to highlight the kind of DevOps and deployment work I want to build."
          />

          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((project) => (
              <GlassCard key={project.title} className="group flex h-full flex-col p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-medium uppercase tracking-[0.22em] text-cyan-300">Project</p>
                    <h3 className="mt-2 text-2xl font-semibold text-white">{project.title}</h3>
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                    Placeholder
                  </span>
                </div>

                <p className="mt-4 text-sm leading-7 text-slate-300">{project.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={project.github}
                    className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:border-cyan-300/30 hover:bg-white/10"
                  >
                    <FiGithub /> GitHub
                  </a>
                  <a
                    href={project.demo}
                    className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:shadow-glow"
                  >
                    Live Demo <FiArrowRight />
                  </a>
                </div>
              </GlassCard>
            ))}
          </div>
        </section>

        <section id="journey" className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Learning Journey"
            title="A simple path from fundamentals to cloud-native tools"
            description="The sequence below shows the progression I am following while building a strong DevOps foundation."
          />

          <GlassCard className="p-6 sm:p-8">
            <div className="mx-auto max-w-3xl">
              {journey.map((step, index) => (
                <div key={step} className="flex flex-col items-center">
                  <div className="flex w-full items-center gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 font-semibold text-cyan-200">
                      {index + 1}
                    </div>
                    <div className="flex-1 rounded-2xl border border-white/10 bg-slate-950/50 px-5 py-4 text-center text-lg font-medium text-white shadow-lg shadow-black/10">
                      {step}
                    </div>
                  </div>
                  {index !== journey.length - 1 ? (
                    <div className="my-3 h-8 w-px bg-gradient-to-b from-cyan-300/80 to-transparent" />
                  ) : null}
                </div>
              ))}
            </div>
          </GlassCard>
        </section>

        <section id="certifications" className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Certifications"
            title="Placeholder certification cards"
            description="These cards leave room for future certificates, badges, and training milestones."
          />

          <div className="grid gap-4 md:grid-cols-3">
            {certifications.map((certification) => (
              <GlassCard key={certification.title} className="p-6">
                <p className="text-sm font-medium uppercase tracking-[0.24em] text-cyan-300">Certification</p>
                <h3 className="mt-3 text-xl font-semibold text-white">{certification.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{certification.description}</p>
                <span className="mt-5 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                  {certification.status}
                </span>
              </GlassCard>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Contact"
            title="Let's connect"
            description="Open to networking, internship opportunities, and collaboration on DevOps and cloud projects."
          />

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {contacts.map((contact) => {
              const Icon = contact.icon;

              return (
                <GlassCard key={contact.label} className="p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30">
                  <div className="flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-2xl border border-cyan-300/15 bg-cyan-300/10 text-cyan-200">
                      <Icon />
                    </span>
                    <div>
                      <p className="text-sm text-slate-400">{contact.label}</p>
                      <a className="mt-1 block font-medium text-white transition hover:text-cyan-300" href={contact.href}>
                        {contact.value}
                      </a>
                    </div>
                  </div>
                </GlassCard>
              );
            })}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={socialLinks.github}
              className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:border-cyan-300/30 hover:bg-white/10"
            >
              <FiGithub /> GitHub
            </a>
            <a
              href={socialLinks.linkedin}
              className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:border-cyan-300/30 hover:bg-white/10"
            >
              <FiLinkedin /> LinkedIn
            </a>
            <a
              href={socialLinks.email}
              className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:shadow-glow"
            >
              <FiMail /> Email Me
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-slate-950/70">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-4 py-6 text-sm text-slate-400 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} Usman Ali. All rights reserved.</p>
          <p>Built with React, Vite, Tailwind CSS, and a focus on clean DevOps presentation.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;