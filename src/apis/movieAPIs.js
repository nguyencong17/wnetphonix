// src/apis/movieAPIs.js
import { axiosClient } from "./axiosClient";

const movieAPIs = {
  // Lấy danh sách phim bộ/lẻ chung
  // Slug có thể là 'phim-bo' hoặc 'phim-le'
  getListFilm(slug, page = 1) {
    const url = `/films/danh-sach/${slug}?page=${page}`;
    return axiosClient.get(url);
  },

  // Lấy chi tiết một bộ phim
  getMovieDetail(slug) {
    const url = `/film/${slug}`;
    return axiosClient.get(url);
  },

  // Các hàm lọc phim
  getMoviesByCategory(categorySlug, page = 1) {
    const url = `/films/the-loai/${categorySlug}?page=${page}`;
    return axiosClient.get(url);
  },

  getMoviesByCountry(countrySlug, page = 1) {
    const url = `/films/quoc-gia/${countrySlug}?page=${page}`;
    return axiosClient.get(url);
  },

  getMoviesByYear(year, page = 1) {
    const url = `/films/nam-phat-hanh/${year}?page=${page}`;
    return axiosClient.get(url);
  },

  // Tìm kiếm phim
  searchMovies(keyword, page = 1) {
    const url = `/films/search?keyword=${keyword}&page=${page}`;
    return axiosClient.get(url);
  },
};

export default movieAPIs;