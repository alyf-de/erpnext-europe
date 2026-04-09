export interface Reference {
  name: string;
  website: string | null;
  industry: string;
  country: string;
  description: string;
  provider_slug: string;
  provider_name: string;
  provider_country_slug: string;
  employees?: string | null;
  revenue?: string | null;
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
    revenue: "€2.5M",
  },
  {
    name: "DriveCon GmbH",
    website: "https://drivecon.de",
    industry: "Manufacturing",
    country: "Germany",
    description:
      "Engineering firm specializing in electrical systems and automation solutions for infrastructure and industrial projects.",
    provider_slug: "alyf-gmbh",
    provider_name: "ALYF GmbH",
    provider_country_slug: "germany",
    employees: "35",
    revenue: "€5M",
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
    industry: "Distribution & Logistics",
    country: "Germany",
    description:
      "Automotive company with complex business processes successfully mapped in ERPNext including numerous custom requirements.",
    provider_slug: "alyf-gmbh",
    provider_name: "ALYF GmbH",
    provider_country_slug: "germany",
    employees: "40",
    revenue: "€80M",
  },
  {
    name: "itsdave GmbH",
    website: "https://www.itsdave.de",
    industry: "Retail & E-commerce",
    country: "Germany",
    description:
      "Outlet center operator using ERPNext for their business operations, implemented by ALYF.",
    provider_slug: "alyf-gmbh",
    provider_name: "ALYF GmbH",
    provider_country_slug: "germany",
    employees: "10",
    revenue: "€2M",
  },
  {
    name: "DACHDIGITAL GmbH",
    website: null,
    industry: "Construction & Trades",
    country: "Germany",
    description:
      "Technology company that built a specialized ERP solution for roofing companies through a long-standing partnership with ALYF.",
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
    employees: "25",
    revenue: "€1.4M",
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
    name: "modulbox mo systeme GmbH",
    website: null,
    industry: "Manufacturing",
    country: "Germany",
    description:
      "Manufacturer of mobile brand architecture and modular exhibition systems, running ERPNext for production management.",
    provider_slug: "k-k-software-ag",
    provider_name: "K&K Software AG",
    provider_country_slug: "germany",
    revenue: "€3M",
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
    employees: "9",
    revenue: "€2.5M",
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
    employees: "30",
    revenue: "€2M",
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
    name: "rubirosa management gmbh",
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
    employees: "2",
    revenue: "€1M",
  },
  {
    name: "Sellcare AG",
    website: "https://www.sellcare.ch",
    industry: "Distribution & Logistics",
    country: "Switzerland",
    description:
      "Swiss sales and distribution company using ERPNext as their long-term business platform.",
    provider_slug: "libracore-ag",
    provider_name: "libracore AG",
    provider_country_slug: "switzerland",
    employees: "7",
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
    employees: "15",
  },

  // Centura AG clients
  {
    name: "direktkurier & büsslivermietung ag",
    website: "https://direktkurier.ch",
    industry: "Distribution & Logistics",
    country: "Switzerland",
    description:
      "Courier and logistics company providing time-critical direct transport solutions throughout Switzerland and Europe for over 35 years, ISO 9001:2015 certified.",
    provider_slug: "centura-ag",
    provider_name: "Centura AG",
    provider_country_slug: "switzerland",
  },
  {
    name: "Stiftung Simpera",
    website: "https://www.simpera.ch",
    industry: "Public Sector & Nonprofits",
    country: "Switzerland",
    description:
      "Foundation training specialized assistance dogs — guide dogs, autism companion dogs, and therapy dogs — to help people with disabilities regain independence.",
    provider_slug: "centura-ag",
    provider_name: "Centura AG",
    provider_country_slug: "switzerland",
  },
  {
    name: "Swiss Fibertec AG",
    website: "https://swiss-fibertec.com",
    industry: "Manufacturing",
    country: "Switzerland",
    description:
      "Carbon fiber specialist manufacturing high-performance composite components for racing, automotive, aerospace, and defense applications.",
    provider_slug: "centura-ag",
    provider_name: "Centura AG",
    provider_country_slug: "switzerland",
  },
  {
    name: "Odan GmbH",
    website: "https://odan.ch",
    industry: "Manufacturing",
    country: "Switzerland",
    description:
      "Engineering firm specializing in product development, process optimization, and profile technology solutions for SMEs and startups.",
    provider_slug: "centura-ag",
    provider_name: "Centura AG",
    provider_country_slug: "switzerland",
  },
  {
    name: "Verkehrskadetten-Abteilung Rapperswil-Jona",
    website: "https://vkarj.ch",
    industry: "Public Sector & Nonprofits",
    country: "Switzerland",
    description:
      "Youth organization providing traffic regulation, route securing, parking management, and access control for events and infrastructure projects.",
    provider_slug: "centura-ag",
    provider_name: "Centura AG",
    provider_country_slug: "switzerland",
    employees: "7",
  },
  {
    name: "Wechselraum GmbH",
    website: "https://www.wechselraum.ch",
    industry: "Construction & Trades",
    country: "Switzerland",
    description:
      "Project management, planning, and construction supervision for building technology systems including refrigeration, heating, ventilation, and sanitary installations.",
    provider_slug: "centura-ag",
    provider_name: "Centura AG",
    provider_country_slug: "switzerland",
    employees: "21",
  },
  {
    name: "Helbling & Co. AG",
    website: "https://helbling.net",
    industry: "Manufacturing",
    country: "Switzerland",
    description:
      "Engineering and metalworking firm providing machine building, metal construction, small-series manufacturing, and prototype solutions.",
    provider_slug: "centura-ag",
    provider_name: "Centura AG",
    provider_country_slug: "switzerland",
  },
  {
    name: "Magenbrot Rohner AG",
    website: "https://magenbrotrohner.ch",
    industry: "Agriculture & Food",
    country: "Switzerland",
    description:
      "Traditional Swiss manufacturer and baker specializing in Magenbrot, a classic Swiss gingerbread confectionery.",
    provider_slug: "centura-ag",
    provider_name: "Centura AG",
    provider_country_slug: "switzerland",
  },

  // Limendo GmbH clients
  {
    name: "Mein Beck GmbH",
    website: null,
    industry: "Agriculture & Food",
    country: "Italy",
    description:
      "Bakery chain running full ERPNext suite for purchasing, pricing, and logistics. Processes over 1 million invoices per year with 95% automation.",
    provider_slug: "limendo-gmbh",
    provider_name: "Limendo GmbH",
    provider_country_slug: "italy",
    employees: "250+",
    revenue: "€20M",
  },
  {
    name: "Kaufgut GmbH",
    website: "https://www.kaufgut.it",
    industry: "Distribution & Logistics",
    country: "Italy",
    description:
      "Wholesale distributor of kitchen utensils and household articles. Automated procurement and seamless integration of international purchasing processes.",
    provider_slug: "limendo-gmbh",
    provider_name: "Limendo GmbH",
    provider_country_slug: "italy",
    employees: "50+",
    revenue: "€20M",
  },
  {
    name: "Hotel Seeleiten GmbH",
    website: null,
    industry: "Professional Services",
    country: "Italy",
    description:
      "Hotel achieving end-to-end digitalization of all internal processes with ERPNext, including property management system integration.",
    provider_slug: "limendo-gmbh",
    provider_name: "Limendo GmbH",
    provider_country_slug: "italy",
    employees: "100+",
    revenue: "€8M",
  },
  {
    name: "Mulser GmbH",
    website: null,
    industry: "Manufacturing",
    country: "Italy",
    description:
      "Industrial service and trades company implementing 'Maintenance 4.0' with ERPNext — mobile maintenance, QR tracking, and a digital customer portal.",
    provider_slug: "limendo-gmbh",
    provider_name: "Limendo GmbH",
    provider_country_slug: "italy",
    employees: "20+",
    revenue: "€2.5M",
  },
  {
    name: "Aster GmbH",
    website: null,
    industry: "Manufacturing",
    country: "Italy",
    description:
      "Timber construction and manufacturing company using ERPNext for end-to-end value chain management including machine integration.",
    provider_slug: "limendo-gmbh",
    provider_name: "Limendo GmbH",
    provider_country_slug: "italy",
    employees: "80+",
    revenue: "€15M",
  },
  {
    name: "Sartori GmbH",
    website: null,
    industry: "Distribution & Logistics",
    country: "Italy",
    description:
      "Transport and trading company integrating dispatch, trade, and financial processes on a single centralized ERPNext platform.",
    provider_slug: "limendo-gmbh",
    provider_name: "Limendo GmbH",
    provider_country_slug: "italy",
    employees: "50+",
    revenue: "€10M",
  },
  {
    name: "Ossanna GmbH",
    website: null,
    industry: "Distribution & Logistics",
    country: "Italy",
    description:
      "Wholesale distributor running a scalable ERPNext trading platform with integrated pricing and conditions logic.",
    provider_slug: "limendo-gmbh",
    provider_name: "Limendo GmbH",
    provider_country_slug: "italy",
    employees: "100+",
    revenue: "€35M",
  },
  {
    name: "Felderer GmbH",
    website: null,
    industry: "Manufacturing",
    country: "Italy",
    description:
      "Mechanical engineering company achieving end-to-end digitalization of purchasing, production, and warehouse processes with ERPNext.",
    provider_slug: "limendo-gmbh",
    provider_name: "Limendo GmbH",
    provider_country_slug: "italy",
    employees: "10+",
    revenue: "€2M",
  },
  {
    name: "Reider GmbH",
    website: null,
    industry: "Retail & E-commerce",
    country: "Italy",
    description:
      "Craft and retail business using a fully integrated ERPNext including seamless point-of-sale integration.",
    provider_slug: "limendo-gmbh",
    provider_name: "Limendo GmbH",
    provider_country_slug: "italy",
    employees: "50+",
    revenue: "€5M",
  },
  {
    name: "beyond hp gmbh",
    website: null,
    industry: "Professional Services",
    country: "Italy",
    description:
      "Fitness and rehabilitation services provider consolidating 8+ systems into a single centralized ERPNext platform.",
    provider_slug: "limendo-gmbh",
    provider_name: "Limendo GmbH",
    provider_country_slug: "italy",
    employees: "10+",
    revenue: "€500K",
  },

];
