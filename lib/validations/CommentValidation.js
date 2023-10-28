import * as z from 'zod';

export const CommentValidation = z.object({
    name: z.string().min(3).max(30, { message: "Name cannot be empty" }),
    email: z.string().email({ message: "Invalid email address" }),
    message: z.string().min(3, {message: 'Minimum of 3 characters'}),
})