import React from "react";
import "../css/AboutMe.css";
import "../css/Slideshow.css";
import Slideshow from "./Slideshow";

let aboutMeSlides = [
  {
    image: require("../images/1.jpg"),
    text:
      "ASSblablablA SSblabla blASSblablab lASSblabla blASSblabla blASSbla blabl ASSblabl ablASS blablablAS SblablablASS blablablASS blablablASSblab lablASSbla blablASSbla blablASSblablablASS blablablASSbl ablablASSbl ablablASSblabla blASSblablabl"
  },
  { image: require("../images/2.jpg"), text: "ASS" },
  { image: require("../images/3.jpg"), text: "ASS" }
];

export default function AboutMe() {
  return (
    <div id="AboutMe" className="major-component">
      <div id="AboutMe-scroll-anchor" />
      <div id="AboutMe-body" data-aos="fade-up">
        <Slideshow slides={aboutMeSlides} />
      </div>
    </div>
  );
}
