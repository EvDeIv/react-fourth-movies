import axios from "axios";

const basicUrl = "https://api.themoviedb.org/3";
const apiKey = "api_key=28f9f6761670d13a276960e831df3ebb";

const fetchPopularMovies = () => {
  return axios
    .get(`${basicUrl}/trending/movie/day?${apiKey}`)
    .then((res) => res.data.results);
};

const fetchMovieByQuery = (query, page) => {
  return axios
    .get(
      `${basicUrl}/search/movie?${apiKey}&query=${query}&page=${page}&language=en-US`
    )
    .then((res) => res.data.results);
};

const fetchMovieById = (id) => {
  return axios
    .get(`${basicUrl}/movie/${id}?${apiKey}&language=en-US`)
    .then((res) => res.data);
};

const fetchCastById = (id) => {
  return axios
    .get(`${basicUrl}/movie/${id}/credits?${apiKey}&language=en-US`)
    .then((res) => res.data);
};

const fetchReviewsById = (id) => {
  return axios
    .get(`${basicUrl}/movie/${id}/reviews?${apiKey}&language=en-US&page=1`)
    .then((res) => res.data);
};

export {
  fetchPopularMovies,
  fetchMovieByQuery,
  fetchMovieById,
  fetchCastById,
  fetchReviewsById,
};
