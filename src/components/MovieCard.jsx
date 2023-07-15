import React from "react";

const IMG_BASE = "https://www.themoviedb.org/t/p/w220_and_h330_face";

function MovieCard({ movie }) {
  return (
    <>
      <img
        className="w-24 md:w-48 rounded-lg border-2 border-transparent hover:border-white cursor-pointer"
        src={IMG_BASE + movie.poster_path}
      />
    </>
  );
}

export default MovieCard;
