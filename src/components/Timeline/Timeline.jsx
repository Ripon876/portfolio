import React from "react";
import "./Timeline.css";

const Timeline = ({ title, items }) => {
  return (
    <div className="timeline">
      {title && <h3>{title}: </h3>}
      <ul>
        {items?.map(({ img, title, date, content }) => (
          <li>
            <span>
              {img && <img src={img} className="img-fluid p-1" alt="" />}
            </span>

            <h5 class="fw-bold">{title ?? ""}</h5>
            <p class="text-muted mb-2 fw-bold">{date ?? ""}</p>
            <p class="text-muted">{content ?? ""}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Timeline;
