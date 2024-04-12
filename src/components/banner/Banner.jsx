import React from "react";
import Typed from "react-typed";
import "./Banner.css";

function Banner() {
  return (
    <div className="banner">
      <div
        className="background"
        style={{
          width: "100vw",
          height: "100vh",
          position: "fixed",
        }}
      ></div>

      <div className="bannerContainer" data-aos="fade-up">
        <h1>
          I am
          <span className="ps-3">
            <Typed
              typeSpeed={100}
              backSpeed={70}
              strings={["a Fullstack Developer", "curious about the WEB"]}
              smartBackspace
              shuffle={false}
              backDelay={100}
              fadeOut={false}
              fadeOutDelay={100}
              loopCount={0}
              showCursor
              cursorChar="_"
              loop
            ></Typed>
          </span>
        </h1>
        <div className="bannerBtn pt-3">
          <a href="#about">
            <button className="btn">Get In Touch</button>
          </a>
          <div className="mt-4 bannerIcon">
            <a href="#about" className="text-white">
              <i className="fa-solid fa-arrow-down"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
