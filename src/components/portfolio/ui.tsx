import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className = "",
}: {
  id: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`py-24 md:py-32 ${className}`}>
      <div className="max-w-[1200px] mx-auto px-6">
        {(eyebrow || title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="mb-14 max-w-2xl"
          >
            {eyebrow && (
              <div className="text-xs uppercase tracking-[0.25em] text-[var(--umber)] mb-4">{eyebrow}</div>
            )}
            {title && <h2 className="text-3xl md:text-5xl leading-tight">{title}</h2>}
            {subtitle && <p className="mt-5 text-[var(--eerie)]/70 text-lg leading-relaxed">{subtitle}</p>}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`bg-[var(--platinum)] rounded-xl p-7 border border-[var(--border)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(91,64,39,0.25)] ${className}`}
    >
      {children}
    </div>
  );
}

export function Button({
  children,
  variant = "primary",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "outline" | "ghost" }) {
  const base =
    "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300";
  const styles = {
    primary: "bg-[var(--umber)] text-[var(--pearl)] hover:bg-[var(--burgundy)] hover:-translate-y-0.5 shadow-sm hover:shadow-md",
    outline: "border border-[var(--umber)] text-[var(--burgundy)] hover:bg-[var(--platinum)]",
    ghost: "text-[var(--burgundy)] hover:bg-[var(--platinum)]",
  }[variant];
  return (
    <button {...props} className={`${base} ${styles} ${props.className ?? ""}`}>
      {children}
    </button>
  );
}

export function AnchorButton({
  href,
  children,
  variant = "primary",
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: "primary" | "outline" | "ghost" }) {
  const base =
    "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300";
  const styles = {
    primary: "bg-[var(--umber)] text-[var(--pearl)] hover:bg-[var(--burgundy)] hover:-translate-y-0.5 shadow-sm hover:shadow-md",
    outline: "border border-[var(--umber)] text-[var(--burgundy)] hover:bg-[var(--platinum)]",
    ghost: "text-[var(--burgundy)] hover:bg-[var(--platinum)]",
  }[variant];
  return (
    <a href={href} {...props} className={`${base} ${styles} ${props.className ?? ""}`}>
      {children}
    </a>
  );
}