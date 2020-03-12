import React from "react";
import Pdf from "../images/Resume - Jeffrey Garner.pdf";
import "../css/major-component.css";
import "../css/Resume.css";

export default function Resume() {
  return (
    <div id="Resume" className="major-component" data-aos="fade-up">
      <div id="Resume-scroll-anchor"></div>
      <a id="resume-link" href={Pdf} target="_blank">
        Here's my resume
      </a>
    </div>
  );
}
