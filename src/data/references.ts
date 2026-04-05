export interface Reference {
  name: string;
  website: string | null;
  industry: string;
  country: string;
  description: string;
  provider_slug: string;
  provider_name: string;
  provider_country_slug: string;
}

export const references: Reference[] = [
  // ALYF GmbH clients
  {
    name: "voidsy gmbh",
    website: "https://www.voidsy.com",
    industry: "Manufacturing",
    country: "Austria",
    description:
      "Develops novel non-destructive material testing systems using active thermography for aerospace and other industries.",
    provider_slug: "alyf-gmbh",
    provider_name: "ALYF GmbH",
    provider_country_slug: "germany",
  },
  {
    name: "DriveCon GmbH",
    website: "https://drivecon.de",
    industry: "Manufacturing",
    country: "Germany",
    description:
      "Engineering firm with 40+ employees specializing in electrical systems and automation solutions for infrastructure and industrial projects.",
    provider_slug: "alyf-gmbh",
    provider_name: "ALYF GmbH",
    provider_country_slug: "germany",
  },
  {
    name: "WEROCK Technologies GmbH",
    website: "https://www.werocktools.com",
    industry: "Manufacturing",
    country: "Germany",
    description:
      "Manufacturer of rugged tablets and laptops for industrial, logistics, and field service use. Chose ERPNext for scalability.",
    provider_slug: "alyf-gmbh",
    provider_name: "ALYF GmbH",
    provider_country_slug: "germany",
  },
  {
    name: "INDIMO Automotive GmbH",
    website: null,
    industry: "Manufacturing",
    country: "Germany",
    description:
      "Automotive company with complex business processes successfully mapped in ERPNext including numerous custom requirements.",
    provider_slug: "alyf-gmbh",
    provider_name: "ALYF GmbH",
    provider_country_slug: "germany",
  },
  {
    name: "itsdave GmbH",
    website: "https://www.itsdave.de",
    industry: "Technology & IT",
    country: "Germany",
    description:
      "Managed IT services provider for SMEs in northern Germany, offering monitoring, security, support, and cloud infrastructure.",
    provider_slug: "alyf-gmbh",
    provider_name: "ALYF GmbH",
    provider_country_slug: "germany",
  },
  {
    name: "DACHDIGITAL GmbH",
    website: null,
    industry: "Technology & IT",
    country: "Germany",
    description:
      "Technology company that built a unique industry ERP solution for their customers through a long-standing partnership with ALYF.",
    provider_slug: "alyf-gmbh",
    provider_name: "ALYF GmbH",
    provider_country_slug: "germany",
  },

  // K&K Software AG clients
  {
    name: "Gemeindewerke Adelsdorf",
    website: null,
    industry: "Public Sector & Nonprofits",
    country: "Germany",
    description:
      "Municipal utilities provider. Implementation case study presented at ERPNext user meeting.",
    provider_slug: "k-k-software-ag",
    provider_name: "K&K Software AG",
    provider_country_slug: "germany",
  },
  {
    name: "ELAN e.V.",
    website: "https://www.elan-ev.de",
    industry: "Education",
    country: "Germany",
    description:
      "Non-profit developing open-source tools for digital teaching and learning in higher education, based in Oldenburg.",
    provider_slug: "k-k-software-ag",
    provider_name: "K&K Software AG",
    provider_country_slug: "germany",
  },
  {
    name: "Modulbox M.O Systeme",
    website: null,
    industry: "Manufacturing",
    country: "Germany",
    description:
      "Manufacturer of mobile brand architecture and modular exhibition systems, running ERPNext for production management.",
    provider_slug: "k-k-software-ag",
    provider_name: "K&K Software AG",
    provider_country_slug: "germany",
  },
  {
    name: "Frank & Dvorak GmbH & Co. KG",
    website: null,
    industry: "Manufacturing",
    country: "Austria",
    description:
      "Austrian manufacturer of electric motors, using ERPNext for their production and business operations.",
    provider_slug: "k-k-software-ag",
    provider_name: "K&K Software AG",
    provider_country_slug: "germany",
  },

  // phamos GmbH clients
  {
    name: "GALLEHR+PARTNER",
    website: "https://www.gallehr.de",
    industry: "Professional Services",
    country: "Germany",
    description:
      "Climate protection and energy efficiency consultancy with 25 experts serving 150+ industrial clients. Founded 2007, based in Karben.",
    provider_slug: "phamos-gmbh",
    provider_name: "phamos GmbH",
    provider_country_slug: "germany",
  },

  // CoreBiz Engineering clients
  {
    name: "Kelvin ABT",
    website: null,
    industry: "Technology & IT",
    country: "Germany",
    description:
      "Building automation company that migrated from Sage ERP to ERPNext with a three-machine cluster setup.",
    provider_slug: "corebiz-engineering-gmbh",
    provider_name: "CoreBiz Engineering GmbH",
    provider_country_slug: "germany",
  },

  // Grynn GmbH clients
  {
    name: "Weldplast s.r.o.",
    website: null,
    industry: "Manufacturing",
    country: "Slovakia",
    description:
      "Manufacturing company that completed a successful ERP migration with 10 years of data in just 8 weeks.",
    provider_slug: "grynn-gmbh",
    provider_name: "Grynn GmbH",
    provider_country_slug: "switzerland",
  },

  // libracore AG clients
  {
    name: "Rubirosa",
    website: "https://www.rubirosa.com",
    industry: "Retail & E-commerce",
    country: "Switzerland",
    description:
      "Premium sneaker brand handcrafting timeless footwear in Italy. Carbon-neutral company headquartered in Gossau, St. Gallen.",
    provider_slug: "libracore-ag",
    provider_name: "libracore AG",
    provider_country_slug: "switzerland",
  },
  {
    name: "Lifefair",
    website: "https://www.lifefair.org",
    industry: "Professional Services",
    country: "Switzerland",
    description:
      "Switzerland's leading dialog and innovation platform for business and sustainability, hosting 200+ forums since 2011.",
    provider_slug: "libracore-ag",
    provider_name: "libracore AG",
    provider_country_slug: "switzerland",
  },
  {
    name: "iNCO Natural GmbH",
    website: null,
    industry: "Manufacturing",
    country: "Switzerland",
    description:
      "Natural products company using libracore ERP for production and EU-wide sales operations.",
    provider_slug: "libracore-ag",
    provider_name: "libracore AG",
    provider_country_slug: "switzerland",
  },
  {
    name: "SELLCARE",
    website: "https://www.sellcare.ch",
    industry: "Distribution & Logistics",
    country: "Switzerland",
    description:
      "Swiss sales and distribution company using ERPNext as their long-term business platform.",
    provider_slug: "libracore-ag",
    provider_name: "libracore AG",
    provider_country_slug: "switzerland",
  },
  {
    name: "Hoferhecht Stickereien",
    website: null,
    industry: "Manufacturing",
    country: "Austria",
    description:
      "Embroidery specialist that chose ERPNext to map all their business processes in a single system.",
    provider_slug: "libracore-ag",
    provider_name: "libracore AG",
    provider_country_slug: "switzerland",
  },
  {
    name: "Schweizerische Einkaufsgesellschaft (SEG)",
    website: null,
    industry: "Distribution & Logistics",
    country: "Switzerland",
    description: "Swiss purchasing cooperative managing procurement operations with ERPNext.",
    provider_slug: "libracore-ag",
    provider_name: "libracore AG",
    provider_country_slug: "switzerland",
  },

  // Centura AG clients
  {
    name: "Direktkurier",
    website: "https://direktkurier.ch",
    industry: "Distribution & Logistics",
    country: "Switzerland",
    description: "Swiss courier and direct delivery service provider.",
    provider_slug: "centura-ag",
    provider_name: "Centura AG",
    provider_country_slug: "switzerland",
  },
  {
    name: "Simpera",
    website: "https://www.simpera.ch",
    industry: "Technology & IT",
    country: "Switzerland",
    description: "Swiss technology company and Centura AG client.",
    provider_slug: "centura-ag",
    provider_name: "Centura AG",
    provider_country_slug: "switzerland",
  },
  {
    name: "Swiss Fibertec",
    website: "https://swiss-fibertec.com",
    industry: "Manufacturing",
    country: "Switzerland",
    description: "Swiss fiber technology and advanced materials manufacturer.",
    provider_slug: "centura-ag",
    provider_name: "Centura AG",
    provider_country_slug: "switzerland",
  },

  // Limendo GmbH clients
  {
    name: "Kaufgut GmbH",
    website: "https://www.kaufgut.it",
    industry: "Distribution & Logistics",
    country: "Italy",
    description:
      "Five-generation family business distributing kitchen utensils and household articles internationally, based in Bolzano.",
    provider_slug: "limendo-gmbh",
    provider_name: "Limendo GmbH",
    provider_country_slug: "italy",
  },
  {
    name: "Mein Beck GmbH",
    website: null,
    industry: "Agriculture & Food",
    country: "Italy",
    description:
      "Bakery business using full mERP suite from financial accounting to picking and inventory management.",
    provider_slug: "limendo-gmbh",
    provider_name: "Limendo GmbH",
    provider_country_slug: "italy",
  },
  {
    name: "Mulser Tore GmbH",
    website: null,
    industry: "Manufacturing",
    country: "Italy",
    description:
      "Door and gate manufacturer using mERP for maintenance processes and CRM functionality.",
    provider_slug: "limendo-gmbh",
    provider_name: "Limendo GmbH",
    provider_country_slug: "italy",
  },
  {
    name: "Aster GmbH",
    website: null,
    industry: "Manufacturing",
    country: "Italy",
    description:
      "Manufacturing company using mERP from personnel management through production planning.",
    provider_slug: "limendo-gmbh",
    provider_name: "Limendo GmbH",
    provider_country_slug: "italy",
  },

];
