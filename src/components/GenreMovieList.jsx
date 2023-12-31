import React from "react";
import genere from "../Constant/GenreList";
import MovieList from "./MovieList";

function GenreMovieList() {
  return (
    <div className="container max-w-screen-xl mx-auto my-4 mb-20">
      {genere.map(
        (item, index) =>
          index <= 4 && (
            <div className="p-2 md:p-8">
              <h2 className="text-lg text-white ml-3 font-semibold mb-4">{item.name}</h2>
              <MovieList id={item.id} />
            </div>
          )
      )}
    </div>
  );
}

export default GenreMovieList;
