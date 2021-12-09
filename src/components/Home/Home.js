import React from "react";
import * as apiServices from "../../services/apiServices";

import LoadSpiner from "../LoadSpiner/LoadSpiner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import MovieCard from "../MovieCard/MovieCard";

class Home extends React.Component {
  state = { movies: [], isLoading: false };

  componentDidMount() {
    this.setState({ isLoading: true });
    apiServices.fetchPopularMovies().then((data) => {
      this.setState({ movies: data, isLoading: false });
    });
  }

  render() {
    return (
      <>
        {this.state.isLoading && <LoadSpiner />}
        {this.state.movies.length > 0 &&
          this.state.movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
      </>
    );
  }
}

export default Home;
