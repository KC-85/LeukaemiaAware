// src/api/axios.js
import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.VUE_APP_API_URL || "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.response.use(
  response => response,
  error => {
    console.error("API error:", error);
    return Promise.reject(error);
  }
);

export default apiClient;
