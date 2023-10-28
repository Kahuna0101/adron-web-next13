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
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Textarea } from "../ui/textarea";
import { Checkbox } from "../ui/checkbox";
import { SubscriptionValidation } from "@/lib/validations/SubscriptionValidation";
import { estates } from "@/constants";
import { SelectViewport } from "@radix-ui/react-select";
import { useEffect, useState } from "react";

const SubscriptionForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm({
    resolver: zodResolver(SubscriptionValidation),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      estate: "",
      plot: "",
      contact: [],
      client: [],
      message: "",
      consent: false,
    },
  });

  const contacts = [
    {
      id: "call",
      label: "A call from an Agent",
    },
    {
      id: "mail",
      label: "An E-mail",
    },
    {
      id: "whatsapp",
      label: "WhatsApp",
    },
  ];

  const clients = [
    {
      id: "new",
      label: "I'm a new subscriber",
    },
    {
      id: "existing",
      label: "I'm an existing subscriber",
    },
  ];

  const onSubmit = async (data) => {
    try {
      const response = await fetch("/api/nodemailer/subscription", {
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
          Begin that Conversation Today!!!
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

        <div className="flex flex-col md:flex-row gap-5">
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
        </div>

        <FormField
          control={form.control}
          name="estate"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg font-medium dark:text-slate-50">
                Estate Interested In:
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger className="w-full font-semibold dark:text-slate-50">
                  <SelectValue placeholder="Select an Estate"/>
                </SelectTrigger>
                <SelectContent>
                  <SelectViewport
                    style={{ maxHeight: "200px", overflowY: "auto" }}
                  >
                    <SelectGroup>
                      <SelectLabel>Estates</SelectLabel>
                      {estates.map((estate) => (
                        <SelectItem key={estate.id} value={estate.value} className="account-form_input no-focus">
                          {estate.name}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectViewport>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />

        <div className="flex flex-col md:flex-row gap-5 items-center justify-center">
          <FormField
            control={form.control}
            name="plot"
            render={({ field }) => (
              <FormItem className="flex flex-col w-full">
                <FormLabel className="text-lg font-medium dark:text-slate-50">
                  No of Plot
                </FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Plot No"
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
            name="client"
            render={({ field }) => (
              <FormItem className="flex flex-col w-full">
                <div className="mb-4">
                  <FormLabel className="text-lg font-medium dark:text-slate-50">
                    Are you a new or existing customer?
                  </FormLabel>
                </div>

                <div className="flex gap-3">
                  {clients.map((item) => (
                    <div
                      key={item.id}
                      className="flex flex-row items-start space-x-3 space-y-0"
                    >
                      <FormControl>
                        <Checkbox
                          checked={field.value.includes(item.id)}
                          onCheckedChange={(checked) => {
                            const updatedValue = checked
                              ? [...field.value, item.id]
                              : field.value.filter(
                                  (value) => value !== item.id
                                );
                            field.onChange(updatedValue);
                          }}
                        />
                      </FormControl>
                      <FormLabel className=" text-sm font-semibold text-gray-400">
                        {item.label}
                      </FormLabel>
                    </div>
                  ))}
                </div>

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
              <FormLabel className="text-lg font-medium dark:text-slate-50">
                Questions & Comments
              </FormLabel>
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
          name="contact"
          render={({ field }) => (
            <FormItem>
              <div className="mb-4">
                <FormLabel className="text-lg font-medium dark:text-slate-50">
                  Preferred Mode of Contact
                </FormLabel>
              </div>
              {contacts.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-row items-start space-x-3 space-y-0"
                >
                  <FormControl>
                    <Checkbox
                      checked={field.value.includes(item.id)}
                      onCheckedChange={(checked) => {
                        const updatedValue = checked
                          ? [...field.value, item.id]
                          : field.value.filter((value) => value !== item.id);
                        field.onChange(updatedValue);
                      }}
                    />
                  </FormControl>
                  <FormLabel className=" text-sm font-semibold text-gray-400">
                    {item.label}
                  </FormLabel>
                </div>
              ))}
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
                <FormLabel className="text-sm font-semibold text-gray-400">
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

export default SubscriptionForm;