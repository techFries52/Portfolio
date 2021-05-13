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
      projects: [
        {
          title: "Fries and Ketchup",
          description:
            "A gaming community website used to keep track of variables pertaining too content",
        },
        {
          title: "Home Workout App",
          description:
            "An app to make your own daily workout routine on the fly with timer",
        },
        {
          title: "Color Game",
          description: "random color genereator and selector game",
        },
      ],
    };
  }

  handleContentBodyChange = (value) => {
    this.setState({ activeBlock: value });
  };

  render() {
    

    return (

        <div className="wrapper">
            <Header handleContentBodyChange={this.handleContentBodyChange} />


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
