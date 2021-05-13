import React from "react";
import hwalogo from "../assets/HWAlogo.png"

const Projects = (props) => {
  const { projects } = props;
  return (
    <div className="row justify-content-center projects">
        <div className="col-md-4">
          <div class="card">
            <img src={hwalogo} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Home Workout App</h5>
              <p class="card-text">An App to build daily workout routines</p>
              <a href="workout52.herokuapp.com" class="btn btn-primary">Visit</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div class="card">
            <img src={hwalogo} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Home Workout App</h5>
              <p class="card-text">An App to build daily workout routines</p>
              <a href="workout52.herokuapp.com" class="btn btn-primary">Visit</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div class="card">
            <img src={hwalogo} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Home Workout App</h5>
              <p class="card-text">An App to build daily workout routines</p>
              <a href="workout52.herokuapp.com" class="btn btn-primary">Visit</a>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Projects;
