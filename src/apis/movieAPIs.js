import { API_KEY } from "@/utils/constants";
import { axiosClient, axiosClient2 } from "./axiosClient";


const movieAPIs = {
  getAllMovies(page) {
    const url = `movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`
    return axiosClient.get(url);
  },
  getMovieById(slug) {
    // const url = `movie/${id}?api_key=${API_KEY}`
    const url = `film/${slug}`
    return axiosClient2.get(url);
  },
  getMovieByLatest(page) {
    const url = `movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`
    return axiosClient.get(url);
  },
  getMovieByUpcoming(page) {
    const url = `movie/upcoming?api_key=${API_KEY}&language=en-US&page=${page}`
    return axiosClient.get(url);
  },
  getGenres() {
    const url = `genre/movie/list?api_key=${API_KEY}`
    return axiosClient.get(url);
  },
  getMoviesByGenre(id) {
    const url = `movie/popular?api_key=${API_KEY}&genre_ids=${id}`
    return axiosClient.get(url);
  },
  getCastByMovie(id) {
    const url = `movie/${id}/credits?api_key=${API_KEY}`
    return axiosClient.get(url);
  },
  // searchMovies(query) {
  //   const url = `search/movie?api_key=${API_KEY}&query=${query}`
  //   return axiosClient.get(url);
  // },
  searchMovies(query) {
    const url = `films/search?keyword=${query}`
    return axiosClient2.get(url);
  },
  getVideosByMovie(id) {
    const url = `movie/${id}/videos?api_key=${API_KEY}`
    return axiosClient.get(url);
  },
  getUpdatingMovies(page) {
    const url = `films/danh-sach/phim-dang-chieu?page=${page}`
    return axiosClient2.get(url);
  },
  getMoviesByCatgory(category, page) {
    const url = `films/the-loai/${category}?page=${page}`
    return axiosClient2.get(url);
  },
  getMoviesByCountry(country, page) {
    const url = `films/quoc-gia/${country}?page=${page}`
    return axiosClient2.get(url);
  },  
  getMoviesBySlug(slug, page) {
    const url = `films/the-loai/${slug}?page=${page}`
    return axiosClient2.get(url);
  },
}

export default movieAPIs;