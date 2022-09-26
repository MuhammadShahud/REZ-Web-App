import React from "react";
import Slider from "react-slick";

import styles from "./BottomSilder.module.css";
import { Button } from "../../../Components";
import event from "../../../Assets/event.jpg";
import Home_page from "../../../Assets/Home_page.jpg";
import "./BottomSlider.css";
import { useHistory } from "react-router-dom";

const BottomSilder = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className={`w-100 ${styles.home__event__slider}`}>
      <Slider dotsClass={"slick-dots"} {...settings}>
        <div>
          <SliderContent img={event} />
        </div>
        <div>
          <SliderContent img={Home_page} />
        </div>
        {/* <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div> */}
      </Slider>
    </div>
  );
};

const SliderContent = ({ img }) => {
  const history = useHistory();
  return (
    <section className={`${styles.home__event} my-5`}>
      <section className={`${styles.home__event__content} container px-5`}>
        <div className={`${styles.home__event__content__heading}`}>
          <h4>FOOTBALL EVENT</h4>
          <small>SEP 15 2021</small>
        </div>
        <div>
          <p>
            In ut hendrerit odio, porta vestibulum metus. Quisque vestibulum
            nibh vel orci cursus, ac laoreet nibh ultricies. Sed a malesuada
            diam, id aliquet mauris. Vestibulum vehicula et ligula id mattis.
            Etiam viverra, turpis et egestas dignissim, leo turpis ornare dolor,
            vel auctor massa sem ac diam. Sed lorem tellus, interdum sit amet mi
            ac, faucibus porttitor enim. Donec malesuada at eros in convallis.
            Aliquam consectetur turpis vitae diam mattis viverra.
          </p>
        </div>
        <div className={`${styles.home__event__content__btn}`}>
          <Button
            onClick={() => {
              history.push("/signup");
            }}
          />
          <h6>$12.00</h6>
        </div>
      </section>
      <section className={`${styles.home__event__image}`}>
        <img src={img} width="100%" height="100%" alt="" />
      </section>
    </section>
  );
};

export default BottomSilder;
