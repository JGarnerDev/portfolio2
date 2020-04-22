import React from "react";
import { Link } from "react-scroll";
import Slideshow from "./Slideshow";

import "../css/major-component.css";
import "../css/Projects.css";

let downArrow = require("../images/downArrow.png");

let jsProjectSlides = [
	{
		image: require("../images/absentphoto.png"),
		text:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate quasi molestias vitae veritatis libero nisi beatae quos laborum sint qui ducimus modi voluptatum laboriosam incidunt iste vel corrupti, veniam odit."
	},
	{
		image: require("../images/absentphoto.png"),
		text:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate quasi molestias vitae veritatis libero nisi beatae quos laborum sint qui ducimus modi voluptatum laboriosam incidunt iste vel corrupti, veniam odit."
	},
	{
		image: require("../images/absentphoto.png"),
		text:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate quasi molestias vitae veritatis libero nisi beatae quos laborum sint qui ducimus modi voluptatum laboriosam incidunt iste vel corrupti, veniam odit."
	}
];

export default function Projects() {
	return (
		<div id="Projects" className="major-component">
			<div id="Projects-scroll-anchor" />
			<div id="Projects-body">
				<h2 className="text project-category">JavaScript</h2>
				<Slideshow slides={jsProjectSlides} />
				<Link
					to="downArrow3"
					smooth={true}
					duration={1000}
					data-aos="fade-up"
					data-aos-offset="-50"
				>
					<img className="downArrow" id="downArrow3" src={downArrow} alt="" />
				</Link>
				<h2 className="text project-category" data-aos="fade-up">
					TypeScript
				</h2>
				<Slideshow slides={jsProjectSlides} />
				<Link
					to="downArrow4"
					smooth={true}
					duration={1000}
					data-aos="fade-up"
					data-aos-offset="-50"
				>
					<img className="downArrow" id="downArrow4" src={downArrow} alt="" />
				</Link>
				<h2 className="text project-category" data-aos="fade-up">
					React
				</h2>
				<Slideshow slides={jsProjectSlides} />
				<Link
					to="downArrow5"
					smooth={true}
					duration={1000}
					data-aos="fade-up"
					data-aos-offset="-50"
				>
					<img className="downArrow" id="downArrow5" src={downArrow} alt="" />
				</Link>
				<h2 className="text project-category" data-aos="fade-up">
					PHP
				</h2>
				<Slideshow slides={jsProjectSlides} />
				<Link
					to="downArrow6"
					smooth={true}
					duration={1000}
					data-aos="fade-up"
					data-aos-offset="-50"
				>
					<img className="downArrow" id="downArrow6" src={downArrow} alt="" />
				</Link>
				<h2 className="text project-category" data-aos="fade-up">
					NoSQL
				</h2>
				<Slideshow slides={jsProjectSlides} />
			</div>
		</div>
	);
}
