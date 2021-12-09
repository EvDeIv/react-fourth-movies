import React from "react";
import { NavLink, Route, Switch, Redirect } from "react-router-dom";

import Home from "./Home/Home";
import MoviesPage from "./MoviesPage/MoviesPage";
import MovieDetailsPage from "./MovieDetailsPage/MovieDetailsPage";

import paths from "../utils/paths";

class App extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <NavLink
              exact
              to={paths.home}
              className="Nav"
              activeClassName="Nav-active"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={paths.movies}
              className="Nav"
              activeClassName="Nav-active"
            >
              Movies
            </NavLink>
          </li>
        </ul>
        <Switch>
          <Route path={paths.home} exact component={Home} />
          <Route path={paths.movie} component={MovieDetailsPage} />
          <Route path={paths.movies} component={MoviesPage} />
          <Route>
            <Redirect to={paths.home} />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;

// '/' - компонент <HomePage>, домашняя страница со списком популярных кинофильмов.
// '/movies' - компонент <MoviesPage>, страница поиска фильмов по ключевому слову.
// '/movies/:movieId' - компонент <MovieDetailsPage>, страница с детальной информацией о кинофильме.
// /movies/:movieId/cast - компонент <Cast>, информация о актерском составе. Рендерится на странице <MovieDetailsPage>.
// /movies/:movieId/reviews - компонент <Reviews>, информация об обзорах. Рендерится на странице <MovieDetailsPage>.
