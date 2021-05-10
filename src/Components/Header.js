import React from "react";

const Header = (props) => {
  const { handleContentBodyChange } = props;
  return (
    

        <nav className="sidebar headerback">  
          <div className="row">
            <div className="col-12">

             <ul className="navbar-nav mr-auto">
              <li
                className="nav-item nav-link active"
                onClick={() => handleContentBodyChange("")}
              >
                <i class="fas fa-home"></i>
              </li>
              <a href="#skills">
              <li className="nav-item nav-link">Skills</li>

              </a>
              <li className="nav-item nav-link">Skills</li>
              
              <li className="nav-item">
                <a className="nav-link disabled" href="#">
                  Disabled
                </a>
              </li>
            </ul>
            </div>
          </div>        
        </nav>
      
  );
};

export default Header;
