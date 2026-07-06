import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Mail,
  MapPin,
  Phone,
  Check,
  Star,
  ExternalLink,
} from "lucide-react";

function Github({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 .5C5.73.5.99 5.24.99 11.51c0 4.86 3.15 8.98 7.52 10.44.55.1.75-.24.75-.53 0-.26-.01-1.13-.02-2.05-3.06.66-3.71-1.3-3.71-1.3-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.67.08-.67 1.11.08 1.7 1.14 1.7 1.14.99 1.7 2.6 1.21 3.24.92.1-.72.39-1.21.7-1.49-2.44-.28-5-1.22-5-5.44 0-1.2.43-2.18 1.13-2.95-.11-.28-.49-1.4.11-2.92 0 0 .93-.3 3.05 1.13.88-.24 1.83-.36 2.77-.36.94 0 1.9.12 2.77.36 2.12-1.43 3.05-1.13 3.05-1.13.6 1.52.22 2.64.11 2.92.7.77 1.13 1.75 1.13 2.95 0 4.23-2.57 5.16-5.02 5.43.4.34.75 1.02.75 2.06 0 1.49-.01 2.68-.01 3.05 0 .29.2.64.76.53 4.36-1.46 7.51-5.58 7.51-10.44C23.01 5.24 18.27.5 12 .5Z" />
    </svg>
  );
}
function Linkedin({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.65-1.85 3.39-1.85 3.62 0 4.29 2.38 4.29 5.48v6.26ZM5.34 7.44a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.28V1.72C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}
import { Navbar } from "@/components/portfolio/Navbar";
import { Section, Card, AnchorButton, Button, fadeUp } from "@/components/portfolio/ui";
import { OrderForm } from "@/components/portfolio/OrderForm";
import {
  SOCIALS,
  SKILL_GROUPS,
  PROJECTS,
  SERVICES,
  PRICING,
  CERTIFICATIONS,
  TIMELINE,
  NAV_LINKS,
} from "@/lib/portfolio-data";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-[var(--pearl)] text-[var(--eerie)]">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Pricing />
      <Order />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="pt-40 pb-24 md:pt-52 md:pb-32">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-4xl">
          <div className="text-xs uppercase tracking-[0.3em] text-[var(--umber)] mb-6">
            Machine Learning Engineer · Bangladesh
          </div>
          <h1 className="font-display text-5xl md:text-7xl leading-[1.05] text-[var(--burgundy)]">
            Mahim Chowdhury Katha
          </h1>
          <p className="mt-6 text-base md:text-lg text-[var(--umber)] tracking-wide">
            Machine Learning · Artificial Intelligence · Data Science · Web Development · Networking
          </p>
          <p className="mt-8 text-lg md:text-xl text-[var(--eerie)]/75 leading-relaxed max-w-3xl">
            I build intelligent software solutions, modern web applications, and data-driven systems by
            combining Artificial Intelligence, Machine Learning, and Software Engineering.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <AnchorButton href="#projects">
              View Projects <ArrowRight size={16} />
            </AnchorButton>
            <AnchorButton href="#order" variant="outline">
              Hire Me
            </AnchorButton>
            <AnchorButton href="/cv.pdf" download variant="ghost">
              <Download size={16} /> Download CV
            </AnchorButton>
          </div>
          <div className="mt-12 flex items-center gap-5 text-[var(--burgundy)]">
            <a href={SOCIALS.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-[var(--umber)] transition">
              <Linkedin size={20} />
            </a>
            <a href={SOCIALS.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-[var(--umber)] transition">
              <Github size={20} />
            </a>
            <a href={SOCIALS.email} aria-label="Email" className="hover:text-[var(--umber)] transition">
              <Mail size={20} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  return (
    <Section id="about" eyebrow="About" title="A calm, methodical builder of intelligent systems." subtitle="Computer Science graduate specializing in Data Science, with hands-on experience across Machine Learning, Deep Learning, Computer Vision, Data Analytics, Full-Stack Development, Networking, Research and Entrepreneurship.">
      <div className="grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-3 space-y-5 text-[var(--eerie)]/80 leading-relaxed">
          <p>
            I hold a BSc in Computer Science & Engineering from <strong className="text-[var(--burgundy)]">East West University</strong>,
            with a major in Data Science. My work sits at the intersection of applied AI research and
            production software — building models that are accurate, explainable and useful.
          </p>
          <p>
            Alongside engineering, I am the <strong className="text-[var(--burgundy)]">Founder of Purple Daze</strong>,
            where I lead operations, client communication, supplier negotiation, marketing and delivery.
            That entrepreneurial lens shapes how I approach every project: outcomes over ornamentation.
          </p>
          <p>
            I care about craft — clean data pipelines, disciplined evaluation, thoughtful interfaces,
            and networks that are as reliable in stress as they are on paper.
          </p>
        </div>
        <div className="lg:col-span-2 space-y-4">
          {TIMELINE.map((t, i) => (
            <motion.div
              key={t.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative pl-6 border-l-2 border-[var(--tuscany)] py-2"
            >
              <div className="text-xs uppercase tracking-widest text-[var(--umber)]">{t.year}</div>
              <div className="mt-1 font-medium text-[var(--burgundy)]">{t.title}</div>
              <div className="mt-1 text-sm text-[var(--eerie)]/70 leading-relaxed">{t.body}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="A disciplined, cross-disciplinary toolkit." subtitle="Balanced across programming, applied machine learning, analytics, networking and delivery tooling.">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SKILL_GROUPS.map((g, i) => (
          <motion.div key={g.title} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Card>
              <h3 className="text-xl mb-5">{g.title}</h3>
              <ul className="space-y-4">
                {g.items.map((s) => (
                  <li key={s.name}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-[var(--eerie)]/85">{s.name}</span>
                      <span className="text-[var(--umber)] text-xs tabular-nums">{s.level}%</span>
                    </div>
                    <div className="h-1.5 bg-[var(--pearl)] rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full bg-[var(--umber)] rounded-full"
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Projects() {
  return (
    <Section id="projects" eyebrow="Featured Projects" title="Selected work across AI, vision, data and networks." subtitle="A curated view of research-grade and applied projects built with clean methodology.">
      <div className="grid md:grid-cols-2 gap-6">
        {PROJECTS.map((p, i) => (
          <motion.div key={p.title} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Card className="h-full flex flex-col">
              <div className="aspect-[16/9] rounded-lg bg-[var(--pearl)] border border-[var(--border)] mb-6 flex items-center justify-center overflow-hidden">
                <div className="font-display text-4xl text-[var(--tuscany)] opacity-70">
                  {p.title.split(" ").map((w) => w[0]).join("").slice(0, 3)}
                </div>
              </div>
              <h3 className="text-2xl mb-3">{p.title}</h3>
              <p className="text-[var(--eerie)]/70 leading-relaxed mb-5">{p.description}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {p.tech.map((t) => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-md bg-[var(--pearl)] border border-[var(--border)] text-[var(--umber)]">
                    {t}
                  </span>
                ))}
              </div>
              <ul className="text-sm text-[var(--eerie)]/70 space-y-1.5 mb-6">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check size={14} className="text-[var(--umber)] mt-1" /> {f}
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex gap-3">
                <AnchorButton href={p.github} variant="outline" className="!py-2 !px-4 text-xs">
                  <Github size={14} /> GitHub
                </AnchorButton>
                <AnchorButton href={p.details} className="!py-2 !px-4 text-xs">
                  Details <ExternalLink size={14} />
                </AnchorButton>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Services() {
  return (
    <Section id="services" eyebrow="Services" title="Services delivered with consultancy-grade rigor." subtitle="From research prototypes to production deployments — clearly scoped and dependable.">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((s, i) => (
          <motion.div key={s.title} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Card>
              <div className="text-xs uppercase tracking-widest text-[var(--umber)] mb-3">0{i + 1}</div>
              <h3 className="text-xl mb-4">{s.title}</h3>
              <ul className="text-sm text-[var(--eerie)]/75 space-y-2">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-[var(--umber)] mt-2" /> {p}
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Pricing() {
  return (
    <Section id="pricing" eyebrow="Pricing" title="Transparent packages in Bangladeshi Taka." subtitle="Clear scope, clear timelines. Custom quotes available for anything outside these tiers.">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {PRICING.map((p, i) => (
          <motion.div key={p.tier} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative">
            {p.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 bg-[var(--umber)] text-[var(--pearl)] text-[10px] uppercase tracking-widest px-3 py-1 rounded-full inline-flex items-center gap-1">
                <Star size={10} /> Most Popular
              </div>
            )}
            <Card className={`h-full flex flex-col ${p.popular ? "ring-1 ring-[var(--umber)]" : ""}`}>
              <div className="text-sm uppercase tracking-widest text-[var(--umber)]">{p.tier}</div>
              <div className="mt-3 font-display text-4xl text-[var(--burgundy)]">{p.price}</div>
              <div className="text-xs text-[var(--eerie)]/60 mt-1">Delivery: {p.delivery}</div>
              <div className="h-px bg-[var(--border)] my-6" />
              <ul className="space-y-3 text-sm text-[var(--eerie)]/80 mb-8">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check size={14} className="text-[var(--umber)] mt-1" /> {f}
                  </li>
                ))}
              </ul>
              <AnchorButton
                href="#order"
                variant={p.popular ? "primary" : "outline"}
                className="mt-auto w-full"
              >
                Choose {p.tier}
              </AnchorButton>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Order() {
  return (
    <Section id="order" eyebrow="Order Project" title="Let's build your project." subtitle="Share the essentials and I'll reply with a tailored plan within 24 hours.">
      <OrderForm />
    </Section>
  );
}

function Certifications() {
  return (
    <Section id="certifications" eyebrow="Certifications" title="Continuous, verifiable learning.">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {CERTIFICATIONS.map((c, i) => (
          <motion.div key={c.title} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Card>
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg leading-snug">{c.title}</h3>
                <span
                  className={`text-[10px] uppercase tracking-widest px-2 py-1 rounded-full whitespace-nowrap ${
                    c.status === "Completed"
                      ? "bg-[var(--umber)] text-[var(--pearl)]"
                      : "bg-[var(--pearl)] text-[var(--umber)] border border-[var(--border)]"
                  }`}
                >
                  {c.status}
                </span>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Let's start a conversation.">
      <div className="grid lg:grid-cols-2 gap-8">
        <Card>
          <div className="space-y-5">
            <ContactRow icon={<Mail size={18} />} label="Email" value="mahim.chowdhury.katha@gmail.com" href={SOCIALS.email} />
            <ContactRow icon={<Phone size={18} />} label="Phone" value={SOCIALS.phone} href={`tel:${SOCIALS.phone}`} />
            <ContactRow icon={<MapPin size={18} />} label="Location" value={SOCIALS.location} />
            <ContactRow icon={<Linkedin size={18} />} label="LinkedIn" value="mahim-chowdhury-katha" href={SOCIALS.linkedin} />
            <ContactRow icon={<Github size={18} />} label="GitHub" value="mahim-chowdhury-katha" href={SOCIALS.github} />
          </div>
          <div className="mt-8 flex gap-3">
            <AnchorButton href={SOCIALS.email}>
              <Mail size={16} /> Send Email
            </AnchorButton>
            <AnchorButton href="#order" variant="outline">Start a Project</AnchorButton>
          </div>
        </Card>
        <Card className="!p-0 overflow-hidden">
          <iframe
            title="Location"
            src="https://www.google.com/maps?q=Dhaka,%20Bangladesh&output=embed"
            className="w-full h-full min-h-[360px] border-0"
            loading="lazy"
          />
        </Card>
      </div>
    </Section>
  );
}

function ContactRow({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) {
  const inner = (
    <div className="flex items-center gap-4 group">
      <div className="w-10 h-10 rounded-lg bg-[var(--pearl)] border border-[var(--border)] flex items-center justify-center text-[var(--umber)] group-hover:bg-[var(--umber)] group-hover:text-[var(--pearl)] transition">
        {icon}
      </div>
      <div>
        <div className="text-[10px] uppercase tracking-widest text-[var(--umber)]">{label}</div>
        <div className="text-sm text-[var(--eerie)]">{value}</div>
      </div>
    </div>
  );
  return href ? (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
      {inner}
    </a>
  ) : (
    inner
  );
}

function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-14 mt-10">
      <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-3 gap-10">
        <div>
          <div className="font-display text-xl text-[var(--burgundy)]">Mahim Chowdhury Katha</div>
          <div className="text-sm text-[var(--eerie)]/70 mt-2">
            Machine Learning Engineer · AI Developer · Data Science Graduate
          </div>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-[var(--umber)] mb-4">Quick Links</div>
          <ul className="grid grid-cols-2 gap-y-2 text-sm">
            {NAV_LINKS.slice(0, 8).map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`} className="text-[var(--eerie)]/75 hover:text-[var(--burgundy)]">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-[var(--umber)] mb-4">Social</div>
          <div className="flex gap-3">
            <a href={SOCIALS.linkedin} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-lg border border-[var(--border)] flex items-center justify-center text-[var(--burgundy)] hover:bg-[var(--platinum)]">
              <Linkedin size={16} />
            </a>
            <a href={SOCIALS.github} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-lg border border-[var(--border)] flex items-center justify-center text-[var(--burgundy)] hover:bg-[var(--platinum)]">
              <Github size={16} />
            </a>
            <a href={SOCIALS.email} className="w-10 h-10 rounded-lg border border-[var(--border)] flex items-center justify-center text-[var(--burgundy)] hover:bg-[var(--platinum)]">
              <Mail size={16} />
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto px-6 mt-10 pt-6 border-t border-[var(--border)] text-xs text-[var(--eerie)]/60 flex flex-wrap justify-between gap-2">
        <div>© 2026 Mahim Chowdhury Katha. All Rights Reserved.</div>
        <div>Built with care in Dhaka.</div>
      </div>
    </footer>
  );
}

// Suppress unused Button import warning; used indirectly via named export re-use
export { Button };
