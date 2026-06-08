import { z } from "zod";

export const loginSchema = z.object({
  studentId: z.string().min(3, "Student ID or email is required"),
  password: z.string().min(6, "Password is required")
});
