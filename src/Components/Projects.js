import React from "react";
import workoutbg from "../assets/workoutbg.png"

const Projects = (props) => {
  const { projects } = props;
  return (
    <div className="projects">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div class="card">
            <img src={workoutbg} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h4 id="projectHeader">Projects</h4>
        </div>
      </div>
    </div>
  );
};

export default Projects;
