import React from "react";
import "./Skills.css";
import Timeline from "../Timeline/Timeline";
import { skills } from "./skills-data";

function Skills() {
  return (
    <div id="skills" data-aos="fade-up">
      <div className="container text-center p-5">
        <div className="serviceInfo py-3">
          <h1>Skills</h1>
          <p>
            Proven expertise in delivering innovative solutions through a
            diverse skill set and continuous learning
          </p>
        </div>
        <div className="row">
          <div className="col-12  mx-auto ">
            <div className="row w-100">
              {skills?.map((data) => (
                <div className="col-10 col-lg-4 mx-auto">
                  <section
                    className="py-5 text-start mx-auto"
                    style={{ width: "max-content" }}
                  >
                    <Timeline {...data} />
                  </section>
                </div>
              ))}
            </div>
          </div>
          {/* <div className=" col-12  col-md-4 mx-auto">
            <section
              className="py-5  text-start mx-auto"
              style={{
                display: "flex",
                alignTtems: "center",
                fontSize: "1.5rem",
                textAlign: "center !important",
              }}
            >
              <p>
                With these I also have experience working with{" "}
                <strong>
                  <em>Socket.io, WebRTC, Docker (basic) and Github actions </em>
                </strong>
              </p>
            </section>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Skills;
