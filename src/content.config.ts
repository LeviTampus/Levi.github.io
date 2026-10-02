import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    type: z.enum(['professional', 'personal', 'learning']),
    tagline: z.string(),
    // Short overview shown in the hover-expand row on the projects index.
    // Falls back to the tagline when omitted.
    preview: z.string().optional(),
    // Hero slot on the projects page: the technical deep-build or the
    // professional proof from the day job.
    hero: z.enum(['technical', 'professional']).optional(),
    technologies: z.array(z.string()).default([]),
    links: z
      .object({
        repo: z.string().url().optional(),
        demo: z.string().url().optional(),
        // Overrides the "Live demo" button label (e.g. "Old build").
        demoLabel: z.string().optional(),
        video: z.string().url().optional(),
      })
      .default({}),
    // Optional demo assets: a screenshot plus shared recipe links. `image` is a
    // path relative to the public root (e.g. 'projects/agent-conan-snapshot.jpg').
    assets: z
      .object({
        image: z.string().optional(),
        imageAlt: z.string().optional(),
        imageWidth: z.number().optional(),
        imageHeight: z.number().optional(),
        recipe: z.string().url().optional(),
        skill: z.string().url().optional(),
      })
      .default({}),
    featured: z.boolean().default(false),
    order: z.number().default(0),
    // Build status, drives the status chip on the projects index.
    status: z.enum(['shipped', 'building', 'planned']).default('shipped'),
    // Marks an entry as not-yet-started so cards can show a status note.
    wip: z.boolean().default(false),
    wipNote: z.string().optional(),
    // Optional decorative panel for the featured card (e.g. an agent loop).
    trace: z
      .object({
        title: z.string(),
        status: z.string(),
        steps: z.array(z.string()),
      })
      .optional(),
  }),
});

const recipes = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    workatoUrl: z.string().url(),
    access: z.enum(['gated', 'public']).default('gated'),
    purpose: z.string().optional(),
    systems: z.array(z.string()).default([]),
    // Optional screenshot, path relative to the public root.
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    imageWidth: z.number().optional(),
    imageHeight: z.number().optional(),
    order: z.number().default(0),
  }),
});

const certs = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    issuer: z.string(),
    verifyUrl: z.string().url(),
    // Overrides the default "Verify at {issuer}" line when the link points at
    // something other than a verification page (e.g. the certificate itself).
    verifyLabel: z.string().optional(),
    asset: z.string(),
    // Intrinsic image size, used for the <img> width/height attributes.
    width: z.number().default(900),
    height: z.number().default(563),
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

// Customer and teammate recognition — awards, kudos, and feedback.
const recognition = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    kind: z.enum(['award', 'kudos', 'feedback']),
    source: z.string(),
    period: z.string().optional(),
    quote: z.string(),
    context: z.string().optional(),
    assets: z.array(z.string()).default([]), // filenames under public/recognition/
    featured: z.boolean().default(false),
    order: z.number().default(0),
  }),
});

export const collections = { projects, recipes, certs, experience, archive, recognition };
