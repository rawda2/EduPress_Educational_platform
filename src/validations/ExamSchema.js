import { z } from "zod";

export const examSchema = z.object({
  title: z
    .string()
    .min(5, { message: "Title must be at least 5 characters long" }),
  description: z
    .string()
    .min(10, { message: "Description must be at least 10 characters long" }),
  duration: z
    .coerce
    .number()
    .min(10, { message: "Duration must be at least 10 minutes" }),
  classLevel: z
    .string()
    .min(1, { message: "Class level is required" }),
  startDate: z
    .string()
    .min(1, { message: "Start date is required" }),
  endDate: z
    .string()
    .min(1, { message: "End date is required" }),
  isPublished: z.boolean().optional(),
});
