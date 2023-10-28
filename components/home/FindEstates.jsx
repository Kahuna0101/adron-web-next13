import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { abouts } from "@/constants";

const FindEstates = () => {
  return (
    <section>
      <div className="relative">
      <div className="w-full flex flex-col md:flex-row mx-auto p-12 md:p-36">
        <div className="flex flex-col w-full md:w-2/5">
          <h1 className="text-5xl font-semibold mt-0 mb-2.5 leading-normal text-white md:text-black dark:md:text-slate-50">
            Adron Homes helps you make better property decisions
          </h1>
          <p className="text-base font-bold text-white md:text-gray-500">
            Adron has Nigeria's largest collection of exquisite estates,
            empowering you to find the right area for you to move to. With tens
            of thousands of local community topics and discussions, find the
            answers to all your questions about an area, or ask the locals.
          </p>
          <div className="flex flex-col md:flex-row mt-6 gap-3">
            {abouts.map((about) => (
              <Card
                key={about.id}
                className="flex-1 h-full transition-transform duration-300 hover:scale-110 shadow-lg dark:shadow-slate-900"
              >
                <CardHeader>
                  <Image src={about.image} width={80} height={80} alt="icon" />
                </CardHeader>
                <CardContent className="text-xl font-medium mt-3">
                  {about.title}
                  <CardDescription className="mt-3 mb-5">
                    {about.description}
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Link href="/properties">
                    <Button className="text-base md:text-lg font-medium gap-2 text-green-500 hover:text-black bg-transparent hover:bg-transparent">
                      {about.purpose} <ArrowRight />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-cover bg-no-repeat bg-center z-[-1]">
        <Image src="/hero2.jpeg" alt="Adron Monument" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
      </div>       
      </div>
    </section>
  );
};

export default FindEstates;
