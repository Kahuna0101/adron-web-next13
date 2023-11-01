"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { CornerLeftDown, CornerRightDown } from "lucide-react";
import Counter from "../shared/Counter";

export default function Hero() {
  const words = ["Cities", "Communities", "Homes."];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState(words[0]); // Initialize currentWord with the first word

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 1500);

    return () => {
      clearInterval(interval);
    };
  }, [words.length]);

  useEffect(() => {
    setCurrentWord(words[currentIndex]);
  }, [currentIndex, words]);

  return (
    <div className="text-white w-full min-h-screen">
      <div className="absolute w-80 h-80 dark:bg-white bg-opacity-50 filter blur-[100px] rounded-full" />

      <div className="flex flex-wrap items-center justify-center gap-24 px-10 md:px-16 py-16 md:py-36">
        {/* Left Side */}
        <div className="flex flex-col mt-5 gap-4 relative z-[1]">
          <div className="h-12 md:h-16 w-12 md:w-16 bg-green-500 rounded-full relative left-[10rem] md:left-[17rem] top-16 md:top-[90px] z-[-1]" />

          <div>
            <h1 className="font-semibold text-[45px] text-slate-600 dark:text-slate-50 leading-[3rem] md:text-[80px] md:leading-[5rem] ">
              At Adron <br /> Homes We're <br />
              <span>Building</span>
              <br />
              <span className="text-green-600 italic font-medium">
                {currentWord}
              </span>
            </h1>

            <p className="text-xl text-slate-500 mt-2 items-center">
              Find a variety of properties that suit you very easily
            </p>
          </div>

          <div className="flex items-center justify-between mt-2 flex-col sm:flex-row">
            <div className="flex items-center flex-col ">
              <div className="flex items-center text-3xl gap-1 text-slate-600 dark:text-slate-50">
                <Counter start={9500} end={10000} duration={4} />
                <span className="text-green-500">+</span>
              </div>
              <p className="text-lg text-slate-500">Sold Products</p>
            </div>

            <div className="flex items-center flex-col mt-4 sm:mt-0">
              <div className="flex items-center text-3xl font-semibold gap-1 text-slate-600 dark:text-slate-50">
                <span>90</span>
                <span className="text-green-500">%</span>
              </div>
              <p className="text-lg text-slate-500">Happy Clients</p>
            </div>
            <div className="flex items-center flex-col mt-4 sm:mt-0">
              <div className="flex items-center text-3xl gap-1 text-slate-600 dark:text-slate-50">
                <Counter end={11} />
              </div>
              <p className="text-lg text-slate-500 text-center">
                Years in the <br /> Real-Estate Business
              </p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="relative w-[22rem] sm:w-[30rem] h-[35rem] sm:h-[45rem] overflow-hidden border-8 dark:border-white border-opacity-12 rounded-t-[15rem]">
          <Image
            src="/home1.jpeg"
            alt="Hero"
            fill
            priority={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
      <div className="h-12 w-32 font-semibold text-white text-sm flex items-center md:bottom-28 relative justify-center left-[35%] md:left-[40%] lg:left-[48%] bg-green-500 rounded-xl animate-bounce">
        <CornerLeftDown />
        Scroll down
        <CornerRightDown />
      </div>
    </div>
  );
}
