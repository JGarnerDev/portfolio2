// Modules

import React, { Component } from "react";
import { HashRouter, Router } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

// Components

import Intro from "./components/Intro";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import SocialLinks from "./components/SocialLinks";

// JSX

export default function App() {
  return (
    <React.Fragment>
      <Nav />
      <Intro />
      <Projects />
      <AboutMe />
      <SocialLinks />
    </React.Fragment>
  );
}
