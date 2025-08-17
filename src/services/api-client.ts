import axios, { type AxiosRequestConfig } from "axios";

export interface DataResponse<T> {
  count: number;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "2b7bf3bd757d47299eeeaeeb74a298e4",
  },
  headers: {
    "Content-Type": "application/json",
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll(config?: AxiosRequestConfig) {
    return axiosInstance.get<DataResponse<T>>(this.endpoint, config);
  }
}

export default APIClient;
