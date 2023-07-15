import React, { useState, useEffect } from "react";
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
  const [toggle, setToggle] = useState(false)

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
          className="w-28 lg:w-32 object-contain"
        />
      </div>
      <div className="flex gap-4 items-center">
        <nav className="hidden lg:flex gap-3">
            {menu.map((item) => <HeaderItem name={item.name} Icon={item.icon} />)}
        </nav>
        <nav className="flex lg:hidden gap-3 relative">
            {menu.map((item, index) => index<3 && <HeaderItem name={''} Icon={item.icon} />)}
            <div className="lg:hidden" onClick={() => {
              setToggle(!toggle)
              setTimeout(() => {
                setToggle(false);
              }, 4000);
            }}>
              <HeaderItem name={''} Icon={HiDotsVertical} />
            </div>
            {toggle ? 
              <div className="absolute z-20 top-10 right-6 border-2 py-1 pb-2 px-4 bg-black">
                {menu.map((item, index) => index>3 && <HeaderItem name={item.name} Icon={item.icon} />)}
              </div>
            : null}
        </nav>
        <div className="w-[40px] lg:hidden">
          <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
          className='rounded-full'/>
        </div>
      </div>
    </div>
  );
}

export default Header;
