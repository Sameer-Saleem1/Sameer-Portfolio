import './App.css';
import Navbar from './components/Navbar.js'
import About from './components/About.js'
import Home from './components/Home.js'
import Projects from './components/Projects.js'
// import Footer from './components/Footer.js'
import Contact from './components/Contact.js'
import Reviews from './components/Reviews.js'
import React from 'react';


import {Route, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
        <Navbar />
            <Routes>
                      <Route exact path={"/"} element={<Home/>}></Route>
                      <Route path={"/about"} element={<About/>}></Route>
                      <Route path={"/project"} element={<Projects/>}></Route>
                      <Route path={"/review"} element={<Reviews/>}></Route>
                      <Route path={"/contact"} element={<Contact/>}></Route>
            </Routes>
        {/* <Footer/> */}
      </>
  );
}

export default App;
