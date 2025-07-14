import { Bars3Icon } from '@heroicons/react/24/solid';
import { useState } from 'react';

export const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header id="header" className="fixed top-0 left-0 w-full flex justify-between px-5 py-3 bg-primary z-50 shadow-md">
      <a className="font-bold text-black" href="#">
        Keerthana Kannan
      </a>

      {/* Desktop Menu */}
      <nav className="hidden md:block cursor-pointer">
        <ul className="flex text-white gap-4">
          <li><a href="/">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#resume">Resume</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Mobile Menu (toggle) */}
      {toggleMenu && (
        <nav className="absolute top-full left-0 w-full bg-secondary md:hidden z-40">
          <ul
            onClick={() => setToggleMenu(false)}
            className="flex flex-col text-white items-center py-2 mobile-nav "
          >
            <li><a href="/">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      )}

      {/* Toggle Button for Mobile */}
      <button
        onClick={() => setToggleMenu(!toggleMenu)}
        className="block md:hidden"
      >
        <Bars3Icon className="text-white h-6 w-6" />
      </button>
    </header>
  );
};
