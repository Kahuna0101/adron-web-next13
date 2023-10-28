"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import Image from "next/image";
import { useState } from "react";

const PhotoSlider = ({ images }) => {
  const [thumbSwiper, setThumbSwiper] = useState(null);
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#83f07d",
        }}
        loop={true}
        navigation={true}
        thumbs={{
          swiper: thumbSwiper && !thumbSwiper.destroyed ? thumbSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mb-5 rounded"
      >
        {images.map((image) => (
          <SwiperSlide key={image}>
            <div className="w-[40rem] sm:w-fit md:w-[50rem] h-64 sm:h-44 md:h-[30rem] relative">
               <Image src={image} alt="images" priority={true} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" /> 
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={5}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
      >
        {images.map((image) => (
          <SwiperSlide key={image}>
            <div className="relative w-[70px] sm:w-28 md:w-[8.5rem] h-16 md:h-20">
              <Image src={image} alt="images" priority={true} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="rounded"/>  
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default PhotoSlider;