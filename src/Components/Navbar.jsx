import React from "react";
import { CgMenuLeftAlt } from "react-icons/cg";

const Navbar = () => {
  return (
    <nav className="w-full z-30 top-0 py-1">
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3">
        <label htmlFor="menu-toggle" className="cursor-pointer md:hidden block">
            <CgMenuLeftAlt className="w-5 h-5" />
        </label>
        <input type="checkbox" className="hidden" id="menu-toggle" />
        <div id="menu" className="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1">
          <div>
            <ul className="md:flex items-center justify-center text-base text-gray-700 pt-4 md:pt-8">
             <li><a href="#">Shop</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
