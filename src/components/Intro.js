import React from "react";
import {Link} from 'react-scroll'
import "../css/Intro.css";

let codewarsLogo = require("../images/logos/codewarsLogo.png");
let linkedinLogo = require("../images/logos/linkedInLogo.png");
let githubLogo = require("../images/logos/githubLogo.png");
let downArrow = require('../images/downArrow.png')

const introText1 =
  "Jeff(rey)'s an organically raised, Montreal-grown web developer with a passion for learning, design, and creating applications that make complicated tasks simple.";

const introText2 =
  "He was once a professional cook (in case you're hungry), and he is still disproportionately geeky (in case you have any questions about Dungeons & Dragons or jellyfish, or need help with your Dostoevsky homework). ";

export default function Intro() {
  return (
    <div id="Intro" className="major-component">
      <div id="Intro-scroll-anchor" />
      <div className="intro-container">
        <img
          id="intro-pic"
          src="https://i.imgur.com/kmgKitR.png"
          alt="Jeff Garner"
        />
        <h1 id="intro-name" className="text">
          Jeff Garner
        </h1>
        <h2 id="intro-desc" className="text">
          Full-Stack Web Developer
        </h2>
        <h3 id="intro-subdesc" className="text">
          - HTML - CSS - JavaScript - TypeScript - <br></br> - React - Node.js -
          NoSQL -
        </h3>
      </div>
      <div id="intro-container">
        <div className="intro-paragraph text">{introText1}</div>
        <div className="intro-paragraph text">{introText2}</div>
      </div>
      <div id="social-links">
        <div className="social-links-row">
          <a
            className="icon-container"
            href="http://www.google.com"
            target="_blank"
          >
            <img className="icon" src={codewarsLogo} />
            <div>Codewars</div>
          </a>
          <a
            className="icon-container"
            href="http://www.google.com"
            target="_blank"
          >
            <img className="icon" src={linkedinLogo} />
            <div>LinkedIn</div>
          </a>
          <a
            className="icon-container"
            href="http://www.google.com"
            target="_blank"
          >
            <img className="icon" src={githubLogo} />
            <div>GitHub</div>
          </a>
        </div>
      </div>
      <Link
        to="AboutMe-scroll-anchor"
        smooth={true}
        duration={1000}
      >
        <img className="downArrow" src={downArrow} alt=""/>
      </Link>
    </div>
  );
}
