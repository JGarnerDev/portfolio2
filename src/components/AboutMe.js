import React from "react";
import { Link } from "react-scroll";

import "../css/AboutMe.css";
import "../css/Slideshow.css";

import Slideshow from "./Slideshow";

let downArrow = require("../images/downArrow.png");

let aboutMeSlides = [
	{
		image: require("../images/1.png"),
		text:
			"ASSblablablA SSblabla blASSblablab lASSblabla blASSblabla blASSbla blabl ASSblabl ablASS blablablAS SblablablASS blablablASS blablablASSblab lablASSbla blablASSbla blablASSblablablASS blablablASSbl ablablASSbl ablablASSblabla blASSblablabl",
	},
	{
		image: require("../images/2.png"),
		text: "ASS",
	},
	{
		image: require("../images/3.png"),
		text: "ASS",
	},
];

export default function AboutMe() {
	return (
		<div id="AboutMe" classname="major-component">
			<div id="AboutMe-scroll-anchor" />
			<div id="AboutMe-body" data-aos="fade-up">
				<h1 id="AboutMe-title" className="text">
					About Me
				</h1>
				<Slideshow slides={aboutMeSlides} />
				<Link
					to="Projects-scroll-anchor"
					smooth={true}
					duration={1000}
					data-aos="fade-up"
					data-aos-offset="50"
				>
					<img className="downArrow" id="downArrow2" src={downArrow} alt="" />
				</Link>
			</div>
		</div>
	);
}
