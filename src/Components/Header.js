import React,{ useRef } from "react";

const Header = (props) => {
  
  return (
    

        <nav className="sidebar">  

             <ul className="navbar-nav mr-auto stickystick">
              <li
                className="nav-item nav-link active"
              >
                <i class="fas fa-home"></i>
              </li>
              
              <li className="nav-item nav-link"><i class="fas fa-project-diagram"></i></li>
              
              <li className="nav-item"><i class="far fa-envelope"></i></li>
            </ul>     
        </nav>
      
  );
};

export default Header;
