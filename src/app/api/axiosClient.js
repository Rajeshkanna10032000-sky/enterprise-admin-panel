// src/app/api/axiosClient.js

import axios from "axios";
import env from "../config/env";

const axiosClient = axios.create({
  baseURL: env.API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Optional: Attach token automatically
axiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default axiosClient;