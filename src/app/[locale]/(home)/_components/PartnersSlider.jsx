"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/free-mode";
import { Autoplay, FreeMode } from "swiper/modules";

const PartnersSlider = ({ images, rtlDirection }) => {
  return (
    <div className={`sliderContainer ${rtlDirection ? "rtl" : ""}`}>
      <Swiper
        modules={[Autoplay, FreeMode]}
        speed={8000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        slidesPerView={6}
        freeMode={true}
        loop={true}
        breakpoints={{
          1024: {
            slidesPerView: 6,
          },
          767: {
            slidesPerView: 3,
          },
          300: {
            slidesPerView: 2,
          },
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="sliderImage"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PartnersSlider;
