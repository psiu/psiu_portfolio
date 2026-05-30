import { createFileRoute } from "@tanstack/react-router";
import story1 from "@/assets/story-1.jpg";
import story2 from "@/assets/story-2.jpg";
import story3 from "@/assets/story-3.jpg";
import story4 from "@/assets/story-4.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Patrick Siu — Data Engineering Leader" },
      {
        name: "description",
        content:
          "Patrick Siu — 25 years architecting petabyte-scale data platforms and integrated LLM solutions. Selected stories in financial crimes, compliance, anti-spam, and executive analytics.",
      },
      { property: "og:title", content: "Patrick Siu — Data Engineering Leader" },
      {
        property: "og:description",
        content:
          "25 years leading end-to-end data and product solutions at petabyte scale.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: story1 },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: story1 },
    ],
  }),
  component: Index,
});

type Story = {
  kicker: string;
  title: string;
  body: string;
  metricA: { label: string; value: string };
  metricB: { label: string; value: string };
  image: string;
  imageAlt: string;
};

const stories: Story[] = [
  {
    kicker: "Case Study — Financial Integrity",
    title: "Zero-to-One Crimes Investigation Platform",
    body: "Architected the founding data engine for a global financial crimes investigation platform — moving the organization from fragmented manual audits to a unified, real-time investigative workbench used across compliance teams.",
    metricA: { label: "Approach", value: "Multi-layered graph processing." },
    metricB: { label: "Impact", value: "Unified 40M+ daily events into one case view." },
    image: story1,
    imageAlt: "Abstract network of financial transaction nodes",
  },
  {
    kicker: "Case Study — Compliance at Scale",
    title: "Petabyte-Scale Defense for Congressional Hearings",
    body: "Engineered a rapid-response data compliance scanning system that processed decades of communications under extreme temporal pressure, providing the evidentiary foundation for high-stakes Congressional Hearings.",
    metricA: { label: "Scale", value: "Petabytes scanned in days, not months." },
    metricB: { label: "Outcome", value: "Defensible, fully audited compliance posture." },
    image: story2,
    imageAlt: "Vertical data streams flowing through layered filters",
  },
  {
    kicker: "Case Study — Platform Integrity",
    title: "Coordinated Inauthentic Behavior Detection",
    body: "Designed the analytics backbone for detecting Coordinated Inauthentic Behavior — fusing graph analytics, behavioral fingerprinting, and anti-spam efficacy metrics to neutralize bot networks at platform scale.",
    metricA: { label: "Approach", value: "Graph + behavioral signal fusion." },
    metricB: { label: "Impact", value: "Measurable lift in anti-spam efficacy." },
    image: story3,
    imageAlt: "Dense mesh of network traffic resolving into clusters",
  },
  {
    kicker: "Case Study — Executive Advisory",
    title: "C-Level Executive Analytics Consulting",
    body: "Translated raw data infrastructure into the strategic narratives executives actually use — partnering directly with C-level leadership on data modernization, LLM adoption, and the analytics that drive board-level decisions.",
    metricA: { label: "Approach", value: "Executive-grade narrative + metrics." },
    metricB: { label: "Impact", value: "Clear north-star metrics for data programs." },
    image: story4,
    imageAlt: "Minimal executive analytics dashboard",
  },
];

const stack = [
  {
    heading: "Storage",
    items: ["Snowflake", "Delta Lake", "BigQuery", "PostgreSQL"],
  },
  {
    heading: "Processing",
    items: ["Spark / Databricks", "Flink", "dbt", "Kafka"],
  },
  {
    heading: "Orchestration",
    items: ["Airflow", "Dagster", "Kubernetes", "Terraform"],
  },
  {
    heading: "Intelligence",
    items: ["LLM Pipelines", "LangChain", "Vector DBs", "PyTorch"],
  },
];

