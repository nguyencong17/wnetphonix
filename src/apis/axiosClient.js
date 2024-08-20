import axios from "axios";
import { API_HOST } from "@/utils/constants";

export const axiosClient = axios.create({
  baseURL: `${API_HOST}`,
  headers: {
    'Content-type' : 'application/json',
  }
})