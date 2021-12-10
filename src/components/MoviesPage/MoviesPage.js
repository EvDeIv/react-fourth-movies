import React from "react";
import { Link } from "react-router-dom";

import LoadSpiner from "../LoadSpiner/LoadSpiner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import MovieCard from "../MovieCard/MovieCard";

import * as apiServices from "../../services/apiServices";

import styled from "styled-components";

const Form = styled.form`
  margin: 0 auto;
  width: fit-content;
  height: fit-content;
  grid-column: 1/-1;
`;

const Input = styled.input`
  padding: 5px 10px;
  border: grey 2px solid;
  border-radius: 3px 0 0 3px;
  border-right-width: 0;
  &:focus {
    outline-style: none;
  }
`;

const Button = styled.button`
  cursor: pointer;
  padding: 5px 10px;
  border: none;
  background-color: #6d8cf0;
  border: #6d8cf0 2px solid;
  border-radius: 0 3px 3px 0;
  border-left-width: 0;
  &:active {
    transform: scaleX(1.05);
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

class MoviesPage extends React.Component {
  state = {
    input: "",
    query: "",
    page: 1,
    movies: [],
    isLoading: false,
  };

  componentDidMount() {
    if (this.props.location.search !== "") {
      this.setState({
        query: this.props.location.search,
        input: this.props.location.search.slice(1),
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.setState({ isLoading: true, page: 0, movies: [] });
      this.fetchMovies();
    }
  }

  fetchMovies = () => {
    apiServices
      .fetchMovieByQuery(this.state.query, this.state.page)
      .then((data) => {
        this.setState((prevState) => {
          return {
            movies: [...prevState.movies, ...data],
            isLoading: false,
            page: prevState.page + 1,
          };
        });
      });
  };

  handleInput = (e) => {
    this.setState({ input: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ query: this.state.input });
    this.props.history.replace({
      pathname: this.props.location.pathname,
      search: `${this.state.input}`,
    });
  };

  render() {
    const { match } = this.props;
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <Input
            type="text"
            placeholder="Print movie name"
            onChange={this.handleInput}
            value={this.state.input}
          />
          <Button type="submit">Find</Button>
        </Form>
        {this.state.movies.length > 0 &&
          this.state.movies.map((movie) => (
            <StyledLink to={`${match.url}/${movie.id}`} key={movie.id}>
              <MovieCard movie={movie} />
            </StyledLink>
          ))}
        {this.state.isLoading && <LoadSpiner />}
      </>
    );
  }
}

export default MoviesPage;
