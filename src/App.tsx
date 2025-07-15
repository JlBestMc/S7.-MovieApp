import axios from "axios";

axios
  .get("https://api.themoviedb.org/3/movie/popular", {
    params: {
      api_key: import.meta.env.VITE_TMDB_API_KEY,
    },
  })
  .then((res) => {
    console.log(res.data.results);
  });
