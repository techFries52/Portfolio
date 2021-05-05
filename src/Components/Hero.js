import React from "react";
import { ReactComponent as HeroImage } from "../assets/herosvg.svg";

const Hero = () => {
  return (
    <div>
      <div className="row justify-content-center hero">
        <HeroImage />
      </div>
    </div>
  );
};

export default Hero;
