import axios from "axios";
import { API_HOST, API_HOST_2 } from "@/utils/constants";

export const axiosClient = axios.create({ baseURL: `${API_HOST}`, headers: { 'Content-type' : 'application/json', } })
export const axiosClient2 = axios.create({ baseURL: `${API_HOST_2}`, headers: { 'Content-type' : 'application/json', } })