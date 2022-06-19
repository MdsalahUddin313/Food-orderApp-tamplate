import React from "react";
import Hero from "./Hero/Hero";
import Reciepies from "./Hero/Reciepies";
//import Navbar from "./Navbar";

const Home = () => {
  const name = "FOODCELLENT";
  return (
    <>
      <Hero name={name} />
      <Reciepies />
    </>
  );
};

export default Home;
