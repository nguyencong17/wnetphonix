import React from "react";
import { Card } from "../Card/Card";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import Link from "next/link";

// Skeleton
import { Skeleton } from "@/components/ui/skeleton";

export const ListMovieSlider = (props) => {
  const { tag, label, slug, loading } = props;
  let listmovie = props.listmovie;

  const pagination = {
    el: `.${tag}-swiper-pagination-custom`,
  };

  return (
    <div className={tag}>
      <Link
        className="inline-flex items-center mb-4 cursor-pointer text-white gap-4"
        href={`/list/${slug}`}
      >
        <h2 className="text-[24px] lg:text-[36px]">{label}</h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
          />
        </svg>
      </Link>

      <Swiper
        // onSwiper={setSwiperRef}
        slidesPerView={2}
        spaceBetween={16}
        breakpoints={{
          576: {
            slidesPerView: 3,
          },
          992: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
          },
          1400: {
            slidesPerView: 7,
          },
        }}
        modules={[Navigation, Pagination]}
        pagination={pagination}
        navigation={{
          nextEl: `.${tag}-arrow-left`,
          prevEl: `.${tag}-arrow-right`,
        }}
        className=""
        loop={true}
      >
        {loading
          ? Array(7)
              .fill(0)
              .map((_, index) => (
                <SwiperSlide key={index}>
                  <Skeleton
                    key={index}
                    className="h-[300px] w-[240px] rounded-xl bg-skeleton"
                  />
                  <div className="space-y-2 mt-4">
                    <Skeleton className="h-4 w-[240px] bg-skeleton" />
                    <Skeleton className="h-4 w-[200px] bg-skeleton" />
                  </div>
                </SwiperSlide>
              ))
          : listmovie &&
            listmovie.map((movie, index) => (
              <SwiperSlide key={index}>
                <Card movie={movie}  className="max-w-full"/>
              </SwiperSlide>
            ))}
      </Swiper>
    </div>
  );
};
