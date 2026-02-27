
// Gemeinsame Assets (Bilder, Farben etc.)
const SHARED = {
  brand: {
    logoUrl: "/images/EQUILIBRIUM-FOUNDATION-Gross.jpg",
    colors: {
      primary: "#0c4a6e", // Deep Ocean Blue (Lead color)
      secondary: "#3fb0e3", // Light Sky (Support)
      accent: "#ea580c", // Burnt Orange (Emotion/Action - New!)
      bg: "#fdfaf7", // Warm Sand
      text: "#1c1917" // Warm Black
    }
  },
  mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4761.803650773662!2d9.993682!3d53.551086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b161837e1813b9%3A0x4263df27bd63aa0!2sHamburg!5e0!3m2!1sde!2sde!4v1695225078519!5m2!1sde!2sde"
};

const IMAGES = {
  hero: {
    // main: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&auto=format&fit=crop",
    main: "/images/Interview-Wonder-Koding.jpg",
    side: "/images/WorldCleanUp_1.jpg",
    sustainableCard: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=800&auto=format&fit=crop"
  },
  mission: {
    //col1_top: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop",
    col1_top: "/images/20190701_123528-e1667703828934.jpg",
    col1_bottom: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800&auto=format&fit=crop",
    col2_top: "/images/Team-Collage-Stand-24_02_21-e1666215865602.png",
    col2_bottom: "/images/IMG_20190923_160838-scaled-e1666219756484.jpg",
    col3_top: "/images/Support-Recycling-and-Craftsmanship-in-Angola.jpg",
  },
  projects: {
    // https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=600&auto=format&fit=crop
    guatemala: "/images/Unbenannt-e1666220204130.png",
    malawi: "/images/Folie5-3.jpg",
    angola: "/images/Angola-Recycling-Projekt.jpg",
    inclusion: "/images/Be-a-professional.jpg",
    minority: "/images/Folie6-2.jpg",
    orgDev: "/images/OD-People-3.png",
    sportPed: "/images/IMG_20190923_160838-scaled-e1666219756484.jpg"
  },
  media: {
    background: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2000&auto=format&fit=crop",
    video1: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
    video2: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop"
  },
  news: {
    newsImg: "/images/News.jpg",
    school: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=800&auto=format&fit=crop",
    it: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop",
    report: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop",
    todos: "/images/News.jpg",
    wonder: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
    malawi_camp: "https://images.unsplash.com/photo-1518604666860-9ed391f76460?q=80&w=800&auto=format&fit=crop",
    soap: "https://images.unsplash.com/photo-1600456899121-68da9232104a?q=80&w=800&auto=format&fit=crop"
  },
  social: {
    blogImage: "/images/Blogs.jpg",
    postImage1: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=400&auto=format&fit=crop",
    postImage2: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=400&auto=format&fit=crop"
  },
  whoWeAre: {
     //principles: "https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?q=80&w=800&auto=format&fit=crop",
     principles: "/images/Values_V2.jpg",
     team: "/images/Equilibrium-Foundation-Team-e1666215969685.png",
     work: "/images/Equilibrium-Foundation-Cooperation-Model.jpg",
     transparency: "/images/TZI_weiss.jpg"
  },
  getInvolved: {
    hero: {
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=1600&auto=format&fit=crop",
      title: "Werde Teil der Veränderung",
      subtitle: "Ob Zeit, Wissen oder finanzielle Mittel – es gibt viele Wege, unsere Mission für Inklusion zu unterstützen."
    },
    volunteering: "/images/Ehrenamtliche Arbeit.jpg",
    remote: "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?q=80&w=800&auto=format&fit=crop",
    internship: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800&auto=format&fit=crop",
    professional: "/images/Be-a-professional.jpg",
    visitProject: "/images/nahuala-jovenes-capacitacion-1.jpg"
  }
};

/** Partner mit Logo: Logo-Pfad unter public/images (z. B. /images/partners/xyz.png). Dateien in public/images/partners/ ablegen und ggf. Pfad anpassen. */
const PARTNERS_WITH_LOGOS: { name: string; logo: string }[] = [
  { name: "africrops!", logo: "/images/africrops-logo.png" },
  { name: "ANIMAR Angola", logo: "/images/partners/ANIMAR Angola.jpg" },
  { name: "Ascent Soccer Academy", logo: "/images/AscentSoccercirclewhite.png" },
  { name: "Bingo! Environmental Lottery", logo: "/images/Bingo-Umweltlotterie-Logo.jpg" },
  { name: "Cacao Centro Infantil", logo: "/images/06-Cacao-Centro-Infantil.png" },
  { name: "FAM", logo: "/images/partners/Farm.jpg" },
  { name: "First Step towards Balance", logo: "/images/Logo-FSE.jpg" },
  { name: "Global United FC", logo: "/images/globalunitedfc-Logo.jpg" },
  { name: "INEGAP", logo: "/images/04-INEGAP-1.jpg" },
  { name: "KCC", logo: "/images/partners/KCC.jpg" },
  { name: "Kiezhelden", logo: "/images/Kiezhelden_logo.jpg" },
  { name: "MASLI", logo: "/images/MASLI.jpg" },
  { name: "NUE Foundation", logo: "/images/NUE-Logo.jpg" },
  { name: "PACD", logo: "/images/PACD_Entwurf_V2.jpg" },
  { name: "Pfeffersport", logo: "/images/Pfeffersport-V2.jpg" },
  { name: "San Pedro FC", logo: "/images/logo-fc-san-pedro.jpg" },
  { name: "Senga Bay Eagles", logo: "/images/Senga-Bay-Eagles.jpg" },
  { name: "Smiles of Hope", logo: "/images/partners/Simles of Hope.jpg" },
  { name: "TSU Organización", logo: "/images/partners/TSU Organisation.jpg" },
  { name: "Wonder Koding", logo: "/images/Wonderkoding.jpg" }
];

/** Nur Namen (z. B. für Footer-Text). */
const FULL_PARTNER_LIST = PARTNERS_WITH_LOGOS.map((p) => p.name);

