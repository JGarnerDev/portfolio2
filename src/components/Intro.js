import React from 'react'
import { Link } from 'react-scroll'
import '../css/Intro.css'

let codewarsLogo = require('../images/logos/codewarsLogo.png')
let linkedinLogo = require('../images/logos/linkedInLogo.png')
let githubLogo = require('../images/logos/githubLogo.png')

const introText1 =
  "Jeff's an organically raised, Montreal-grown web developer with a passion for exploring, learning, design, and creating applications."

const introText2 =
  "He was once a professional cook (in case you're hungry), and he is still disproportionately geeky (in case you have any questions about Dungeons & Dragons, jellyfish, or Dostoevsky). "

export default function Intro () {
  return (
    <div id='Intro' className='major-component'>
      <div id='Intro-scroll-anchor' />
      <div className='intro-container'>
        <img
          id='intro-pic'
          src='https://i.imgur.com/kmgKitR.png'
          alt='Jeff Garner'
        />
        <h1 id='intro-name' className='text'>
          Jeff Garner
        </h1>
        <h2 id='intro-desc' className='text'>
          Full-Stack Web Developer
        </h2>
        <h3 id='intro-subdesc' className='text'>
          - HTML - CSS - JavaScript - TypeScript - <br></br> - React - PHP - SQL
          -
        </h3>
      </div>
      <div className='intro-container'>
        <div className='intro-paragraph text'>{introText1}</div>
        <div className='intro-paragraph text'>{introText2}</div>
      </div>
      <div id='social-links'>
        <div className='social-links-row'>
          <a
            className='icon-container'
            href='https://www.codewars.com/users/ElJeffe'
            target='_blank'
          >
            <img className='icon' src={codewarsLogo} />
            <div>Codewars</div>
          </a>
          <a
            className='icon-container'
            href='https://www.linkedin.com/in/jeffrey-garner-882851104/'
            target='_blank'
          >
            <img className='icon' src={linkedinLogo} />
            <div>LinkedIn</div>
          </a>
          <a
            className='icon-container'
            href='https://github.com/Jeffersonchive'
            target='_blank'
          >
            <img className='icon' src={githubLogo} />
            <div>GitHub</div>
          </a>
        </div>
      </div>
    </div>
  )
}
