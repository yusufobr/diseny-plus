import React from "react";
import logo from "./../assets/images/logo.png";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from "./HeaderItem";

function Header() {
  const menu = [
    {
      name: "HOME",
      icon: HiHome,
    },
    {
      name: "SEARCH",
      icon: HiMagnifyingGlass,
    },
    {
      name: "WATCH LIST",
      icon: HiPlus,
    },
    {
      name: "ORIGINALS",
      icon: HiStar,
    },
    {
      name: "MOVIES",
      icon: HiPlayCircle,
    },
    {
      name: "SERIES",
      icon: HiTv,
    },
  ];

  return (
    <div className="container p-4 flex justify-between items-center mx-auto max-w-screen-xl">
      <div>
        <img
          src={logo}
          title="Diseny logo"
          className="w-20 md:w-32 object-contain"
        />
      </div>
      <div>
        <nav className="flex gap-3">
            {menu.map((item) => <HeaderItem name={item.name} Icon={item.icon} />)}
        </nav>
      </div>
    </div>
  );
}

export default Header;
