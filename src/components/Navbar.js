import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import React, { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Header() {
  const [progress, setProgress] = useState(0);

  return (
    <>
      <LoadingBar
        color="#397080"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
        height={3}
        waitingTime={500}
        style={{
          top: "fixed",
        }}
      />

      <Navbar expand="lg" fixed="top" className="bg-body-tertiary ">
        <Container>
          <Navbar.Brand data-aos="fade-down" data-aos-duration="1000">
            {" "}
            <Link
              onClick={() => setProgress(100)}
              className="Navbar-Name"
              to={"/"}
            >
              Sameer.dev
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="shadow-none border-0"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navbar-nav ms-auto">
              <Link
                onClick={() => setProgress(100)}
                className="nav-link Navbar-sections"
                to={"/"}
                data-aos="fade-down"
                data-aos-duration="1000"
              >
                <h2>Home</h2>
              </Link>
              <a
                onClick={() => setProgress(100)}
                className="nav-link Navbar-sections"
                href="#about"
                data-aos="fade-down"
                data-aos-duration="1150"
              >
                <h2>About</h2>
              </a>
              <a
                onClick={() => setProgress(100)}
                className="nav-link Navbar-sections"
                href="#project"
                data-aos="fade-down"
                data-aos-duration="1300"
              >
                <h2>Projects</h2>
              </a>
              <a
                onClick={() => setProgress(100)}
                className="nav-link Navbar-sections"
                href="#contact"
                data-aos="fade-down"
                data-aos-duration="1450"
              >
                <h2>Contact</h2>
              </a>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
