import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { getTrendingVideos } from "../Services/GlobalApi";
import "@splidejs/react-splide/css";
import SliderLoading from "./SliderLoading";
import genere from "../Constant/GenreList";

const IMG_BASE = "https://image.tmdb.org/t/p/original";

function Slider() {
  const [movieList, setMovieList] = useState([]);

  const options = {
    type: "loop",
    gap: "1rem",
    autoplay: true,
    pauseOnHover: true,
    resetProgress: false,
  };

  const findGenreNameById = (id) => {
    const genre = genere.find((genre) => genre.id === id);
    return genre ? genre.name : "";
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
    <>
      {movieList.length === 0 ? (
        <SliderLoading />
      ) : (
        <div className="max-w-screen-xl my-4 px-4 mx-auto drop-shadow-2xl">
          <Splide options={options} aria-label="My Favorite Images">
            {movieList.map((item) => (
              <SplideSlide>
                <div className="px-2 relative overflow-hidden ">
                  <div className="absolute z-10 bottom-6 left-8 ">
                    <span className="text-2xl font-semibold">
                      {item?.title || item?.name}
                    </span>
                    <div className="flex gap-2 mt-1 text-gray-200">
                      {item.genre_ids.map((item) => (
                        findGenreNameById(item) !== "" ? <span className="px-2 py-1 bg-[#80808050] text-xs rounded-md">{findGenreNameById(item)}</span> : ''
                      ))}
                    </div>
                  </div>

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
      )}
    </>
  );
}

export default Slider;
