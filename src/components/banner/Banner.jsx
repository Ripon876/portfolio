import React, { useEffect, useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { options } from "./options";
import Typed from "react-typed";
import Fade from "react-reveal/Fade";
import "./Banner.css";

function Banner() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  useEffect(() => {
    if (window.VANTA) {
      window.VANTA.GLOBE({
        el: ".background",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        // color: 0xffffff,
        // color: 0x575757,
        color: 0x929292,
        // color2: 0xffffff,
        backgroundColor: 0x20202,
      });
    }
  }, []);

  return (
    <div className="banner">
      {/* <Particles
        options={options}
        // params={}
        init={particlesInit}
      /> */}
      <div
        className="background"
        style={{
          width: "100vw",
          height: "100vh",
          position: "fixed",
        }}
      ></div>

      <div className="bannerContainer"  data-aos="fade-up">
        <h1>
          I am a
          <span className="ps-3">
            <Typed
              typeSpeed={100}
              backSpeed={70}
              strings={[" Developer", " Student"]}
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
        </div>
        <div className="mt-4 bannerIcon">
          <a href="#about" className="text-white">
            <i className="fa-solid fa-arrow-down"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Banner;