const timeline = [
  {
    period: "2018 — Present",
    role: "Data Engineering Leader",
    detail:
      "Leading end-to-end data and product solutions spanning petabyte-scale architecture and integrated LLM systems.",
    current: true,
  },
  {
    period: "2010 — 2018",
    role: "Principal Data Architect",
    detail:
      "Designed and scaled platform analytics for global consumer products, with a focus on integrity, anti-spam, and trust systems.",
  },
  {
    period: "2003 — 2010",
    role: "Senior Data / Backend Engineer",
    detail:
      "Built mission-critical data and ledger systems for financial and enterprise platforms.",
  },
  {
    period: "1999 — 2003",
    role: "Software Engineer",
    detail:
      "Foundational years building distributed systems and early warehousing pipelines.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground font-display selection:bg-primary/10 selection:text-primary">
      {/* Nav */}
      <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <a href="#top" className="font-mono text-sm font-medium tracking-tight">
            PATRICK_SIU <span className="text-muted-foreground">// 25.YR.LEADER</span>
          </a>
          <div className="hidden gap-8 text-sm font-medium md:flex">
            <a href="#about" className="transition-colors hover:text-primary">About</a>
            <a href="#stories" className="transition-colors hover:text-primary">Stories</a>
            <a href="#stack" className="transition-colors hover:text-primary">Stack</a>
            <a href="#timeline" className="transition-colors hover:text-primary">Timeline</a>
            <a href="#contact" className="transition-colors hover:text-primary">Contact</a>
          </div>
        </div>
      </nav>

      <main id="top" className="mx-auto max-w-7xl px-6 py-24 md:py-40">
        {/* Hero */}
        <section className="animate-fade-up mb-40 md:mb-56">
          <p className="mb-8 font-mono text-xs uppercase tracking-[0.2em] text-primary">
            (00) Patrick Siu — Data Engineering Leader
          </p>
          <h1 className="mb-12 text-balance text-5xl font-extrabold leading-[0.95] tracking-tighter sm:text-7xl md:text-8xl">
            Architecting <span className="text-primary">intelligence</span> at scale.
          </h1>
          <p className="max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-2xl">
            Twenty-five years of professional experience leading innovative end-to-end
            data and product solutions — spanning petabyte-scale architecture and
            integrated LLM systems.
          </p>
        </section>

        {/* About */}
        <section id="about" className="mb-40 md:mb-56">
          <div className="mb-12 flex items-end justify-between border-b border-border pb-4">
            <h2 className="font-mono text-sm uppercase tracking-widest text-muted-foreground">
              (01) About
            </h2>
            <span className="font-mono text-xs text-muted-foreground">Profile</span>
          </div>
          <div className="grid gap-12 md:grid-cols-3">
            <p className="text-pretty text-xl leading-relaxed md:col-span-2">
              I build the systems organizations rely on when the stakes are real —
              financial integrity, regulatory defense, platform trust, and the
              analytics that inform executive decisions. My work bridges low-level
              infrastructure and the executive narratives that justify it.
            </p>
            <p className="text-pretty leading-relaxed text-muted-foreground">
              Comfortable from raw partition planning to a C-level briefing — and
              equally interested in both. Currently focused on integrating LLM
              capabilities into traditional data platforms without losing the rigor
              that made them trustworthy in the first place.
            </p>
          </div>
        </section>

        {/* Stories */}
        <section id="stories" className="mb-40 space-y-28 md:mb-56 md:space-y-40">
          <div className="flex items-end justify-between border-b border-border pb-4">
            <h2 className="font-mono text-sm uppercase tracking-widest text-muted-foreground">
              (02) Featured Stories
            </h2>
            <span className="font-mono text-xs text-muted-foreground">01 — 04</span>
          </div>

          {stories.map((s, i) => {
            const reversed = i % 2 === 1;
            return (
              <article key={s.title} className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                <div className={`space-y-8 ${reversed ? "lg:order-last" : ""}`}>
                  <span className="font-mono text-xs uppercase tracking-widest text-primary">
                    {s.kicker}
                  </span>
                  <h3 className="text-balance text-3xl font-extrabold tracking-tight md:text-4xl">
                    {s.title}
                  </h3>
                  <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
                    {s.body}
                  </p>
                  <div className="grid grid-cols-2 gap-8 border-t border-border pt-6">
                    <div>
                      <h4 className="mb-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                        {s.metricA.label}
                      </h4>
                      <p className="text-sm font-medium">{s.metricA.value}</p>
                    </div>
                    <div>
                      <h4 className="mb-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                        {s.metricB.label}
                      </h4>
                      <p className="text-sm font-medium">{s.metricB.value}</p>
                    </div>
                  </div>
                </div>
                <div className="overflow-hidden rounded-lg bg-card ring-1 ring-border">
                  <img
                    src={s.image}
                    alt={s.imageAlt}
                    width={1280}
                    height={832}
                    loading="lazy"
                    className="aspect-video w-full object-cover"
                  />
                </div>
              </article>
            );
          })}
        </section>

        {/* Stack */}
        <section id="stack" className="mb-40 md:mb-56">
          <div className="mb-12 flex items-end justify-between border-b border-border pb-4">
            <h2 className="font-mono text-sm uppercase tracking-widest text-muted-foreground">
              (03) Core Stack
            </h2>
            <span className="font-mono text-xs text-muted-foreground">Tools I reach for</span>
          </div>
          <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-4">
            {stack.map((group) => (
              <div key={group.heading} className="space-y-4">
                <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {group.heading}
                </h3>
                <ul className="space-y-2 font-medium">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section id="timeline" className="mb-40 md:mb-56">
          <div className="mb-12 flex items-end justify-between border-b border-border pb-4">
            <h2 className="font-mono text-sm uppercase tracking-widest text-muted-foreground">
              (04) Timeline
            </h2>
            <span className="font-mono text-xs text-muted-foreground">25 years</span>
          </div>
          <ol className="space-y-10">
            {timeline.map((t) => (
              <li
                key={t.period}
                className="grid gap-4 border-b border-border pb-10 last:border-b-0 last:pb-0 md:grid-cols-[180px_1fr] md:gap-12"
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`size-2 rounded-full ${t.current ? "bg-primary" : "bg-border"}`}
                    aria-hidden="true"
                  />
                  <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    {t.period}
                  </span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold tracking-tight">{t.role}</h3>
                  <p className="max-w-2xl text-muted-foreground">{t.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Contact */}
        <footer id="contact" className="border-t border-border pt-20 pb-12">
          <div className="flex flex-col items-start justify-between gap-12 md:flex-row md:items-end">
            <div className="max-w-xl space-y-4">
              <p className="font-mono text-xs uppercase tracking-widest text-primary">
                (05) Contact
              </p>
              <h2 className="text-balance text-4xl font-extrabold tracking-tight md:text-5xl">
                Available for strategic data &amp; LLM advisory.
              </h2>
              <p className="text-muted-foreground">
                Helping organizations design data platforms they can defend, trust,
                and extend with modern intelligence.
              </p>
            </div>
            <div className="flex flex-col items-start gap-4 md:items-end">
              <a
                href="mailto:hello@patricksiu.dev"
                className="font-mono text-xl underline decoration-primary/30 underline-offset-8 transition-colors hover:text-primary"
              >
                hello@patricksiu.dev
              </a>
              <div className="flex gap-6 font-mono text-sm">
                <a href="#" className="transition-colors hover:text-primary">LinkedIn</a>
                <a href="#" className="transition-colors hover:text-primary">GitHub</a>
                <a href="#" className="transition-colors hover:text-primary">Resume</a>
              </div>
            </div>
          </div>
          <p className="mt-20 font-mono text-[10px] uppercase tracking-widest text-muted-foreground/60">
            © {new Date().getFullYear()} Patrick Siu. Built for stability and scale.
          </p>
        </footer>
      </main>
    </div>
  );
}
