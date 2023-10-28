"use client"

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { Bath, Bed, LandPlot, MapPinned, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const PropertyCard = ({
  id,
  location,
  title,
  propertyType,
  propertyStatus,
  price,
  area,
  rooms,
  baths,
  image,
}) => {
  return (
    <Link href={`/properties/${id}`}>
      <Card className="shadow-xl">
        <CardHeader>
          <div className="relative w-full h-56">
            <Image src={image} fill alt={title} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="rounded-md" />
            <div className="relative p-3">
              <span
                className={`p-2 rounded-lg text-sm uppercase font-semibold text-white ${
                  propertyStatus === "for-sale" ? "bg-green-600" : "bg-red-600"
                }`}
              >
                {propertyStatus}
              </span>
            </div>
          </div>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="flex justify-start">
                <CardTitle className="text-xl font-bold uppercase hover:text-green-600 truncate">
                {title}
                </CardTitle>
              </TooltipTrigger>
              <TooltipContent className="bg-green-300">
                <p className="text-xl font-bold uppercase">{title}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          
        </CardHeader>
        <CardContent>
          <div className="flex gap-1 justify-start items-center text-base font-bold">
            <MapPinned className="fill-green-400 stroke-gray-50" />
            <p className="uppercase">{location}</p>
          </div>
        </CardContent>
        <CardContent className="flex justify-end items-center font-bold">
          <p className="text-lg md:text-2xl">
            ₦ {price.toLocaleString()}{" "}
            <span className="text-base font-medium text-gray-500">/Plot</span>
          </p>
        </CardContent>
        <CardContent className="flex justify-between">
          <p className="p-2 bg-green-600 rounded-bl-md rounded-tr-md capitalize font-medium text-green-100">
            {propertyType}
          </p>

          <div className="flex">
            {propertyType === "land" ? (
              <div className="flex gap-1 justify-center items-center  sm:text-base font-semibold min-[280px]:text-[10px]">
                <LandPlot className="stroke-green-500" />
                <p className="uppercase">{area} Sq M</p>
              </div>
            ) : (
              <div className="flex gap-2">
                <div className="flex gap-1 justify-center items-center text-base font-semibold">
                  <Bed className="stroke-green-500" />
                  <p>{rooms}</p>
                </div>

                <div className="flex gap-1 justify-center items-center text-base font-semibold">
                  <Bath className="stroke-green-500" />
                  <p>{baths}</p>
                </div>
              </div>
            )}
          </div>
        </CardContent>
        <CardFooter>
          <div className="flex">
            {[1, 2, 3, 4, 5].map((item) => (
              <Star
                key={`star-${item}`}
                className="fill-amber-400 stroke-transparent"
              />
            ))}
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default PropertyCard;
