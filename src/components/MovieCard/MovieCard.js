function MovieCard({ movie }) {
  const name = movie.name || movie.original_title;
  return (
    <div>
      <img
        style={{ maxWidth: "100%" }}
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={name}
      />
      <h3>{name}</h3>
      <span>{movie.vote_average}</span>
    </div>
  );
}

export default MovieCard;
