import React from "react";
import "../css/AboutMe.css";
import "../css/Slideshow.css";
import Slideshow from "./Slideshow";

let aboutMeSlides = [
  {image: require("../images/1.jpg"), text: "ASS"},
  {image: require("../images/2.jpg"), text: "ASS"},
  {image: require("../images/3.jpg"), text: "ASS"}
 
];

export default function AboutMe() {
  return (
    <div id="AboutMe" className="major-component" data-aos="fade-up">
      <div id="AboutMe-scroll-anchor" />
      <div id="AboutMe-body">
        <Slideshow slides={aboutMeSlides} />
      </div>
    </div>
  );
}
