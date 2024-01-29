import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import ProjectCardData from "./ProjectCardData";
import LoadingBar from "react-top-loading-bar";

export default function Projects() {
  const [progress, setProgress] = useState(0);

  return (
    <>
      <LoadingBar
        progress={progress}
        height={3}
        onLoaderFinished={() => setProgress(0)}
        color="#397080"
        waitingTime={300}
        style={{
          top: "fixed",
        }}
      />

      <div className="project-section" id="project">
        <div
          data-aos="zoom-in"
          data-aos-duration="800"
          className="text-center "
        >
          <h1>Projects.</h1>
          <h2>Some of my recent works</h2>
        </div>

        {/* Dynamic Work Card  */}

        <div
          data-aos="fade-right"
          data-aos-duration="800"
          className="work-container"
        >
          {/* <h1 className='project-heading'>Projects</h1> */}
          <div className="project-container">
            {ProjectCardData.map((value, index) => {
              return (
                <ProjectCard
                  key={index}
                  imgsrc={value.imgsrc}
                  title={value.title}
                  text={value.text}
                  view={value.view}
                  source={value.source}
                />
              );
            })}
          </div>
        </div>

        {/* Pricing Card  */}

        <div className="pricing">
          <div
            data-aos="fade-down"
            data-aos-duration="800"
            className="card-container"
          >
            <div className="pricing-card">
              <h3>- Basic -</h3>
              <span className="bar"></span>
              <p className="btc">$ 100</p>
              <p>- 3 Days -</p>
              <p>- 3 Pages -</p>
              <p>- Featured -</p>
              <p>- Responsive Design -</p>
              <Link
                onClick={() => setProgress(100)}
                to={"/contact"}
                className="btn"
              >
                PURCHASE NOW
              </Link>
            </div>

            <div className="pricing-card">
              <h3>- Premium -</h3>
              <span className="bar"></span>
              <p className="btc">$ 200</p>
              <p>- 3 Days -</p>
              <p>- 5 Pages -</p>
              <p>- Featured -</p>
              <p>- Responsive Design -</p>
              <Link
                onClick={() => setProgress(100)}
                to={"/contact"}
                className="btn"
              >
                PURCHASE NOW
              </Link>
            </div>

            <div className="pricing-card">
              <h3>- Business -</h3>
              <span className="bar"></span>
              <p className="btc">$ 300</p>
              <p>- 5 Days -</p>
              <p>- 8 Pages -</p>
              <p>- Featured -</p>
              <p>- Responsive Design -</p>
              <Link
                onClick={() => setProgress(100)}
                to={"/contact"}
                className="btn"
              >
                PURCHASE NOW
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
