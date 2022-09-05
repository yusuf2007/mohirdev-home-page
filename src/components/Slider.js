import React from "react";
import Carousel from "react-bootstrap/Carousel";
import SliderImg from "../images/slider1.png";

const Slider = () => {
  return (
    <Carousel className="rounded-3 mt-4">
      <Carousel.Item>
        <img className="d-block w-100" src={SliderImg} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={SliderImg} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={SliderImg} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
