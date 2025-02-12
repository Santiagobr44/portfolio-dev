import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    link: z.string().url(),
    github: z.string().url(),
    image: z.string(),
    tags: z.array(z.string()), // IDs de los tags
  }),
});

export const collections = {
  projects: projectsCollection,
};
