import axios from "axios";
import { TMDB_API } from "../config/tmdb";

const tmdb = axios.create({
  baseURL: TMDB_API.baseURL,
  params: {
    api_key: import.meta.env.VITE_TMDB_API_KEY,
    language: "es-ES",
  },
});

export default tmdb;
