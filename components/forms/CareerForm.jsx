"use client";

import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Textarea } from "../ui/textarea";
import { Checkbox } from "../ui/checkbox";

import { useEffect, useState } from "react";
import { CareerValidation } from "@/lib/validations/CareerValidation";

const CareerForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm({
    resolver: zodResolver(CareerValidation),
    defaultValues: {
      surname: "",
      name: "",
      email: "",
      phone: "",
      address: "",
      dob: "",
      marital: "",
      grade: "",
      institution: "",
      qualification: "",
      course: "",
      startDate: "",
      endDate: "",
      experienceYears: "",
      workExperience: "",
      workExperience2: "",
      workExperience3: "",
      qualification1: "",
      qualification2: "",
      jobRole: "",
      preferredLocation: "",
      availabile: "",
      relocate: "",
      currentSalary: "",
      expectedSalary: "",
      consent: false,
    },
  });

  const onSubmit = async (data) => {
    try {
      const response = await fetch("/api/nodemailer/career", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
      } else {
        console.error("Error sending email");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    let timeout;
    if (isSubmitted) {
      timeout = setTimeout(() => {
        setIsSubmitted(false);
      }, 5000); // Set the timeout for 5 seconds
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [isSubmitted]);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col w-full text-gray-700 rounded-lg shadow shadow-green-300 p-7 gap-4"
      >
        <FormLabel className="font-bold text-2xl dark:text-slate-50">
          Employment Application Form
        </FormLabel>
        <div className="border w-full" />

        <div className="flex flex-col md:flex-row gap-5">
          <FormField
            control={form.control}
            name="surname"
            render={({ field }) => (
              <FormItem className="flex flex-col w-full">
                <FormLabel className="text-lg font-medium dark:text-slate-50">
                  Surname
                </FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Surname"
                    className="account-form_input no-focus"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="flex flex-col w-full">
                <FormLabel className="text-lg font-medium dark:text-slate-50">
                  Other Names
                </FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Other Names"
                    className="account-form_input no-focus"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex flex-col md:flex-row gap-5">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex flex-col w-full">
                <FormLabel className="text-lg font-medium dark:text-slate-50">
                  Email
                </FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Email"
                    {...field}
                    className="account-form_input no-focus"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="flex flex-col w-full">
                <FormLabel className="text-lg font-medium dark:text-slate-50">
                  Phone Number
                </FormLabel>
                <FormControl>
                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    {...field}
                    className="account-form_input no-focus"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem className="flex flex-col w-full">
              <FormLabel className="text-lg font-medium dark:text-slate-50">
                Address
              </FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Address"
                  className="account-form_input no-focus"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex flex-col md:flex-row gap-5 items-center justify-center">
          <FormField
            control={form.control}
            name="dob"
            render={({ field }) => (
              <FormItem className="flex flex-col w-full">
                <FormLabel className="text-lg font-medium dark:text-slate-50">
                  Date of Birth
                </FormLabel>
                <FormControl>
                  <Input
                    type="date"
                    {...field}
                    className="account-form_input no-focus dark:text-slate-50"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="marital"
            render={({ field }) => (
              <FormItem className="flex flex-col w-full">
                <FormLabel className="text-lg font-medium dark:text-slate-50">
                  Marital Status
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="w-[180px] font-semibold dark:text-slate-50">
                    <SelectValue placeholder="Marital Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="single">Single</SelectItem>
                      <SelectItem value="married">Married</SelectItem>
                      <SelectItem value="divorced">Divorced</SelectItem>
                      <SelectItem value="widow">Widow</SelectItem>
                      <SelectItem value="widower">Widower</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="grade"
            render={({ field }) => (
              <FormItem className="flex flex-col w-full">
                <FormLabel className="text-lg font-medium dark:text-slate-50">
                  Grade
                </FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Enter your grade"
                    {...field}
                    className="account-form_input no-focus dark:text-slate-50"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="institution"
          render={({ field }) => (
            <FormItem className="flex flex-col w-full">
              <FormLabel className="text-lg font-medium dark:text-slate-50">
                Higher Institution Attended
              </FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Institution Attended"
                  className="account-form_input no-focus dark:text-slate-50"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex flex-col md:flex-row gap-5">
          <FormField
            control={form.control}
            name="qualification"
            render={({ field }) => (
              <FormItem className="flex flex-col w-full">
                <FormLabel className="text-lg font-medium dark:text-slate-50">
                  Qualification
                </FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Qualification"
                    className="account-form_input no-focus dark:text-slate-50"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="course"
            render={({ field }) => (
              <FormItem className="flex flex-col w-full">
                <FormLabel className="text-lg font-medium dark:text-slate-50">
                  Course of Study
                </FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Course of Study"
                    className="account-form_input no-focus dark:text-slate-50"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex flex-col md:flex-row gap-5">
          <FormField
            control={form.control}
            name="startDate"
            render={({ field }) => (
              <FormItem className="flex flex-col w-full">
                <FormLabel className="text-lg font-medium dark:text-slate-50">
                  Start Date
                </FormLabel>
                <FormControl>
                  <Input
                    type="date"
                    placeholder="Start Date"
                    className="account-form_input no-focus dark:text-slate-50"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="endDate"
            render={({ field }) => (
              <FormItem className="flex flex-col w-full">
                <FormLabel className="text-lg font-medium dark:text-slate-50">
                  End Date
                </FormLabel>
                <FormControl>
                  <Input
                    type="date"
                    className="account-form_input no-focus dark:text-slate-50"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="experienceYears"
          render={({ field }) => (
            <FormItem className="flex flex-col w-full">
              <FormLabel className="text-lg font-medium dark:text-slate-50">
                Years of Experience (Post NYSC)
              </FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Years of Experience"
                  className="account-form_input no-focus dark:text-slate-50"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="workExperience"
          render={({ field }) => (
            <FormItem className="flex flex-col w-full">
              <FormLabel className="text-lg font-medium dark:text-slate-50">
                Work Experience (starting with the current job)
              </FormLabel>
              <FormControl>
                <Textarea
                  row={3}
                  placeholder="Work Experience"
                  className="account-form_input no-focus dark:text-slate-50"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="workExperience2"
          render={({ field }) => (
            <FormItem className="flex flex-col w-full">
              <FormLabel className="text-lg font-medium dark:text-slate-50">
                Work Experience (2)
              </FormLabel>
              <FormControl>
                <Textarea
                  row={3}
                  placeholder="Work Experience 2"
                  className="account-form_input no-focus dark:text-slate-50"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="workExperience3"
          render={({ field }) => (
            <FormItem className="flex flex-col w-full">
              <FormLabel className="text-lg font-medium dark:text-slate-50">
                Work Experience (3)
              </FormLabel>
              <FormControl>
                <Textarea
                  row={3}
                  placeholder="Work Experience 3"
                  className="account-form_input no-focus dark:text-slate-50"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="qualification1"
          render={({ field }) => (
            <FormItem className="flex flex-col w-full">
              <FormLabel className="text-lg font-medium dark:text-slate-50">
                Professional Qualification
              </FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Professional Qualification"
                  className="account-form_input no-focus dark:text-slate-50"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="qualification2"
          render={({ field }) => (
            <FormItem className="flex flex-col w-full">
              <FormLabel className="text-lg font-medium dark:text-slate-50">
                Professional Qualification (2)
              </FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Professional Qualification 2"
                  className="account-form_input no-focus dark:text-slate-50"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex flex-col md:flex-row gap-5">
          <FormField
            control={form.control}
            name="jobRole"
            render={({ field }) => (
              <FormItem className="flex flex-col w-full">
                <FormLabel className="text-lg font-medium dark:text-slate-50">
                  Role Applying for:
                </FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Job Role"
                    className="account-form_input no-focus dark:text-slate-50"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="preferredLocation"
            render={({ field }) => (
              <FormItem className="flex flex-col w-full">
                <FormLabel className="text-lg font-medium dark:text-slate-50">
                  Preferred Location
                </FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Enter the state you prefer"
                    className="account-form_input no-focus dark:text-slate-50"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex flex-col md:flex-row gap-5">
          <FormField
            control={form.control}
            name="availabile"
            render={({ field }) => (
              <FormItem className="flex flex-col w-full">
                <FormLabel className="text-lg font-medium dark:text-slate-50">
                  Availabile in:
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="w-full font-semibold dark:text-slate-50">
                    <SelectValue placeholder="Availability" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="immediately">Immediately</SelectItem>
                      <SelectItem value="1 week">1 week</SelectItem>
                      <SelectItem value="2 weeks">2 weeks</SelectItem>
                      <SelectItem value="3 weeks">3 weeks</SelectItem>
                      <SelectItem value="1 month">1 month</SelectItem>
                      <SelectItem value="2 months">2 months</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="relocate"
            render={({ field }) => (
              <FormItem className="flex flex-col w-full">
                <FormLabel className="text-lg font-medium dark:text-slate-50">
                  Are you willing to relocate?
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                    <SelectTrigger className="w-full font-semibold dark:text-slate-50">
                      <SelectValue placeholder="Willing to Relocate?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="yes">Yes</SelectItem>
                        <SelectItem value="no">No</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex flex-col md:flex-row gap-5">
          <FormField
            control={form.control}
            name="currentSalary"
            render={({ field }) => (
              <FormItem className="flex flex-col w-full">
                <FormLabel className="text-lg font-medium dark:text-slate-50">
                  Current Monthly Net Salary:
                </FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Current Monthly Salary"
                    className="account-form_input no-focus dark:text-slate-50"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="expectedSalary"
            render={({ field }) => (
              <FormItem className="flex flex-col w-full">
                <FormLabel className="text-lg font-medium dark:text-slate-50">
                  Expected Monthly Net Salary:
                </FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Expected Monthly Salary"
                    className="account-form_input no-focus dark:text-slate-50"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Consent */}
        <FormField
          control={form.control}
          name="consent"
          render={({ field }) => (
            <FormItem className="flex justify-start items-center gap-2">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div>
                <FormLabel className="text-sm font-semibold text-gray-400 dark:text-slate-50">
                  I consent to having Adron Homes store my details for future
                  communications
                </FormLabel>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="bg-green-400 hover:bg-green-700 p-6 text-xl"
        >
          Submit
        </Button>

        {isSubmitted ? (
          <div className="flex justify-center items-center">
            <h3 className="text-lg font-semibold text-green-600">
              Form Submitted Successfully!
            </h3>
          </div>
        ) : (
          ""
        )}
      </form>
    </Form>
  );
};

export default CareerForm;
