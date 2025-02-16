import { API_KEY } from "@/utils/constants";
import { axiosClient } from "./axiosClient";


const movieAPIs = {
  getMovieById(slug) {
    const url = `film/${slug}`
    return axiosClient.get(url);
  },
  searchMovies(query) {
    const url = `films/search?keyword=${query}`
    return axiosClient.get(url);
  },
  getMovieByYear(year,page) {
    const url = `films/nam-phat-hanh/${year}?page=${page}`
    return axiosClient.get(url);
  },
  getMoviesByCatgory(category, page) {
    const url = `films/the-loai/${category}?page=${page}`
    return axiosClient.get(url);
  },
  getMoviesByCountry(country, page) {
    const url = `films/quoc-gia/${country}?page=${page}`
    return axiosClient.get(url);
  },  
  getMoviesBySlug(slug, page) {
    const url = `films/the-loai/${slug}?page=${page}`
    return axiosClient.get(url);
  },
  // lay danh sach phim theo loai
  getListFilm(slug, page) {
    const url = `films/danh-sach/${slug}?page=${page}`
    return axiosClient.get(url);
  },

}

export default movieAPIs;