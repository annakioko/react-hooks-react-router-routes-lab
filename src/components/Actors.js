import React from "react";
import { actors } from "../data";

const Actors = () => {
  const actorItems = actors.map((actor) => (
    <div key={actorItems.name}>
      <h2>{actorItems.name}</h2>
      <ul>
        {actorItems.movies.map((movie) => (
          <li key={movie}>{movie}</li>
        ))}
      </ul>
    </div>
  ));

  return (
    <div>
      <h1>Actors Page</h1>
      {actorItems}
    </div>
  )
  
}

export default Actors;
