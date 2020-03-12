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
      <div data-aos="fade-up">
        <img src={slide.image} alt="" />
        <p className="slide-text text" data-aos="fade-up" data-aos-offset="-50">
          {slide.text} <a href="">buuuuut</a>
        </p>
      </div>
    );
  });

  render() {
    return (
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
    );
  }
}
