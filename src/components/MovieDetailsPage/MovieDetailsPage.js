import { Link, Route } from "react-router-dom";

import Cast from "../Cast/Cast";
import Reviews from "../Reviews/Reviews";

import paths from "../../utils/paths";

function MovieDetailsPage() {
  return (
    <div>
      MovieDetailsPage
      <ul>
        <li key={1}>
          <Link to={paths.cast}>Cast</Link>
        </li>
        <li key={2}>
          <Link to={paths.reviews}>Reviews</Link>
        </li>
      </ul>
    </div>
  );
}

export default MovieDetailsPage;
