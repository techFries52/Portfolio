import React from "react";

const Header = (props) => {
    const { handleContentBodyChange }= props;
    return(
        <div className="row justify-content-end">
            <button className="btn" onClick={() => handleContentBodyChange("about me")}>About Me</button>
            <button className="btn" onClick={() => handleContentBodyChange("skills")}>Skills</button>
            <button className="btn" onClick={() => handleContentBodyChange("projects")}>Projects</button>
            <button className="btn" onClick={() => handleContentBodyChange("contact me")}>Contact</button>
        </div>
    )
}

export default Header;