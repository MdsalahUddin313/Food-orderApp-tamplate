//import logo from "./logo.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dropdown from "./Components/Dropdown";
import Home from "./Components/Home";
//import Dropdown from "./Components/Dropdown";
import Navbar from "./Components/Navbar";
import { useState, useEffect } from "react";
import AboutUs from "./Components/AboutUs";
import ContactUs from "./Components/ContactUs";
import Footer from "./Components/Footer/Footer";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const hiddenmenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
        console.log("menu bar closed");
      }
    };
    window.addEventListener("resize", hiddenmenu);
    return () => {
      window.removeEventListener("resize", hiddenmenu);
    };
  });
  return (
    <div>
      <BrowserRouter>
        <Navbar toggle={toggle} />
        <Dropdown isOpen={isOpen} toggle={toggle} />
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/about-us" exact element={<AboutUs />}></Route>
          <Route path="/contact-us" exact element={<ContactUs />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
