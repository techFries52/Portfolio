import React from "react";
import { ReactComponent as HeroImage } from "../assets/herosvg.svg";

const Hero = () => {
    return(
        <div>
            <div className="hero-body">
                <h1>Jesse Lauesen</h1>
            </div>
            <div className="row justify-content-center">
                <HeroImage />

            </div>
        </div>
    )
}

export default Hero;