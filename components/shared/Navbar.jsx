"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

import { usePathname, useRouter } from "next/navigation";
import { navigationLinks } from "@/constants";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

const Navbar = () => {
  const { setTheme } = useTheme()
  const pathname = usePathname();
  const router = useRouter();
  const [position, setPosition] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

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
      className={`flex items-center w-full justify-between shadow-md fixed z-20 px-12 py-4 ${
        isScrolled ? "bg-transparent backdrop-blur" : "bg-transparent"
      }`}
    >
      <Link href="/">
        <Image
          src="/logo.png"
          alt="Adron Homes"
          priority={true}
          width={90}
          height={20}
          className="w-auto h-auto"
        />
      </Link>

      {/* Desktop View */}

      <ul className="flex max-md:hidden items-center">
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
                <li className="font-bold">{item.title}</li>
              </Link>
            </div>
          );
        })}
      </ul>

      <div className="flex items-center gap-3">
      <Button
        className="ml-14 px-6 py-4 text-white bg-green-500 hover:bg-green-600 text-lg font-semibold max-md:hidden"
        onClick={() => router.push("/subscribe")}
      >
        Take Action!
      </Button>

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
              height={40}
              width={40}
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
                  className={`${isActive ? "bg-green-300" : ""}`}
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
      </div>
    </nav>
  );
};

export default Navbar;
