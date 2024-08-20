"use client";
import movieAPIs from "@/apis/movieAPIs";
import IconButton from "@/components/IconButton/IconButton";
import Image from "next/image";
import * as React from "react";
import moment from "moment";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';
// import required modules
import { Navigation } from "swiper/modules";
import { Pagination } from 'swiper/modules';
import Cta from "@/components/Cta/page";

const DetailMovie = ({ params }) => {
  const movieId = params.id;
  const [movie, setMovie] = React.useState({});
  const [cast, setCast] = React.useState({});
  React.useEffect(() => {
    async function fetchData() {
      try {
        const movie = await movieAPIs.getMovieById(movieId);
        const cast_movie = await movieAPIs.getCastByMovie(movieId);
        let cast = cast_movie.data.cast.slice(0, 10);
        setMovie(movie.data);
        setCast(cast);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  // date
  const dateString = movie.release_date;
  const year = moment(dateString).year();

  // genres
  const genres = movie.genres;
  console.log(cast);
  return (
    <>
    <div>
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row content-center mx-auto md:space-x-6">
          <div className="relative w-[500px] inline-block">
            <Image
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              width={500}
              height={750}
              alt={movie.title}
              className="rounded-[8px] absolute top-0 left-0 right-0 bottom-0 w-full h-full object-cover z-1"
            />
            <div className="absolute top-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent h-full w-full rounded-lg z-2"></div>
          </div>

          <div className="flex-1 flex flex-col">
            <div className="bg-[#1a1a1a] p-[32px] rounded-lg border-2 border-bordercolor">
              <h2 className="text-[36px] mb-3 font-bold">
                {movie.title || movie.name}
              </h2>
              <p className="text-lg mb-6">{movie.overview}</p>
              <IconButton label={"Watch Movie"} />
            </div>

            <div className="bg-[#1A1A1A] p-[32px] rounded-lg mt-[32px] flex-1 border-2 border-bordercolor">
              <div className="grid grid-cols-3 gap-4">
                {/* Release */}
                <div className="mb-8">
                  <p className="font-semibold flex items-center gap-2 mb-4 text-[18px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                      />
                    </svg>
                    Released Year
                  </p>
                  <p className="text-white font-bold text-[20px]">
                    {year || "Not Available"}
                  </p>
                </div>

                {/* Language */}
                <div className="mb-8">
                  <p className="font-semibold flex items-center gap-2 mb-4 text-[18px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                      />
                    </svg>
                    Available Language
                  </p>
                  <p className="text-white font-bold text-[20px] uppercase p-2 bg-[#141414] inline-flex gap-4 rounded-[4px] border-2 border-bordercolor w-[96px] justify-center">
                    {movie.original_language || "Not Available"}
                  </p>
                </div>
              </div>

              {/* Rating */}
              <div className="mb-8">
                <p className="font-semibold flex gap-2 mb-4 text-[18px]">
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
                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                    />
                  </svg>
                  Rating
                </p>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-[20px] bg-[#141414] rounded-[8px] p-4">
                    <p className="text-white mb-1 font-bold">IMDbs</p>
                    {movie.vote_average || "Not Available"}
                  </div>
                  <div className="text-[20px] bg-[#141414] rounded-[8px] p-4">
                    <p className="text-white mb-1 font-bold">Counts</p>
                    {movie.vote_count}
                  </div>
                </div>
              </div>

              {/* Genres */}
              <div className="">
                <p className="font-semibold flex items-center gap-2 mb-4 text-[18px]">
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
                      d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3"
                    />
                  </svg>
                  Genres
                </p>
                {genres && Array.isArray(genres) && genres.length > 0 ? (
                  genres.map((genre) => (
                    <p
                      key={genre.id}
                      className="text-white font-bold text-[14px] uppercase p-2 bg-[#141414] inline-flex gap-4 rounded-[4px] border-2 border-bordercolor justify-center mr-2"
                    >
                      {genre.name}
                    </p>
                  ))
                ) : (
                  <p>No genres available</p> // Optional: Message or fallback UI
                )}
              </div>
              {/* Director */}

              {/* Music */}
            </div>
          </div>
        </div>

        <div className="border-2 border-bordercolor bg-[#1a1a1a] mt-8 p-8 rounded-lg">
          <h3 className="mb-4">Cast</h3>
          <Swiper
            navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
            pagination={false}
            modules={[Navigation, Pagination]}
            loop={true}
            className="mySwiper"
            autoHeight={false}
            slidesPerView={7}
            spaceBetween={30}
          >
            {cast && Array.isArray(cast) && cast.length > 0 ? (
              cast.map((actor) => (
                <SwiperSlide
                  key={actor.id}
                  className="flex flex-col items-center mr-8 bg-[#050505] rounded-lg border-2 border-bordercolor p-2"
                >
                  <Image
                    src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                    width={200}
                    height={200}
                    alt={actor.name}
                    className="rounded-t-lg mb-2 w-[200px] h-[200px] object-cover"
                  />
                  <p className="text-white text-center py-4 font-semibold">{actor.name}</p>
                </SwiperSlide>
              ))
            ) : (
              <p>No genres available</p>
            )}
          </Swiper>
        </div>
      </div>
    </div>
    <Cta/>
    </>
  );
};

export default DetailMovie;
