// src/apis/axiosClient.js (hoặc đường dẫn tương ứng của bạn)
import axios from "axios";
import { API_HOST } from "@/utils/constants";

export const axiosClient = axios.create({
  // Thêm kiểm tra để tránh lỗi undefined khi biến môi trường chưa load kịp
  baseURL: API_HOST || "https://phim.nguonc.com/api", 
  // baseURL: "/api-nguonc",
  headers: {
    'Content-type': 'application/json',
  },
});