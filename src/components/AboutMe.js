import React from "react";
import "../css/AboutMe.css";
import Slideshow from "./Slideshow";

let aboutMeSlides = [require("../images/1.jpg"), "../images/2.jpg", "../images/3.jpg"]

export default function AboutMe() {
  return (
    <div id="AboutMe" className="major-component">
      <div id="AboutMe-scroll-anchor" />

      <div id="AboutMe-body">
        <Slideshow slides={aboutMeSlides}/>
      </div>
    </div>
  );
}
