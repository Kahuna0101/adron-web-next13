"use client"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';

export default function PromoSlider({ promos }) {
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
        {promos.map((promo) => (
          <SwiperSlide key={promo._id}>
            <div className='w-full relative min-h-screen flex justify-start items-center'>
              <Image src={promo.photo} fill alt={promo.title} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
              <div className="container relative top-80">
                <Link href={`/blogs/${promo._id}`}>
                  <Button className="text-white bg-green-500 hover:bg-green-600 py-6 px-7 text-lg font-semibold transition-transform transform hover:scale-105">
                    Read More
                  </Button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}