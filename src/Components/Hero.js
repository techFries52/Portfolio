import React from "react";
import { ReactComponent as HeroImage } from "../assets/herosvg.svg";

const Hero = () => {
  return (
    <div>
      <div className="row justify-content-center hero ojbottom">
        <HeroImage />
      </div>
    </div>
  );
};

export default Hero;
