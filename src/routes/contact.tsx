import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact Naboday Coaching Centre — Jibanti, West Bengal" },
      {
        name: "description",
        content:
          "Message Naboday Coaching Centre in Jibanti, Murshidabad, West Bengal. Send an enquiry about batches for Classes 6 to 12 and book a free demo class.",
      },
      { property: "og:title", content: "Contact Naboday Coaching Centre" },
      {
        property: "og:description",
        content:
          "Send an enquiry to Naboday Coaching Centre, Jibanti, West Bengal. Free demo class for Classes 6 to 12.",
      },
      { property: "og:url", content: "/contact" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Contact Naboday Coaching Centre" },
      {
        name: "twitter:description",
        content:
          "Send an enquiry to Naboday Coaching Centre, Jibanti, West Bengal.",
      },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

const enquirySchema = z.object({
  student_name: z
    .string()
    .trim()
    .nonempty({ message: "Please enter the student's name" })
    .max(100),
  parent_phone: z
    .string()
    .trim()
    .min(6, { message: "Please enter a valid phone number" })
    .max(20),
  email: z
    .string()
    .trim()
    .max(255)
    .email({ message: "Please enter a valid email address" })
    .optional()
    .or(z.literal("")),
  course: z.string().trim().max(60).optional().or(z.literal("")),
  message: z.string().trim().max(1000).optional().or(z.literal("")),
});

function ContactPage() {
  const [form, setForm] = useState({
    student_name: "",
    parent_phone: "",
    email: "",
    course: "",
    message: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const field =
    "w-full rounded-xl bg-frost/70 px-4 py-3 text-sm text-foreground ring-1 ring-black/5 placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/40";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const parsed = enquirySchema.safeParse(form);
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Please check your details");
      return;
    }
    setSending(true);
    const v = parsed.data;
    const { error: insertError } = await supabase.from("enquiries").insert({
      student_name: v.student_name,
      parent_phone: v.parent_phone,
      email: v.email || null,
      course: v.course || null,
      message: v.message || null,
    });
    setSending(false);
    if (insertError) {
      setError("Sorry, the message could not be sent. Please try again.");
      return;
    }
    setSent(true);
  }

  return (
    <main className="min-h-screen bg-linear-to-b from-background via-[#e6eef7] to-[#dfe9f5] px-5 pb-12 pt-8 font-sans text-foreground antialiased">
      <header className="flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="grid size-9 place-items-center rounded-xl bg-foreground text-sm font-extrabold text-frost">
            N
          </span>
          <div className="leading-tight">
            <p className="text-sm font-bold tracking-tight">Naboday</p>
            <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-muted">
              Coaching Centre
            </p>
          </div>
        </Link>
        <Link
          to="/"
          className="rounded-full bg-frost/60 px-4 py-2 text-xs font-semibold ring-1 ring-black/5 backdrop-blur-md transition-colors hover:bg-frost"
        >
          Back to home
        </Link>
      </header>

      <h1 className="mt-8 text-3xl font-extrabold tracking-tight">
        Contact Naboday
      </h1>
      <p className="mt-2 max-w-prose text-sm text-muted">
        Send us a message about batches, fees or a free demo class. We read every
        enquiry and call parents back.
      </p>

      <section className="mt-6 rounded-3xl bg-frost/55 p-5 ring-1 ring-black/5 backdrop-blur-xl">
        <h2 className="text-base font-bold tracking-tight">Send an enquiry</h2>

        {sent ? (
          <div className="mt-4 rounded-xl bg-primary/10 p-4 text-center">
            <p className="text-sm font-semibold text-primary">
              Your message has been sent
            </p>
            <p className="mt-1 text-xs text-muted">
              We have saved your enquiry and will call you back soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-3 flex flex-col gap-2.5">
            <input
              className={field}
              placeholder="Student name"
              value={form.student_name}
              onChange={(e) =>
                setForm((s) => ({ ...s, student_name: e.target.value }))
              }
              maxLength={100}
              required
            />
            <input
              className={field}
              type="tel"
              placeholder="Parent phone"
              value={form.parent_phone}
              onChange={(e) =>
                setForm((s) => ({ ...s, parent_phone: e.target.value }))
              }
              maxLength={20}
              required
            />
            <input
              className={field}
              type="email"
              placeholder="Email (optional)"
              value={form.email}
              onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
              maxLength={255}
            />
            <select
              className={field}
              value={form.course}
              onChange={(e) =>
                setForm((s) => ({ ...s, course: e.target.value }))
              }
            >
              <option value="">Which class or course?</option>
              <option value="foundation">Foundation (Class 6-8)</option>
              <option value="science">Science (Class 9-12)</option>
              <option value="english-humanities">English &amp; Humanities</option>
              <option value="other">Something else</option>
            </select>
            <textarea
              className={field}
              rows={4}
              placeholder="Your message (optional)"
              value={form.message}
              onChange={(e) =>
                setForm((s) => ({ ...s, message: e.target.value }))
              }
              maxLength={1000}
            />
            {error && (
              <p className="text-xs font-medium text-destructive">{error}</p>
            )}
            <button
              type="submit"
              disabled={sending}
              className="rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:bg-[#2a63c9] active:translate-y-px disabled:opacity-60"
            >
              {sending ? "Sending…" : "Send message"}
            </button>
          </form>
        )}
      </section>

      <section className="mt-4 rounded-3xl bg-frost/55 p-5 ring-1 ring-black/5 backdrop-blur-xl">
        <h2 className="text-base font-bold tracking-tight">Visit us</h2>
        <p className="mt-2 text-sm text-muted">
          Naboday Coaching Centre
          <br />
          Jibanti, Murshidabad district, West Bengal
        </p>
        <p className="mt-3 text-sm text-muted">
          Class hours: Morning 7:00–10:30 · Evening 5:00–8:30 · Sunday test
          10:00–12:00
        </p>
        <a
          href="https://maps.app.goo.gl/wz1XKUwnF65T5T6x9"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block text-sm font-semibold text-primary underline underline-offset-2"
        >
          Get directions on the map
        </a>
        <div className="mt-4 overflow-hidden rounded-2xl ring-1 ring-black/5">
          <iframe
            title="Naboday Coaching Centre location map"
            src="https://www.openstreetmap.org/export/embed.html?bbox=88.1419%2C24.0995%2C88.1619%2C24.1095&amp;layer=mapnik&amp;marker=24.1045%2C88.1519"
            width="100%"
            height="260"
            className="border-0"
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </main>
  );
}
