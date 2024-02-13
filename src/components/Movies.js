import React from "react";
import { movies } from "../data";

function Movies() {
  const movieItems = movies.map((movies) => (
    <div key={movies.title}>
      <h2>{movies.title}</h2>
      <p>Runtime: {movies.time} min.</p>
      <ul>
        {movies.genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  ));

  return (
    <div>
      <h1>Movies Page</h1>
      {movieItems}
    </div>
  )
}

export default Movies;
