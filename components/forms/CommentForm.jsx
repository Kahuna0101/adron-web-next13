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
import { Textarea } from "../ui/textarea";
import { CommentValidation } from "@/lib/validations/CommentValidation";
import { useEffect, useState } from "react";

const CommentForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm({
    resolver: zodResolver(CommentValidation),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values) => {
    try {
      const response = await fetch("/api/nodemailer/comment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
      } else {
        console.error("Error sending message");
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
        className="flex flex-col w-full shadow-green-300 text-gray-700 rounded-lg shadow p-7 gap-4"
      >
        <FormLabel className="font-bold text-2xl dark:text-slate-50">
          Leave A Comment:
        </FormLabel>
        <div className="border w-full" />

        <div className="flex flex-col md:flex-row gap-5">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="flex flex-col w-full md:w-1/2">
                <FormLabel className="text-lg font-medium dark:text-slate-50">Name</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Name:"
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
              <FormItem className="flex flex-col w-full md:w-1/2">
                <FormLabel className="text-lg font-medium dark:text-slate-50">Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Email:"
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
          name="message"
          render={({ field }) => (
            <FormItem className="flex flex-col w-full">
              <FormLabel className="text-lg font-medium dark:text-slate-50">Message</FormLabel>
              <FormControl>
                <Textarea
                  rows={5}
                  placeholder="Comment:"
                  {...field}
                  className="account-form_input no-focus dark:text-slate-50"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="bg-green-400 hover:bg-green-700 p-6 text-xl"
        >
          Send Message
        </Button>

        {isSubmitted? (
          <div className="flex justify-center items-center">
            <h3 className="text-lg font-semibold text-green-600">Message Sent Successfully!</h3>
          </div>
        ): (
          ''
        )}
      </form>
    </Form>
  );
};

export default CommentForm;
