import * as z from 'zod';

export const ContactValidation = z.object({
    name: z.string().min(3, { message: "Name cannot be empty" }).max(40, { message: "Name is too long" }),
    email: z.string().email({ message: "Invalid email address" }),
    phone: z.string().regex(/^\d{11}$/, { message: "Invalid phone number" }),
    message: z.string().nonempty().min(3, {message: 'Minimum of 3 characters'}),
    consent: z.boolean().refine((value) => value === true, {
        message: 'You must consent to the storage of your details for future communications.',
      })
      .default(false)
      .optional(),
})

export const EmailValidation = z.object({
    cv: z.string().optional({ message: "Invalid email address" }),
})