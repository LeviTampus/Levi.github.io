import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    type: z.enum(['professional', 'personal', 'learning']),
    tagline: z.string(),
    technologies: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    links: z
      .object({
        repo: z.string().url().optional(),
        demo: z.string().url().optional(),
        video: z.string().url().optional(),
      })
      .default({}),
    // Names of case-study fields intentionally left TBD (e.g. Genie demo).
    tbd: z.array(z.string()).default([]),
  }),
});

const recipes = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    workatoUrl: z.string().url(),
    access: z.literal('gated'),
    purpose: z.string().default('TBD'),
    systems: z.array(z.string()).default([]),
  }),
});

const certs = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    issuer: z.string(),
    verifyUrl: z.string().url(),
    asset: z.string(),
    status: z.enum(['verified', 'updating']).default('verified'),
  }),
});

const experience = defineCollection({
  type: 'data',
  schema: z.object({
    company: z.string(),
    title: z.string(),
    dates: z.string(),
    bullets: z.array(z.string()),
  }),
});

export const collections = { projects, recipes, certs, experience };
