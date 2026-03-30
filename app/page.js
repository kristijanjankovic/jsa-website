"use client";

import React, { useState } from "react";

export default function Page() {
  const [tab, setTab] = useState("home");
  const [lang, setLang] = useState("en");

  const content = {
    en: {
      companyName: "Jankovic Strategic Analysis LLC",
      tagline:
        "Strategic analysis, risk-informed planning, and decision support for serious clients.",
      tabs: [
        { id: "home", label: "Home" },
        { id: "about", label: "About" },
        { id: "services", label: "Services" },
        { id: "expertise", label: "Expertise" },
        { id: "team", label: "Team" },
        { id: "mission", label: "Mission" },
        { id: "vision", label: "Vision" },
        { id: "contact", label: "Contact" },
      ],
      heroKicker: "Strategic Advisory • Analysis • Planning",
      heroTitle: "Strategic judgment for a complex world",
      heroText:
        "Jankovic Strategic Analysis LLC provides disciplined, experience-based analysis for organizations and leaders who need clarity, not generic consulting. We help clients understand complex environments, identify risk, test assumptions, and make better decisions.",
      heroButtons: {
        primary: "Explore Services",
        secondary: "Meet the Team",
      },
      home: {
        title: "Who We Are",
        p1: "Jankovic Strategic Analysis LLC is a strategic advisory firm built for serious clients facing serious decisions. Our work is grounded in practical judgment, intellectual discipline, and real-world experience drawn from military service, strategic education, geopolitical analysis, and institutional planning.",
        p2: "We support organizations, leaders, and decision-makers who require more than buzzwords. We help clients understand context, identify risk, refine options, and act with greater confidence in politically sensitive, competitive, or uncertain environments.",
        p3: "Our approach is direct, analytical, and focused on usefulness. We do not bury clients under jargon. We provide clear thinking, clear writing, and practical recommendations.",
        highlightsTitle: "What sets us apart",
        highlights: [
          "Serious strategic analysis rooted in real operational and institutional experience",
          "A disciplined approach to political, security, and organizational problem-solving",
          "Regional and global perspective spanning Europe, the Balkans, the Middle East, Northeast Asia, and the Western Pacific",
          "Strong capability in risk assessment, narrative analysis, and decision support",
          "Professional writing and briefing support for leaders who need clarity and precision",
          "Capability in deception and counter-deception analysis",
        ],
      },
      about: {
        title: "About the Firm",
        paragraphs: [
          "Jankovic Strategic Analysis LLC was established to provide clients with disciplined strategic thought in an era saturated with noise, superficial commentary, and shallow advice.",
          "The firm is led by a retired U.S. Army officer with decades of experience in command, intelligence, policy support, planning, and strategic analysis. That background shapes how we work: clearly, seriously, and with respect for real-world constraints.",
          "We believe that strategy is not theater. It is not branding language dressed up as insight. Strategy is disciplined thinking applied to real conditions, real competitors, real institutions, and real consequences.",
          "For clients, that means products and advice designed to improve understanding and decision-making rather than impress with empty terminology.",
        ],
      },
      services: {
        title: "Services",
        intro:
          "We provide tailored advisory support across strategic, operational, and institutional problem sets. Every engagement is shaped by client need, context, and desired outcome.",
        items: [
          {
            title: "Strategic Analysis",
            text: "Structured analysis of political, military, institutional, and competitive environments to support informed decision-making.",
          },
          {
            title: "Risk Assessment",
            text: "Assessment of vulnerabilities, threats, friction points, escalation pathways, and second-order effects for organizations, projects, and events.",
          },
          {
            title: "Geopolitical Advisory",
            text: "Decision support tied to regional dynamics, International Relations, security developments, and strategic competition.",
          },
          {
            title: "Institutional Capacity and Planning",
            text: "Support for planning, organizational design, institutional development, and strategic alignment.",
          },
          {
            title: "Deception / Counter-Deception",
            text: "Analysis of misleading narratives, false signals, information manipulation, adversary framing, and measures to detect and reduce deception risk.",
          },
          {
            title: "Writing and Decision Support",
            text: "Executive summaries, analytical memoranda, briefing support, talking points, and structured written products tailored to leadership needs.",
          },
        ],
      },
      expertise: {
        title: "Areas of Expertise",
        intro:
          "Our expertise reflects years of service, study, and direct engagement across strategic, political-military, and institutional environments.",
        columns: [
          {
            title: "Substantive Fields",
            items: [
              "International Relations",
              "Security Studies",
              "Strategic Planning",
              "Political-Military Analysis",
              "Risk Assessment",
              "Institutional Capacity Building",
              "Information Environment Analysis",
              "Deception and Counter-Deception",
            ],
          },
          {
            title: "Geographic Focus",
            items: [
              "Europe",
              "Balkans",
              "Middle East",
              "Northeast Asia",
              "Western Pacific",
              "Transatlantic Security Space",
            ],
          },
          {
            title: "Client Utility",
            items: [
              "Executive decision support",
              "Strategic forecasting",
              "Event and organizational risk analysis",
              "Narrative and information environment review",
              "Institutional and capability analysis",
              "Tailored written products and briefings",
            ],
          },
        ],
      },
      team: {
        title: "Our Team",
        intro:
          "Our strength is experience. We combine strategic education, operational credibility, and global perspective in order to give clients serious and practical support.",
        members: [
          {
            name: "Kristijan pl. Janković, MA",
            role: "Founder and Principal",
            image: "/headshot.png",
            bio: [
              "Retired U.S. Army Lieutenant Colonel with more than three decades of service and leadership experience.",
              "Holds advanced academic and professional military education in International Relations, strategy, and related fields.",
              "Brings experience in command, intelligence, policy support, information operations, security cooperation, and strategic planning.",
              "Provides clients with disciplined analysis, direct recommendations, and practical judgment shaped by real responsibility.",
            ],
          },
          {
            name: "Senior Pacific-Focused Associate",
            role: "Regional Specialist – Northeast Asia and the Western Pacific",
            image: "/pacific-specialist.png",
            bio: [
              "Retired U.S. Army Lieutenant Colonel with multiple Iraq tours and experience as a DIA-trained all-source intelligence analyst.",
              "Briefed senior Pentagon officials on Northeast Asian political-military issues and strategic developments.",
              "Offers expertise in Security Cooperation and Institutional Capacity Building planning.",
              "Strengthens the firm’s regional depth across Northeast Asia and the Western Pacific while expanding client understanding of security competition and defense relationships in that theater.",
            ],
          },
        ],
      },
      mission: {
        title: "Mission",
        text: "Our mission is to provide disciplined strategic analysis, practical advisory support, and risk-informed planning that help clients make better decisions in complex political, security, and institutional environments.",
      },
      vision: {
        title: "Vision",
        text: "Our vision is to become a trusted strategic partner for clients who value clarity, seriousness, and intellectually honest analysis in a world saturated with noise, confusion, and shallow advice.",
      },
      contact: {
        title: "Contact",
        intro:
          "For inquiries regarding advisory support, analysis, collaboration, or tailored client work, contact us directly.",
        details: [
          "Email: kristijan@jankovicstrategicanalysis.com",
          "Firm: Jankovic Strategic Analysis LLC",
          "Location: Virginia, United States",
        ],
        note: "Professional inquiries are welcome.",
      },
      footer: {
        copyright: "© 2026 Jankovic Strategic Analysis LLC. All rights reserved.",
        motto: "Vigilantia et fortitudo in Domino!",
      },
    },

    hr: {
      companyName: "Jankovic Strategic Analysis LLC",
      tagline:
        "Strateška analiza, planiranje utemeljeno na procjeni rizika i potpora donošenju odluka za ozbiljne klijente.",
      tabs: [
        { id: "home", label: "Početna" },
        { id: "about", label: "O nama" },
        { id: "services", label: "Usluge" },
        { id: "expertise", label: "Stručnost" },
        { id: "team", label: "Tim" },
        { id: "mission", label: "Misija" },
        { id: "vision", label: "Vizija" },
        { id: "contact", label: "Kontakt" },
      ],
      heroKicker: "Strateško savjetovanje • Analiza • Planiranje",
      heroTitle: "Strateško rasuđivanje za složen svijet",
      heroText:
        "Jankovic Strategic Analysis LLC pruža discipliniranu analizu utemeljenu na iskustvu za organizacije i vodstvo kojima treba jasnoća, a ne generičko savjetovanje. Pomažemo klijentima razumjeti složeno okruženje, prepoznati rizik, testirati pretpostavke i donositi bolje odluke.",
      heroButtons: {
        primary: "Pogledaj usluge",
        secondary: "Upoznaj tim",
      },
      home: {
        title: "Tko smo",
        p1: "Jankovic Strategic Analysis LLC je strateška savjetodavna tvrtka stvorena za ozbiljne klijente koji se suočavaju s ozbiljnim odlukama. Naš rad temelji se na praktičnom rasuđivanju, intelektualnoj disciplini i stvarnom iskustvu iz vojne službe, strateškog obrazovanja, geopolitičke analize i institucionalnog planiranja.",
        p2: "Pomažemo organizacijama, vodstvu i donositeljima odluka kojima treba više od ispraznih fraza. Pomažemo klijentima razumjeti kontekst, prepoznati rizik, razraditi opcije i djelovati s većim povjerenjem u politički osjetljivim, konkurentskim ili neizvjesnim okruženjima.",
        p3: "Naš pristup je izravan, analitičan i usmjeren na korisnost. Klijente ne zatrpavamo žargonom. Pružamo jasno razmišljanje, jasno pisanje i praktične preporuke.",
        highlightsTitle: "Po čemu se razlikujemo",
        highlights: [
          "Ozbiljna strateška analiza utemeljena na stvarnom operativnom i institucionalnom iskustvu",
          "Discipliniran pristup političkim, sigurnosnim i organizacijskim problemima",
          "Regionalna i globalna perspektiva koja obuhvaća Europu, Balkan, Bliski istok, sjeveroistočnu Aziju i Zapadni Pacifik",
          "Snažna sposobnost procjene rizika, analize narativa i potpore odlučivanju",
          "Profesionalna izrada pisanih proizvoda i potpora pri brifiranju za vodstvo kojem trebaju jasnoća i preciznost",
          "Sposobnost analize obmane i protuobmane",
        ],
      },
      about: {
        title: "O tvrtki",
        paragraphs: [
          "Jankovic Strategic Analysis LLC osnovan je kako bi klijentima pružio disciplinirano strateško razmišljanje u vremenu prepunom buke, površnih komentara i plitkih savjeta.",
          "Tvrtku vodi umirovljeni časnik američke vojske s desetljećima iskustva u zapovijedanju, obavještajnom radu, potpori politici, planiranju i strateškoj analizi. To iskustvo oblikuje naš rad: jasno, ozbiljno i s poštovanjem prema stvarnim ograničenjima.",
          "Vjerujemo da strategija nije predstava. Nije marketinški jezik prerušen u uvid. Strategija je disciplinirano razmišljanje primijenjeno na stvarne uvjete, stvarne konkurente, stvarne institucije i stvarne posljedice.",
          "Za klijente to znači proizvode i savjete osmišljene kako bi poboljšali razumijevanje i odlučivanje, a ne impresionirali praznom terminologijom.",
        ],
      },
      services: {
        title: "Usluge",
        intro:
          "Pružamo prilagođenu savjetodavnu potporu za strateške, operativne i institucionalne probleme. Svaki angažman oblikuje se prema potrebama klijenta, kontekstu i željenom ishodu.",
        items: [
          {
            title: "Strateška analiza",
            text: "Strukturirana analiza političkog, vojnog, institucionalnog i konkurentskog okruženja radi potpore informiranom donošenju odluka.",
          },
          {
            title: "Procjena rizika",
            text: "Procjena ranjivosti, prijetnji, točaka trenja, putova eskalacije i posljedica drugog reda za organizacije, projekte i događaje.",
          },
          {
            title: "Geopolitičko savjetovanje",
            text: "Potpora odlučivanju povezana s regionalnom dinamikom, Međunarodnim odnosima, sigurnosnim razvojem i strateškim natjecanjem.",
          },
          {
            title: "Institucionalni razvoj i planiranje",
            text: "Potpora planiranju, organizacijskom ustroju, institucionalnom razvoju i strateškom usklađivanju.",
          },
          {
            title: "Obmana / protuobmana",
            text: "Analiza zavaravajućih narativa, lažnih signala, manipulacije informacijama, protivničkog uokvirivanja i mjera za otkrivanje i smanjenje rizika od obmane.",
          },
          {
            title: "Pisani proizvodi i potpora odlučivanju",
            text: "Sažeci za vodstvo, analitički memorandumi, potpora pri izradi brifinga, govorne točke i strukturirani pisani proizvodi prilagođeni potrebama vodstva.",
          },
        ],
      },
      expertise: {
        title: "Područja stručnosti",
        intro:
          "Naša stručnost odražava godine službe, studija i izravnog rada u strateškim, političko-vojnim i institucionalnim okruženjima.",
        columns: [
          {
            title: "Stručna područja",
            items: [
              "Međunarodni odnosi",
              "Sigurnosne studije",
              "Strateško planiranje",
              "Političko-vojna analiza",
              "Procjena rizika",
              "Izgradnja institucionalnih kapaciteta",
              "Analiza informacijskog okruženja",
              "Obmana i protuobmana",
            ],
          },
          {
            title: "Geografski fokus",
            items: [
              "Europa",
              "Balkan",
              "Bliski istok",
              "Sjeveroistočna Azija",
              "Zapadni Pacifik",
              "Transatlantski sigurnosni prostor",
            ],
          },
          {
            title: "Vrijednost za klijenta",
            items: [
              "Potpora vodstvu pri odlučivanju",
              "Strateško predviđanje",
              "Analiza rizika događaja i organizacija",
              "Pregled narativa i informacijskog okruženja",
              "Analiza institucija i sposobnosti",
              "Prilagođeni pisani proizvodi i brifinzi",
            ],
          },
        ],
      },
      team: {
        title: "Naš tim",
        intro:
          "Naša snaga je iskustvo. Spajamo strateško obrazovanje, operativnu vjerodostojnost i globalnu perspektivu kako bismo klijentima pružili ozbiljnu i praktičnu potporu.",
        members: [
          {
            name: "Kristijan pl. Janković, MA",
            role: "Osnivač i glavni savjetnik",
            image: "/headshot.png",
            bio: [
              "Umirovljeni pukovnik američke vojske s više od tri desetljeća službe i zapovjednog iskustva.",
              "Ima napredno akademsko i stručno vojno obrazovanje iz Međunarodnih odnosa, strategije i srodnih područja.",
              "Donosi iskustvo iz zapovijedanja, obavještajnog rada, potpore politici, informacijskih operacija, sigurnosne suradnje i strateškog planiranja.",
              "Klijentima pruža discipliniranu analizu, izravne preporuke i praktično rasuđivanje oblikovano stvarnom odgovornošću.",
            ],
          },
          {
            name: "Viši suradnik za Pacifik",
            role: "Regionalni stručnjak – sjeveroistočna Azija i Zapadni Pacifik",
            image: "/pacific-specialist.png",
            bio: [
              "Umirovljeni pukovnik američke vojske s više odlazaka u Irak i iskustvom DIA-obučenog all-source obavještajnog analitičara.",
              "Brifirao je visoke dužnosnike Pentagona o političko-vojnim pitanjima sjeveroistočne Azije i strateškim kretanjima.",
              "Donosi stručnost u području sigurnosne suradnje i planiranja izgradnje institucionalnih kapaciteta.",
              "Jača regionalnu dubinu tvrtke za sjeveroistočnu Aziju i Zapadni Pacifik te proširuje razumijevanje sigurnosnog natjecanja i obrambenih odnosa u tom prostoru.",
            ],
          },
        ],
      },
      mission: {
        title: "Misija",
        text: "Naša je misija pružati discipliniranu stratešku analizu, praktičnu savjetodavnu potporu i planiranje utemeljeno na procjeni rizika kako bismo klijentima pomogli donositi bolje odluke u složenim političkim, sigurnosnim i institucionalnim okruženjima.",
      },
      vision: {
        title: "Vizija",
        text: "Naša je vizija postati pouzdan strateški partner klijentima koji cijene jasnoću, ozbiljnost i intelektualno poštenu analizu u svijetu prepunom buke, konfuzije i površnih savjeta.",
      },
      contact: {
        title: "Kontakt",
        intro:
          "Za upite o savjetodavnoj potpori, analizi, suradnji ili prilagođenom radu za klijente, javite nam se izravno.",
        details: [
          "E-pošta: kristijan@jankovicstrategicanalysis.com",
          "Tvrtka: Jankovic Strategic Analysis LLC",
          "Lokacija: Virginia, Sjedinjene Američke Države",
        ],
        note: "Profesionalni upiti su dobrodošli.",
      },
      footer: {
        copyright:
          "© 2026 Jankovic Strategic Analysis LLC. Sva prava pridržana.",
        motto: "Vigilantia et fortitudo in Domino!",
      },
    },
  };

  const t = content[lang];

  const renderHome = () => (
    <section style={styles.sectionCard}>
      <h2 style={styles.sectionTitle}>{t.home.title}</h2>
      <p style={styles.paragraph}>{t.home.p1}</p>
      <p style={styles.paragraph}>{t.home.p2}</p>
      <p style={styles.paragraph}>{t.home.p3}</p>

      <h3 style={styles.subTitle}>{t.home.highlightsTitle}</h3>
      <div style={styles.highlightGrid}>
        {t.home.highlights.map((item, index) => (
          <div key={index} style={styles.highlightCard}>
            <div style={styles.highlightNumber}>{index + 1}</div>
            <p style={styles.highlightText}>{item}</p>
          </div>
        ))}
      </div>
    </section>
  );

  const renderAbout = () => (
    <section style={styles.sectionCard}>
      <h2 style={styles.sectionTitle}>{t.about.title}</h2>
      {t.about.paragraphs.map((paragraph, index) => (
        <p key={index} style={styles.paragraph}>
          {paragraph}
        </p>
      ))}
    </section>
  );

  const renderServices = () => (
    <section style={styles.sectionCard}>
      <h2 style={styles.sectionTitle}>{t.services.title}</h2>
      <p style={styles.paragraph}>{t.services.intro}</p>

      <div style={styles.serviceGrid}>
        {t.services.items.map((service, index) => (
          <div key={index} style={styles.serviceCard}>
            <h3 style={styles.cardTitle}>{service.title}</h3>
            <p style={styles.cardText}>{service.text}</p>
          </div>
        ))}
      </div>
    </section>
  );

  const renderExpertise = () => (
    <section style={styles.sectionCard}>
      <h2 style={styles.sectionTitle}>{t.expertise.title}</h2>
      <p style={styles.paragraph}>{t.expertise.intro}</p>

      <div style={styles.expertiseGrid}>
        {t.expertise.columns.map((column, index) => (
          <div key={index} style={styles.expertiseCard}>
            <h3 style={styles.cardTitle}>{column.title}</h3>
            <ul style={styles.list}>
              {column.items.map((item, itemIndex) => (
                <li key={itemIndex} style={styles.listItem}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );

  const renderTeam = () => (
    <section style={styles.sectionCard}>
      <h2 style={styles.sectionTitle}>{t.team.title}</h2>
      <p style={styles.paragraph}>{t.team.intro}</p>

      <div style={styles.teamGrid}>
        {t.team.members.map((member, index) => (
          <div key={index} style={styles.teamCard}>
            <div style={styles.teamImageWrap}>
              <img src={member.image} alt={member.name} style={styles.teamImage} />
            </div>

            <div style={styles.teamBody}>
              <h3 style={styles.teamName}>{member.name}</h3>
              <p style={styles.teamRole}>{member.role}</p>
              {member.bio.map((line, lineIndex) => (
                <p key={lineIndex} style={styles.teamBio}>
                  {line}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );

  const renderMission = () => (
    <section style={styles.sectionCard}>
      <h2 style={styles.sectionTitle}>{t.mission.title}</h2>
      <p style={styles.bigStatement}>{t.mission.text}</p>
    </section>
  );

  const renderVision = () => (
    <section style={styles.sectionCard}>
      <h2 style={styles.sectionTitle}>{t.vision.title}</h2>
      <p style={styles.bigStatement}>{t.vision.text}</p>
    </section>
  );

  const renderContact = () => (
    <section style={styles.sectionCard}>
      <h2 style={styles.sectionTitle}>{t.contact.title}</h2>
      <p style={styles.paragraph}>{t.contact.intro}</p>

      <div style={styles.contactBox}>
        {t.contact.details.map((detail, index) => (
          <p key={index} style={styles.contactItem}>
            {detail}
          </p>
        ))}
      </div>

      <p style={styles.note}>{t.contact.note}</p>
    </section>
  );

  const renderActiveTab = () => {
    switch (tab) {
      case "home":
        return renderHome();
      case "about":
        return renderAbout();
      case "services":
        return renderServices();
      case "expertise":
        return renderExpertise();
      case "team":
        return renderTeam();
      case "mission":
        return renderMission();
      case "vision":
        return renderVision();
      case "contact":
        return renderContact();
      default:
        return renderHome();
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.pageOverlay}>
        <header style={styles.header}>
          <div style={styles.brandWrap}>
            <div style={styles.logoBox}>
              <img src="/logo.png" alt="Firm Logo" style={styles.logo} />
            </div>

            <div style={styles.brandTextWrap}>
              <h1 style={styles.brandTitle}>{t.companyName}</h1>
              <p style={styles.brandTagline}>{t.tagline}</p>
            </div>
          </div>

          <div style={styles.languageSwitch}>
            <button
              style={{
                ...styles.languageButton,
                ...(lang === "en" ? styles.languageButtonActive : {}),
              }}
              onClick={() => setLang("en")}
            >
              EN
            </button>
            <button
              style={{
                ...styles.languageButton,
                ...(lang === "hr" ? styles.languageButtonActive : {}),
              }}
              onClick={() => setLang("hr")}
            >
              HR
            </button>
          </div>
        </header>

        <section style={styles.hero}>
          <div style={styles.heroInner}>
            <p style={styles.heroKicker}>{t.heroKicker}</p>
            <h2 style={styles.heroTitle}>{t.heroTitle}</h2>
            <p style={styles.heroText}>{t.heroText}</p>

            <div style={styles.heroButtonRow}>
              <button
                style={styles.primaryButton}
                onClick={() => setTab("services")}
              >
                {t.heroButtons.primary}
              </button>
              <button
                style={styles.secondaryButton}
                onClick={() => setTab("team")}
              >
                {t.heroButtons.secondary}
              </button>
            </div>
          </div>
        </section>

        <nav style={styles.nav}>
          <div style={styles.navScroller}>
            {t.tabs.map((item) => (
              <button
                key={item.id}
                style={{
                  ...styles.navButton,
                  ...(tab === item.id ? styles.navButtonActive : {}),
                }}
                onClick={() => setTab(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </nav>

        <main style={styles.main}>{renderActiveTab()}</main>

        <footer style={styles.footer}>
          <p style={styles.footerText}>{t.footer.copyright}</p>
          <p style={styles.footerMotto}>{t.footer.motto}</p>
        </footer>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background:
      "linear-gradient(180deg, #0f172a 0%, #162033 20%, #1f2937 45%, #eef2f7 45%, #eef2f7 100%)",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif',
    color: "#111827",
  },

  pageOverlay: {
    minHeight: "100vh",
  },

  header: {
    maxWidth: "1240px",
    margin: "0 auto",
    padding: "24px 20px 16px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "20px",
    flexWrap: "wrap",
  },

  brandWrap: {
    display: "flex",
    alignItems: "center",
    gap: "18px",
    flexWrap: "wrap",
  },

  logoBox: {
    width: "92px",
    height: "92px",
    borderRadius: "18px",
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.14)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    flexShrink: 0,
  },

  logo: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    display: "block",
  },

  brandTextWrap: {
    maxWidth: "760px",
  },

  brandTitle: {
    margin: "0 0 6px 0",
    color: "#f8fafc",
    fontSize: "clamp(2rem, 4vw, 3.15rem)",
    lineHeight: 1.05,
    fontWeight: 800,
    letterSpacing: "-0.02em",
  },

  brandTagline: {
    margin: 0,
    color: "#cbd5e1",
    fontSize: "1rem",
    lineHeight: 1.6,
    maxWidth: "820px",
  },

  languageSwitch: {
    display: "flex",
    gap: "10px",
    background: "rgba(255,255,255,0.08)",
    padding: "8px",
    borderRadius: "999px",
    border: "1px solid rgba(255,255,255,0.14)",
  },

  languageButton: {
    border: "none",
    borderRadius: "999px",
    padding: "10px 16px",
    cursor: "pointer",
    background: "transparent",
    color: "#e5e7eb",
    fontWeight: 700,
    fontSize: "0.95rem",
  },

  languageButtonActive: {
    background: "#ffffff",
    color: "#0f172a",
  },

  hero: {
    maxWidth: "1240px",
    margin: "0 auto",
    padding: "8px 20px 26px 20px",
  },

  heroInner: {
    background:
      "linear-gradient(135deg, rgba(255,255,255,0.10), rgba(255,255,255,0.04))",
    border: "1px solid rgba(255,255,255,0.14)",
    borderRadius: "28px",
    padding: "40px 30px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.18)",
  },

  heroKicker: {
    margin: "0 0 10px 0",
    color: "#93c5fd",
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    fontSize: "0.82rem",
  },

  heroTitle: {
    margin: "0 0 14px 0",
    color: "#ffffff",
    fontSize: "clamp(2rem, 5vw, 4rem)",
    lineHeight: 1.05,
    fontWeight: 800,
    letterSpacing: "-0.03em",
    maxWidth: "920px",
  },

  heroText: {
    margin: "0 0 24px 0",
    color: "#dbeafe",
    fontSize: "1.06rem",
    lineHeight: 1.8,
    maxWidth: "980px",
  },

  heroButtonRow: {
    display: "flex",
    gap: "14px",
    flexWrap: "wrap",
  },

  primaryButton: {
    padding: "14px 22px",
    borderRadius: "12px",
    border: "none",
    background: "#ffffff",
    color: "#0f172a",
    fontWeight: 800,
    cursor: "pointer",
    fontSize: "0.98rem",
  },

  secondaryButton: {
    padding: "14px 22px",
    borderRadius: "12px",
    border: "1px solid rgba(255,255,255,0.26)",
    background: "transparent",
    color: "#ffffff",
    fontWeight: 800,
    cursor: "pointer",
    fontSize: "0.98rem",
  },

  nav: {
    maxWidth: "1240px",
    margin: "0 auto",
    padding: "0 20px 24px 20px",
  },

  navScroller: {
    display: "flex",
    gap: "12px",
    overflowX: "auto",
    paddingBottom: "4px",
  },

  navButton: {
    border: "1px solid #cbd5e1",
    background: "#ffffff",
    color: "#0f172a",
    borderRadius: "999px",
    padding: "12px 18px",
    cursor: "pointer",
    whiteSpace: "nowrap",
    fontWeight: 700,
    fontSize: "0.95rem",
    boxShadow: "0 8px 18px rgba(0,0,0,0.04)",
  },

  navButtonActive: {
    background: "#0f172a",
    color: "#ffffff",
    border: "1px solid #0f172a",
  },

  main: {
    maxWidth: "1240px",
    margin: "0 auto",
    padding: "0 20px 40px 20px",
  },

  sectionCard: {
    background: "#ffffff",
    border: "1px solid #d7dce2",
    borderRadius: "18px",
    padding: "28px",
    boxShadow: "0 10px 28px rgba(0, 0, 0, 0.06)",
    marginBottom: "24px",
  },

  sectionTitle: {
    margin: "0 0 16px 0",
    fontSize: "clamp(1.7rem, 3vw, 2.45rem)",
    lineHeight: 1.15,
    color: "#0f172a",
    fontWeight: 800,
    letterSpacing: "-0.02em",
  },

  subTitle: {
    margin: "26px 0 14px 0",
    fontSize: "1.2rem",
    color: "#0f172a",
    fontWeight: 800,
  },

  paragraph: {
    margin: "0 0 16px 0",
    fontSize: "1.02rem",
    lineHeight: 1.8,
    color: "#334155",
  },

  highlightGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
    gap: "16px",
    marginTop: "12px",
  },

  highlightCard: {
    border: "1px solid #e2e8f0",
    borderRadius: "16px",
    padding: "18px",
    background: "#f8fafc",
  },

  highlightNumber: {
    width: "34px",
    height: "34px",
    borderRadius: "50%",
    background: "#0f172a",
    color: "#ffffff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 800,
    marginBottom: "12px",
  },

  highlightText: {
    margin: 0,
    color: "#334155",
    lineHeight: 1.65,
    fontSize: "0.98rem",
  },

  serviceGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "18px",
    marginTop: "12px",
  },

  serviceCard: {
    background: "#f8fafc",
    borderRadius: "18px",
    padding: "22px",
    border: "1px solid #e2e8f0",
    boxShadow: "0 10px 24px rgba(0,0,0,0.04)",
  },

  cardTitle: {
    margin: "0 0 10px 0",
    fontSize: "1.08rem",
    color: "#0f172a",
    fontWeight: 800,
  },

  cardText: {
    margin: 0,
    color: "#475569",
    lineHeight: 1.7,
    fontSize: "0.98rem",
  },

  expertiseGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "18px",
    marginTop: "12px",
  },

  expertiseCard: {
    background: "#f8fafc",
    borderRadius: "18px",
    padding: "22px",
    border: "1px solid #e2e8f0",
  },

  list: {
    margin: "10px 0 0 0",
    paddingLeft: "20px",
  },

  listItem: {
    color: "#475569",
    marginBottom: "10px",
    lineHeight: 1.6,
  },

  teamGrid: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "22px",
    marginTop: "14px",
  },

  teamCard: {
    display: "grid",
    gridTemplateColumns: "220px 1fr",
    gap: "22px",
    background: "#f8fafc",
    borderRadius: "20px",
    padding: "22px",
    border: "1px solid #e2e8f0",
  },

  teamImageWrap: {
    width: "100%",
    minHeight: "240px",
    borderRadius: "16px",
    overflow: "hidden",
    background: "#dbe3ed",
  },

  teamImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },

  teamBody: {
    display: "flex",
    flexDirection: "column",
  },

  teamName: {
    margin: "0 0 6px 0",
    fontSize: "1.4rem",
    color: "#0f172a",
    fontWeight: 800,
  },

  teamRole: {
    margin: "0 0 14px 0",
    color: "#1d4ed8",
    fontWeight: 700,
    fontSize: "0.98rem",
  },

  teamBio: {
    margin: "0 0 10px 0",
    color: "#475569",
    lineHeight: 1.75,
    fontSize: "0.99rem",
  },

  bigStatement: {
    margin: 0,
    fontSize: "1.18rem",
    lineHeight: 1.9,
    color: "#334155",
    fontWeight: 500,
  },

  contactBox: {
    background: "#f8fafc",
    border: "1px solid #e2e8f0",
    borderRadius: "18px",
    padding: "22px",
    marginTop: "12px",
  },

  contactItem: {
    margin: "0 0 10px 0",
    color: "#334155",
    lineHeight: 1.7,
    fontSize: "1rem",
  },

  note: {
    margin: "14px 0 0 0",
    color: "#64748b",
    fontSize: "0.95rem",
    lineHeight: 1.7,
  },

  footer: {
    maxWidth: "1240px",
    margin: "0 auto",
    padding: "6px 20px 40px 20px",
  },

  footerText: {
    margin: "0 0 8px 0",
    color: "#475569",
    textAlign: "center",
    fontSize: "0.95rem",
  },

  footerMotto: {
    margin: 0,
    color: "#0f172a",
    textAlign: "center",
    fontWeight: 800,
    fontSize: "1.02rem",
  },
};