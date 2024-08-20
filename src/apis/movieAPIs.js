import { API_KEY } from "@/utils/constants";
import { axiosClient } from "./axiosClient";


const movieAPIs = {
  getAllMovies(page) {
    const url = `movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`
    return axiosClient.get(url);
  },
  getMovieById(id) {
    const url = `movie/${id}?api_key=${API_KEY}`
    return axiosClient.get(url);
  },
  getMovieByLatest(page) {
    const url = `movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`
    return axiosClient.get(url);
  },
  getMovieByUpcoming(page) {
    const url = `movie/upcoming?api_key=${API_KEY}&language=en-US&page=${page}`
    return axiosClient.get(url);
  },
}

export default movieAPIs;