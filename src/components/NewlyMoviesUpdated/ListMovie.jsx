import React from "react";
import { Card } from "../Card/Card";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export const ListMovie = (props) => {
  const { tag, label } = props;
  let listmovie = props.listmovie;
  return (
    <div className={tag}>
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-[36px]">{label}</h2>
        <h6 className="mt-4 pb-1 border-b-2 cursor-pointer text-white">Show More</h6>
      </div>

      <div className="grid grid-cols-5 gap-4">
        {listmovie && listmovie.map((movie, index) => <Card key={index} movie={movie} />)}
      </div>
    </div>
  );
};
