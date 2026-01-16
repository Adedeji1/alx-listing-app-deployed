import axios from "axios";

const api = axios.create({
  baseURL: "/api", // can be your backend endpoint
  timeout: 10000,
});

export default api;
