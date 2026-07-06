import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "./ui";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().min(6, "Enter a valid phone").max(30),
  organization: z.string().trim().max(120).optional().or(z.literal("")),
  category: z.string().min(1, "Select a category"),
  budget: z.string().min(1, "Select a budget"),
  deadline: z.string().min(1, "Choose a deadline"),
  description: z.string().trim().min(20, "Please describe your project (min 20 chars)").max(2000),
  contactMethod: z.enum(["Email", "WhatsApp", "Phone"]),
});

type FormValues = z.infer<typeof schema>;

const input =
  "w-full bg-[var(--pearl)] border border-[var(--border)] rounded-xl px-4 py-3 text-sm text-[var(--eerie)] focus:outline-none focus:border-[var(--umber)] focus:ring-2 focus:ring-[var(--umber)]/15 transition";

export function OrderForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({ resolver: zodResolver(schema), defaultValues: { contactMethod: "Email" } });

  const onSubmit = async (values: FormValues) => {
    const body = `New project inquiry\n\n${Object.entries(values)
      .map(([k, v]) => `${k}: ${v}`)
      .join("\n")}`;
    // Fallback: open mail client
    window.location.href = `mailto:sinthiyakotha870@gmail.com?subject=${encodeURIComponent(
      "New Project Inquiry — " + values.name,
    )}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div className="bg-[var(--platinum)] border border-[var(--border)] rounded-xl p-10 text-center">
        <h3 className="text-2xl mb-3">Thank you!</h3>
        <p className="text-[var(--eerie)]/70 max-w-lg mx-auto">
          Your project inquiry has been received. I will contact you within 24 hours.
        </p>
        <Button className="mt-6" onClick={() => setSubmitted(false)}>
          Submit another
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-[var(--platinum)] border border-[var(--border)] rounded-xl p-6 md:p-10 grid gap-5">
      <div className="grid md:grid-cols-2 gap-5">
        <Field label="Full Name" error={errors.name?.message}>
          <input {...register("name")} className={input} placeholder="Your name" />
        </Field>
        <Field label="Email" error={errors.email?.message}>
          <input {...register("email")} type="email" className={input} placeholder="you@example.com" />
        </Field>
        <Field label="Phone Number" error={errors.phone?.message}>
          <input {...register("phone")} className={input} placeholder="+8801XXXXXXXXX" />
        </Field>
        <Field label="Organization (optional)" error={errors.organization?.message}>
          <input {...register("organization")} className={input} placeholder="Company or institution" />
        </Field>
        <Field label="Project Category" error={errors.category?.message}>
          <select {...register("category")} className={input}>
            <option value="">Select…</option>
            {["Machine Learning", "AI", "Website", "Power BI", "Networking", "Research", "Other"].map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </Field>
        <Field label="Budget" error={errors.budget?.message}>
          <select {...register("budget")} className={input}>
            <option value="">Select…</option>
            {["৳5,000–10,000", "৳10,000–15,000", "৳15,000–20,000", "৳20,000–25,000", "৳25,000–30,000"].map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </Field>
        <Field label="Project Deadline" error={errors.deadline?.message}>
          <input type="date" {...register("deadline")} className={input} />
        </Field>
        <Field label="Preferred Contact Method" error={errors.contactMethod?.message}>
          <select {...register("contactMethod")} className={input}>
            <option>Email</option>
            <option>WhatsApp</option>
            <option>Phone</option>
          </select>
        </Field>
      </div>
      <Field label="Project Description" error={errors.description?.message}>
        <textarea {...register("description")} rows={5} className={input} placeholder="Briefly describe scope, goals, and requirements." />
      </Field>
      <Field label="File Upload (optional)">
        <input type="file" className={`${input} file:mr-4 file:py-1 file:px-3 file:rounded-md file:border-0 file:bg-[var(--umber)] file:text-[var(--pearl)]`} />
      </Field>
      <div>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending…" : "Request a Quote"}
        </Button>
      </div>
    </form>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-wider text-[var(--burgundy)] mb-2 block">{label}</span>
      {children}
      {error && <span className="text-xs text-red-700 mt-1 block">{error}</span>}
    </label>
  );
}