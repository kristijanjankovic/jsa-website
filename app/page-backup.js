import Image from "next/image";

const capabilityGroups = [
  {
    title: "Strategic Analysis",
    items: [
      "Geopolitical risk assessment",
      "Regional security analysis (Europe, Balkans, NATO space)",
      "Forecasting and scenario development",
      "Decision-support for leadership",
    ],
  },
  {
    title: "Information Operations & Influence",
    items: [
      "Information environment analysis",
      "Influence campaign design and assessment",
      "Counter-disinformation strategy",
      "Narrative development and messaging",
      "Deception and counter-deception planning and execution",
    ],
  },
  {
    title: "National Security & Defense Consulting",
    items: [
      "Operational- and strategic-level advisory",
      "Military doctrine and planning insight",
      "Hybrid warfare and irregular threats",
      "Security environment assessments",
    ],
  },
  {
    title: "Risk & Threat Assessment",
    items: [
      "Event Security Risk Assessments (ESRA)",
      "Organizational vulnerability analysis",
      "Threat identification and mitigation planning",
      "Crisis anticipation and response planning",
    ],
  },
  {
    title: "Intelligence & Analytical Support",
    items: [
      "Structured analytic techniques",
      "Intelligence fusion and reporting",
      "Open-source intelligence (OSINT) analysis",
      "Briefings and executive summaries",
    ],
  },
  {
    title: "Training & Education",
    items: [
      "Lectures and instruction (Political Science, IR, Security Studies)",
      "Professional military education-style training",
      "Workshops on strategy, security, and leadership",
      "Academic and institutional teaching",
    ],
  },
  {
    title: "Private Sector Advisory",
    items: [
      "Risk advisory for businesses in unstable regions",
      "Strategic positioning and decision support",
      "Market-entry risk (Balkans / Eastern Europe)",
      "Executive-level briefings",
    ],
  },
];

const coreFocusItems = [
  "Geopolitical risk and regional security",
  "Information operations and influence analysis",
  "Defense consulting and threat assessment",
  "Executive briefings and decision support",
];

const differentiatorItems = [
  "Led by a retired U.S. Army Lieutenant Colonel with over 30 years of service",
  "Combat, strategic, and Pentagon-level experience",
  "Real-world operational expertise combined with advanced academic training",
  "Specialized perspective on Europe, the Balkans, NATO space, and complex security environments",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="border-b border-white/10 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0">
              <Image
                src="/logo.png"
                alt="Jankovic Strategic Analysis logo"
                width={54}
                height={54}
                className="h-auto w-auto"
                priority
              />
            </div>

            <div>
              <div className="text-xl font-semibold tracking-wide md:text-2xl">
                Jankovic Strategic Analysis LLC
              </div>
              <div className="mt-1 text-sm text-slate-400">
                Strategic insight for complex environments
              </div>
            </div>
          </div>

          <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
            <a href="#services" className="hover:text-white">
              Services
            </a>
            <a href="#about" className="hover:text-white">
              About
            </a>
            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="inline-block rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1 text-xs uppercase tracking-[0.2em] text-amber-300">
              Strategic Analysis • Risk • Security
            </div>

            <h1 className="mt-6 text-4xl font-bold leading-tight md:text-6xl">
              Clear judgment for high-stakes decisions.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl">
              Jankovic Strategic Analysis LLC provides tailored strategic
              analysis, risk assessment, intelligence support, and
              security-focused advisory for public- and private-sector clients
              operating in uncertain and contested environments.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg hover:opacity-90"
              >
                Request a Consultation
              </a>

              <a
                href="#services"
                className="rounded-2xl border border-white/15 px-6 py-3 text-sm font-semibold text-white hover:bg-white/5"
              >
                View Services
              </a>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
              <div className="text-sm uppercase tracking-[0.2em] text-slate-400">
                Core Focus
              </div>

              <div className="mt-4 space-y-3 text-slate-200">
                {coreFocusItems.map((item) => (
                  <div key={item}>{item}</div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-slate-800 to-slate-900 p-6 shadow-2xl">
              <div className="text-sm uppercase tracking-[0.2em] text-slate-400">
                Why This Firm
              </div>

              <p className="mt-4 leading-relaxed text-slate-200">
                A practitioner-led firm built on operational credibility,
                analytical rigor, and a direct understanding of military,
                strategic, and political realities.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                <div className="flex-shrink-0">
                  <Image
                    src="/headshot.png"
                    alt="Kristijan Jankovic"
                    width={124}
                    height={124}
                    className="rounded-full border border-white/10 object-cover"
                  />
                </div>

                <div>
                  <div className="text-sm uppercase tracking-[0.2em] text-slate-400">
                    Credentials
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-slate-300 md:text-base">
                    Led by a retired U.S. Army Lieutenant Colonel with 30+ years
                    of service, including combat deployments and Pentagon-level
                    experience, Jankovic Strategic Analysis combines operational
                    expertise with advanced academic training in International
                    Relations and security studies to deliver strategic insight
                    in complex environments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-8 md:py-14">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold md:text-4xl">Capabilities</h2>

          <p className="mt-4 text-lg leading-relaxed text-slate-300">
            Advisory support grounded in real-world operational experience,
            structured analysis, and security-focused planning.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {capabilityGroups.map((group) => (
            <CapabilityCard
              key={group.title}
              title={group.title}
              items={group.items}
            />
          ))}
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">About</h2>

            <p className="mt-5 text-lg leading-relaxed text-slate-300">
              Jankovic Strategic Analysis LLC delivers professional support to
              organizations and leaders who need disciplined analysis, realistic
              planning, and actionable judgment in volatile environments.
            </p>

            <p className="mt-5 text-lg leading-relaxed text-slate-300">
              The firm’s work spans geopolitical analysis, influence operations,
              defense consulting, event security risk assessment, intelligence
              support, and executive-level briefing products.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl">
            <h3 className="text-xl font-semibold">Differentiator</h3>

            <ul className="mt-5 list-disc space-y-3 pl-5 leading-relaxed text-slate-300">
              {differentiatorItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-r from-white/5 to-white/10 p-8 shadow-2xl md:p-12">
          <h2 className="text-3xl font-bold md:text-4xl">Contact</h2>

          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-300">
            For consulting inquiries, partnerships, or briefing requests, use
            the contact details below.
          </p>

          <div className="mt-8 grid gap-6 text-slate-200 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-5">
              <div className="text-sm uppercase tracking-[0.2em] text-slate-400">
                Email
              </div>

              <div className="mt-2 break-all text-lg font-medium">
                kristijan@jankovicstrategicanalysis.com
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-5">
              <div className="text-sm uppercase tracking-[0.2em] text-slate-400">
                Firm
              </div>

              <div className="mt-2 text-lg font-medium">
                Jankovic Strategic Analysis LLC
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <div>© 2026 Jankovic Strategic Analysis LLC. All rights reserved.</div>
          <div>Strategic Analysis • Security • Risk • Intelligence Support</div>
        </div>
      </footer>
    </div>
  );
}

function CapabilityCard({ title, items }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl">
      <h3 className="text-xl font-semibold">{title}</h3>

      <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-300">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}