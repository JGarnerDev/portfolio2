import React from "react";
import Pdf from "../images/Resume - Jeffrey Garner.pdf";
import "../css/major-component.css";
import "../css/Resume.css";

export default function Resume() {
  return (
    <div id="Resume" className="major-component">
      <div id="Resume-scroll-anchor"></div>
      <div className="text" id="thanks">
        Thanks for coming by!{" "}
      </div>
      <a
        id="resume-link"
        href={Pdf}
        target="_blank"
        rel="noopener noreferrer"
        data-aos="fade-up"
      >
        Here's my resume
      </a>
    </div>
  );
}
