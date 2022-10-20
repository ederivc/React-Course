import React from "react";
import { movies } from "../../utils/movies";
import style from "./movie.module.css";

const Movie = () => {
  return (
    <div>
      {movies.map((movie) => {
        return (
          <div key={`movie-list-${movie.id}`} className={`${style.container}`}>
            <p>{movie.name}</p>
            <p>{movie.genre}</p>
            <p>{movie.language}</p>
            <p>{movie.descirption}</p>
            <img src={movie.image} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default Movie;
