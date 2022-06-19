import React from "react";
import { screen } from "@testing-library/react";
import { Link } from "react-router-dom";

const Hero = ({ name }) => {
  return (
    <div>
      <div className="bg-white h-screen flex flex-col justify-center items-center">
        <h1 className="lg:text-xl md:text-md sm:text-sm font-black mb-14">
          {name}
        </h1>
        <>
          <Link
            className="lg:text-base md:text-sm py-6
             px-10 bg-yellow-500 rounded-full
              text-3xl hover:bg-yellow-300 transition duration-300 
              ease-in-out flex items-center animate-bounce
              ring ring-yellow-400 hover:ring-red-200"
            to="#"
          >
            Order Now
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 ml-4 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </Link>
        </>
      </div>
    </div>
  );
};

export default Hero;
