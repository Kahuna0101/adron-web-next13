import * as z from 'zod';

export const CommentValidation = z.object({
    name: z.string().min(3, { message: "Name cannot be empty" }).max(40, { message: "Name is too long" }),
    email: z.string().email({ message: "Invalid email address" }),
    message: z.string().min(3, {message: 'Minimum of 3 characters'}),
})