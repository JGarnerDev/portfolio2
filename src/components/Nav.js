import React, { Component } from "react";
import "../css/Nav.css";

export default function Nav() {
  return (
    <div id="Nav">
      <div id="logo">Logo</div>
      <div id="nav-link-container">
        <div className="nav-link">Resume</div>
        <div className="nav-link">Projects</div>
        <div className="nav-link">Social</div>
      </div>
    </div>
  );
}


