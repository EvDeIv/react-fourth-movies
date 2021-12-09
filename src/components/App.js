import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Home from "./Home/Home";
import MoviesPage from "./MoviesPage/MoviesPage";
import MovieDetailsPage from "./MovieDetailsPage/MovieDetailsPage";
import Layout from "./Layout/Layout";

import paths from "../utils/paths";
import Header from "./Header/Header";

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Layout>
          <Switch>
            <Route path={paths.home} exact component={Home} />
            <Route path={paths.movie} component={MovieDetailsPage} />
            <Route path={paths.movies} component={MoviesPage} />
            <Route>
              <Redirect to={paths.home} />
            </Route>
          </Switch>
        </Layout>
      </>
    );
  }
}

export default App;

// '/' - компонент <HomePage>, домашняя страница со списком популярных кинофильмов.
// '/movies' - компонент <MoviesPage>, страница поиска фильмов по ключевому слову.
// '/movies/:movieId' - компонент <MovieDetailsPage>, страница с детальной информацией о кинофильме.
// /movies/:movieId/cast - компонент <Cast>, информация о актерском составе. Рендерится на странице <MovieDetailsPage>.
// /movies/:movieId/reviews - компонент <Reviews>, информация об обзорах. Рендерится на странице <MovieDetailsPage>.
