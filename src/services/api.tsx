import axios, { AxiosRequestConfig } from "axios";

const API_SERVER_URL = "https://api.github.com/";

const config: AxiosRequestConfig = {
  baseURL: API_SERVER_URL,
};

const api = axios.create(config);

export default api;
