import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HeaderNav from "./components/header/Header";
import Banner from "./components/banner/Banner";
import About from "./components/About/About";
import Skills from "./components/skills";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Experiences from "./components/Experiences";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <HeaderNav />
      <Banner />
      <About />
      <Skills />
      <Experiences />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
