import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import LoadingBar from "react-top-loading-bar";

export default function Home() {
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

      <div className="home-wrapper">
        <div className="main-info">
          <h1>I am Sameer</h1>
          <h2 className="typewriter">
            <span style={{ fontWeight: "bold", color: "red" }}>
              <Typewriter
                words={["Developer", "Designer", "Photographer"]}
                loop={true}
                typeSpeed={100}
                deleteSpeed={50}
                cursor={true}
              />
            </span>
          </h2>
          <Link
            onClick={() => setProgress(100)}
            to="/contact"
            className="btn-main-offer"
          >
            Contact me {"  "}
          </Link>
        </div>
      </div>
    </>
  );
}
