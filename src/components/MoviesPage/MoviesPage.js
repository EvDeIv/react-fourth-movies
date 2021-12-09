import React from "react";

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

class MoviesPage extends React.Component {
  state = {
    input: "",
    query: "",
    page: 1,
    movies: [],
    isLoading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.setState({ isLoading: true });
      apiServices
        .fetchMovieByQuery(this.state.query, this.state.page)
        .then((data) => {
          this.setState({
            movies: data,
            isLoading: false,
            page: (prevState.page += 1),
          });
        });
    }
    console.log(prevState.query, this.state.query);
  }

  handleInput = (e) => {
    this.setState({ input: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ query: this.state.input });
  };

  render() {
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <Input
            type="text"
            placeholder="Print movie name"
            onChange={this.handleInput}
          />
          <Button type="submit">Find</Button>
        </Form>
        {this.state.movies.length > 0 &&
          this.state.movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        {this.state.isLoading && <LoadSpiner />}
      </>
    );
  }
}

export default MoviesPage;
