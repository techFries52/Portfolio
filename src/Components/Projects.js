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
          <img className="" src={projbig} srcset={`${projsmol} 300w, ${projmed} 768w, ${projbig} 1280w`} />
      </div>
      <div className="row justify-content-center projects">
          <div className="col-md-4">
            <div class="card">
              <img src={hwalogo} class="cardimg" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Home Workout App</h5>
                <p class="card-text">An App to build daily workout routines using React.js</p>
                <a href="workout52.herokuapp.com" class="btn btn-primary">Visit</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div class="card">
              <img src={colorgame} class="cardimg" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Color Game</h5>
                <p class="card-text">A browser based color guessing game using just the basics, HTML, CSS, and Vanilla JavaScript</p>
                <a href="https://jgzij44a1wxb18qcxpzqnq-on.drv.tw/www.clgame.com/Color Game/" class="btn btn-primary">Visit</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div class="card">
              <img src={fnkbg} class="cardimg" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Fries and Ketchup</h5>
                <p class="card-text">A gaming community website using a node.js backend and express framework.</p>
                <a href="friesandketchup.com" class="btn btn-primary">Visit</a>
              </div>
            </div>
          </div>
        </div>
      </>
  );
};

export default Projects;
