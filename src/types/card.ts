import { z } from "zod";

const LinkSchema = z.object({
  href: z.string(),
  icon: z.string(),
  alt: z.string(),
});

const InfoSchema = z.object({
  versionOptions: z.array(z.string()),
  defaultVersion: z.string(),
  genre: z.string(),
  type: z.string(),
  downloads: z.number(),
  date: z.string(),
});

export const CardDataSchema = z.object({
  id: z.string(),
  titleImage: z.string(),
  overlay: z.object({
    title: z.string(),
    subtitle: z.string(),
  }),
  content: z.object({
    title: z.string(),
    description: z.string(),
    detailedDescription: z.string().optional(),
  }),
  links: z.array(LinkSchema),
  downloadUrl: z.string().optional(),
  info: InfoSchema,
});

export type CardData = z.infer<typeof CardDataSchema>;