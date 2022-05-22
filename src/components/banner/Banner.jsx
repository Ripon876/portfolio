import React,{useEffect} from 'react'
import Particles from "react-tsparticles";
import {options} from './options';
import Typed from 'react-typed';
import Fade from 'react-reveal/Fade';
import "./Banner.css";




function Banner() {

const particlesInit = (main) => {
    console.log(main);
  };
const particlesLoaded = (container) => {
    console.log(container);
};


  return (
    <div className="banner">
    <Particles   params={options} />
    <Fade bottom >
    <div className="bannerContainer">
        <h1>I am a   
            <span className="ps-3"> 
                <Typed
                  typeSpeed={100}
                  backSpeed={70}
                  strings={['  Muslim (:',' Developer',' Student']}
                  smartBackspace
                  shuffle={false}
                  backDelay={100}
                  fadeOut={false}
                  fadeOutDelay={100}
                  loopCount={0}
                  showCursor
                  cursorChar="_"
                  loop
                 >
                </Typed>
            </span>
        </h1>
        <div className="bannerBtn pt-3">

         <a href="#about"><button className="btn">Get In Touch</button></a>
        </div>
        <div  className="mt-4 bannerIcon">
           <i className="fa-solid fa-arrow-down" ></i>
        </div>
    </div>
    </Fade>
    </div>
  )
}

export default Banner;