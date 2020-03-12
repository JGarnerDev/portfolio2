import React from "react";
import "../css/major-component.css";
import "../css/Projects.css";
import Slideshow from "./Slideshow";

let jsProjectSlides = [require("../images/1.jpg"), require("../images/2.jpg"), require("../images/3.jpg")]
let tsProjectSlides = [require("../images/1.jpg"), require("../images/2.jpg"), require("../images/3.jpg")]
let otherProjetSlides = []

export default function Projects() {
  return (
    <div id="Projects" className="major-component">
      <div id="Projects-scroll-anchor" />
      <div id="Projects-body">
        <h1 className="text"data-aos="fade-up">JavaScript</h1>
        <Slideshow slides={jsProjectSlides} />
        <h1 className="text"data-aos="fade-up">TypeScript</h1>
        <Slideshow slides={tsProjectSlides} />
      </div>
    </div>
  );
}
