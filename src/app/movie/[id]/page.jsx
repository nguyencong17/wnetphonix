"use client";
import movieAPIs from "@/apis/movieAPIs";
import IconButton from "@/components/IconButton/IconButton";
import Image from "next/image";
import * as React from "react";
import moment from "moment";
import Cta from "@/components/Cta/page";
import Link from "next/link";
import Ads from "../../../../public/ads.jpg";
import {
  BookmarkIcon,
  CursorArrowRippleIcon,
  ShareIcon,
} from "@heroicons/react/24/solid";
import { PLACEHOLDER } from "@/utils/constants";

const DetailMovie = ({ params }) => {
  // Get slug from params to fetch movie detail
  const slug = params.id;

  // State
  const [movie, setMovie] = React.useState({});

  // Fetch movie detail
  React.useEffect(() => {
    async function fetchData() {
      try {
        const movie = await movieAPIs.getMovieById(slug);
        // const cast_movie = await movieAPIs.getCastByMovie(slug);
        // let cast = cast_movie.data.cast.slice(0, 10);
        setMovie(movie.data.movie);
        console.log(movie.data.movie);
        // setCast(cast);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  // console.log(movie);
  // genres
  const category = movie.category;
  const values = Object.values(category || {});
  let genres = values[1];
  genres = genres && genres.list ? genres.list : [];

  // Format
  let format = values[0];
  format = format && format.list ? format.list : [];

  // Country
  let country = values[3];
  country = country && country.list ? country.list : [];

  // Year
  let year = values[2];
  year = year && year.list ? year.list : [];

  // description
  const desc = movie.description || "";
  const description = desc.replace(/<\/?p>/g, "");

  // Episodes
  let episodes = movie.episodes;
  // episodes = episodes ? episodes[0] : [];
  // episodes = episodes.items;

  return (
    <div className="mt-[64px]">
      <div className="container">
        <div className="movie-detail flex gap-8">
          <div className="w-full 2xl:w-[80%]">
            <div className="container">
              <div className="flex gap-10">
                <div className="w-full flex flex-col md:flex-row mx-auto md:space-x-8 2xl:-scroll-mt-16">
                  {/* Detail */}
                  <div className="flex-1 flex flex-col">
                    {/* Movie Name */}
                    <h2 className="text-[40px] mb-3 font-bold">
                      {movie.title || movie.name}
                    </h2>

                    {/* Movie Meta */}
                    <div className="flex mb-5 movie-format">
                      {year &&
                        year.map((item, index) => (
                          <p key={index} className="info">
                            {item.name}
                          </p>
                        ))}
                      {country &&
                        country.map((item, index) => (
                          <p key={index} className="info">
                            {item.name}
                          </p>
                        ))}
                      {format &&
                        format.map((item, index) => (
                          <p key={index} className="info">
                            {item.name}
                          </p>
                        ))}
                      <p className="info">{movie.current_episode}</p>
                    </div>

                    <div className="flex mb-5">
                      <p className="info !pl-0">{movie.language}</p>
                      {/* <p className="info">{movie.quality}</p> */}
                      {/* <p className="info">{year}</p> */}
                      <p className="info">Trọn bộ {movie.total_episodes} tập</p>
                    </div>

                    {/* Movie Genres */}
                    <div className="flex gap-4 mb-8">
                      {genres &&
                        genres.map((genre, index) => (
                          <p
                            key={index}
                            className="p-2 bg-[#535050] rounded-sm text-white text-[12px]"
                          >
                            {genre.name}
                          </p>
                        ))}
                    </div>

                    {/* Director */}
                    <p className="text-lg mb-6">
                      Đạo diễn :{" "}
                      <span className="text-white">
                        {movie.director || "Comming"}
                      </span>
                    </p>

                    {/* Cast */}
                    <p className="text-lg mb-6">
                      Diễn viên :{" "}
                      <span className="text-white">
                        {movie.casts || "Comming"}
                      </span>
                    </p>

                    {/* Movie Description */}
                    <p className="text-lg mb-8">
                      Miêu tả :{" "}
                      <span className="text-white">{description}</span>
                    </p>

                    {/* Action */}
                    <div className="flex gap-4">
                      <button className="font-bold flex items-center space-x-2 hover:text-white bg-[#535050] rounded-lg p-4 text-white">
                        <ShareIcon className="w-4 h-4 mr-2" />
                        Share
                      </button>
                      <button className="font-bold flex items-center space-x-2 hover:text-white bg-[#535050] rounded-lg p-4 text-white">
                        <CursorArrowRippleIcon className="w-4 h-4 mr-2" />
                        APP
                      </button>
                      <button className="font-bold flex items-center space-x-2 hover:text-white bg-[#535050] rounded-lg p-4 text-white">
                        <BookmarkIcon className="w-4 h-4 mr-2" />
                        Bookmark
                      </button>
                    </div>
                  </div>
                  {/* Thumbnail */}
                  <div className="w-[400px] flex justify-start">
                    <div className="w-[400px] h-[600px] relative">
                      <Image
                        src={movie.thumb_url || PLACEHOLDER}
                        width={600}
                        height={600}
                        alt={`${movie.name}`}
                        className="rounded-[8px] z-1 h-full object-cover"
                        quality={100}
                        objectPosition="center"
                      />
                      {/* <div className="absolute rounded-lg inset-0 bg-gradient-to-br from-[#050505]/100 via-transparent to-[#050505]/70"></div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container mt-8">
              {/* Episodes */}
              <div className="w-full gap-4">
                <h4 className="mb-4">Episodes</h4>
                <div className="">
                  {episodes &&
                    episodes.map((server, index) => (
                      <div key={index} className="mb-8">
                        <h6 className="text-white mb-4">
                          Server : {server.server_name}
                        </h6>
                        <div className="flex flex-wrap gap-2">
                          {server.items.map((episode, index) => (
                            <div className="cursor-pointer inline" key={index}>
                              <a
                                href={episode.embed}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <div className="p-4 bg-[rgba(255,255,255,0.2)] rounded-sm text-white">
                                  Tập {episode.name}
                                </div>
                              </a>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
          <div className="2xl:w-[20%]">
            <Image
              src={Ads}
              width={400}
              height={600}
              alt={`${movie.name}`}
              className="rounded-lg"
              quality={100}
            />
          </div>
        </div>
        <Cta />
      </div>
    </div>
  );
};

export default DetailMovie;
