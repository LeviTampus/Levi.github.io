import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    type: z.enum(['professional', 'personal', 'learning']),
    tagline: z.string(),
    technologies: z.array(z.string()).default([]),
    links: z
      .object({
        repo: z.string().url().optional(),
        demo: z.string().url().optional(),
        video: z.string().url().optional(),
      })
      .default({}),
    featured: z.boolean().default(false),
    order: z.number().default(0),
  }),
});

const recipes = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    workatoUrl: z.string().url(),
    access: z.literal('gated').default('gated'),
    purpose: z.string().optional(),
    systems: z.array(z.string()).default([]),
    order: z.number().default(0),
  }),
});

const certs = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    issuer: z.string(),
    verifyUrl: z.string().url(),
    asset: z.string(),
    order: z.number().default(0),
  }),
});

const experience = defineCollection({
  type: 'data',
  schema: z.object({
    company: z.string(),
    title: z.string(),
    dates: z.string(),
    bullets: z.array(z.string()),
    tier: z.enum(['current', 'earlier']),
    order: z.number().default(0),
  }),
});

const archive = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    period: z.string(),
    context: z.string(),
    links: z
      .object({
        playlist: z.string().url().optional(),
      })
      .default({}),
    order: z.number().default(0),
  }),
});

// Reserved for future recognition/kudos content. Rendered only when published.
const recognition = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    context: z.string(),
    asset: z.string().optional(),
    status: z.enum(['placeholder', 'published']).default('placeholder'),
  }),
});

export const collections = { projects, recipes, certs, experience, archive, recognition };
