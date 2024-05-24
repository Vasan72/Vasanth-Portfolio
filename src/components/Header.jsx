import React, { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import logo from '../assets/logo.png';

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <header className=" w-full fixed top-0 flex justify-between items-center  px-8 py-2 z-50  md:py-[15px] bg-header">
      <a href="/" className="pl-3 md:pl-10 ">
        <img src={logo} className="w-[45px] "/>
      </a>
      <nav className="hidden md:block">
        <ul className="flex gap-3 ">
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
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#certification">Certification</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      {toggleMenu && (
        <nav className="block md:hidden ">
          <ul
            onClick={() => setToggleMenu(!toggleMenu)}
            className="flex text-white flex-col text-center mobile-nav"
          >
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
              <a href="#experience">Experience</a>
            </li>
            <li className="py-2">
              <a href="#skills">Skills</a>
            </li>
            <li className="py-2">
              <a href="#certification">Certification</a>
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
