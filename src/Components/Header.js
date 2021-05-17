import React from "react";

const Header = (props) => {
  const { handleHomeClick, handleModalOpen } = props;
  return (
    
      <div>

        <nav className="sidebar">  

             <ul className="navbar-nav mr-auto stickystick">
                <li
                  className="nav-item nav-link active"
                  onClick={handleHomeClick}
                >
                  <i className="fas fa-home"></i>
                </li>
                
                <li className="nav-item nav-link"><i className="fas fa-project-diagram"></i></li>
                
                <li className="nav-item" onClick={handleModalOpen}><i className="far fa-envelope"></i></li>
            </ul>     
        </nav>
      
      </div>
  );
};

export default Header;
