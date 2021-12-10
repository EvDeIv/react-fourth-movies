import React from "react";

import { NavLink, Route } from "react-router-dom";

import Cast from "../Cast/Cast";
import Reviews from "../Reviews/Reviews";
import LoadSpiner from "./../LoadSpiner/LoadSpiner";

import paths from "../../utils/paths";
import { fetchMovieById } from "../../services/apiServices";
import styled from "styled-components";

const Container = styled.div`
  grid-column: 1/-1;
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: min-content;
  grid-gap: 20px;
`;

const MovieImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const DescriptionSpan = styled.span`
  display: block;
  padding: 5px 0;
`;

const DescriptionP = styled.p`
  margin: 0;
`;

const NavLi = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-size: 20px;
  font-weight: bold;
  &.active {
    color: purple;
    font-size: 24px;
  }
`;

const List = styled.ul`
  padding: 0;
  margin: 0;
  grid-column: 1/-1;
  text-align: center;
`;

const ListItem = styled.li`
  padding: 0 10px;
  list-style: none;
  display: inline-block;
`;

class MovieDetailsPage extends React.Component {
  state = {
    movieImg: "",
    movieName: "",
    movieOverview: "",
    movieGenres: "",
    movieStatus: "",
    movieRating: "",
    movieVotes: "",
    movieCountries: "",
    isLoading: false,
  };

  componentDidMount() {
    this.setState({ isLoading: true });

    fetchMovieById(this.props.match.params.movieId).then((response) => {
      this.setState({
        movieImg: `https://image.tmdb.org/t/p/w500${response.poster_path}`,
        movieName: response.original_title,
        movieOverview: response.overview,
        movieGenres: response.genres.map((el) => el.name).join(","),
        movieStatus: response.status,
        movieRating: response.vote_average,
        movieVotes: response.vote_count,
        movieCountries: response.production_countries
          .map((el) => el.name)
          .join(","),
        isLoading: false,
      });
    });
  }

  render() {
    const { match } = this.props;

    return (
      <>
        <Container>
          <MovieImage src={this.state.movieImg} alt={this.state.movieName} />
          <div>
            <h2>{this.state.movieName}</h2>
            <DescriptionSpan>Rating: {this.state.movieRating}</DescriptionSpan>
            <DescriptionSpan>Votes: {this.state.movieVotes}</DescriptionSpan>
            <DescriptionSpan>
              Release status: {this.state.movieStatus}
            </DescriptionSpan>
            <DescriptionSpan>Genres: {this.state.movieGenres}</DescriptionSpan>
            <DescriptionSpan>Description:</DescriptionSpan>
            <DescriptionP>{this.state.movieOverview}</DescriptionP>
          </div>

          <List>
            <ListItem key={1}>
              <NavLi to={`${match.url}${paths.cast}`}>To Cast</NavLi>
            </ListItem>
            <ListItem key={2}>
              <NavLi to={`${match.url}${paths.reviews}`}>To Reviews</NavLi>
            </ListItem>
          </List>
        </Container>
        <Route
          path={`${match.url}${paths.cast}`}
          render={(props) => {
            return <Cast {...props} id={this.props.match.params.movieId} />;
          }}
        />
        <Route
          path={`${match.url}${paths.reviews}`}
          render={(props) => {
            return <Reviews {...props} id={this.props.match.params.movieId} />;
          }}
        />
        {this.state.isLoading && <LoadSpiner />}
      </>
    );
  }
}

export default MovieDetailsPage;
