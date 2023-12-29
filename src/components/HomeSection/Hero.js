import React from "react";
import Data from "./Data";
import "./Home.css";
import Slide from "./Slide";

const Hero = () => {
  return (
    <>
      <Slide slides={Data} />
    </>
  );
};

export default Hero;
