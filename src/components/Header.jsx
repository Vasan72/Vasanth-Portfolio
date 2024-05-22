import React, { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <header className="flex justify-between px-8 py-2 md:py-8 bg-header">
      <a href="/" className="font-bold text-color text-xl ">
        Vasanthakumar
      </a>
      <nav className="hidden md:block">
        <ul className="flex ">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#project">Project</a>
          </li>
          <li>
            <a href="#resume">Resume</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      {toggleMenu && (
        <nav className="block md:hidden ">
          <ul onClick= {() => setToggleMenu(!toggleMenu)} className="flex text-white flex-col text-center mobile-nav">
            <li className="py-2">
              <a href="/">Home</a>
            </li>
            <li className="py-2">
              <a href="#about">About</a>
            </li>
            <li className="py-2">
              <a href="#project">Project</a>
            </li>
            <li className="py-2">
              <a href="#resume">Resume</a>
            </li>
            <li className="py-2">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      )}
      <button
        className="block md:hidden"
        onClick={() => setToggleMenu(!toggleMenu)}
      >
        <Bars3Icon className="text-black h-5" />
      </button>
    </header>
  );
};

export default Header;
