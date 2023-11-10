"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import { usePathname, useRouter } from "next/navigation";
import { navigationLinks } from "@/constants";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";

const Navbar = () => {
  const { setTheme } = useTheme();
  const pathname = usePathname();
  const router = useRouter();
  const [position, setPosition] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  const dropTitle = [
    { title: "Testimonials", link: "/testimonials" },
    { title: "Careers", link: "/careers" },
  ];

  // Function to handle scroll event
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    // Set isScrolled to true when scrolling down, false otherwise
    setIsScrolled(scrollPosition > 0);
  };

  // Effect to add scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`flex items-center w-full justify-between shadow-md fixed z-20 px-6 md:px-12 py-4 ${
        isScrolled ? "bg-transparent backdrop-blur" : "bg-transparent"
      }`}
    >
      <Link href="/">
        <Image
          src="/logo.png"
          alt="Adron Homes"
          priority={true}
          width={60}
          height={20}
          className="w-auto h-auto"
        />
      </Link>
      <Image src="/christrees.png" width={50} height={50} alt="Christmans Trees" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="animate-bounce absolute hidden lg:block left-56"/>
     
      {/* Desktop View */}
      <NavigationMenu className="max-md:hidden">
        <NavigationMenuList>
          <NavigationMenuItem className="flex items-center">
            {navigationLinks.map((item) => {
              const isActive = pathname === item.link;
              return (
                <div
                  key={item.id}
                  className={`${
                    isActive
                      ? "text-white bg-green-500 hover:text-white"
                      : "text-gray-700 dark:text-slate-50 hover:text-green-500"
                  } px-2 lg:px-6 py-3 rounded-md text-sm uppercase`}
                >
                  <Link href={item.link} key={item.id}>
                    <p className="font-bold">{item.title}</p>
                  </Link>
                </div>
              );
            })}
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="hover:bg-green-500 focus:bg-green-500 data-[state=open]:bg-green-500 dark:hover:bg-green-500 dark:focus:bg-green-500 dark:data-[state=open]:bg-green-500 bg-transparent dark:bg-transparent font-bold text-gray-700 dark:text-slate-50 hover:text-gray-700">
              MORE
            </NavigationMenuTrigger>
            <NavigationMenuContent className="h-16 flex justify-center items-center">
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] md:grid-cols-[.75fr_1fr]">
                {dropTitle.map((item) => {
                  const isActive = pathname === item.link;
                  return (
                    <div
                      key={item.title}
                      className={`${
                        isActive
                          ? "text-white bg-green-500 hover:text-white"
                          : "text-gray-700 dark:text-slate-50 hover:text-green-500"
                      } px-2 lg:px-6 py-3 rounded-md text-sm uppercase flex justify-center items-center`}
                    >
                      <Link href={item.link} key={item.id}>
                        <li className="font-bold">{item.title}</li>
                      </Link>
                    </div>
                  );
                })}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="flex items-center gap-3">
        {/* Mobile View */}
        <div className="hidden max-md:block">
          <DropdownMenu>
            <DropdownMenuTrigger
              asChild
              className="bg-slate-100 rounded-full p-2 cursor-pointer"
              onClick={() => setToggle(true)}
            >
              <Image
                src="/hamburger-menu.svg"
                height={30}
                width={30}
                alt="menu"
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent className=" w-56">
              {navigationLinks.map((item) => {
                const isActive = pathname === item.link;
                return (
                  <DropdownMenuRadioGroup
                    value={position}
                    onValueChange={setPosition}
                    className={`${isActive ? "bg-green-500" : ""}`}
                    key={item.id}
                  >
                    <DropdownMenuRadioItem
                      value={item.title}
                      onClick={() => router.push(item.link)}
                    >
                      {item.title}
                    </DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                );
              })}
              <DropdownMenuSub>
                <DropdownMenuSubTrigger className="px-7">
                  <span>More</span>
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    {dropTitle.map((item) => {
                      const isActive = pathname === item.link;
                      return (
                        <DropdownMenuItem
                          key={item.title}
                          className={`${
                            isActive
                              ? "text-white bg-green-500 hover:text-white"
                              : "text-gray-700 dark:text-slate-50 hover:text-green-500"
                          } px-2 lg:px-6 py-3 rounded-md text-sm`}
                        >
                          <Link href={item.link} key={item.id}>
                            <p>{item.title}</p>
                          </Link>
                        </DropdownMenuItem>
                      );
                    })}
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
            </DropdownMenuContent>
          </DropdownMenu>
          
        </div>

        {/*Mode Toggle*/}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <Sun className="h-[2rem] w-[2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[2rem] w-[2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Image src="/christrees.png" width={50} height={50} alt="Christmans Trees" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="animate-bounce absolute right-40 md:right-28"/>
      </div>
    </nav>
  );
};

export default Navbar;
