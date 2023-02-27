import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Hamburger from "../assets/hamburger.png";
import { toggleMenu } from "../utils/sideBarSlice";
import store from "../utils/store";
import { signOutUser } from "./Auth/authSlice";
import useSearchSuggestions from "../utils/useSearchSuggestions";
import { searchedFor } from "../utils/resultsSlice";

const Header = () => {
  const dispatch = useDispatch();

  const sideBarHandler = () => {
    dispatch(toggleMenu());
  };

  const [searchText, SetSearchText] = useState("");
  
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const { suggestions, showSuggestions, setShowSuggestions } = useSearchSuggestions(searchText);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchText !== "") {
      dispatch(searchedFor(searchText));
    }
  };


  return (
    <header className="fixed w-full">
      <nav className="flex bg-gray-50 shadow-md ">
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
          <form className="flex flex-wrap items-center justify-center w-full lg:w-auto lg:ml-auto lg:mr-3" onSubmit={handleSubmit}>
            <input
              className="w-full md:w-auto max-w-xs md:max-w-md px-2 py-1 rounded-md shadow-sm border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none"
              type="search"
              name="search"
              placeholder="Search"
              value={searchText}
              onChange={(e) => {
                SetSearchText(e.target.value);
              }}
              onFocus={() => {
                setShowSuggestions(true);
              }}
              onBlur={() => {
                setShowSuggestions(false);
              }}
            />
            <button className="w-full md:w-auto px-3 py-1 ml-2 rounded-md bg-blue-500 text-white font-bold hover:bg-blue-600 focus:outline-none" type="submit">
              Search
            </button>
          </form>
          {showSuggestions && (
            <div className="fixed bg-white rounded-md border border-gray-200 shadow-md my-1 w-1/3 md:w-1/4 lg:w-1/6">
              <ul className="space-y-1">
                {suggestions.map((s) => (
                  <li key={s} className="hover:bg-gray-100 p-1 select-none">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {isLoggedIn ? (
          <button
            className="ml-auto mr-3 my-4 px-3 py-1 rounded-md bg-blue-500 text-white font-bold"
            onClick={() => dispatch(signOutUser())}
          >
            Logout
          </button>
        ) : (
          <Link to="login" className="ml-auto mr-3 my-4 ">
            <button className="px-3 py-1 rounded-md bg-blue-500 text-white font-bold">
              Login
            </button>
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
