import React, { useEffect, useState } from "react";
import { getMovieByGenreId } from "../Services/GlobalApi";
import MovieCard from "./MovieCard";
import { Splide, SplideSlide } from "@splidejs/react-splide";

function MovieList({ id }) {
  const [movies, setMovies] = useState([]);

  const options = {
    type: "loop",
    perPage: "auto",
    clones: 5,
    gap: "1rem",
    focus: "none",
    autoplay: true,
    pauseOnHover: true,
    resetProgress: false,
  };

  const getMovies = () =>
    getMovieByGenreId(id).then((res) => {
      console.log(res.data.results);
      setMovies(res.data.results);
    });

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="">
      <Splide options={options}>
        {movies.map((item, index) => index<20 && (
          <SplideSlide>
            <MovieCard movie={item} />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}

export default MovieList;
