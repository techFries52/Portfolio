import React, { Component } from "react";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import ContactMe from "./ContactMe";
import Header from "./Header";
import Projects from "./Projects";
import Modal from "./Modal";

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

  handleModalOpen = () => {
    this.setState({activeBlock: "modalopen"})
  }

  handleProjectClick = () => {
    this.setState({activeBlock: "project"})
  }
  
  handleHomeClick = () => {
    this.setState({activeBlock: ""})
  }
  

  render() {
    const { activeBlock, width } = this.state;
    const isMobile = width <= 500;

    if (isMobile) {
      return (
        <div className="container-fluid">
            <AboutMe />
            <Skills />
            <Projects />
            <ContactMe handleModalOpen={this.handleModalOpen} />
          </div>
      );
    } else if(activeBlock === "modalopen") {
      return(
        <div className="wrapper">
            <Header handleHomeClick={this.handleHomeClick} handleModalOpen={this.handleModalOpen} handleProjectClick={this.handleProjectClick} />


          <div className="container-fluid">
            <Modal />
          </div>
        </div>
      )
    } else if(activeBlock === "project") {
      return(
        <div className="wrapper">
            <Header handleHomeClick={this.handleHomeClick} handleModalOpen={this.handleModalOpen} handleProjectClick={this.handleProjectClick} />


          <div className="container-fluid">
            <Projects />
          </div>
        </div>
      )
    } else {
      return (
        <div className="wrapper">
            <Header handleHomeClick={this.handleHomeClick} handleModalOpen={this.handleModalOpen} handleProjectClick={this.handleProjectClick} />


          <div className="container-fluid">
            <AboutMe />
            <Skills />
            <Projects />
            <ContactMe activeBlock={activeBlock} handleModalOpen={this.handleModalOpen} />
          </div>
        </div>
      );
    }

  }
}
