import React from "react";
import { Link } from "react-scroll";

import "../css/Nav.css";

export default function Nav() {
  return (
    <div id="Nav">
      <Link id="logo" to="Intro-scroll-anchor" smooth={true} duration={1000}>
        <div  className="text" >Logo</div>
      </Link>
      <div id="nav-link-container">
        <Link className="nav-link text" to="AboutMe-scroll-anchor" smooth={true} duration={1000}>
          About Me
        </Link>
        <Link className="nav-link text" to="Projects-scroll-anchor" smooth={true} duration={1000}>
          Projects
        </Link>
        <Link className="nav-link text" to="Resume-scroll-anchor" smooth={true} duration={1000}>
          Resume
        </Link>
        <Link className="nav-link text" to="Contact-scroll-anchor" smooth={true} duration={1000}>
          Contact
        </Link>
    
      </div>
    </div>
  );
}
