export type Language = "en" | "ar";
export type Direction = "ltr" | "rtl";

export interface NavItemTranslation {
  label: string;
  href: string;
  tag?: string;
}

export interface StatItemTranslation {
  value: string;
  label: string;
}

export interface PillarTranslation {
  name: string;
  tagline?: string;
  desc: string;
  items?: string[];
}

export interface ApproachStepTranslation {
  step: string;
  title: string;
  desc: string;
}

export interface CapabilityTranslation {
  title: string;
  desc: string;
}

export interface ServiceItemTranslation {
  id: string;
  slug: string;
  number: string;
  name: string;
  tagline: string;
  summary: string;
  scope: string[];
  deliverables: string[];
  cta: string;
}

export interface ProjectItemTranslation {
  id: string;
  slug: string;
  title: string;
  category: string;
  client?: string;
  year: string;
  oneLiner: string;
  summary: string;
  challenge: string;
  solution: string;
  metrics: string[];
  stack: string[];
  categoryKey: string;
}

export interface LocationTranslation {
  city: string;
  address: string;
  country: string;
}

export interface TranslationDictionary {
  locale: Language;
  dir: Direction;
  brand: {
    name: string;
    arabicName: string;
    legalName: string;
    tagline: string;
    motto: string;
    statement: string;
    banner: string;
    heroPill: string;
  };
  nav: {
    items: NavItemTranslation[];
    letsTalk: string;
    menu: string;
    close: string;
    languageToggle: string;
    quickJump: string;
    swipeHint: string;
  };
  home: {
    hero: {
      pill: string;
      headlineLine1: string;
      headlineLine2: string;
      headlineItalic: string;
      arabicCalligraphy: string;
      subheading: string;
      ctaPrimary: string;
      ctaSecondary: string;
      imageAlt: string;
    };
    intro: {
      heading: string;
      italicWord: string;
      paragraph: string;
      ctaText: string;
      ctaHref: string;
    };
    stats: {
      movementText: string[];
      items: StatItemTranslation[];
    };
    servicesPreview: {
      label: string;
      title: string;
      italicWord: string;
      description: string;
      viewAll: string;
    };
    approach: {
      label: string;
      headlineLines: string[];
      headlineItalic: string;
      paragraph: string;
      steps: ApproachStepTranslation[];
    };
    featuredWork: {
      label: string;
      title: string;
      italicWord: string;
      description: string;
      viewAll: string;
    };
    aboutBanner: {
      label: string;
      quote: string;
      attribution: string;
      paragraph: string;
      cta: string;
    };
    contactBand: {
      label: string;
      title: string;
      italicWord: string;
      description: string;
      cta: string;
    };
  };
  about: {
    heading: {
      label: string;
      title: string;
      italicWord: string;
      description: string;
    };
    narrative: {
      headline: string;
      paragraph1: string;
      highlightQuote: string;
      attribution: string;
      arabicRoot: string;
      arabicRootMeaning: string;
      arabicRootExplanation: string;
    };
    capabilities: {
      label: string;
      title: string;
      badge: string;
      items: CapabilityTranslation[];
    };
    presence: {
      label: string;
      title: string;
      description: string;
      cta: string;
    };
  };
  servicesPage: {
    heading: {
      label: string;
      title: string;
      italicWord: string;
      description: string;
    };
    coreFocus: {
      label: string;
      title: string;
      pillarsBadge: string;
      pillars: PillarTranslation[];
    };
    jumpToTitle: string;
    servicesList: ServiceItemTranslation[];
    customCallout: {
      label: string;
      heading: string;
      description: string;
      cta: string;
    };
    deliverablesLabel: string;
    scopeLabel: string;
    exploreDetails: string;
  };
  workPage: {
    heading: {
      label: string;
      title: string;
      italicWord: string;
      description: string;
    };
    categories: {
      all: string;
      [key: string]: string;
    };
    projects: ProjectItemTranslation[];
    modal: {
      challengeLabel: string;
      solutionLabel: string;
      metricsLabel: string;
      stackLabel: string;
      launchCta: string;
      closeAria: string;
    };
  };
  contactPage: {
    heading: {
      label: string;
      title: string;
      italicWord: string;
      description: string;
    };
    directChannels: {
      title: string;
      description: string;
      emailLabel: string;
      phoneLabel: string;
      hoursLabel: string;
      hoursValue: string;
      hubsLabel: string;
      locations: LocationTranslation[];
    };
    form: {
      fullNameLabel: string;
      fullNamePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      orgLabel: string;
      orgPlaceholder: string;
      serviceLabel: string;
      budgetLabel: string;
      budgetPlaceholder: string;
      messageLabel: string;
      messagePlaceholder: string;
      submitBtn: string;
      submittingBtn: string;
      successTitle: string;
      successMessage: string;
      sendAnother: string;
      budgetOptions: { value: string; label: string }[];
      serviceOptions: { value: string; label: string }[];
      validation: {
        nameRequired: string;
        emailInvalid: string;
        messageMin: string;
        generalError: string;
      };
    };
  };
  footer: {
    tagline: string;
    statement: string;
    navigationLabel: string;
    disciplinesLabel: string;
    contactLabel: string;
    allRightsReserved: string;
    architecturalStandard: string;
    hours: string;
  };
  notFound: {
    badge: string;
    title: string;
    desc: string;
    cta: string;
  };
  errorPage: {
    badge: string;
    title: string;
    desc: string;
    retry: string;
  };
}