// Define DE content first
const contentDe = {
  brand: { ...SHARED.brand, name: "EQUILIBRIUM", suffix: "FOUNDATION" },
  navigation: [
    { name: 'Wer wir sind', path: '/wer-wir-sind' },
    { name: 'Was wir tun', path: '/was-wir-tun' },
    { name: 'Engagieren Sie sich', path: '/engagieren' },
    { name: 'Unsere Partner', path: '/netzwerk' },
    { name: 'Nachrichten', path: '/nachrichten' }
  ],
  general: {
    readMore: "Weiterlesen",
    donate: "Spenden",
    details: "Details ansehen"
  },
  home: {
    hero: {
      tagline: "Brücken bauen",
      title: "Schaffe eine gerechtere Welt",
      subtitle: "Wir fördern Gehörlose und Autisten durch spezialisierte IT-Bildung und unterstützen nachhaltige Projekte für Kinder weltweit.",
      btnPrimary: "Jetzt fördern",
      btnSecondary: "Unsere Projekte",
      sustainableBox: "100% NACHHALTIG",
      images: IMAGES.hero
    },
    partners: {
      items: PARTNERS_WITH_LOGOS,
      label: "Unser Netzwerk"
    },
    missionGallery: {
      textTop: "Handle lokal, denk global",
      text1: "Die Equilibrium Foundation ist eine gemeinnützige Organisation für soziale Auswirkungen in Deutschland, die benachteiligte Menschen im globalen Süden in den Bereichen",
      text1Bold: "Bildung, Kultur und Umwelt",
      text1End: "stärkt.",
      text2: "Unsere Aktivitäten basieren auf den grundlegenden Prinzipien des Humanismus, der Ethik und des Positivismus.",
      text3: "Lernen Sie unser interdisziplinäres und internationales Team von 12 leidenschaftlichen Aktivisten kennen.",
      btn: "Mehr erfahren",
      boxTitle: "Gelebte",
      boxSubtitle: "Inklusion",
      col1_top: IMAGES.mission.col1_top,
      col1_bottom: IMAGES.mission.col1_bottom,
      col2_top: IMAGES.mission.col2_top,
      col2_bottom: IMAGES.mission.col2_bottom,
      col3_top: IMAGES.mission.col3_top
    },
    mainProjects: {
      subtitle: "Wie wir wirken",
      titleStart: "Wir investieren in",
      titleEnd: "Mensch & Natur.",
      readMore: "Weiterlesen",
      items: [
        {
          title: "Berufliche Inklusion",
          subtitle: "Guatemala",
          desc: "Wir bilden Mayas mit Hörbehinderung in Guatemala darin, Softwareprogrammierer zu werden und ihren Lebensunterhalt im Team zu verdienen.",
          color: "bg-[#0c4a6e]", // Deep Blue
          img: IMAGES.projects.guatemala
        },
        {
          title: "Train-the-Trainer",
          subtitle: "Malawi",
          desc: "Wir bilden und zertifizieren Trainer in Malawi, die körperliche Fähigkeiten und die Persönlichkeit benachteiligter Kinder entwickeln.",
          color: "bg-[#ea580c]", // Burnt Orange Accent
          img: IMAGES.projects.malawi
        },
        {
          title: "Recycling & Fair Trade",
          subtitle: "Angola",
          desc: "Wir unterstützen Recycling, Handwerk und fairen Handel in Angola, um Einkommen zu generieren und die Umwelt zu schützen.",
          color: "bg-[#3fb0e3]", // Light Blue
          img: IMAGES.projects.angola
        }
      ]
    },
    impactStats: [
      { value: "600+", label: "Absolventen", color: "text-[#ea580c]" },
      { value: "4", label: "Länder", color: "text-white" },
      { value: "14", label: "Aktivisten", color: "text-white" },
      { value: "12", label: "Projects", color: "text-[#3fb0e3]" }
    ],
    howToHelp: {
      iconTitle: "Deine Hilfe macht den Unterschied",
      titleStart: "Gemeinsam Zukunft",
      titleEnd: "gestalten.",
      items: [
        {
          title: "Spenden",
          desc: "Unterstütze unsere Sozialprojekte für Kinder und IT-Bildung finanziell.",
          button: "Jetzt Spenden",
          btnColor: "bg-[#ea580c] hover:bg-[#c2410c]" // Orange Action
        },
        {
          title: "Engagement",
          desc: "Bringe dein Wissen als Entwickler ein oder unterstütze uns als Volunteer.",
          button: "Mitwirken",
          btnColor: "bg-[#0c4a6e] hover:bg-[#075985]" // Deep Blue
        },
        {
          title: "Partnerschaft",
          desc: "Stiftungen und Organisationen finden bei uns transparente Zusammenarbeit.",
          button: "Kooperieren",
          btnColor: "bg-[#3fb0e3]/80 hover:bg-[#3fb0e3]" // Light Blue
        }
      ]
    },
    socialFeed: {
        blogTitle: "Klicken Sie hier, um unsere Blogs zu sehen",
        blogImage: IMAGES.social.blogImage,
        blogLink: "https://www.equilibrium.foundation/blog",
        blogButtonText: "Zum Blog",
        facebookTitle: "Facebook",
        facebookPageUrl: "https://www.facebook.com/EquilibriumFoundation",
        connectTitle: "Verbinden Sie sich mit uns",
        post: {
            title: "Equilibrium Foundation",
            date: "vor etwa einem Jahr",
            contentTitle: "Training of Deaf Mayans to Become Software Developers - 5th Year - Press conference in Hamburg",
            content: "In the 5th year and at the end of the 2024/2025 training cycle, we will present the results of the project and conduct a live broadcast to our partner organization in Guatemala Todos Somos Uno, in which the Mayan Deaf Coder team will also participate.",
            contentDate: "14/03/2025",
            images: [IMAGES.social.postImage1, IMAGES.social.postImage2]
        }
    },
    mediaSection: {
      subtitle: "Gallery & Media",
      titleStart: "Impact in",
      titleEnd: "Sight & Sound",
      desc: "Experience the real stories behind our digital solutions.",
      background: IMAGES.media.background,
      items: [
        {
          title: "From Alphabet to Code",
          duration: "4:20",
          thumb: IMAGES.media.video1
        },
        {
          title: "AI Tech in Practice",
          duration: "3:15",
          thumb: IMAGES.media.video2
        }
      ]
    }
  }, // END OF HOME
  
  // Footer and other sections are now SIBLINGS of home, not children
  footer: {
    description: "Die Equilibrium Foundation ist eine gemeinnützige Organisation, die sich für Bildung, Inklusion und Umweltschutz weltweit einsetzt.",
    email: "info@equilibrium.foundation",
    city: "Hamburg",
    address: "Fuhlsbüttler Straße 594,\n 22337 Hamburg",
    chapters: "Kapitel",
    contact: "Kontakt",
    partners: "Partner: Kiez Helden • Bingo! Umwelt • NUE",
    copyright: "Foundation gGmbH"
  },
  whoWeAre: {
    heroTag: "Über uns",
    foundedYear: "2014",
    foundedLabel: "Gegründet",
    title: "Wer wir sind",
    description: "Die Equilibrium Foundation ist eine gemeinnützige Organisation für soziale Auswirkungen mit Sitz in Hamburg, Deutschland, mit der sozialen Vision, eine gerechtere Welt sowie ein größeres soziales und wirtschaftliches Gleichgewicht zwischen benachteiligten und privilegierten Menschen im globalen Süden zu schaffen.",
    subDescription: "Wir erreichen soziale Wirkung durch unsere soziale Mission, benachteiligte Menschen, Multiplikatoren, Mikrounternehmer und gemeinnützige Organisationen im globalen Süden zu stärken.",
    motto: "Gemäß unseren Prinzipien und unserem gemeinsamen Wertesatz, insbesondere mit unseren Kernwerten Empathie und Respekt, handeln wir nach unserem Motto: \"Handle lokal, denken global\", um eine gerechtere Welt zu schaffen.",
    quickFacts: [
      { text: "Die Equilibrium Foundation wurde 2014 gegründet und 2018 als gemeinnützige Organisation in Hamburg, Deutschland, registriert." },
      { text: "Das Team der Equilibrium Foundation besteht aus zwölf leidenschaftlichen Aktivisten, die sich für eine gerechtere Welt einsetzen." },
      { text: "Die Equilibrium Foundation führte 12 Projekte mit gemeindebasierten gemeinnützigen Organisationen in Asien, Afrika und Mittelamerika durch." }
    ],
    detailsTitle: "Erfahren Sie mehr über uns",
    details: [
      {
        title: "Unsere Prinzipien",
        img: IMAGES.whoWeAre.principles, 
        text: "Alle Aktivitäten der Equilibrium Foundation basieren auf den grundlegenden Prinzipien des Humanismus, der Ethik und des Positivismus. Aufbauend auf diesen Werten fördern wir eine nachhaltige Stärkung benachteiligter Menschen im globalen Süden.",
        linkText: "Weiterlesen",
        link: "/prinzipien"
      },
      {
        title: "Unser Team",
        img: IMAGES.whoWeAre.team, 
        text: "Jeder unserer leidenschaftlichen Aktivisten im Team bringt seine individuellen Stärken ein, um eine gerechtere Welt zu schaffen. Unsere Expertise und Fähigkeiten reichen von Pädagogik, Bildung, Management, Beratung bis hin zu Wissenschaft und Informationstechnologie.",
        linkText: "Weiterlesen",
        link: "/team"
      },
      {
        title: "Wie wir arbeiten",
        img: IMAGES.whoWeAre.work, 
        text: "Die Equilibrium Foundation wendet ihr selbstentwickeltes Kollaborationsmodell an (unter Berücksichtigung internationaler Standards), das die Logik von drei wegweisenden Modellen kombiniert: 1. Social Business Excellence Model, 2. das Project Logic Model und 3. den Standard-Projektlebenszyklus.",
        linkText: "Weiterlesen",
        link: "/methode"
      },
      {
        title: "Transparenz",
        img: IMAGES.whoWeAre.transparency, 
        text: "Die Equilibrium Foundation kommuniziert transparent ihre Herkunft, Prinzipien, Governance und Eigentumsstruktur, Ziele, Aktivitätsberichte, Spender, Herkunft und Verwendung von Mitteln. Aus diesem Grund sind wir freiwillig der Transparent Civil Society Initiative beigetreten.",
        linkText: "Weiterlesen",
        link: "/transparenz"
      }
    ],
    downloads: {
      title: "Downloads",
      items: [
        { title: "Steuerbefreiungsschreiben", btn: "Download", link: "#" },
        { title: "Kinderschutzpolitik", btn: "Download", link: "#" }
      ]
    }
  },
  whatWeDo: {
    heroTag: "Unsere Mission in Aktion",
    heroLine1: "Wirkung durch",
    heroLine2: "Nachhaltigkeit.",
    sectionOngoingLabel: "Aktuelle Arbeit",
    viewProject: "Projekt ansehen",
    learnMore: "Mehr erfahren",
    strategies: [
      { title: "Capacity Building", desc: "Stärkung individueller & kollektiver Kompetenzen." },
      { title: "Project Management", desc: "Professionelle Planung & Durchführung." },
      { title: "Workforce Placement", desc: "Brücke in den ersten Arbeitsmarkt." },
      { title: "Resource Mobilization", desc: "Bereitstellung von IT-Infrastruktur." }
    ],
    description: "In enger Partnerschaft mit lokalen gemeinnützigen und gemeinschaftsbasierten zivilgesellschaftlichen Organisationen entwickeln und führen wir innovative und nachhaltige Projekte im globalen Süden in den Bereichen Bildung, Kultur und Umwelt durch.",
    activitiesInfo: "Die Arbeit der Equilibrium Foundation konzentriert sich auf vier Hauptaktivitäten: 1. Kapazitätsaufbau, 2. Projektmanagement, 3. Arbeitsvermittlung und 4. Ressourcenmobilisierung. Durch unsere Aktivitäten stärken wir individuelle und kollektive Kompetenzen und die Leistung unserer lokalen Partner, um ihre Autonomie und ihren Erfolg langfristig zu stärken und eine gerechtere Welt zu schaffen.",
    stats: {
      projectsCount: "12+ Projekte",
      projectsText: "We have conducted and supported 12 projects in collaboration with community-based non-profit organizations in Asia, Africa, and Central America.",
      peopleCount: "600+ People",
      peopleText: "Our projects have reached more than 600 disadvantaged people, multipliers, and micro-entrepreneurs.",
      equipment: "50+ Tonnen",
      equipmentText: "We have procured and provided technical and educational equipment for our local partners."
    },
    ongoing: {
      title: "Ongoing Projects",
      items: [
        {
          title: "Train-the-Trainer for Youth Football Coaches in Malawi",
          subtitle: "Sports Education",
          text: "Together with the Malawi Football Association, we promote the training of football coaches. Now, a local children's league and talent academy has been established, in which the trained coaches use methods for age-appropriate football training to develop the disadvantaged children.",
          link: "#",
          img: IMAGES.projects.malawi
        },
        {
          title: "Professional Inclusion of Deaf Mayans in Guatemala",
          subtitle: "Inclusion & Education",
          text: "We enable vocational training for a group of Mayans with hearing disabilities to become software programmers in Guatemala. This innovative program will enable participants to work with IT experts in a team to carry out projects around the world and earn a living.",
          link: "#",
          img: IMAGES.projects.guatemala
        }
      ]
    },
    completed: {
      title: "Completed Projects in Different Sectors",
      items: [
        {
          sector: "Inclusion",
          subtitle: "Inclusion",
          text: "Equilibrium Foundation values people's differences and empowers their full potential. Through trainings for coaches and organizations, we create environments where everyone is treated fairly, regardless of their background, identity, or circumstances.",
          img: IMAGES.projects.inclusion,
          link: "#"
        },
        {
          sector: "Minority Rights",
          subtitle: "Minority Rights",
          text: "Equilibrium Foundation makes the voices of local minorities, discriminated and indigenous people heard in their communities. By providing micro-credit and conducting participatory workshops, we promote their rights and enable long-term social change.",
          img: IMAGES.projects.minority,
          link: "#"
        },
        {
          sector: "Organisationsentwicklung",
          subtitle: "Organisationsentwicklung",
          text: "The only constant is change. We facilitate participatory change and support our partner organizations to build up their capacity to adjust and achieve greater effectiveness by developing, improving, and reinforcing people, strategies, structures, and processes.",
          img: IMAGES.projects.orgDev,
          link: "#"
        },
        {
          sector: "Sportpädagogik",
          subtitle: "Sportpädagogik",
          text: "Sport baut Barrieren ab und baut Brücken, wo normalerweise Grenzen existieren. Wir bringen Menschen zusammen und trainieren sie in den neuesten Techniken und Methoden. Unser Ziel ist es, ihre gesellschaftliche Teilhabe zu verbessern und ihren Wert und ihre Akzeptanz in der Gemeinschaft zu stärken.",
          img: IMAGES.projects.sportPed,
          link: "#"
        }
      ]
    },
    cta: {
      title: "Support Our Projects!",
      text: "You like our projects and would like to support our work in the global south? Get Involved in our projects or Make a Donation and help us create a fairer World.",
      link1: "Get Involved",
      link1Text: "in our projects or",
      link2: "Donate",
      link2Text: "and help us create a fairer World."
    }
  },
  getInvolved: {
    hero: {
      image: IMAGES.whoWeAre.principles,
      title: "Deine Zeit. Dein Talent. Unsere Zukunft.",
      subtitle: "Wir suchen nicht nur Spender, sondern Mitstreiter. Egal ob als Entwickler, Mentor oder Fördermitglied – dein Beitrag zählt."
    },
    financial: {
      title: "Finanzielle Unterstützung",
      items: [
        {
          title: "Spenden",
          text: "100% deiner Spende fließen direkt in die Projekte. Keine Verwaltungskosten-Abzüge.",
          link: "/spenden",
          btn: "Jetzt Spenden"
        },
        {
          title: "Mikrokredite",
          text: "Ermögliche unternehmerische Initiative durch revolvierende Fonds.",
          link: "/spenden",
          btn: "Mehr erfahren"
        }
      ]
    },
    projects: {
      title: "Beteiligen Sie sich an unseren Projekten!",
      roles: [
        { title: "React / AI Mentor", type: "Remote", time: "4h / Woche", desc: "Unterstütze unsere gehörlosen Studenten in Guatemala bei Coding-Challenges.", tags: ["Tech", "Mentoring"] },
        { title: "Fußball Trainer", type: "Malawi (Vor Ort)", time: "2-4 Wochen", desc: "Bilde lokale Coaches aus und organisiere inklusive Turniere für Kinder.", tags: ["Sport", "Reisen"] },
        { title: "Social Media Hero", type: "Remote", time: "Flexibel", desc: "Hilf uns, die Geschichten unserer Begünstigten in die Welt zu tragen.", tags: ["Marketing", "Kreativ"] }
      ],
      items: [
        {
          title: "Sei professionell",
          text: "Wir suchen sozial motivierte Fachkräfte mit Erfahrung in den Bereichen Entwicklungszusammenarbeit, Bildung, Umwelt und Kultur.",
          img: IMAGES.getInvolved.professional,
          link: "#",
          showButton: true,
          buttonText: "Weitere Informationen"
        },
        {
          title: "Mach ehrenamtliche Arbeit",
          text: "Beteiligen Sie sich an einem unserer weltweiten Projekte oder Arbeitscamps. Internationale Erfahrung sammeln und gleichzeitig das Leben benachteiligter Menschen positiv beeinflussen.",
          img: IMAGES.getInvolved.volunteering,
          link: "#",
          showButton: true,
          buttonText: "Weitere Informationen"
        },
        {
          title: "Besuche ein Projekt",
          text: "Besuchen Sie unsere Gemeinschaftsprojekte über unser lokales Netzwerk, erhalten Sie authentische Unterkünfte und zuverlässige Transportmöglichkeiten. Lasst uns eine gerechtere Welt schaffen.",
          img: IMAGES.getInvolved.visitProject,
          link: "#",
          showButton: true,
          buttonText: "Weitere Informationen"
        }
      ]
    },
    csr: {
        title: "Corporate Social Responsibility",
        subtitle: "Unternehmenspartnerschaften mit Impact",
        text: "Verbinden Sie Ihre Unternehmensziele mit sozialem Engagement. Wir bieten maßgeschneiderte CSR-Projekte, die echte Geschichten schreiben.",
        points: ["Teambuilding Events vor Ort", "Sponsoring von IT-Hardware", "Skill-Based Volunteering"]
    },
    contact: {
      title: "Kontakt aufnehmen",
      addressLabel: "Adresse",
      emailLabel: "E-Mail",
      mapEmbed: SHARED.mapEmbed
    },
    steps: [
        { num: "01", title: "Informieren", text: "Lies dir unsere aktuellen Gesuche durch." },
        { num: "02", title: "Bewerben", text: "Schick uns eine kurze Mail mit deiner Motivation." },
        { num: "03", title: "Onboarding", text: "Lerne das Team kennen und leg los." }
    ]
  },
  network: {
    pageTitle: "Unsere Partner",
    pageSubtitle: "Wir arbeiten mit einem starken Netzwerk aus Organisationen und Unternehmen zusammen.",
    collaboration: {
      title: "Zusammenarbeit",
      categories: [
        { type: "community", title: "Gemeinschaft" },
        { type: "government", title: "Regierung" },
        { type: "nonprofit", title: "Non-Profit" },
        { type: "forprofit", title: "Unternehmen" }
      ],
      partners: PARTNERS_WITH_LOGOS
    },
    transparencyTitle: "Transparenz schafft Vertrauen.",
    transparencyText: "Wir sind Teil der Initiative Transparente Zivilgesellschaft und legen jährlich die Verwendung unserer Mittel offen. So geben wir Partnern die Sicherheit, dass jeder Euro wirkt.",
    auditedWork: "Geprüfte Stiftungsarbeit",
    globalPartners: "Globaler Partnerpool",
    joinTitle: "Netzwerk mitgestalten",
    joinText: "Sie suchen ein CSR-Projekt mit echter Wirkung? Wir bieten Partnerschaften für Unternehmen und Stiftungen.",
    joinButton: "Anfrage senden"
  },
  news: {
    title: "Aktuelle Nachrichten",
    italicPart: "Nachrichten",
    newsPageUrl: "https://equilibrium.foundation/news-2/",
    posts: [
      {
        title: "Schaffung einer gerechteren Welt mit bewusster Partnerschaft | Interview mit Todos Somos Uno",
        date: "22. Dezember 2020",
        author: "Thom",
        category: "Nachrichten",
        excerpt: "Heute sitzen wir mit dem Präsidenten einer unserer Partnerorganisationen, Todos Somos Uno mit Sitz in Guatemala. Herr Roger Felipe Sagastume Granja, ein Softwareentwickler, der sich darauf spezialisiert hat, Menschen mit Hörbehinderung das Programmieren beibringen. 2019 hat Roger …",
        img: IMAGES.news.newsImg,
        link: "https://equilibrium.foundation/news-2/"
      },
      {
        title: "Können Sie sich vorstellen, dass 2021 zehn gehörlose Menschen eine Ihrer Smartphone-Apps programmiert haben?",
        date: "22. Dezember 2020",
        author: "Thom",
        category: "Nachrichten",
        excerpt: "Liebe Unterstützerin, 2021 werden wir zusammen mit unserer lokalen Partnerorganisation Todos Somos Uno zehn gehörlose indigene Menschen in Guatemala zu Softwareprogrammierern ausbilden. Nach erfolgreichem Abschluss verdienen alle Teilnehmer ihren Lebensunterhalt im Team mit erfahrenen IT-Experten.",
        img: IMAGES.news.newsImg,
        link: "https://equilibrium.foundation/news-2/"
      },
      {
        title: "Eine gerechtere Welt mit gezielter Partnerschaft schaffen | Interview mit Wonder Koding",
        date: "04. November 2020",
        author: "Thom",
        category: "Nachrichten",
        excerpt: "Interview mit unserem indonesischen Partner Wonder Koding. Gemeinsam mit unserer Partnerorganisation Wonder Koding präsentiert die Equilibrium Foundation unserem Publikum die Arbeit unseres Partners und wie wir alle danach streben, eine gerechtere Welt zu schaffen. Herr Heri Hamdani, der …",
        img: IMAGES.news.wonder,
        link: "https://equilibrium.foundation/news-2/"
      },
      {
        title: "Update zu unserem Malawi Football Camp",
        date: "20. August 2020",
        author: "Thom",
        category: "Allgemein",
        excerpt: "Während wir unser bevorstehendes Projekt in Senga Bay, Malawi, erwarten, lassen Sie uns Sie durch die bisherigen Projekte der Equilibrium Foundation im Land führen. Mit dem Ziel, eine gerechtere Welt zu schaffen, lagerten wir 2018 erstmals in Malawi.",
        img: IMAGES.news.malawi_camp,
        link: "https://equilibrium.foundation/news-2/"
      },
      {
        title: "Spendenaktion: Produktion von Seife in Sambizanga",
        date: "08. Juli 2020",
        author: "Thom",
        category: "Nachrichten",
        excerpt: "Die COVID-19-Pandemie hat Menschen weltweit betroffen, und Angola ist eines der Länder, die unter schwierigen sozioökonomischen Umständen mit dieser Situation konfrontiert sind. Unsere neue Partnerorganisation ANIMAR bildet 15 Mitglieder der Gemeinschaft Sambizanga (Stadtteil von Luanda) in der Herstellung von Seife aus.",
        img: IMAGES.news.soap,
        link: "https://equilibrium.foundation/news-2/"
      }
    ]
  },
  donationPage: {
    hero: {
      title: "Helfen Sie uns helfen",
      text: "Ihre Spende macht unsere Arbeit erst möglich.",
      img: "/images/Spenden.png"
    },
    german: {
      title: "Spendenkonto Deutschland",
      text: "Für Spenden innerhalb der EU.",
      bankDetails: {
        holder: "Equilibrium Foundation",
        bank: "GLS Bank",
        iban: "DE12 3456 7890 1234 5678 90"
      }
    },
    us: {
      title: "International Donations",
      text: "For donors from the US and other countries.",
      important: "Tax deductibility info...",
      code: "SWIFT: GLSDBEXXX",
      link: "#",
      btn: "Donate via PayPal"
    }
  }
};

