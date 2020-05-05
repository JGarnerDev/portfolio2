import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

export default class Slideshow extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      slides: this.props.slides
    }
  }
  slidesJsx = this.props.slides.map(function (slide) {
    if (slide.link) {
      return (
        <div className='box'>
          <img src={slide.image} alt='' />
          <h3 className='slide-title text'>{slide.title}</h3>
          <p className='slide-text text'>{slide.text}</p>
          <br />
          <a
            className='project-link'
            href={slide.link}
            target='_blank'
            rel='noopener noreferrer'
          >
            See it in action!
          </a>
          <br />
          <a
            className='project-gitlink'
            href={slide.gitlink}
            target='_blank'
            rel='noopener noreferrer'
          >
            Here's the code!
          </a>
        </div>
      )
    } else if (slide.gitlink) {
      return (
        <div className='box'>
          <img src={slide.image} alt='' />
          <h3 className='slide-title text'>{slide.title}</h3>
          <p className='slide-text text'>{slide.text}</p>
          <br />
          <a
            className='project-gitlink'
            href={slide.gitlink}
            target='_blank'
            rel='noopener noreferrer'
          >
            Here's the code!
          </a>
        </div>
      )
    } else {
      return (
        <div className='box'>
          <img src={slide.image} alt='' />
          <h3 className='slide-title text'>Project Coming Soon!</h3>
          <p className='slide-text text'>Stay tuned!</p>
        </div>
      )
    }
  })

  render () {
    return (
      <div data-aos='fade-up' data-aos-offset='-50' className='slideshow'>
        <Carousel
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          infiniteLoop={true}
          swipeable={true}
          emulateTouch={true}
          transitionTime={700}
        >
          {this.slidesJsx}
        </Carousel>
      </div>
    )
  }
}
