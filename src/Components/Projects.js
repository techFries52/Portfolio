import React from "react";
import hwalogo from "../assets/HWAlogo.png"
import colorgame from "../assets/colorgame.png";
import fnkbg from "../assets/fnkbg.png";
import projbig from "../assets/projectslogobig.png";
import projmed from "../assets/projectslogomed.png";
import projsmol from "../assets/projectslogosmol.png";

const Projects = (props) => {
  return (
    <>
      <div className="row justify-content-center projectslogo">
          <img className="" src={projbig} srcSet={`${projsmol} 300w, ${projmed} 768w, ${projbig} 1280w`} />
      </div>
      <div className="row justify-content-center projects">
          <div className="col-md-4">
            <div className="card">
              <img src={hwalogo} className="cardimg" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Home Workout App</h5>
                <p className="card-text">An App to build daily workout routines using React.js</p>
                <a href="workout52.herokuapp.com" className="btn btn-primary">Visit</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src={colorgame} className="cardimg" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Color Game</h5>
                <p className="card-text">A browser based color guessing game using just the basics, HTML, CSS, and Vanilla JavaScript</p>
                <a href="https://jgzij44a1wxb18qcxpzqnq-on.drv.tw/www.clgame.com/Color Game/" className="btn btn-primary">Visit</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src={fnkbg} className="cardimg" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Fries and Ketchup</h5>
                <p className="card-text">A gaming community website using a node.js backend and express framework.</p>
                <a href="friesandketchup.com" className="btn btn-primary">Visit</a>
              </div>
            </div>
          </div>
        </div>
      </>
  );
};

export default Projects;
