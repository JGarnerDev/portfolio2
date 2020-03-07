import React from "react";
import "../css/Intro.css";

const introText1 =
  "Jeff(rey)'s an organically raised, Montreal-grown web developer with a passion for learning, design, and creating applications that make complicated tasks simple.";

const introText2 =
  "He was once a professional cook (in case you're hungry), and he is still disproportionately geeky (in case you have any questions about Dostoyevsky, Dungeons & Dragons, or Jellyfish). ";

export default function Intro() {
  return (
    <div id="Intro" className="major-component">
      <div className="intro-container">
        <img
          id="intro-pic"
          src="https://i.imgur.com/kmgKitR.png"
          alt="Jeff Garner"
        />
        <h1 id="intro-name">Jeff Garner</h1>
        <h2 id="intro-desc">Full-Stack Web Developer</h2>
      </div>
      <div className="intro-container">
        <div className="intro-paragraph">{introText1}</div>
        <div className="intro-paragraph">{introText2}</div>
      </div>
    </div>
  );
}
