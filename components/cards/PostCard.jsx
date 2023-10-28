"use client"

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { CalendarDays } from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";

const PostCard = ({ id, photo, title, body, date, tag }) => {
  return (
    <article>
        <Link href={`/blogs/${id}`}>
          <Card className="shadow-xl">
            <CardHeader>
              <div className="relative w-full h-56">
                <Image src={photo} fill alt={title} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="rounded-md" />
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
            
            <CardContent className="flex justify-end items-center font-bold">
              <p className="line-clamp-3">{body}</p>
            </CardContent>
            <CardFooter className="justify-between">
              <p className="text-gray-500 text-base font-semibold flex gap-2"><CalendarDays />{date}</p>  
              <p className=" p-1.5 bg-green-500 rounded text-white text-sm font-semibold uppercase">{tag}</p>
            </CardFooter>
          </Card>
        </Link>
    </article>
  )
}

export default PostCard