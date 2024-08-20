"use client";
import movieAPIs from "@/apis/movieAPIs";
import Cta from "@/components/Cta/page";
import { ListMovie } from "@/components/ListMovie/ListMovie";
import Slide from "@/components/Slide/Slide";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";

// import useSWR from "swr";
// // SWR
// const fetcher = (url) => fetch(url).then((res) => res.json());

function Movies() {
  const [trending, setTrending] = useState([]);
  const [toprated, setToprated] = useState([]);
  const [upcoming, setUpcoming] = useState([]);

  // Fetch By Axios Client
  // ================================================
  useEffect(() => {
    async function fetchData() {
      try {
        const trending = await movieAPIs.getAllMovies(1);
        const toprated = await movieAPIs.getMovieByLatest(2);
        const upcoming = await movieAPIs.getMovieByUpcoming(1);
        setTrending(trending.data.results);
        setToprated(toprated.data.results);
        setUpcoming(upcoming.data.results);
      } catch (error) {
        console.log(error);
      }

    };
    fetchData();
  }, [])

  // Fetch By Fetch WEBAPI
  // ================================================
  // useEffect(() => {
  //   const data = async () => {
  //     try {
  //       const res = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=dc3b868166ffb5e89b71f42b9958f8a7&language=en-US&page=1');
  //       const datamovie = await res.json();
  //       setListMovie(datamovie.results);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   data();
  // }, []);

  // Fetch By useSWR
  // ================================================
  // const { data, error, isLoading } = useSWR(
  //   "https://api.themoviedb.org/3/movie/popular?api_key=dc3b868166ffb5e89b71f42b9958f8a7&language=en-US&page=1&limit=10",
  //   fetcher
  // );
  // let listmovie = data?.results;
  // listmovie = listmovie?.slice(0, 10);
  // console.log("Trending Now ", listmovie);

  // if (error) return "An error has occurred.";
  // if (isLoading) return "Loading...";

  return (
    <>
      <Slide />
      <div className="py-[128px]">
        <div className="container mx-auto">
          <Badge className="bg-[#e50000] text-white rounded-lg px-5 py-4 text-[20px] leading-none ml-[50px]">
            Movies
          </Badge>
          <div className="border border-bordercolor p-[50px] rounded-lg -mt-[27px] flex flex-col gap-[50px]">
            <ListMovie listmovie={trending} tag={'trending'} label={"Trending Now"} />
            <ListMovie listmovie={toprated} tag={'toprated'} label={"Top Rated"} />
            <ListMovie listmovie={upcoming} tag={'upcoming'} label={"Comming Soon"} />
          </div>
        </div>
      </div>
      <Cta />
    </>
  );
}

export default Movies;
