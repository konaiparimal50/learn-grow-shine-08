import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import classroomImg from "@/assets/classroom.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Naboday Coaching Centre — Jibanti, West Bengal" },
      {
        name: "description",
        content:
          "Naboday Coaching Centre in Jibanti, West Bengal offers focused coaching for Classes 6 to 12 in Mathematics, Science, English and more. Small batches, caring teachers, affordable fees.",
      },
      {
        property: "og:title",
        content: "Naboday Coaching Centre — Jibanti, West Bengal",
      },
      {
        property: "og:description",
        content:
          "Focused coaching for Classes 6 to 12. Small batches, caring teachers, affordable fees.",
      },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Naboday Coaching Centre — Jibanti, West Bengal",
      },
      {
        name: "twitter:description",
        content:
          "Focused coaching for Classes 6 to 12. Small batches, caring teachers, affordable fees.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Index() {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    course: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-linear-to-b from-background via-[#e6eef7] to-[#dfe9f5] font-sans text-foreground antialiased selection:bg-primary/20">
      {/* Hero */}
      <section className="relative overflow-hidden px-5 pt-8">
        <div className="pointer-events-none absolute -top-24 -left-20 size-72 rounded-full bg-primary/20 blur-3xl"></div>
        <div className="pointer-events-none absolute top-40 -right-16 size-64 rounded-full bg-amber/25 blur-3xl"></div>

        <header className="relative z-10 flex animate-[rise_0.5s_var(--ease-out)_both] items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="grid size-9 place-items-center rounded-xl bg-foreground text-sm font-extrabold text-frost">
              N
            </span>
            <div className="leading-tight">
              <p className="text-sm font-bold tracking-tight">Naboday</p>
              <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-muted">
                Coaching Centre
              </p>
            </div>
          </div>
          <Link
            to="/contact"
            className="rounded-full bg-frost/60 px-4 py-2 text-xs font-semibold text-foreground ring-1 ring-black/5 backdrop-blur-md transition-colors hover:bg-frost"
          >
            Contact
          </Link>
        </header>

        <div className="relative z-10 mt-10 rounded-[28px] bg-frost/55 p-6 ring-1 ring-black/5 backdrop-blur-xl">
          <p className="inline-flex animate-[rise_0.5s_var(--ease-out)_0.05s_both] items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 font-mono text-[11px] font-medium text-primary">
            <span className="size-1.5 rounded-full bg-primary"></span>
            Serving Jibanti & nearby areas
          </p>
          <h1 className="mt-4 animate-[rise_0.6s_var(--ease-out)_0.1s_both] text-4xl font-extrabold leading-[1.05] tracking-tight text-balance">
            Where every student finds their focus.
          </h1>
          <p className="mt-3 max-w-[42ch] animate-[rise_0.6s_var(--ease-out)_0.18s_both] text-pretty text-[15px] leading-relaxed text-muted">
            Personalised coaching for Classes 6 to 12 — patient teachers, small
            batches, and affordable fees for families in Jibanti and surrounding
            villages.
          </p>
          <div className="mt-5 flex flex-col gap-2.5 animate-[rise_0.6s_var(--ease-out)_0.26s_both]">
            <a
              href="#courses"
              className="rounded-xl bg-primary px-5 py-3 text-center text-sm font-semibold text-primary-foreground transition-all duration-200 hover:bg-[#2a63c9] active:translate-y-px"
            >
              Explore Courses
            </a>
            <a
              href="#contact"
              className="rounded-xl bg-frost/70 px-5 py-3 text-center text-sm font-semibold text-foreground ring-1 ring-black/5 backdrop-blur-md transition-colors duration-200 hover:bg-frost"
            >
              Book a Free Demo
            </a>
          </div>
          <div className="mt-6 grid grid-cols-3 divide-x divide-border border-t border-border pt-5">
            <div className="pr-2">
              <p className="text-2xl font-extrabold tracking-tight">6-12</p>
              <p className="mt-0.5 text-[11px] font-medium text-muted">Classes</p>
            </div>
            <div className="px-3">
              <p className="text-2xl font-extrabold tracking-tight">Small</p>
              <p className="mt-0.5 text-[11px] font-medium text-muted">Batches</p>
            </div>
            <div className="pl-3">
              <p className="text-2xl font-extrabold tracking-tight">W. Bengal</p>
              <p className="mt-0.5 text-[11px] font-medium text-muted">Jibanti</p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="px-5 pt-6">
        <div className="inline-flex animate-[rise_0.5s_var(--ease-out)_both] items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-muted">
          <span className="size-1.5 rounded-full bg-primary"></span>(a) About
        </div>
        <div className="mt-3 animate-[rise_0.5s_var(--ease-out)_0.05s_both] rounded-3xl bg-frost/50 p-5 ring-1 ring-black/5 backdrop-blur-xl">
          <img
            src={classroomImg}
            alt="Students studying in a bright Naboday Coaching Centre classroom"
            width={1024}
            height={680}
            loading="lazy"
            className="aspect-[3/2] w-full rounded-2xl object-cover outline-1 -outline-offset-1 outline-black/5"
          />
          <h2 className="mt-4 text-xl font-bold tracking-tight text-balance">
            A calm space to think.
          </h2>
          <p className="mt-2 text-pretty text-sm leading-relaxed text-muted">
            Naboday Coaching Centre is a local learning space in Jibanti, West
            Bengal, built on the belief that every student learns differently. We
            keep batches small so teachers can give real attention, explain concepts
            patiently, and help students catch up and move ahead with confidence.
          </p>
        </div>
      </section>

      {/* Courses */}
      <section id="courses" className="px-5 pt-7">
        <div className="inline-flex animate-[rise_0.5s_var(--ease-out)_both] items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-muted">
          <span className="size-1.5 rounded-full bg-primary"></span>(b) Courses
        </div>
        <h2 className="mt-2 animate-[rise_0.5s_var(--ease-out)_0.05s_both] text-2xl font-extrabold tracking-tight text-balance">
          Pick your stream
        </h2>
        <div className="mt-4 flex flex-col gap-3">
          <div className="group animate-[rise_0.5s_var(--ease-out)_0.1s_both] rounded-2xl bg-frost/55 p-4 ring-1 ring-black/5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-frost/75">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] font-medium text-primary">
                Science
              </span>
              <span className="rounded-full bg-amber/15 px-2 py-0.5 text-[10px] font-semibold text-[#a9700f]">
                Popular
              </span>
            </div>
            <p className="mt-2 text-base font-bold tracking-tight">
              Class 9-12 Physics, Chemistry, Maths
            </p>
            <p className="mt-1 text-sm text-muted">
              Board-focused theory with problem-solving practice and regular tests.
            </p>
          </div>

          <div className="group animate-[rise_0.5s_var(--ease-out)_0.18s_both] rounded-2xl bg-frost/55 p-4 ring-1 ring-black/5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-frost/75">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] font-medium text-primary">
                English &amp; Humanities
              </span>
              <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-primary">
                New
              </span>
            </div>
            <p className="mt-2 text-base font-bold tracking-tight">
              English, History, Geography &amp; more
            </p>
            <p className="mt-1 text-sm text-muted">
              Strong language and social-science foundation for school exams.
            </p>
          </div>

          <div className="group animate-[rise_0.5s_var(--ease-out)_0.26s_both] rounded-2xl bg-frost/55 p-4 ring-1 ring-black/5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-frost/75">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] font-medium text-primary">
                Foundation
              </span>
              <span className="rounded-full bg-frost/60 px-2 py-0.5 text-[10px] font-semibold text-muted ring-1 ring-black/5">
                Classes 6-8
              </span>
            </div>
            <p className="mt-2 text-base font-bold tracking-tight">
              Maths, Science &amp; English
            </p>
            <p className="mt-1 text-sm text-muted">
              Build strong basics before the pressure years.
            </p>
          </div>
        </div>
      </section>

      {/* Why Naboday */}
      <section className="px-5 pt-7">
        <div className="inline-flex animate-[rise_0.5s_var(--ease-out)_both] items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-muted">
          <span className="size-1.5 rounded-full bg-primary"></span>(c) Why Naboday
        </div>
        <div className="mt-3 animate-[rise_0.5s_var(--ease-out)_0.05s_both] rounded-3xl bg-foreground p-5 text-frost ring-1 ring-black/5">
          <p className="text-3xl font-extrabold tracking-tight">
            Small batches. Real attention.
          </p>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="rounded-2xl bg-frost/10 p-3">
              <p className="text-lg font-bold">12 max</p>
              <p className="text-[11px] text-frost/70">students per class</p>
            </div>
            <div className="rounded-2xl bg-frost/10 p-3">
              <p className="text-lg font-bold">Personal</p>
              <p className="text-[11px] text-frost/70">doubt-clearing</p>
            </div>
            <div className="rounded-2xl bg-frost/10 p-3">
              <p className="text-lg font-bold">Affordable</p>
              <p className="text-[11px] text-frost/70">monthly fees</p>
            </div>
            <div className="rounded-2xl bg-frost/10 p-3">
              <p className="text-lg font-bold">Weekly</p>
              <p className="text-[11px] text-frost/70">progress checks</p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-frost/80">
            &quot;The teachers here take the time to explain until every student
            understands. My son&apos;s confidence in maths has grown so much.&quot;
          </p>
          <p className="mt-3 font-mono text-[11px] text-frost/60">
            — A parent from Jibanti
          </p>
        </div>
      </section>

      {/* Schedule */}
      <section className="px-5 pt-7">
        <div className="inline-flex animate-[rise_0.5s_var(--ease-out)_both] items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-muted">
          <span className="size-1.5 rounded-full bg-primary"></span>(d) Schedule
        </div>
        <div className="mt-3 animate-[rise_0.5s_var(--ease-out)_0.05s_both] overflow-hidden rounded-3xl bg-frost/55 ring-1 ring-black/5 backdrop-blur-xl">
          <div className="grid grid-cols-[1fr_auto] items-center gap-3 border-b border-border px-5 py-3.5">
            <div>
              <p className="text-sm font-bold">Morning Batch</p>
              <p className="text-[11px] text-muted">Mon - Sat</p>
            </div>
            <p className="font-mono text-xs text-foreground">7:00 - 10:30</p>
          </div>
          <div className="grid grid-cols-[1fr_auto] items-center gap-3 border-b border-border px-5 py-3.5">
            <div>
              <p className="text-sm font-bold">Evening Batch</p>
              <p className="text-[11px] text-muted">Mon - Sat</p>
            </div>
            <p className="font-mono text-xs text-foreground">5:00 - 8:30</p>
          </div>
          <div className="grid grid-cols-[1fr_auto] items-center gap-3 px-5 py-3.5">
            <div>
              <p className="text-sm font-bold">Weekend Test</p>
              <p className="text-[11px] text-muted">Sun</p>
            </div>
            <p className="font-mono text-xs text-foreground">10:00 - 12:00</p>
          </div>
          <div className="border-t border-border bg-frost/40 px-5 py-3">
            <p className="text-[11px] font-medium text-muted">
              Facilities: Quiet study room · Printed notes · Doubt sessions
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-5 pb-10 pt-7">
        <div className="inline-flex animate-[rise_0.5s_var(--ease-out)_both] items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-muted">
          <span className="size-1.5 rounded-full bg-primary"></span>(e) Visit us
        </div>

        <div className="mt-3 animate-[rise_0.5s_var(--ease-out)_0.05s_both] overflow-hidden rounded-3xl bg-frost/55 ring-1 ring-black/5 backdrop-blur-xl">
          <iframe
            title="Naboday Coaching Centre location map"
            src="https://www.openstreetmap.org/export/embed.html?bbox=88.1419%2C24.0995%2C88.1619%2C24.1095&amp;layer=mapnik&amp;marker=24.1045%2C88.1519"
            width="100%"
            height="280"
            className="border-0"
            loading="lazy"
          ></iframe>
        </div>

        <div className="mt-3 animate-[rise_0.5s_var(--ease-out)_0.1s_both] rounded-3xl bg-frost/55 p-5 ring-1 ring-black/5 backdrop-blur-xl">
          <p className="text-base font-bold tracking-tight">
            Book a free demo class
          </p>

          <p className="mt-2 text-sm text-muted">
            Send us a message with the student's class and we will call you back
            to arrange a free demo class.
          </p>
          <Link
            to="/contact"
            className="mt-4 block rounded-xl bg-primary px-5 py-3 text-center text-sm font-semibold text-primary-foreground transition-all duration-200 hover:bg-[#2a63c9] active:translate-y-px"
          >
            Go to contact page
          </Link>


          <div className="mt-5 border-t border-border pt-4">
            <p className="text-sm font-semibold">Naboday Coaching Centre</p>
            <p className="mt-1 text-sm text-muted">
              Jibanti, West Bengal ·{" "}
              <a
                href="https://maps.app.goo.gl/wz1XKUwnF65T5T6x9"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 transition-colors hover:text-primary"
              >
                Get directions
              </a>
            </p>
          </div>
        </div>

        <p className="mt-6 text-center font-mono text-[11px] text-muted">
          Naboday Coaching Centre · Jibanti, West Bengal
        </p>
      </section>
    </main>
  );
}
