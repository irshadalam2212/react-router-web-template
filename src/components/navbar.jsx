import React from "react";
import logo from "../assets/Logo.svg";
import { Link, NavLink } from "react-router-dom";
import toast from "react-hot-toast";

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  return (
    <div className="flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto">
      <NavLink to="/">
        <img src={logo} alt="logo" width={160} height={32} loading="lazy" />
      </NavLink>

      <nav>
        <ul className="flex gap-x-6 text-gray-100">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/">About</NavLink>
          </li>
          <li>
            <NavLink to="/">Contact</NavLink>
          </li>
        </ul>
      </nav>
      <div className="flex items-center gap-x-4 text-gray-100">
        {!isLoggedIn && (
          <Link to="/login">
            <button className="bg-gray-800 py-[8px] px-[12px] rounded-[8px] border border-gray-700">
              Login
            </button>
          </Link>
        )}
        {!isLoggedIn && (
          <Link to="/signup">
            <button className="bg-gray-800 py-[8px] px-[12px] rounded-[8px] border border-gray-700">
              Signup
            </button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/">
            <button
              onClick={() => {
                setIsLoggedIn(false);
                toast.success("Logged Out");
              }}
              className="bg-gray-800 py-[8px] px-[12px] rounded-[8px] border border-gray-700"
            >
              Logout
            </button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/dashboard">
            <button className="bg-gray-800 py-[8px] px-[12px] rounded-[8px] border border-gray-700">
              Dashboard
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
