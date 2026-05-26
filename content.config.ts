import { defineCollection, defineContentConfig, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    section: defineCollection({
      source: "section/**/*.md",
      type: "page",
      schema: z.object({
        title: z.string(),
        description: z.string(),
        headline: z.string().optional(),
        image: z
          .object({
            src: z.string(),
            alt: z.string(),
          })
          .optional(),
      }),
    }),
    club: defineCollection({
      source: "club/**.md",
      type: "page",
      schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.string(),
        chef: z.array(z.string()).optional(),
        image: z
          .object({
            src: z.string(),
            alt: z.string(),
          })
          .optional(),
      }),
    }),
    recipes: defineCollection({
      source: "recipes/**/*.md",
      type: "page",
    }),
  },
});
