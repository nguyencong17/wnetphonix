"use client";
import movieAPIs from "@/apis/movieAPIs";
import SwiperCoverflow from "@/components/CoverflowEffect/CoverflowEffect";
import Cta from "@/components/Cta/page";
import { ListMovieSlider } from "@/components/ListMovie/ListMovie";
import { getUpdatingList } from "@/store/actions/actions";
import { getUpdatingListSelector } from "@/store/selectors";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Movies() {

  // Redux
  const dispatch = useDispatch();

  //State
  const [action, setAction] = useState([]);
  const [anime, setAnime] = useState([]);
  const [china, setChina] = useState([]);
  const [korea, setKorea] = useState([]);
  const [usa, setUsa] = useState([]);
  const [vietnam, setVietnam] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch By Axios Client
  // ================================================
  useEffect(() => {
    async function fetchData() {
      try {
        // Get updating movies
        const updatingmovies = await movieAPIs.getUpdatingMovies(1);

        // Category: Action
        const action = await movieAPIs.getMoviesByCatgory("hanh-dong", 1);

        // Category: Anime
        const anime = await movieAPIs.getMoviesByCatgory("hoat-hinh", 1);

        // Country: China
        const china = await movieAPIs.getMoviesByCountry("trung-quoc", 1);

        // Country: Korea
        const korea = await movieAPIs.getMoviesByCountry("han-quoc", 1);

        // Country: USA
        const usa = await movieAPIs.getMoviesByCountry("au-my", 1);

        // Country: Vietnam
        const vietnam = await movieAPIs.getMoviesByCountry("viet-nam", 1);

        // Update state data
        // setNewlyMovies(newlymovies.data.items);
        setAction(action.data.items);
        setAnime(anime.data.items);
        setChina(china.data.items);
        setKorea(korea.data.items);
        setUsa(usa.data.items);
        setVietnam(vietnam.data.items);
        dispatch(getUpdatingList(updatingmovies.data.items));
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const updating = useSelector(getUpdatingListSelector);

  return (
    <>
      {/* <Slide /> */}
      <div className="container my-[46px] 2xl:mt-[100px] 2xl:!pl-[256px] 2xl:!pr-[256px] relative">
        <SwiperCoverflow listmovie={updating} loading={loading} />
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col gap-[50px]">
          <ListMovieSlider
            listmovie={action}
            slug={"hanh-dong"}
            tag={"action"}
            label={"Action"}
            loading={loading}
          />
          <ListMovieSlider
            listmovie={anime}
            slug={"hoat-hinh"}
            tag={"anime"}
            label={"Anime"}
            loading={loading}
          />
          <ListMovieSlider
            listmovie={china}
            slug={"trung-quoc"}
            tag={"china"}
            label={"China"}
            loading={loading}
          />
          <ListMovieSlider
            listmovie={korea}
            slug={"han-quoc"}
            tag={"korea"}
            label={"Korea"}
            loading={loading}
          />
          <ListMovieSlider
            listmovie={usa}
            slug={"au-my"}
            tag={"usa"}
            label={"USA"}
            loading={loading}
          />
          <ListMovieSlider
            listmovie={vietnam}
            slug={"viet-nam"}
            tag={"vietnam"}
            label={"Việt Nam"}
            loading={loading}
          />
        </div>
      </div>
      <Cta />
    </>
  );
}

export default Movies;
