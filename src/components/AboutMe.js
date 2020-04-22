import React from "react";
import { Link } from "react-scroll";

import "../css/AboutMe.css";
import "../css/Slideshow.css";

import Slideshow from "./Slideshow";

let downArrow = require("../images/downArrow.png");

let aboutMeSlides = [
	{
		image: require("../images/absentphoto.png"),
		text:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate quasi molestias vitae veritatis libero nisi beatae quos laborum sint qui ducimus modi voluptatum laboriosam incidunt iste vel corrupti, veniam odit."
	},
	{
		image: require("../images/absentphoto.png"),
		text:
			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam explicabo quaerat itaque commodi error ab laborum nihil! Natus sapiente iusto amet, sint, reiciendis, velit libero repudiandae rem animi recusandae odio."
	},
	{
		image: require("../images/absentphoto.png"),
		text:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, consequatur. Minus commodi asperiores, delectus sapiente perspiciatis debitis a quis facilis rem deserunt laborum quasi vitae dolorum in inventore quia consectetur!"
	}
];

export default function AboutMe() {
	return (
		<div id="AboutMe" classname="major-component">
			<div id="AboutMe-scroll-anchor" />
			<div id="AboutMe-body" data-aos="fade-up">
				<h2 id="AboutMe-title" className="text">
					About Me
				</h2>
				<Slideshow slides={aboutMeSlides} />
			</div>
		</div>
	);
}
