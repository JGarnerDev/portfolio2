import React from "react";
import "../css/major-component.css";
import "../css/Projects.css";
import Slideshow from "./Slideshow";

let jsProjectSlides = []
let tsProjectSlides = []
let otherProjetSlides = []

export default function Projects() {
  return (
    <div id="Projects" className="major-component">
      <div id="Projects-scroll-anchor" />
      <div id="Projects-body">
        <h1>JavaScript</h1>
        <Slideshow slides={jsProjectSlides}/>
        <h1>TypeScript</h1>
        <Slideshow slides={tsProjectSlides}/>
      </div>
    </div>
  );
}
