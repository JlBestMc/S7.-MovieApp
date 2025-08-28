import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MoviePage from "./MoviePage";

const queryClient = new QueryClient();

export default {
  title: "Pages/MoviePage",
  component: MoviePage,
    parameters: {
      layout: "fullscreen",
      docs: {
        description: {
          component:
            "MoviePage is a complete page component that combines the Navbar and Main content areas. It represents the main movie listing or detail page of the application.",
        },
      },
    },
    tags: ["autodocs"],
};

export const Default = () => (
  <QueryClientProvider client={queryClient}>
    <MoviePage />
  </QueryClientProvider>
);
