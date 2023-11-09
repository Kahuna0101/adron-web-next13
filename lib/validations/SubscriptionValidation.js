import { z } from 'zod';

export const SubscriptionValidation = z.object({
  name: z.string().min(3, { message: "Name cannot be empty" }).max(40, { message: "Name is too long" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().regex(/^\d{11}$/, { message: "Invalid phone number" }),
  estate: z.string().min(1, { message: "Please select an Estate"}).optional(),
  plot:  z.string()
  .refine((value) => {
    const parsedValue = parseInt(value, 10);
    return !isNaN(parsedValue) && parsedValue >= 0;
  }, {
    message: 'Plot number must be a non-negative number.',
  }),
  client: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
  message: z.string().min(10).max(500).optional(),
  contact: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
  consent: z.boolean().refine((value) => value === true, {
      message: 'You must consent to the storage of your details for future communications.',
    })
    .default(false)
    .optional(),
});
