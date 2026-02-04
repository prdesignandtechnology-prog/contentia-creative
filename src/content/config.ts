import { defineCollection, z } from "astro:content";

const services = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    hero: z.string(),
    outcome: z.string(),
    deliverables: z.array(z.string()),
    process: z.array(z.object({
      title: z.string(),
      description: z.string()
    })),
    faqs: z.array(z.object({
      question: z.string(),
      answer: z.string()
    }))
  })
});

const caseStudies = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    client: z.string(),
    industry: z.string(),
    summary: z.string(),
    results: z.array(z.string()),
    tools: z.array(z.string()).optional()
  })
});

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.string()
  })
});

export const collections = { services, caseStudies, blog };
