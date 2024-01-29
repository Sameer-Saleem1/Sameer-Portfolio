import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import React, { useState } from "react";
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
          <Navbar.Brand>
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
              >
                <h2>Home</h2>
              </Link>
              <a
                onClick={() => setProgress(100)}
                className="nav-link Navbar-sections"
                href="#about"
              >
                <h2>About</h2>
              </a>
              <a
                onClick={() => setProgress(100)}
                className="nav-link Navbar-sections"
                href="#project"
              >
                <h2>Projects</h2>
              </a>
              <a
                onClick={() => setProgress(100)}
                className="nav-link Navbar-sections"
                href="#contact"
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
