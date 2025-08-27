// src/api/movies.ts
import axios from "axios";
import type { FetchTypes } from "../types/fetchTypes";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";


const api = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
    language: "es-ES",
  },
});

export async function fetchPopularMovies(page = 1): Promise<FetchTypes> {
  const response = await api.get("/movie/popular", {
    params: { page },
  });
  return response.data;
}

export async function fetchMovieDetails(id: string) {
  const response = await api.get(`/movie/${id}`, {
    params: { append_to_response: "credits" },
  });
  return response.data;
}

export async function fetchMovieCredits(id: string) {
  const response = await axios.get(`${BASE_URL}/movie/${id}/credits`, {
    params: {
      api_key: API_KEY,
      language: "es-ES",
    },
  });
  return response.data;
}

export async function fetchActorDetails(id: string) {
  const response = await api.get(`/person/${id}`);
  return response.data;
}

export async function fetchActorMovies(id: string) {
  const response = await api.get(`/person/${id}/movie_credits`);
  return response.data.cast;
}