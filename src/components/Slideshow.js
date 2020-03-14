import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default class Slideshow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slides: this.props.slides
    };
  }
  slidesJsx = this.props.slides.map(function(slide) {
    return (
      <div>
        <img src={slide.image} alt="" />
        <p className="slide-text text">{slide.text}</p>
      </div>
    );
  });

  render() {
    return (
      <div data-aos="fade-up">
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
    );
  }
}
