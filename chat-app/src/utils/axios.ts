import axios, { AxiosInstance } from "axios";
import promise from "promise";

const URL = process.env.REACT_APP_API_URL || "http://localhost:3001";
export const axiosInstance: AxiosInstance = axios.create({
  baseURL: URL,
  headers: {
    "Access-Control-Allow-Origin": "*",
    Accept: "*/*",
  },
});

axiosInstance.interceptors.request.use(
  async function (config: any) {
    config.headers["Access-Control-Allow-Origin"] = "*";
    config.headers["Access-Control-Allow-Methods"] =
      "GET, POST, PATCH, DELETE, OPTIONS";
    config.headers["Access-Control-Allow-Headers"] =
      "Origin, Content-Type, X-Auth-Token";
    return config;
  },
  function (error) {
    return promise.reject(error);
  }
);

export default axiosInstance;
