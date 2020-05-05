// Modules

import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css' // You can also use <link> for styles
import { Link } from 'react-scroll'

// Components

import Intro from './components/Intro'
import Nav from './components/Nav'
import Projects from './components/Projects'
import AboutMe from './components/AboutMe'
import Resume from './components/Resume'
import Contact from './components/Contact'

let downArrow = require('./images/downArrow.png')

// JSX

export default function App () {
  AOS.init({ duration: 1500, offset: 150 })
  return (
    <React.Fragment>
      <Nav />

      <Intro />

      <Link to='AboutMe' smooth={true} duration={1000}>
        <img className='downArrow' id='downArrow1' src={downArrow} alt='' />
      </Link>

      <AboutMe />

      <Projects />

      <Link
        to='Resume-scroll-anchor'
        smooth={true}
        duration={1000}
        data-aos='fade-up'
        data-aos-offset='-50'
        id='downArrow7'
      >
        <img className='downArrow' id='downArrow7' src={downArrow} alt='' />
      </Link>

      <Resume />

      <Contact />
    </React.Fragment>
  )
}
