import React from "react";
import pizza from "../images/pizza-receipe.jpg";
import salad from "../images/best-tomato-salad-recipe-2.jpg";
//import { Container } from "react-bootstrap";
const Reciepies = () => {
  return (
    <>
      <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-8">
        <div class="md:flex">
          <div class="md:shrink-0">
            <img
              class="h-48 w-full object-cover md:h-full md:w-48"
              src={pizza}
              alt="Man looking at item at a store"
            ></img>
          </div>
          <div class="p-8">
            <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Rocket Pizza
            </div>
            <a
              href="#"
              class="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
            >
              Finding Pizza for your launch
            </a>
            <p class="mt-2 text-slate-500">
              Getting a new business off the ground is a lot of hard work. Here
              are five ideas you can use to find your first customers.
            </p>
          </div>
        </div>
      </div>

      <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-5 ">
        <div class="md:flex">
          <div class="md:shrink-0">
            <img
              class="h-48 w-full object-cover md:h-full md:w-48"
              src={salad}
              alt="Man looking at item at a store"
            ></img>
          </div>
          <div class="p-8">
            <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Cool Salad
            </div>
            <a
              href="#"
              class="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
            >
              Finding Salad for your breakfast
            </a>
            <p class="mt-2 text-slate-500">
              Getting a new business off the ground is a lot of hard work. Here
              are five ideas you can use to find your first customers.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reciepies;
