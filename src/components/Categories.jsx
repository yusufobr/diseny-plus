import React from "react";

import disney from "../assets/images/disney.png";
import disneyV from "../assets/videos/disney.mp4";
import marvel from "../assets/images/marvel.png";
import marvelV from "../assets/videos/marvel.mp4";
import pixar from "../assets/images/pixar.png";
import pixarV from "../assets/videos/pixar.mp4";
import starwar from "../assets/images/starwar.png";
import starwarV from "../assets/videos/star-wars.mp4";
import nationalG from "../assets/images/nationalG.png";
import nationalGV from "../assets/videos/national-geographic.mp4";

function Categories() {
  const categoriesList = [
    {
      id: 1,
      image: disney,
      video: disneyV,
    },
    {
      id: 2,
      image: pixar,
      video: pixarV,
    },
    {
      id: 3,
      image: marvel,
      video: marvelV,
    },
    {
      id: 4,
      image: starwar,
      video: starwarV,
    },
    {
      id: 5,
      image: nationalG,
      video: nationalGV,
    },
  ];

  return (
    <div className="container mx-auto px-4 max-w-screen-xl">
      <div className="flex justify-between gap-4">
        {categoriesList.map((item) => (
          <div
            key={item.id}
            className="relative group border-2 border-transparent border-white border-opacity-20 hover:border-white shadow-xl shadow-gray-800 rounded-xl hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer drop-shadow-xl"
          >
            <video
              autoPlay
              loop
              playsInline
              src={item.video}
              className="absolute opacity-0 group-hover:opacity-60 -z-10 top-0 rounded-xl"
            />
            <img className="" src={item.image} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
