import React from "react";

const Projects = (props) => {
  const { projects } = props;
  return (
    <div>
      <div class="row">
        <div class="col-md-6 offset-md-3 projects">
          <h4 id="projectHeader">Projects</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6"></div>
      </div>
    </div>
  );
};

export default Projects;
