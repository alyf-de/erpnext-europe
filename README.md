# ERPNext Europe

A community-maintained directory of ERPNext service providers across Europe.

**Live site:** [alyf-de.github.io/erpnext-europe](https://alyf-de.github.io/erpnext-europe/)

## About

This directory helps organizations find ERPNext implementation partners, consultants, and hosting providers in Europe. Only service providers based in a European country are listed.

The initial provider profiles were researched from publicly available sources (company websites, Frappe partner directory, GitHub profiles, business registries). Accuracy may vary — corrections are welcome.

## Contributing

Anyone can contribute. Provider data lives in `src/content/providers/` as Markdown files with YAML frontmatter.

### Add a new provider

Create a file in `src/content/providers/` named after the company (e.g. `your-company.md`):

```markdown
---
name: "Your Company"
website: "https://example.com"
city: "Berlin"
country: "Germany"
country_slug: "germany"
year_founded: 2020
team_size: "5-10 employees"
partner_tier: null
industries: ["Manufacturing", "Professional Services"]
languages: ["German", "English"]
also_serves: ["Austria"]
---
## Company Overview

### In which countries do you actively serve clients?

Germany, Austria

## Your Differentiator

### What makes your approach to ERPNext implementation different from others?

Your answer here.
```

### Update an existing provider

Edit the corresponding file in `src/content/providers/`. Fix inaccuracies, add missing sections, update outdated information.

### Frontmatter fields

| Field | Required | Description |
|-------|----------|-------------|
| `name` | Yes | Company name |
| `website` | Yes | Company website URL |
| `city` | No | City where the company is based |
| `country` | Yes | Country name |
| `country_slug` | Yes | URL-safe country name (lowercase, hyphens) |
| `year_founded` | No | Year the company was founded |
| `team_size` | No | Approximate team size |
| `partner_tier` | No | Frappe partner tier (Bronze, Silver, Gold, Emerging, or null) |
| `industries` | Yes | Array of industry focus areas |
| `languages` | Yes | Array of languages the team works in |
| `also_serves` | No | Array of additional countries served |

### Listing criteria

- The organization must be **based in Europe**
- The organization must offer **ERPNext-related services** (implementation, hosting, consulting, development)
- Content must be **factual and verifiable**

## Development

```bash
nvm use 24
npm install
npm run dev      # Start dev server
npm run build    # Build static site
```

Built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com). Hosted on GitHub Pages.

## License

Content is licensed under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). You are free to share and adapt the material, provided you give appropriate credit and distribute contributions under the same license.
