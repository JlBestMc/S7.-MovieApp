import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MoviePage from "./MoviePage";

const queryClient = new QueryClient();

export default {
  title: "Pages/MoviePage",
  component: MoviePage,
};

export const Default = () => (
  <QueryClientProvider client={queryClient}>
    <MoviePage />
  </QueryClientProvider>
);
