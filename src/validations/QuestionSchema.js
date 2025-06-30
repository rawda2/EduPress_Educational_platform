import { z } from "zod";

export const questionSchema = z.object({
  text: z.string().min(5, "Question is too short"),
  type: z.enum(["multiple-choice", "true-false", "short-answer"], {
    errorMap: () => ({ message: "Please select a valid question type" }),
  }),
  options: z
    .array(z.string().min(1, "Option cannot be empty"))
    .optional()
    .or(z.literal(undefined)),
  correctAnswer: z.string().min(1, "Please provide a correct answer"),
  exam: z.string().min(1, "Please select an exam"),
  points: z.coerce.number().min(1, "Points must be at least 1"),
});
