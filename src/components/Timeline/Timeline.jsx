import React from "react";
import "./Timeline.css";

const Timeline = ({ title, items }) => {
  return (
    <div className="timeline">
      {title && <h3>{title}: </h3>}
      <ul>
        {items?.map(({ img, title, date, content }) => (
          <li key={title}>
            <span>
              {img && <img src={img} className="img-fluid p-1" alt="" />}
            </span>

            <h5 className="fw-bold">{title ?? ""}</h5>
            <p className="text-muted mb-2 fw-bold">{date ?? ""}</p>
            <p className="text-muted">{content ?? ""}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Timeline;
