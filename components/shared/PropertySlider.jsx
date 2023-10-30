"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import PropertyCard from "../cards/PropertyCard";

const PropertySlider = ({ featuredProperties }) => {
  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={10}
        centeredSlides={true}
        autoplay={{ delay: 2000 }}
        breakpoints={{
          // when window width is >= 768px (medium devices)
          768: {
            slidesPerView: 2,
          },
          // when window width is >= 1280px (large devices)
          1280: {
            slidesPerView: 3,
          },
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {featuredProperties.map((property) => (
          <SwiperSlide key={property._id}>
            <PropertyCard
              key={property._id}
              id={property._id}
              location={property.location}
              title={property.title}
              propertyType={property.propertyType}
              propertyStatus={property.propertyStatus}
              price={property.price}
              area={property.area}
              rooms={property.rooms}
              baths={property.baths}
              image={property.images[0]}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default PropertySlider;
