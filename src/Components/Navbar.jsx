import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div className="flex justify-between p-4 absolute w-full z-[100]">
      <Link to="/">
        <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
          {props.title}
        </h1>
      </Link>
      <div>
        <Link to="/login">
          <button className="text-white pr-4">Sign In</button>
        </Link>
        <Link to="/signup">
          <button className="bg-red-600 cursor-pointer rounded px-4 py-2 text-white">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
