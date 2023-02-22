import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Hamburger from "../assets/hamburger.png";
import { toggleMenu } from "../utils/sideBarSlice";

const Header = () => {
  const dispatch = useDispatch();

  const sideBarHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <header>
      <nav className="flex  bg-gray-50 shadow-md max-lg:min-w-[56rem]">
        <img
          className="w-7 h-8 mx-2 my-3 cursor-pointer hover:bg-gray-300"
          src={Hamburger}
          alt="hamburger"
          onClick={sideBarHandler}
        />
        <Link to="/">
          <div className="font-bold text-lg m-4">
            <span className="text-blue-700">Flare</span>Stream
          </div>
        </Link>

        <div className="ml-auto my-4">
          <form className="flex flex-wrap items-center justify-center w-full lg:w-auto lg:ml-auto lg:mr-3">
            <input
              className="w-full md:w-auto max-w-xs md:max-w-md px-2 py-1 rounded-md shadow-sm border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none"
              type="search"
              name="search"
              placeholder="Search"
            />
            <button className="w-full md:w-auto px-3 py-1 ml-2 rounded-md bg-blue-500 text-white font-bold hover:bg-blue-600 focus:outline-none">
              Search
            </button>
          </form>
        </div>

        <button className="ml-auto mr-3 my-4 px-3 py-1 rounded-md bg-blue-500 text-white font-bold">
          Login
        </button>
      </nav>
    </header>
  );
};

export default Header;
