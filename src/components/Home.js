import React, { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import LoadingBar from "react-top-loading-bar";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  const [progress, setProgress] = useState(0);
  AOS.init();

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
          <h1 data-aos="fade-right" data-aos-duration="1000">
            I am Sameer
          </h1>
          <h2
            data-aos="fade-left"
            data-aos-duration="1000"
            className="typewriter"
          >
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
          <a
            data-aos="fade-up"
            data-aos-duration="1000"
            onClick={() => setProgress(100)}
            href="#contact"
            className="btn-main-offer"
          >
            Contact me {"  "}
          </a>
        </div>
      </div>
    </>
  );
}
