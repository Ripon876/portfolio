import React from "react";
import { Fade, Zoom, Rotate } from "react-reveal";
import "./About.css";

function About() {
  return (
    <div>
      <div className="about" id="about" data-aos="fade-up">
        <div>
          <div className="container py-5 text-center  mt-5">
            <div className="aboutInfo py-3">
              <h1>About</h1>
              <p>
                Learn about the Expertise, Creativity, and Problem-Solving
                Abilities that Drive My Career as a Full-Stack Developer
              </p>
            </div>
            <div className="row">
              <div className="col-lg-4 p-4">
                <div className="aboutImgContainer m-auto">
                  <img
                    src="./assets/img/ripon.jpg"
                    alt="MD Ripon Islam"
                    className="img-fluid rounded-circle"
                  />
                </div>
              </div>
              <div className="col-lg-8 col-md-10 m-auto p-4">
                <div className="aboutContainer text-start p-3">
                  <h1>Hi!,</h1>
                  <p>
                    {" "}
                    I am MD Ripon Islam, With my skills and experience, I have
                    developed dynamic and responsive web applications that meet
                    the needs of my clients.
                  </p>
                  <p>
                    My expertise in real-time web technologies has allowed me to
                    build applications that require real-time communication and
                    collaboration, while my backend development skills have
                    enabled me to build scalable and robust web applications.
                  </p>
                  <p>
                    I am passionate about building innovative and user-friendly
                    web applications using the latest technologies, and I am
                    always looking for new challenges and opportunities to
                    expand my skillset.
                  </p>
                  <p>
                    Feel free to get in touch with me to learn more about my
                    work or to discuss any potential projects.
                  </p>
                  <div className="socialIcons">
                    <span className="d-flex gap-2 justify-content-start">
                      <a href="https://github.com/Ripon876" target="_blank">
                        <i class="fa-brands fa-github"></i>
                      </a>
                      <a
                        href="https://www.facebook.com/ripon876"
                        target="_blank"
                      >
                        <i class="fa-brands fa-facebook-f"></i>
                      </a>
                      <a
                        href="https://twitter.com/islam876ripon"
                        target="_blank"
                      >
                        <i class="fa-brands fa-twitter"></i>
                      </a>
                      <a
                        href="https://www.instagram.com/ripon_876/"
                        target="_blank"
                      >
                        <i class="fa-brands fa-instagram"></i>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
