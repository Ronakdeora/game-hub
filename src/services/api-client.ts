import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "2b7bf3bd757d47299eeeaeeb74a298e4",
  },
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
