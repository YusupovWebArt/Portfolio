// Translation type definition — strict interface guaranteeing both languages are always in sync
export interface Translation {
  header: {
    nav: {
      home: string
      about: string
      aiWorkflow: string
      projects: string
      skills: string
      whyMe: string
      contact: string
    }
    langToggle: string
    themeToggle: {
      toLight: string
      toDark: string
    }
  }
  hero: {
    elevatorPitch: string
    ctaPrimary: string
    ctaSecondary: string
  }
  about: {
    sectionTitle: string
    bio: {
      p1: string
      p2: string
      p3: string
    }
    stats: {
      projects: string
      experience: string
    }
    highlights: {
      wpTitle: string
      wpPoints: [string, string, string]
      appTitle: string
      appPoints: [string, string, string]
      seoTitle: string
      seoPoints: [string, string, string]
      aiTitle: string
      aiPoints: [string, string, string]
    }
    photoCaption: {
      role: string
      location: string
      experience: string
    }
    educationTitle: string
    education: {
      item0: {
        title: string
        institution: string
        description: {
          wp: { label: string; text: string }
          react: { label: string; text: string }
          ai: { label: string; text: string }
        }
      }
      item1: {
        title: string
        institution: string
        description: {
          intro: string
        }
      }
      item2: {
        title: string
        institution: string
        description: {
          spec: { label: string; text: string }
          infra: { label: string; text: string }
        }
      }
    }
    workTitle: string
    work: {
      item0: {
        title: string
        desc: {
          wpWix: { label: string; text: string }
          lifecycle: { label: string; text: string }
          uiux: { label: string; text: string }
          perf: { label: string; text: string }
          agile: { label: string; text: string }
        }
      }
      item1: {
        title: string
        desc: {
          bespoke: { label: string; text: string }
          fullCycle: { label: string; text: string }
          modernization: { label: string; text: string }
        }
      }
      item2: {
        title: string
        desc: {
          delivered: { label: string; text: string }
          ecommerce: { label: string; text: string }
        }
      }
    }
  }
  aiWorkflow: {
    sectionTitle: string
    description: {
      before: string
      methodology: string
      middle: string
      toolClaude: string
      between: string
      toolAntigravity: string
      after: string
    }
    tabs: {
      nextStep: string
      prevStep: string
      step: string
      of: string
    }
  }
  skills: {
    sectionTitle: string
    sectionDescription: string
    keySkillsLabel: string
    technologiesLabel: string
    showMore: string
    showLess: string
    categories: {
      wp: {
        description: string
        skillDetails: [
          { name: string; description: string },
          { name: string; description: string },
          { name: string; description: string },
          { name: string; description: string },
        ]
      }
      app: {
        description: string
        skillDetails: [
          { name: string; description: string },
          { name: string; description: string },
          { name: string; description: string },
          { name: string; description: string },
        ]
      }
      ai: {
        description: string
        skillDetails: [
          { name: string; description: string },
          { name: string; description: string },
          { name: string; description: string },
          { name: string; description: string },
        ]
      }
      seo: {
        description: string
        skillDetails: [
          { name: string; description: string },
          { name: string; description: string },
          { name: string; description: string },
          { name: string; description: string },
        ]
      }
      layout: {
        description: string
        skillDetails: [
          { name: string; description: string },
          { name: string; description: string },
          { name: string; description: string },
          { name: string; description: string },
        ]
      }
      design: {
        description: string
        skillDetails: [
          { name: string; description: string },
          { name: string; description: string },
          { name: string; description: string },
          { name: string; description: string },
        ]
      }
    }
    workTools: {
      sectionLabel: string
      sectionTitle: string
    }
    softSkills: {
      sectionLabel: string
      sectionTitle: string
      items: [
        { name: string; description: string },
        { name: string; description: string },
        { name: string; description: string },
        { name: string; description: string },
        { name: string; description: string },
        { name: string; description: string },
      ]
    }
  }
  projects: {
    sectionTitle: string
    sectionDescription: string
    filterAll: string
    viewDetails: string
    liveSite: string
    page: string
    of: string
    prev: string
    next: string
    backToProjects: string
    zoom: string
    fullPageLayout: string
    tabs: {
      stack: string
      features: string
      architecture: string
      caseStudy: string
    }
  }
  whyMe: {
    badge: string
    title: {
      before: string
      highlight: string
      after: string
    }
    description: string
    card1: {
      title: string
      subtitle: string
      body: string
      keyAreasLabel: string
      items: [string, string, string]
    }
    card2: {
      title: string
      subtitle: string
      body: string
      keyAreasLabel: string
      items: [string, string, string]
    }
  }
  contact: {
    badge: string
    title: {
      before: string
      highlight: string
    }
    description: string
    directChannels: string
    followCredentials: string
    contactTags: {
      email: string
      phone: string
      telegram: string
    }
    chatbot: {
      title: string
      placeholder: string
      clearButton: string
      sendButton: string
      welcomeMessage: string
      assistantName: string
      liveConsole: string
      faqHeader: string
      online: string
    }
  }
  footer: {
    tagline: string
    copyright: string
    madeWith: string
  }
}
