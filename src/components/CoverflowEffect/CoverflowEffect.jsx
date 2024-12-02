import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import {
  Autoplay,
  Pagination,
  Navigation,
  EffectCoverflow,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

import Image from "next/image";

import "./styles.css";
import Link from "next/link";

// Skeleton
import { Skeleton } from "@/components/ui/skeleton";

export default function SwiperCoverflow(props) {
  const swiperRef = useRef(null);
  let { listmovie, loading } = props;

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.update(); // Cập nhật Swiper
    }
  }, [listmovie]);

  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 20,
          stretch: 0,
          depth: 257,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={false}
        navigation={{
          nextEl: ".coverflow-arrow-left",
          prevEl: ".coverflow-arrow-right",
        }}
        modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
        className="swiper-covereffect h-[800px]"
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {loading
          ? Array(10)
              .fill(0)
              .map((_, index) => (
                <SwiperSlide key={index}>
                  <div className="rounded-[8px] h-full">
                    <div className="w-full h-full flex flex-col relative">
                      <Skeleton className="w-full h-[500px] rounded-[8px] bg-skeleton" />
                    </div>
                  </div>
                </SwiperSlide>
              ))
          : listmovie &&
            listmovie.map((item, index) => (
              <SwiperSlide key={index}>
                <Link href={`/movie/${item.slug}`}>
                  <div className="rounded-[8px] h-full">
                    <div className="w-full h-full flex flex-col relative">
                      <Image
                        src={`${item.thumb_url}` || "/placeholder.png"}
                        alt={"abc"}
                        width={400}
                        height={500}
                      />
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
      </Swiper>
      <div className="coverflow-arrow-left arrow absolute top-[30%] left-[64px] z-10 cursor-pointer bg-primary rounded-full p-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
          />
        </svg>
      </div>
      <div className="coverflow-arrow-right arrow absolute top-[30%] right-[64px] z-10 cursor-pointer bg-primary rounded-full p-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
          />
        </svg>
      </div>
    </>
  );
}
