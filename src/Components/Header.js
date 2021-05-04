import React from "react";

const Header = (props) => {
  const { handleContentBodyChange } = props;
  return (
    <div className="headerback">
      <div className="row justify-content-center">
        <div className="col-lg-4">
          <h1>Jesse Lauesen</h1>
        </div>
        <div className="col-lg-4 justify-content-end">
          <button
            className="btn"
            onClick={() => handleContentBodyChange("about me")}
          >
            About Me
          </button>
          <button
            className="btn"
            onClick={() => handleContentBodyChange("skills")}
          >
            Skills
          </button>
          <button
            className="btn"
            onClick={() => handleContentBodyChange("projects")}
          >
            Projects
          </button>
          <button
            className="btn"
            onClick={() => handleContentBodyChange("contact me")}
          >
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
