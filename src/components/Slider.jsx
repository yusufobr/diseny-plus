import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import {getTrendingVideos} from "../Services/GlobalApi";
import "@splidejs/react-splide/css";

const IMG_BASE = "https://image.tmdb.org/t/p/original";

function Slider() {
  const [movieList, setMovieList] = useState([]);

  const options = {
    type         : 'loop',
    gap          : '1rem',
    autoplay     : true,
    pauseOnHover : true,
    resetProgress: false,
    
  };

  const getTrendingMovies = () => {
    getTrendingVideos.then((res) => {
      setMovieList(res.data.results);
      console.log(movieList);
    });
  };

  useEffect(() => {
    getTrendingMovies();
  }, []);

  return (
    <div className="max-w-screen-xl my-4 px-4 mx-auto drop-shadow-2xl">
      <Splide options={options} aria-label="My Favorite Images">
        {movieList.map((item) => (
          <SplideSlide>
            <div className="px-2 relative overflow-hidden ">
              <span className="absolute z-10 bottom-8 left-8 text-2xl font-semibold">
                {item?.title || item?.name}
              </span>

              <div className="relative overflow-hidden rounded-lg border-2 border-transparent hover:border-white">
                <div className="absolute bottom-0 w-full h-[30%] bg-gradient-to-t from-black to-transparent"></div>
                <img
                  className="rounded-lg min-w-full h-[350px] object-cover"
                  src={IMG_BASE + item.backdrop_path}
                  title={item?.title || item?.name}
                  alt={item?.title}
                />
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}

export default Slider;
