import React from "react";
import Gallery from "./Gallery";
import "./Projects.css";

function Projects() {
  return (
    <div className="projects" id="projects" data-aos="fade-up">
      <div className="container py-5 text-center  mt-5">
        <div className="projectInfo py-3">
          <h1>Projects</h1>
          <p>
            Check out my diverse projects across many technologies, showcasing
            my broad skill set and adaptability in modern web development.
          </p>
        </div>
        <div>
          <Gallery />
        </div>
      </div>
    </div>
  );
}

export default Projects;
