import React, { Component } from "react";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import ContactMe from "./ContactMe";
import Header from "./Header";
import Projects from "./Projects";

export default class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeBlock: "",
      width: window.innerWidth
     
    };
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }
  
  

  render() {
    const { width } = this.state;
    const isMobile = width <= 500;

    if (isMobile) {
      return (
        <div className="container-fluid">
            <AboutMe />
            <Skills />
            <Projects />
            <ContactMe />
          </div>
      );
    } else {
      return (
        <div className="wrapper">
            <Header  />


          <div className="container-fluid">
            <AboutMe />
            <Skills />
            <Projects />
            <ContactMe />
          </div>
        </div>
      );
    }

  }
}
