import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:8000",
  withCredentials: true,
  withXSRFToken: true,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
})