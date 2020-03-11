// Modules

import React from "react";

// Components

import Intro from "./components/Intro";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import Resume from "./components/Resume";
import Slideshow from "./components/Slideshow";

// JSX

export default function App() {
  return (
    <React.Fragment>
      <Nav />
      <Intro />
      <AboutMe />
      <Projects />
      <Resume />
     
    </React.Fragment>
  );
}
