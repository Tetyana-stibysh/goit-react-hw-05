import axios from "axios";
const myApiKey =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNmVmYzczZjQzMTE1NDQwMjdiOTJjMTQ3ODFiODc3NSIsIm5iZiI6MTczODMxNTcwOS40MjEsInN1YiI6IjY3OWM5N2JkYTliNGIxMjhmYjRkMWY1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.66lVoSX10e82bgRmYOxP9kc9o76aBib3QEytT60sCFM";
const URL = "https://api.themoviedb.org/3/";
axios.defaults.headers.common["Authorization"] = `Bearer ${myApiKey}`;
axios.defaults.headers.common["accept"] = "application/json";
axios.defaults.baseURL = URL;

export const fetchTrending = async () => {
  const response = await axios("trending/movie/week");
  return response.data;
};
export const fetchByQuery = async (query) => {
  const response = await axios.get("search/movie", {
    params: {
      query,
    },
  });
  return response.data;
};
export const fetchDetailsMovie = async (id) => {
  const response = await axios.get(`movie/${id}`);
  return response.data;
};
export const fetchCastsMovie = async (id) => {
  const response = await axios.get(`movie/${id}/credits`);
  return response.data;
};
export const fetchMovieReviews = async (id) => {
  const response = await axios.get(`movie/${id}/reviews`);
  return response.data;
};

// fetchDetailsMovie("402431")
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));
