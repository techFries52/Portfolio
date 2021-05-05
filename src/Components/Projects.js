import React from "react";

const Projects = (props) => {
  const { projects } = props;
  return (
    <div className="projects">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-img-top">

            </div>
            <div className="card-body">
              <h4>Home Workout App</h4>
              <p>An app to build your own daily workout routine</p>
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
