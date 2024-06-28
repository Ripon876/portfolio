import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="pt-4 position-relative">
      <footer className="text-center text-lg-start bg-transparent">
        <div className="text-center p-3">
          © {new Date().getFullYear()} Copyright
          <a className="text-white" href="/">
            {" "}
            MD Ripon Islam
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
