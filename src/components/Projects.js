import React from "react";
import { Link } from "react-scroll";
import Slideshow from "./Slideshow";

import "../css/major-component.css";
import "../css/Projects.css";

let downArrow = require("../images/downArrow.png");

let jsProjectSlides = [
	{
		title: "D&D Character Generator",
		image: require("../images/projects/D&DCharacterGenerator.png"),

		text:
			"My final project in Concordia's Bootcamp! A single-page app written in JS that assembles a character",
		link: "https://eljeffechargen.netlify.app/",
		gitlink: "https://github.com/Jeffersonchive/character-generator-app"
	},
	{
		title: null,
		image: require("../images/absentphoto.png"),
		text:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate quasi molestias vitae veritatis libero nisi beatae quos laborum sint qui ducimus modi voluptatum laboriosam incidunt iste vel corrupti, veniam odit.",
		link: null,
		gitlink: null
	},
	{
		title: null,
		image: require("../images/absentphoto.png"),
		text:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate quasi molestias vitae veritatis libero nisi beatae quos laborum sint qui ducimus modi voluptatum laboriosam incidunt iste vel corrupti, veniam odit.",
		link: null,
		gitlink: null
	}
];
let tsProjectSlides = [
	{
		title: "DoStuff",
		image: require("../images/projects/dostuff.png"),
		text: "A todo list made with Typescript and React",
		link: "https://dostuff.netlify.app/",
		gitlink: "https://github.com/Jeffersonchive/TSREACT-todo-list"
	},
	{
		title: null,
		image: require("../images/absentphoto.png"),
		text:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate quasi molestias vitae veritatis libero nisi beatae quos laborum sint qui ducimus modi voluptatum laboriosam incidunt iste vel corrupti, veniam odit.",
		link: null,
		gitlink: null
	},
	{
		title: null,
		image: require("../images/absentphoto.png"),
		text:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate quasi molestias vitae veritatis libero nisi beatae quos laborum sint qui ducimus modi voluptatum laboriosam incidunt iste vel corrupti, veniam odit.",
		link: null,
		gitlink: null
	}
];
let reactProjectSlides = [
	{
		title: null,
		image: require("../images/absentphoto.png"),
		text:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate quasi molestias vitae veritatis libero nisi beatae quos laborum sint qui ducimus modi voluptatum laboriosam incidunt iste vel corrupti, veniam odit.",
		link: null,
		gitlink: null
	},
	{
		title: null,
		image: require("../images/absentphoto.png"),
		text:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate quasi molestias vitae veritatis libero nisi beatae quos laborum sint qui ducimus modi voluptatum laboriosam incidunt iste vel corrupti, veniam odit.",
		link: null,
		gitlink: null
	},
	{
		title: "",
		image: require("../images/absentphoto.png"),
		text:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate quasi molestias vitae veritatis libero nisi beatae quos laborum sint qui ducimus modi voluptatum laboriosam incidunt iste vel corrupti, veniam odit.",
		link: null,
		gitlink: null
	}
];
let phpProjectSlides = [
	{
		title: "BearWatch WordPress Theme",
		image: require("../images/projects/WordPressCustomTheme1.png"),
		text:
			"My first theme for WordPress! Not only did it familiarize me with PHP, but got me to be appreciative of CMS's. Supports widgets and several post types, and makes for a simple but effective blog structure.",
		link: null,
		gitlink: "https://github.com/Jeffersonchive/BearWatch-WP-Theme"
	},
	{
		title: "",
		image: require("../images/absentphoto.png"),
		text:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate quasi molestias vitae veritatis libero nisi beatae quos laborum sint qui ducimus modi voluptatum laboriosam incidunt iste vel corrupti, veniam odit.",
		link: null,
		gitlink: null
	},
	{
		title: "",
		image: require("../images/absentphoto.png"),
		text:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate quasi molestias vitae veritatis libero nisi beatae quos laborum sint qui ducimus modi voluptatum laboriosam incidunt iste vel corrupti, veniam odit.",
		link: null,
		gitlink: null
	}
];
let sqlProjectSlides = [
	{
		title: "",
		image: require("../images/absentphoto.png"),
		text:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate quasi molestias vitae veritatis libero nisi beatae quos laborum sint qui ducimus modi voluptatum laboriosam incidunt iste vel corrupti, veniam odit.",
		link: null,
		gitlink: null
	},
	{
		title: "",
		image: require("../images/absentphoto.png"),
		text:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate quasi molestias vitae veritatis libero nisi beatae quos laborum sint qui ducimus modi voluptatum laboriosam incidunt iste vel corrupti, veniam odit.",
		link: null,
		gitlink: null
	},
	{
		title: "",
		image: require("../images/absentphoto.png"),
		text:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate quasi molestias vitae veritatis libero nisi beatae quos laborum sint qui ducimus modi voluptatum laboriosam incidunt iste vel corrupti, veniam odit.",
		link: null,
		gitlink: null
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
					data-aos-offset="0"
				>
					<img className="downArrow" id="downArrow3" src={downArrow} alt="" />
				</Link>
				<h2
					className="text project-category"
					data-aos="fade-up"
					data-aos-offset="-50"
				>
					TypeScript
				</h2>
				<Slideshow slides={tsProjectSlides} />
				<Link
					to="downArrow4"
					smooth={true}
					duration={1000}
					data-aos="fade-up"
					data-aos-offset="50"
				>
					<img className="downArrow" id="downArrow4" src={downArrow} alt="" />
				</Link>
				<h2
					className="text project-category"
					data-aos="fade-up"
					data-aos-offset="-50"
				>
					React
				</h2>
				<Slideshow slides={reactProjectSlides} />
				<Link
					to="downArrow5"
					smooth={true}
					duration={1000}
					data-aos="fade-up"
					data-aos-offset="50"
				>
					<img className="downArrow" id="downArrow5" src={downArrow} alt="" />
				</Link>
				<h2
					className="text project-category"
					data-aos="fade-up"
					data-aos-offset="-50"
				>
					PHP
				</h2>
				<Slideshow slides={phpProjectSlides} />
				<Link
					to="downArrow6"
					smooth={true}
					duration={1000}
					data-aos="fade-up"
					data-aos-offset="50"
				>
					<img className="downArrow" id="downArrow6" src={downArrow} alt="" />
				</Link>
				<h2
					className="text project-category"
					data-aos="fade-up"
					data-aos-offset="-50"
				>
					SQL
				</h2>
				<Slideshow slides={sqlProjectSlides} />
			</div>
		</div>
	);
}
