import React, { useState } from "react";
import { Carousel, Radio } from "antd";

import Slider1 from "../../Assets/slider_01.jpg";
import Slider2 from "../../Assets/slider_02_01.jpg";
import Slider3 from "../../Assets/slider_03_01.jpg";

import "./carousel.css";
import Button from "../button/Button";
import { useHistory } from "react-router-dom";

const CarouselSlider = () => {
  const history = useHistory();

  return (
    <div className="rez__carousel">
      <div className="rez__carousel__contain">
        <h6>BE A PART OF IT</h6>
        <h1>WE CREATE HISTORY</h1>
        <Button
          onClick={() => {
            history.push("/signup");
          }}
        />
      </div>
      <Carousel autoplay={true} dotPosition={"right"}>
        <div>
          <img src={Slider3} width="100%" alt="slider" />
        </div>
        <div>
          <img src={Slider1} width="100%" alt="slider" />
        </div>
        <div>
          <img src={Slider2} width="100%" alt="slider" />
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselSlider;
