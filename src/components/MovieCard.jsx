import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const IMG_BASE = "https://www.themoviedb.org/t/p/w220_and_h330_face";

function MovieCard({ movie }) {
  return (
    <div className="relative">
      <img
        className="w-48 md:w-60 rounded-lg border-2 border-transparent hover:border-white cursor-pointer"
        src={IMG_BASE + movie.poster_path}
      />
      <div className="absolute bottom-[4%] left-[4%] w-9 bg-black rounded-full">
        <CircularProgressbar
          value={movie.vote_average * 10}
          text={`${movie.vote_average * 10}%`}
          strokeWidth={10}
          styles={buildStyles({
            textSize: "32px",
            pathColor: `${
              movie.vote_average < 5
                ? "#ff4545"
                : movie.vote_average < 6
                ? "#ffa534"
                : movie.vote_average < 7.5
                ? "#ffe234"
                : movie.vote_average < 8.5
                ? "#b7dd29"
                : "#57e32c"
            }`,
            textColor: "white",
            trailColor: "white",
          })}
        />
      </div>
    </div>
  );
}

export default MovieCard;
