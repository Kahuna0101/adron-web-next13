"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { EmailValidation } from "@/lib/validations/ContactValidation";
import { useEffect, useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { CheckCircle } from "lucide-react";

const NewsletterForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm({
    resolver: zodResolver(EmailValidation),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      const response = await fetch("/api/nodemailer/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSubmitted(true);
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
      }, 9000); // Set the timeout for 9 seconds
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [isSubmitted]);

  if (isSubmitted) {
    return (
      <Alert className=" border-green-500/50 text-green-600 [&>svg]:text-green-600">
        <CheckCircle className="h-5 w-5" />
        <AlertTitle className="text-xl">Submit Successful!</AlertTitle>
        <AlertDescription className="text-lg">
          Thank You for Subscribing to our Newsletter.
        </AlertDescription>
      </Alert>
    );
  } else {
    return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="relative w-full">
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Enter your email:"
                    {...field}
                    className="account-form_input no-focus rounded-3xl"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="absolute right-1 bg-green-500 hover:bg-green-700 text-base rounded-3xl"
          >
            Subscribe
          </Button>
        </form>
      </Form>
    );
  }
};

export default NewsletterForm;
