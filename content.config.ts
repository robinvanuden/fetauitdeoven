import { defineCollection, defineContentConfig, z } from "@nuxt/content";

const ImageSchema = z.object({
  src: z.string(),
  alt: z.string(),
});

const Chefs = z.enum(["andrea", "lisa", "raymond", "robin"]);

export default defineContentConfig({
  collections: {
    section: defineCollection({
      source: "section/**/*.md",
      type: "page",
      schema: z.object({
        title: z.string(),
        description: z.string(),
        headline: z.string().optional(),
        image: ImageSchema.optional(),
      }),
    }),
    blog: defineCollection({
      source: "blog/**.md",
      type: "page",
      schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.string(),
        chef: z.array(Chefs),
        image: ImageSchema,
      }),
    }),
    recipes: defineCollection({
      source: "recipes/**/*.md",
      type: "page",
    }),
  },
});
