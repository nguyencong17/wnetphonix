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

export const ListMovie = (props) => {
  const { listmovie, tag, label } = props;

  const pagination = {
    el: `.${tag}-swiper-pagination-custom`,
    clickable: true,
    renderBullet: function (index, className) {
      return (
        '<span className="!bg-[#999999] !rounded-[8px] !w-[16px] !h-[4px] inline-block' +
        className +
        '"></span>'
      );
    },
  };

  return (
    <div className={tag}>
      <div className="flex justify-between items-start">
        <h2 className="mb-12 text-[36px]">{label}</h2>
        <div className="flex gap-4 border border-bordercolor p-4 bg-[#1a1a1a] rounded-[8px] items-center">
          <div className={`${tag}-arrow-left arrow cursor-pointer bg-[#050505] p-2 rounded-[8px] border border-bordercolor`}>
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
          <div className={`${tag}-arrow-right arrow cursor-pointer bg-[#050505] p-2 rounded-[8px] border border-bordercolor`}>
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
        // onSwiper={setSwiperRef}
        slidesPerView={5}
        spaceBetween={30}
        modules={[Navigation, Pagination]}
        pagination={pagination}
        navigation={{
          nextEl: `.${tag}-arrow-left`,
          prevEl: `.${tag}-arrow-right`,
        }}
        className=""
      >
        {listmovie &&
          listmovie.map((movie) => (
            <SwiperSlide key={movie.id}>
              <Card movie={movie} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};
