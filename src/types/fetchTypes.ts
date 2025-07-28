import type { Movie } from "./movieTypes";

export interface FetchTypes {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}
