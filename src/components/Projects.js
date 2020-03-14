import React from "react";
import { Link } from "react-scroll";
import "../css/major-component.css";
import "../css/Projects.css";
import Slideshow from "./Slideshow";

let downArrow = require("../images/downArrow.png");

let jsProjectSlides = [
  {
    image: require("../images/1.png"),
    text:
      "ASSblablablA SSblabla blASSblablab lASSblabla blASSblabla blASSbla blabl ASSblabl ablASS blablablAS SblablablASS blablablASS blablablASSblab lablASSbla blablASSbla blablASSblablablASS blablablASSbl ablablASSbl ablablASSblabla blASSblablabl"
  },
  {
    image: require("../images/1.png"),
    text:
      "ASSblablablA SSblabla blASSblablab lASSblabla blASSblabla blASSbla blabl ASSblabl ablASS blablablAS SblablablASS blablablASS blablablASSblab lablASSbla blablASSbla blablASSblablablASS blablablASSbl ablablASSbl ablablASSblabla blASSblablabl"
  },
  {
    image: require("../images/1.png"),
    text:
      "ASSblablablA SSblabla blASSblablab lASSblabla blASSblabla blASSbla blabl ASSblabl ablASS blablablAS SblablablASS blablablASS blablablASSblab lablASSbla blablASSbla blablASSblablablASS blablablASSbl ablablASSbl ablablASSblabla blASSblablabl"
  }
];
let tsProjectSlides = [
  require("../images/1.png"),
  require("../images/2.png"),
  require("../images/3.png")
];
let otherProjetSlides = [];

export default function Projects() {
  return (
    <div id="Projects" className="major-component">
      <div id="Projects-scroll-anchor" />
      <div id="Projects-body">
        <h2 className="text project-category">JavaScript</h2>
        <Slideshow slides={jsProjectSlides} />
        <Link
          to="downArrow3"
          smooth={true}
          duration={1000}
          data-aos="fade-up"
          data-aos-offset="-00"
        >
          <img className="downArrow" id="downArrow3" src={downArrow} alt="" />
        </Link>
        <h2 className="text project-category" data-aos="fade-up">
          TypeScript
        </h2>
        <Slideshow slides={jsProjectSlides} />
        <Link
          to="downArrow4"
          smooth={true}
          duration={1000}
          data-aos="fade-up"
          data-aos-offset="-00"
        >
          <img className="downArrow" id="downArrow4" src={downArrow} alt="" />
        </Link>
        <h2 className="text project-category" data-aos="fade-up">
          React
        </h2>
        <Slideshow slides={jsProjectSlides} />
        <Link
          to="downArrow5"
          smooth={true}
          duration={1000}
          data-aos="fade-up"
          data-aos-offset="-00"
        >
          <img className="downArrow" id="downArrow5" src={downArrow} alt="" />
        </Link>
        <h2 className="text project-category" data-aos="fade-up">
          Node.js
        </h2>
        <Slideshow slides={jsProjectSlides} />
        <Link
          to="downArrow6"
          smooth={true}
          duration={1000}
          data-aos="fade-up"
          data-aos-offset="-00"
        >
          <img className="downArrow" id="downArrow6" src={downArrow} alt="" />
        </Link>
        <h2 className="text project-category" data-aos="fade-up">
          NoSQL
        </h2>
        <Slideshow slides={jsProjectSlides} />
        <Link
          to="Resume-scroll-anchor"
          smooth={true}
          duration={1000}
          data-aos="fade-up"
          data-aos-offset="-00"
        >
          <img className="downArrow" id="downArrow3" src={downArrow} alt="" />
        </Link>
      </div>
    </div>
  );
}
