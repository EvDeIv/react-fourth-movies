import React from "react";
import * as apiServices from "../../services/apiServices";

import LoadSpiner from "../LoadSpiner/LoadSpiner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import MovieCard from "../MovieCard/MovieCard";
import { Link } from "react-router-dom";
import paths from "../../utils/paths";
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

class Home extends React.Component {
  state = { movies: [], isLoading: false };

  componentDidMount() {
    this.setState({ isLoading: true });
    apiServices.fetchPopularMovies().then((data) => {
      this.setState({ movies: data, isLoading: false });
    });
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <>
        {isLoading && <LoadSpiner />}
        {movies.length > 0 &&
          movies.map((movie) => (
            <StyledLink to={`${paths.movies}/${movie.id}`} key={movie.id}>
              <MovieCard key={movie.id} movie={movie} />
            </StyledLink>
          ))}
      </>
    );
  }
}

export default Home;
