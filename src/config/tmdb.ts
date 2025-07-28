// src/api/movies.ts
import axios from "axios";
import type { FetchTypes } from "../types/fetchTypes";

const BASE_URL = "https://api.themoviedb.org/3/movie/popular";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export async function fetchPopularMovies(page = 1): Promise<FetchTypes> {
  const response = await axios.get<FetchTypes>(`${BASE_URL}/movie/popular`, {
    params: {
      api_key: API_KEY,
      page,
    },
  });

  return response.data;
}
