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
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { ContactValidation } from "@/lib/validations/ContactValidation";
import { Textarea } from "../ui/textarea";
import { Checkbox } from "../ui/checkbox";
import { useEffect, useState } from "react";

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm({
    resolver: zodResolver(ContactValidation),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      consent: false,
    },
  });

  const onSubmit = async (data) => {
    try {
      const response = await fetch("/api/nodemailer/contact", {
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
          Contact Us
        </FormLabel>
        <div className="border w-full" />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="flex flex-col w-full">
              <FormLabel className="text-lg font-medium dark:text-slate-50">Name</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Full Name"
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
          name="email"
          render={({ field }) => (
            <FormItem className="flex flex-col w-full">
              <FormLabel className="text-lg font-medium dark:text-slate-50">Email</FormLabel>
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
                  type="text"
                  placeholder="Phone Number"
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
          name="message"
          render={({ field }) => (
            <FormItem className="flex flex-col w-full">
              <FormLabel className="text-lg font-medium dark:text-slate-50">Message</FormLabel>
              <FormControl>
                <Textarea
                  rows={5}
                  placeholder="Type in your Message"
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
                <FormLabel className=" text-sm font-semibold text-gray-400">
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

        {isSubmitted? (
          <div className="flex justify-center items-center">
            <h3 className="text-lg font-semibold text-green-600">Form Submitted Successfully!</h3>
          </div>
        ): (
          ''
        )}
      </form>
    </Form>
  );
};

export default ContactForm;