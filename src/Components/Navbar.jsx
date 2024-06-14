import React from "react";
import { CgMenuLeftAlt } from "react-icons/cg";
import { MdSlowMotionVideo } from "react-icons/md";
import { PiUserSwitch } from "react-icons/pi";
import { TbShoppingBag } from "react-icons/tb";

const Navbar = () => {
  return (
    <nav className="w-full z-30 top-0 py-1 bg-gradient-to-r from-gray-900 to-gray-900">
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3">
        <label htmlFor="menu-toggle" className="cursor-pointer md:hidden block text-white">
            <CgMenuLeftAlt className="w-5 h-5" />
        </label>
        <input type="checkbox" className="hidden" id="menu-toggle" />
        <div id="menu" className="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1">
          <div>
            <ul className="md:flex items-center justify-center text-base text-gray-400 pt-4 md:pt-0">
             <li className="inline-block text-xl no-underline hover:text-white hover:underline py-2 px-4 font-primary">
             <a href="#">Shop</a>
             </li>
             <li className="inline-block text-xl no-underline hover:text-white hover:underline py-2 px-4 font-primary">
             <a href="#">About</a>
             </li>
            </ul>
          </div>
        </div>

        <div className="order-1 md:order-1">
          <a href="#" className="flex items-start tracking-wide no-underline 
          hover:no-underline bg-gradient-to-tr from-pink-200 to-sky-200 text-2xl font-secondary">
          <MdSlowMotionVideo className="h-8 w-8 mt-0" />
          DCloud
          </a>
        </div>

        <div className="order-2 md:order-3 flex items-center" id="nav-content">
         <a href="#" className="inline-block no-underline hover:text-red-600 text-white">
         <PiUserSwitch className="h-6 w-6" />
         </a>
         <a href="#" className="pl-2 inline-block no-underline hover:text-red-300 text-white">
         <TbShoppingBag className="h-6 w-6" />
         </a>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