// Define EN content – vollständige Übersetzung, damit EN/DE-Umschalter die ganze Seite anzeigt
const contentEn = {
  ...contentDe,
  navigation: [
    { name: 'Who We Are', path: '/wer-wir-sind' },
    { name: 'What We Do', path: '/was-wir-tun' },
    { name: 'Get Involved', path: '/engagieren' },
    { name: 'Partners', path: '/netzwerk' },
    { name: 'News', path: '/nachrichten' }
  ],
  general: {
    readMore: "Read more",
    donate: "Donate",
    details: "View details"
  },
  home: {
    ...contentDe.home,
    hero: {
      tagline: "Building Bridges",
      title: "Create a Fairer World",
      subtitle: "We empower deaf and autistic individuals through specialized IT education and support sustainable projects for children worldwide.",
      btnPrimary: "Support Now",
      btnSecondary: "Our Projects",
      sustainableBox: "100% SUSTAINABLE",
      images: IMAGES.hero
    },
    missionGallery: {
      textTop: "Act locally, think globally",
      text1: "The Equilibrium Foundation is a nonprofit organization for social impact in Germany, strengthening disadvantaged people in the global south in the areas of",
      text1Bold: "education, culture and environment",
      text1End: ".",
      text2: "Our activities are based on the fundamental principles of humanism, ethics and positivism.",
      text3: "Meet our interdisciplinary and international team of 12 passionate activists.",
      btn: "Learn more",
      boxTitle: "Lived",
      boxSubtitle: "Inclusion",
      col1_top: IMAGES.mission.col1_top,
      col1_bottom: IMAGES.mission.col1_bottom,
      col2_top: IMAGES.mission.col2_top,
      col2_bottom: IMAGES.mission.col2_bottom,
      col3_top: IMAGES.mission.col3_top
    },
    mainProjects: {
      subtitle: "How we create impact",
      titleStart: "We invest in",
      titleEnd: "People & Nature.",
      readMore: "Read more",
      items: [
        { title: "Professional Inclusion", subtitle: "Guatemala", desc: "We train Mayans with hearing disabilities in Guatemala to become software programmers and earn a living in a team.", color: "bg-[#0c4a6e]", img: IMAGES.projects.guatemala },
        { title: "Train-the-Trainer", subtitle: "Malawi", desc: "We train and certify coaches in Malawi who develop physical skills and the personality of disadvantaged children.", color: "bg-[#ea580c]", img: IMAGES.projects.malawi },
        { title: "Recycling & Fair Trade", subtitle: "Angola", desc: "We support recycling, craftsmanship and fair trade in Angola to generate income and protect the environment.", color: "bg-[#3fb0e3]", img: IMAGES.projects.angola }
      ]
    },
    impactStats: [
      { value: "600+", label: "Graduates", color: "text-[#ea580c]" },
      { value: "4", label: "Countries", color: "text-white" },
      { value: "14", label: "Activists", color: "text-white" },
      { value: "12", label: "Projects", color: "text-[#3fb0e3]" }
    ],
    howToHelp: {
      iconTitle: "Your support makes the difference",
      titleStart: "Shaping the future",
      titleEnd: "together.",
      items: [
        { title: "Donate", desc: "Support our social projects for children and IT education financially.", button: "Donate now", btnColor: "bg-[#ea580c] hover:bg-[#c2410c]" },
        { title: "Get involved", desc: "Contribute your skills as a developer or support us as a volunteer.", button: "Get involved", btnColor: "bg-[#0c4a6e] hover:bg-[#075985]" },
        { title: "Partnership", desc: "Foundations and organizations find transparent collaboration with us.", button: "Cooperate", btnColor: "bg-[#3fb0e3]/80 hover:bg-[#3fb0e3]" }
      ]
    },
    socialFeed: {
      blogTitle: "Click here to see our blogs",
      blogImage: IMAGES.social.blogImage,
      blogLink: "https://www.equilibrium.foundation/blog",
      blogButtonText: "To the blog",
      facebookTitle: "Facebook",
      facebookPageUrl: "https://www.facebook.com/EquilibriumFoundation",
      connectTitle: "Connect with us",
      post: { title: "Equilibrium Foundation", date: "about a year ago", contentTitle: "Training of Deaf Mayans to Become Software Developers - 5th Year - Press conference in Hamburg", content: "In the 5th year and at the end of the 2024/2025 training cycle, we will present the results of the project and conduct a live broadcast to our partner organization in Guatemala Todos Somos Uno, in which the Mayan Deaf Coder team will also participate.", contentDate: "14/03/2025", images: [IMAGES.social.postImage1, IMAGES.social.postImage2] }
    },
    mediaSection: {
      subtitle: "Gallery & Media",
      titleStart: "Impact in",
      titleEnd: "Sight & Sound",
      desc: "Experience the real stories behind our digital solutions.",
      background: IMAGES.media.background,
      items: [
        { title: "From Alphabet to Code", duration: "4:20", thumb: IMAGES.media.video1 },
        { title: "AI Tech in Practice", duration: "3:15", thumb: IMAGES.media.video2 }
      ]
    },
    partners: { ...contentDe.home.partners, label: "Our Network" }
  },
  footer: {
    description: "The Equilibrium Foundation is a nonprofit organization committed to education, inclusion and environmental protection worldwide.",
    email: "info@equilibrium.foundation",
    city: "Hamburg",
    address: "Fuhlsbüttler Straße 594,\n 22337 Hamburg",
    chapters: "Chapters",
    contact: "Contact",
    partners: "Partners: Kiez Helden • Bingo! Umwelt • NUE",
    copyright: "Foundation gGmbH"
  },
  whoWeAre: {
    ...contentDe.whoWeAre,
    heroTag: "About us",
    foundedYear: "2014",
    foundedLabel: "Founded",
    title: "Who we are",
    description: "The Equilibrium Foundation is a nonprofit organization for social impact based in Hamburg, Germany, with the social vision of creating a fairer world and greater social and economic balance between disadvantaged and privileged people in the global south.",
    subDescription: "We achieve social impact through our social mission to strengthen disadvantaged people, multipliers, micro-entrepreneurs and nonprofit organizations in the global south.",
    motto: "In line with our principles and shared values, especially our core values of empathy and respect, we act on our motto: 'Act locally, think globally' to create a fairer world.",
    quickFacts: [
      { text: "The Equilibrium Foundation was founded in 2014 and registered as a nonprofit organization in Hamburg, Germany, in 2018." },
      { text: "The Equilibrium Foundation team consists of twelve passionate activists committed to a fairer world." },
      { text: "The Equilibrium Foundation has carried out 12 projects with community-based nonprofit organizations in Asia, Africa and Central America." }
    ],
    detailsTitle: "Learn more about us",
    details: [
      { title: "Our principles", img: IMAGES.whoWeAre.principles, text: "All activities of the Equilibrium Foundation are based on the fundamental principles of humanism, ethics and positivism. Building on these values we promote sustainable empowerment of disadvantaged people in the global south.", linkText: "Read more", link: "/prinzipien" },
      { title: "Our team", img: IMAGES.whoWeAre.team, text: "Each of our passionate activists contributes their individual strengths to create a fairer world. Our expertise ranges from education, management, consulting to science and information technology.", linkText: "Read more", link: "/team" },
      { title: "How we work", img: IMAGES.whoWeAre.work, text: "The Equilibrium Foundation applies its self-developed collaboration model (in line with international standards), combining the logic of three guiding models: 1. Social Business Excellence Model, 2. the Project Logic Model and 3. the standard project life cycle.", linkText: "Read more", link: "/methode" },
      { title: "Transparency", img: IMAGES.whoWeAre.transparency, text: "The Equilibrium Foundation transparently communicates its origins, principles, governance and ownership structure, goals, activity reports, donors, and the origin and use of funds. For this reason we have voluntarily joined the Transparent Civil Society Initiative.", linkText: "Read more", link: "/transparenz" }
    ],
    downloads: { title: "Downloads", items: [{ title: "Tax exemption letter", btn: "Download", link: "#" }, { title: "Child protection policy", btn: "Download", link: "#" }] }
  },
  getInvolved: {
    ...contentDe.getInvolved,
    hero: { image: IMAGES.whoWeAre.principles, title: "Your time. Your talent. Our future.", subtitle: "We are not only looking for donors but allies. Whether as developer, mentor or supporting member – your contribution counts." },
    financial: {
      title: "Financial support",
      items: [
        { title: "Donate", text: "100% of your donation goes directly to projects. No administrative deductions.", link: "/spenden", btn: "Donate now" },
        { title: "Microcredits", text: "Enable entrepreneurial initiative through revolving funds.", link: "/spenden", btn: "Learn more" }
      ]
    },
    projects: {
      title: "Participate in our projects!",
      roles: [
        { title: "React / AI Mentor", type: "Remote", time: "4h / week", desc: "Support our deaf students in Guatemala with coding challenges.", tags: ["Tech", "Mentoring"] },
        { title: "Football coach", type: "Malawi (on-site)", time: "2–4 weeks", desc: "Train local coaches and organize inclusive tournaments for children.", tags: ["Sport", "Travel"] },
        { title: "Social Media Hero", type: "Remote", time: "Flexible", desc: "Help us share the stories of our beneficiaries with the world.", tags: ["Marketing", "Creative"] }
      ],
      items: [
        { title: "Be professional", text: "We are looking for socially motivated professionals with experience in development cooperation, education, environment and culture.", img: IMAGES.getInvolved.professional, link: "#", showButton: true, buttonText: "More information" },
        { title: "Do volunteer work", text: "Participate in one of our worldwide projects or work camps. Gain international experience and at the same time positively influence the lives of disadvantaged people.", img: IMAGES.getInvolved.volunteering, link: "#", showButton: true, buttonText: "More information" },
        { title: "Visit a project", text: "Visit our community projects through our local network, receive authentic accommodation and reliable transportation options. Let's create a fairer world.", img: IMAGES.getInvolved.visitProject, link: "#", showButton: true, buttonText: "More information" }
      ]
    },
    csr: { title: "Corporate Social Responsibility", subtitle: "Partnerships with impact", text: "Align your company goals with social engagement. We offer tailored CSR projects that create real impact.", points: ["Team-building events on-site", "Sponsoring IT hardware", "Skill-based volunteering"] },
    contact: { title: "Get in touch", addressLabel: "Address", emailLabel: "Email", mapEmbed: SHARED.mapEmbed },
    steps: [
      { num: "01", title: "Inform", text: "Read through our current opportunities." },
      { num: "02", title: "Apply", text: "Send us a short email with your motivation." },
      { num: "03", title: "Onboarding", text: "Meet the team and get started." }
    ]
  },
  whatWeDo: {
    heroTag: "Our mission in action",
    heroLine1: "Impact through",
    heroLine2: "Sustainability.",
    sectionOngoingLabel: "Current work",
    viewProject: "View project",
    learnMore: "Learn more",
    strategies: [
      { title: "Capacity Building", desc: "Strengthening individual & collective competencies." },
      { title: "Project Management", desc: "Professional planning & implementation." },
      { title: "Workforce Placement", desc: "Bridge to the labour market." },
      { title: "Resource Mobilization", desc: "Provision of IT infrastructure." }
    ],
    description: "In close partnership with local nonprofit and community-based civil society organizations we develop and run innovative, sustainable projects in the global south in the areas of education, culture and environment.",
    activitiesInfo: "The work of the Equilibrium Foundation focuses on four main activities: 1. Capacity building, 2. Project management, 3. Workforce placement and 4. Resource mobilization. Through our activities we strengthen individual and collective competencies and the performance of our local partners for long-term autonomy and impact.",
    stats: {
      projectsCount: "12+ Projects",
      projectsText: "We have conducted and supported 12 projects in collaboration with community-based non-profit organizations in Asia, Africa, and Central America.",
      peopleCount: "600+ People",
      peopleText: "Our projects have reached more than 600 disadvantaged people, multipliers, and micro-entrepreneurs.",
      equipment: "50+ Tons",
      equipmentText: "We have procured and provided technical and educational equipment for our local partners."
    },
    ongoing: {
      title: "Ongoing Projects",
      items: [
        { title: "Train-the-Trainer for Youth Football Coaches in Malawi", subtitle: "Sports Education", text: "Together with the Malawi Football Association we promote the training of football coaches. A local children's league and talent academy has been established where trained coaches use age-appropriate methods to develop disadvantaged children.", link: "#", img: IMAGES.projects.malawi },
        { title: "Professional Inclusion of Deaf Mayans in Guatemala", subtitle: "Inclusion & Education", text: "We enable vocational training for Mayans with hearing disabilities to become software programmers in Guatemala. This program enables participants to work with IT experts in a team on projects worldwide and earn a living.", link: "#", img: IMAGES.projects.guatemala }
      ]
    },
    completed: {
      title: "Completed Projects in Different Sectors",
      items: [
        { sector: "Inclusion", subtitle: "Inclusion", text: "Equilibrium Foundation values people's differences and empowers their full potential. Through trainings for coaches and organizations we create environments where everyone is treated fairly.", img: IMAGES.projects.inclusion, link: "#" },
        { sector: "Minority Rights", subtitle: "Minority Rights", text: "Equilibrium Foundation amplifies the voices of local minorities, discriminated and indigenous people in their communities. Through micro-credit and participatory workshops we promote their rights and long-term social change.", img: IMAGES.projects.minority, link: "#" },
        { sector: "Organizational Development", subtitle: "Organizational Development", text: "The only constant is change. We facilitate participatory change and support partner organizations to build capacity and achieve greater effectiveness in people, strategies, structures and processes.", img: IMAGES.projects.orgDev, link: "#" },
        { sector: "Sports Education", subtitle: "Sports Education", text: "Sport breaks down barriers and builds bridges where boundaries usually exist. We bring people together and train them in the latest techniques and methods to improve their participation in society and their standing in the community.", img: IMAGES.projects.sportPed, link: "#" }
      ]
    },
    cta: { title: "Support Our Projects!", text: "You like our projects and would like to support our work in the global south? Get Involved in our projects or Make a Donation and help us create a fairer World.", link1: "Get Involved", link1Text: "in our projects or", link2: "Donate", link2Text: "and help us create a fairer World." }
  },
  network: {
    pageTitle: "Our Partners",
    pageSubtitle: "We work with a strong network of organizations and companies.",
    collaboration: {
      title: "Collaboration",
      categories: [
        { type: "community", title: "Community" },
        { type: "government", title: "Government" },
        { type: "nonprofit", title: "Non-profit" },
        { type: "forprofit", title: "Business" }
      ],
      partners: PARTNERS_WITH_LOGOS
    },
    transparencyTitle: "Transparency creates Trust.",
    transparencyText: "We are part of the Transparent Civil Society initiative and disclose our use of funds annually. This gives our partners the assurance that every Euro has an impact.",
    auditedWork: "Audited Foundation Work",
    globalPartners: "Global Partner Pool",
    joinTitle: "Join the Network",
    joinText: "Looking for a CSR project with real impact? We offer partnerships for companies and foundations.",
    joinButton: "Send Inquiry"
  },
  news: {
    title: "News",
    italicPart: "News",
    newsPageUrl: "https://equilibrium.foundation/news-2/",
    posts: [
      { title: "Creating a Fairer World with Deliberate Partnership | Interview with Todos Somos Uno", date: "December 22, 2020", author: "Thom", category: "News", excerpt: "Today, we sit with the president of one of our partner organizations, Todos Somos Uno based in Guatemala. Mr Roger Felipe Sagastume Granja, a software developer who specializes in teaching people with hearing disabilities how to code. In 2019, Roger …", img: IMAGES.news.newsImg, link: "https://equilibrium.foundation/news-2/" },
      { title: "Can you imagine 10 deaf people having programmed one of your smartphone apps in 2021?", date: "December 22, 2020", author: "Thom", category: "News", excerpt: "Dear supporter, In 2021 we will train 10 deaf indigenous people in Guatemala to become software programmers together with our local partner organisation Todos Somos Uno. After successfully completing, all participants will earn their living in a team with an experienced …", img: IMAGES.news.newsImg, link: "https://equilibrium.foundation/news-2/" },
      { title: "Creating a Fairer World with Deliberate Partnership | Interview with Wonder Koding", date: "November 4, 2020", author: "Thom", category: "News", excerpt: "Interview with our Indonesian Partner, Wonder Koding. Sitting with our partner organization, Wonder Koding, Equilibrium Foundation brings to our audience the work of our partner and how we all strive to create a fairer world. Mr Heri Hamdani, who works …", img: IMAGES.news.wonder, link: "https://equilibrium.foundation/news-2/" },
      { title: "Update on our Malawi Football Camp", date: "August 20, 2020", author: "Thom", category: "General", excerpt: "While we anticipate our upcoming project in Senga Bay, Malawi, let us walk you through the previous projects of Equilibrium Foundation in the country. With the goal of creating a fairer world, we first camped at Malawi in 2018. Equilibrium …", img: IMAGES.news.malawi_camp, link: "https://equilibrium.foundation/news-2/" },
      { title: "Fundraiser: Production of Soap in Sambizanga", date: "July 8, 2020", author: "Thom", category: "News", excerpt: "The COVID-19 pandemic has affected people worldwide and Angola is one of the countries that face the situation under difficult socio-economic circumstances. Our new partner organisation ANIMAR trains 15 members of the community of Sambizanga (District of Luanda) in producing …", img: IMAGES.news.soap, link: "https://equilibrium.foundation/news-2/" }
    ]
  },
  donationPage: {
    hero: { title: "Help us help", text: "Your donation makes our work possible.", img: "/images/Spenden.jpg" },
    german: { title: "Donation account Germany", text: "For donations within the EU.", bankDetails: { holder: "Equilibrium Foundation", bank: "GLS Bank", iban: "DE12 3456 7890 1234 5678 90" } },
    us: { title: "International Donations", text: "For donors from the US and other countries.", important: "Tax deductibility info...", code: "SWIFT: GLSDBEXXX", link: "#", btn: "Donate via PayPal" }
  }
};

// Export explicitly
export const CONTENT_DE = contentDe;
export const CONTENT_EN = contentEn;
