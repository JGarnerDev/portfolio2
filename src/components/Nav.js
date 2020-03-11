import React from "react";
import { Link } from "react-scroll";

import "../css/Nav.css";

export default function Nav() {
  return (
    <div id="Nav">
      <Link to="Intro-scroll-anchor" smooth={true} duration={1000}>
        <div id="logo" >Logo</div>
      </Link>
      <div id="nav-link-container">
        <Link className="nav-link" to="AboutMe-scroll-anchor" smooth={true} duration={1000}>
          About Me
        </Link>
        <Link className="nav-link" to="Projects-scroll-anchor" smooth={true} duration={1000}>
          Projects
        </Link>
        <Link className="nav-link" to="Resume-scroll-anchor" smooth={true} duration={1000}>
          Resume
        </Link>
    
      </div>
    </div>
  );
}
