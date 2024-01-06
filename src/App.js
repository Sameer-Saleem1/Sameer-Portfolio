import "./App.css";
import Navbar from "./components/Navbar.js";
import About from "./components/About.js";
import Home from "./components/Home.js";
import Projects from "./components/Projects.js";
// import Footer from './components/Footer.js'
import Contact from "./components/Contact.js";
// import Reviews from "./components/Reviews.js";
import React from "react";
// import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects />
      {/* <Reviews /> */}
      <Contact />
      {/* <Footer/> */}
    </>
  );
}

export default App;
