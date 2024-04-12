import React from "react";
import { Fade } from "react-reveal";

function ProjectItem({ img, labels, title, link }) {
  return (
    <Fade>
      <div className={`col-lg-3 col-md-6 col-sm-10 p-3 p-lg-2 ${labels}`}>
        <div className="card h-100 m-auto py-2 projectItemCard">
          <img
            src={img}
            className="card-img-top img-fluid h-100"
            style={{ objectFit: "contain" }}
            alt=""
          />
          <div className="d-grid iconDiv">
            <a href={link} target="_blank" rel="noreferrer">
              <i className="fa-share-from-square fa-solid"></i>
            </a>
            <span>{title}</span>
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default ProjectItem;
