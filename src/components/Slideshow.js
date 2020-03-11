import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";


export default class Slideshow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        slides: this.props.slides
    }
  }
  slidesJsx = this.props.slides.map(function(slide) {
    return (
      <div className="slide">
        <img className="slide" src={slide} alt="" />
      </div>
    );
  });

  render() {
    return (
      <div>
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
          swipeable={true}
        >
         {this.slidesJsx}
        </Carousel>
      </div>
    );
  }
}
