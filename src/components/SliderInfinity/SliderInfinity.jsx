"use client";
import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import HeroImage from "../../../public/hero/hero.png";
import Image from "next/image";

function SliderInfinity() {
  return (
    <>
      <Swiper
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        speed={80000}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        className="mySwiper h-screen w-screen"
      >
        <SwiperSlide className="mb-8">
          <Image
            src={HeroImage}
            alt="HERO IMAGE"
            width={"100%"}
            height={"100%"}
            className="h-full object-cover object-right-top"
          />
        </SwiperSlide>
        <SwiperSlide className="mb-8">
          <Image
            src={HeroImage}
            alt="HERO IMAGE"
            width={"100%"}
            height={"100%"}
            className="h-full object-cover object-right-top"
          />
        </SwiperSlide>
        <SwiperSlide className="mb-8">
          <Image
            src={HeroImage}
            alt="HERO IMAGE"
            width={"100%"}
            height={"100%"}
            className="h-full object-cover object-right-top"
          />
        </SwiperSlide>
        <SwiperSlide className="mb-8">
          <Image
            src={HeroImage}
            alt="HERO IMAGE"
            width={"100%"}
            height={"100%"}
            className="h-full object-cover object-right-top"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default SliderInfinity;
