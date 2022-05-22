import React from 'react'

function Header() {
  return (
    <div>
          <nav className="fixed-top ftco-navbar-light ftco_navbar navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand position-relative" href="/">
            <img src="./assets/img/logo.png" alt="" className="logo" />
           <span className="bottom-0  position-absolute">ipon</span>
          </a>
          <div className="social-media order-lg-last">
            <p className="mb-0 d-flex">
              <a href="#" className="d-flex align-items-center justify-content-center"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#" className="d-flex align-items-center justify-content-center"><i className="fa-brands fa-twitter"></i></a>
              <a href="#" className="d-flex align-items-center justify-content-center"><i className="fa-brands fa-instagram"></i></a>
            </p>
          </div>
          <button className="navbar-toggler p-1" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="fa fa-bars"></span>
          </button>
          <div className="collapse navbar-collapse" id="ftco-nav">
            <ul className="navbar-nav ml-auto mr-md-3 text-center">
              <li className="nav-item active"><a href="#" className="nav-link active">Home</a></li>
              <li className="nav-item"><a href="#about" className="nav-link">About</a></li>
              <li className="nav-item"><a href="#skills" className="nav-link">Skills</a></li>
              <li className="nav-item"><a href="#services" className="nav-link">Services</a></li>
              <li className="nav-item"><a href="#projects" className="nav-link">Projects</a></li>
              <li className="nav-item"><a href="#contact" className="nav-link">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header;