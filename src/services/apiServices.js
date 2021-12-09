import axios from "axios";

const basicUrl = "https://api.themoviedb.org/3";
const apiKey = "api_key=28f9f6761670d13a276960e831df3ebb";

const fetchPopularMovies = () => {
  return axios
    .get(`${basicUrl}/trending/all/day?${apiKey}`)
    .then((res) => res.data.results);
};

const fetchMovieByQuery = (query, page) => {
  return axios
    .get(`${basicUrl}/search/company?${apiKey}&query=${query}&page=${page}`)
    .then((res) => res.data.results);
};

export { fetchPopularMovies, fetchMovieByQuery };
