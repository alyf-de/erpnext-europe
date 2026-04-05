import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const providers = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/providers' }),
  schema: z.object({
    name: z.string(),
    website: z.string(),
    city: z.string().nullable(),
    country: z.string(),
    country_slug: z.string(),
    year_founded: z.number().nullable(),
    team_size: z.string().nullable(),
    partner_tier: z.string().nullable(),
    industries: z.array(z.string()).default([]),
    languages: z.array(z.string()).default([]),
    also_serves: z.array(z.string()).default([]),
  }),
});

export const collections = { providers };
