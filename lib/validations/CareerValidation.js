import { z } from "zod";

export const CareerValidation = z.object({
  surname: z.string().min(3, { message: "Surname cannot be empty" }).max(20, { message: "Surname is too Long" }),
  name: z.string().min(3, { message: "Name cannot be empty" }).max(30, { message: "Name is too Long" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().regex(/^\d{11}$/, { message: "Invalid phone Number" }),
  address: z.string().min(1, { message: "Address cannot be empty" }).max(50),
  dob: z.string().min(1, { message: "DOB cannot be empty" }).optional(),
  marital: z.string().min(1, { message: "Please select a Status" }).optional(),
  grade: z.string().min(1, { message: "Grade cannot be empty" }).optional(),
  institution: z
    .string()
    .min(3, { message: "Institution cannot be empty" })
    .max(80),
  qualification: z
    .string()
    .min(1, { message: "Qualification cannot be empty" })
    .max(20),
  course: z.string().min(3, { message: "Course cannot be empty" }).max(40),
  startDate: z.string().min(1, { message: "Start Date cannot be empty" }).optional(),
  endDate: z.string().min(1, { message: "End Date cannot be empty" }).optional(),
  experienceYears: z
    .string()
    .min(1, { message: "Years of Experience cannot be empty" })
    .max(20),
  workExperience: z
    .string()
    .max(80),
  workExperience2: z
    .string()
    .max(80),
  workExperience3: z
    .string()
    .max(80),
  qualification1: z
    .string()
    .max(80),
  qualification2: z
    .string()
    .max(80),
  jobRole: z.string().min(3, { message: "Job Role cannot be empty" }).max(40),
  preferredLocation: z
    .string()
    .min(3, { message: "Location cannot be empty" })
    .max(40),
  availabile: z
    .string()
    .min(1, { message: "You have to select one item." })
    .optional(),
  relocation: z
    .string()
    .min(1, { message: "You have to select one item." })
    .optional(),
  currentSalary: z.string().min(1).optional(),
  expectedSalary: z.string().min(1).optional(),

  consent: z
    .boolean()
    .refine((value) => value === true, {
      message:
        "You must consent to the storage of your details for future communications.",
    })
    .default(false)
    .optional(),
});
