// Modules

import React from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

// Components

import Intro from "./components/Intro";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

// JSX

export default function App() {
  AOS.init({duration: 1500, offset: 150});
  return (
    <React.Fragment>
      <Nav />
      <Intro />
      <AboutMe />
      <Projects  />
      <Resume />
      <Contact />
    </React.Fragment>
  );
}
