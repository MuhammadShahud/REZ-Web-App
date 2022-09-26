import React from "react";

import { CarouselSlider, RezNavbar } from "../../Components";
import "./Header.css";

const Header = () => {
  return (
    <div className="rez__header">
      <RezNavbar style={{ position: "absolute", top: 0, zIndex: 1000 }} />
      <CarouselSlider />
    </div>
  );
};

export default Header;
