"use client"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function PromoSlider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full min-h-screen"
      >
        <SwiperSlide className="flex justify-center text-center text-lg">Slide 1</SwiperSlide>
        <SwiperSlide className="flex justify-center text-center text-lg">Slide 2</SwiperSlide>
        <SwiperSlide className="flex justify-center text-center text-lg">Slide 3</SwiperSlide>
      </Swiper>
    </>
  );
}