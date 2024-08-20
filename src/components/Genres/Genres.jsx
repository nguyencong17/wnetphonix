import * as React from "react";
import { useEffect, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";

export function Genres(props) {
  const { genres, tag, label } = props;

  // Danh sách hình ảnh cho genres
  const genreImages = {
    "Action": "/genres/action.png",
    "Adventure": "/genres/adventure.png",
    "Animation": "/genres/animation.png",
    "Comedy": "/genres/comedy.png",  
    "Crime": "/genres/crime.png",
    "Documentary": "/genres/documentary.png",
    "Drama": "/genres/drama.png",
    "Family": "/genres/family.png",
    "Fantasy": "/genres/fantasy.png",
    "History": "/genres/history.png",
    "Horror": "/genres/horror.png",
    "Music": "/genres/music.png",
    "Mystery": "/genres/mystery.png",
    "Romance": "/genres/romance.png",
    "Science Fiction": "/genres/science-fiction.png",
    "TV Movie": "/genres/tv-movie.png",
    "Thriller": "/genres/thriller.png",
    "War": "/genres/war.png",
    "Western": "/genres/western.png",
  };

  const pagination = {
    el: `.${tag}-swiper-pagination-custom`,
    clickable: true,
    renderBullet: function (index, className) {
      return (
        '<span class="!bg-[#999999] !rounded-[8px] !w-[16px] !h-[4px] inline-block' +
        " " +
        className +
        '"></span>'
      );
    },
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-[36px]">{label}</h2>
        <div className="flex gap-4 border border-bordercolor p-4 bg-[#1a1a1a] rounded-[8px] items-center">
          <div
            className={`${tag}-arrow-left arrow cursor-pointer bg-[#050505] p-2 rounded-[8px] border border-bordercolor`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className={`${tag}-swiper-pagination-custom`}></div>
          <div
            className={`${tag}-arrow-right arrow cursor-pointer bg-[#050505] p-2 rounded-[8px] border border-bordercolor`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        modules={[Navigation, Pagination]}
        pagination={pagination}
        navigation={{
          nextEl: `.${tag}-arrow-left`,
          prevEl: `.${tag}-arrow-right`,
        }}
        className=""
        loop={true}
      >
        {genres &&
          genres.map((genre) => (
            <SwiperSlide key={genre.id}>
              <Link href="">
                <div
                  key={genre.id}
                  className="p-5 bg-[#1A1A1A] rounded-[8px] relative"
                >
                  <div className="w-full pb-[177%] relative bg-[#1A1A1A]">
                    <Image
                      src={genreImages[genre.name] || `/genres/default.png`}
                      alt={genre.name}
                      width={400}
                      height={600}
                      className="rounded-lg absolute top-0 left-0 right-0 bottom-0 w-full h-full object-cover z-1"
                    />
                    <div>
                      <div className="absolute top-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent h-full w-full rounded-lg z-2"></div>
                    </div>
                    <div className="p-4 bg-[rgba(0,0,0,.9)] absolute bottom-0 left-0 right-0 text-white rounded-b-lg flex items-center gap-6 justify-between z-3">
                      <div className="flex justify-between items-center w-full">
                        <h6>{genre.name}</h6>
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
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
