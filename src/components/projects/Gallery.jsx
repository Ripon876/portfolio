import React, { useState, useEffect, useRef } from "react";
import ProjectItem from "./ProjectItem";
import { projects } from "./data";

function Gallery() {
  const [items, setItems] = useState([]);
  const parent = useRef(null);

  useEffect(() => {
    setItems(parent.current.children);
  }, []);

  function filter(key) {
    if (items !== undefined) {
      for (var i = 0; i < items.length; i++) {
        var s = items[i].classList?.contains(key);
        if (key === "*") {
          items[i].style.display = "block";
        } else {
          s
            ? (items[i].style.display = "block")
            : (items[i].style.display = "none");
        }
      }
    }
  }

  return (
    <div>
      <div className="filerButtonContainer">
        <button className="btn filterBtn" onClick={() => filter("*")}>
          All
        </button>
        <button className="btn filterBtn" onClick={() => filter("full_stack")}>
          Full stack
        </button>
        <button className="btn filterBtn" onClick={() => filter("react")}>
          React
        </button>
        <button className="btn filterBtn" onClick={() => filter("vue")}>
          Vue
        </button>
        <button className="btn filterBtn" onClick={() => filter("html_&_css")}>
          Html & Css
        </button>
        <button className="btn filterBtn" onClick={() => filter("package")}>
          Packages <span className="small">(custom)</span>
        </button>
      </div>

      <div
        className="row p-5 justify-content-center itemsContainer"
        ref={parent}
      >
        {projects?.map((project, i) => (
          <ProjectItem
            key={i}
            img={project.img}
            labels={project.category}
            title={project.title}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
