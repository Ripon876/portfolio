import React from "react";
import HeaderNav from "./components/header/Header";
import Banner from './components/banner/Banner';
import About from './components/About/About';
import Skills from './components/skills/Skills';
import Services from './components/service/Services';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';



function App() {

  return ( 
<>
  
  <HeaderNav />
  <Banner />
  <About />
  <Skills />
  <Services />
  <Projects />
  <Contact />
  <Footer />

</>
  
  )
}

export default App;
