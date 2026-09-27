import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const projectsCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    role: z.string(),
    period: z.string(),
    youtubeId: z.string().optional(),
    gdriveLink: z.string().optional(),
    gdriveVideoId: z.string().optional(),
    gallery: z.array(z.string()).optional(),
  }),
});

export const collections = {
  projects: projectsCollection,
};
