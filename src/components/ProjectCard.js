import React from "react";
// import { NavLink } from "react-bootstrap";

export default function ProjectCard(props) {
  return (
    <div>
      <div className="project-card">
        <img src={props.imgsrc} alt="image1" style={{ height: "14rem" }} />
        <h2 className="project-title">{props.title}</h2>
        <div className="project-details">
          <p>{props.text}</p>
          <div className="project-btn">
            <a
              href={props.view}
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              View
            </a>
            <a
              href={props.source}
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              Source
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
