import React from "react";
import { Link } from "react-router-dom";

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <>
      <div
        className={
          isOpen
            ? "grid grid-rows-4 text-center items-center bg-yellow-500"
            : "hidden"
        }
      >
        <Link className="p-4" to="/">
          Home
        </Link>
        <Link className="p-4" to="/">
          Menu
        </Link>
        <Link className="p-4" to="/about-us">
          About Us
        </Link>
        <Link className="p-4" to="/contact-us">
          Contact Us
        </Link>
      </div>
    </>
  );
};

export default Dropdown;
