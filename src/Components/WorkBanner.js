import React from "react";

const WorkBanner = (props) => {
  const { handleContentBodyChange } = props;
  return (
    <div className="container workbanner">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-3">
          <div
            className="card"
            onClick={() => handleContentBodyChange("webdev")}
          >
            <div className="card-img-top"></div>
            <div className="card-body">
              <h4>Web Dev</h4>
              <p>Portfolio and Projects</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <div className="card-img-top"></div>
            <div className="card-body">
              <h4>Graphics</h4>
              <p>Art!</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <div className="card-img-top"></div>
            <div className="card-body">
              <h4>Audio Engineer</h4>
              <p>Gigs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkBanner;
