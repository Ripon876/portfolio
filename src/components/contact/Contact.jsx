import React from "react";
import ContactForm from "./ContactForm.jsx";
import "./Contact.css";

function Contact() {
  return (
    <div id="contact" data-aos="fade-up">
      <div className="container py-5 text-center  mt-5">
        <div className="aboutInfo py-3">
          <h1>Contact</h1>
          <p>
            Feel free to reach out to me for any inquiries or opportunities. I'm
            available via email, phone, or through my social media profiles.
          </p>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-5">
            <div className="align-items-center contactDetails d-flex justify-content-around">
              <img
                src="./assets/img/contact.png"
                alt="Contact Me"
                style={{ filter: "grayscale(1)" }}
              />

              <div className="social_links">
                <span className="gap-2 justify-content-start">
                  <a
                    href="https://github.com/Ripon876"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-github"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/mdripondev"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                  <a
                    href="https://www.facebook.com/ripon876"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                  <a
                    href="https://twitter.com/mdripon_dev"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-7 text-start">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
