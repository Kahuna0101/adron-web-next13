"use client";

import CareerForm from "../forms/CareerForm";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { ScrollArea } from "../ui/scroll-area";

const ApplyFooter = () => {
  return (
    <section>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="bg-green-600 hover:bg-green-700 rounded-full">Apply Now</Button>
        </DialogTrigger>
        <DialogContent className="h-full max-w-[60rem]">
          <ScrollArea>
            <CareerForm />
            <p className="font-medium text-gray-500 text-center mt-2 dark:text-slate-50">
              Our HR Team will get back to you in 1-2 business days.
            </p>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ApplyFooter;
