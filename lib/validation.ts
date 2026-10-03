import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(100, { message: "Name must be under 100 characters" }),
  email: z
    .string()
    .email({ message: "Please provide a valid corporate email address" }),
  company: z.string().max(100).optional().or(z.literal("")),
  service: z.string().min(1, { message: "Please select a service interest" }),
  budget: z.string().optional().or(z.literal("")),
  message: z
    .string()
    .min(10, { message: "Message must contain at least 10 characters" })
    .max(3000, { message: "Message must be under 3000 characters" }),
  // Honeypot field for bot spam prevention:
  hp_field: z.string().max(0, { message: "Spam detected" }).optional().or(z.literal("")),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export interface ActionResponse {
  success: boolean;
  message: string;
  errors?: Record<string, string>;
}
