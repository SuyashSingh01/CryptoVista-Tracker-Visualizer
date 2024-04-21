import React, { useState } from "react";
import logo from "../assets/logo.png";
import { NavLink, Link } from "react-router-dom";
import { toast } from "react-hot-toast";

const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const isLoggedIn = props.isLoggedIn;
  const setIsLoggedIn = props.setIsLoggedIn;

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <div className="  bg-gray-300">
      <div className="bg-neutral-350 flex justify-between items-center w-11/12 max-w-[1260px] py-4 mx-auto ">
        <NavLink to="/">
          {!isOpen&&<img
            src={logo}
            height={42}
            width={50}
            style={{ borderRadius: "10%" }}
            alt="img"
            loading="lazy"
            />}
        </NavLink>

        <nav className="hidden md:block">
          <ul className="flex gap-x-6 font-2xl text-neutral-950">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/CryptoTrack">Track</NavLink>
            </li>
            <li>
              <NavLink to="/trending">Trending</NavLink>
            </li>
            <li>
              <NavLink to="/transact">Transact</NavLink>
            </li>
          </ul>
        </nav>

        <div className="md:hidden flex justify-start">
          <button className="focus:outline-none text-richblack " onClick={toggleDropdown}>
            <svg
              className="w-6 h-6 text-neutral-950"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
                />
            </svg>
          </button>
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:hidden flex flex-col items-center gap-y-2 justify-between max-w-full`}
          >
          <NavLink to="/">Home</NavLink>
          <NavLink to="/CryptoTrack">Track</NavLink>
          <NavLink to="/trending">Trending</NavLink>
          <NavLink to="/transact">Transact</NavLink>
          </div>
        <div className="flex items-center gap-x-4 text-richblack-900">
          {!isLoggedIn && (
            <Link to="/login">
              <button className="bg-rose-300 py-[8px] px-[12px] rounded-[8px] border border-richblack-700 max-w-fit">
                Login
              </button>
            </Link>
          )}
          {!isLoggedIn && (
            <Link to="/signup">
              <button className="bg-rose-300 py-[8px] px-[12px] rounded-[8px] border border-richblack-700 min-w-[10px]">
                Sign Up
              </button>
            </Link>
          )}
          {isLoggedIn && (
            <Link to="/">
              <button
                onClick={() => {
                  setIsLoggedIn(false);
                  toast.success("Logout Sucessfully");
                }}
                className="bg-rose-300  py-[8px] px-[12px] rounded-[8px] border border-richblack-700"
                >
                Log Out
              </button>
            </Link>
          )}
          {isLoggedIn && (
            <Link to="/dashboard">
              <button className="bg-rose-300  py-[8px] px-[12px] rounded-[8px] border border-richblack-700">
                Dashboard
              </button>
            </Link>
          )}
        </div>
      </div>
      <div className="bg-neutral-400 h-[4px] w-[1/5px]  rounded-lg shadow-md border border-gray-300 "></div>
</div>
    </>
  );
};

export default Navbar;
