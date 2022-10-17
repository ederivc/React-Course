import React from "react";
import { movies } from "../utils/movies";

const Movie = () => {
  return (
    <div>
      {movies.map((movie) => {
        <div></div>;
      })}
    </div>
  );
};

export default Movie;
