import React from "react";
import NameLogo3 from "../assets/namescifi3.png";
import NameLogoBig from "../assets/namescifibig.png";
import NameLogoSmol from "../assets/namescifismol.png";

const AboutMe = () => {
  return (
    <>
      <div className="row">
        <img className="herologo" src={NameLogoBig} srcset={`${NameLogoSmol} 300w, ${NameLogo3} 768w, ${NameLogoBig} 1280w`} />
      </div>

      <div className="row justify-content-center aboutme">

        <div className="col-md-6 aboutmep">
          <h2>I create stuff for the internet</h2>
          <p className="">
            I am a creator based in Chicago, IL that builds websites and designs
            graphics.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
