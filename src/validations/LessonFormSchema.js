import { z } from "zod";

export const lessonFormSchema = z.object({
  Title: z.string().min(1, { message: "Title Is Required" }).max(100),
  Video: z.string().url(),
  "Class Level": z.enum(
    ["Grade 1 Secondary", "Grade 2 Secondary", "Grade 3 Secondary"],
    { errorMap: () => ({ message: "Please select a class level" }) }
  ),
  Price: z.string().min(1, { message: "Price must be a positive number" }),
  description: z
    .string()
    .min(10, { message: "Description must be at least 10 characters long" })
    .max(1000),
});
