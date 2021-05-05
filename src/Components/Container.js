import React, { Component } from "react";
import Hero from "./Hero";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import ContactMe from "./ContactMe";
import Header from "./Header";
import BlueSpace from "./BlueSpace";
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
    // let containerBlock;
    // let contentBody = this.state.activeBlock;

    // if (contentBody === "hero") {
    //   containerBlock = <Hero />;
    // } else if (contentBody === "about me") {
    //   containerBlock = <AboutMe />;
    // } else if (contentBody === "skills") {
    //   containerBlock = [<BlueSpace />, <Skills />];
    // } else if (contentBody === "projects") {
    //   containerBlock = <Projects />;
    // } else if (contentBody === "contact me") {
    //   containerBlock = <ContactMe />;
    // } else {
    //   containerBlock = [
    //     <Hero />,
    //     <AboutMe />,
    //     <Skills />,
    //     <Projects />,
    //     <ContactMe />,
    //   ];
    // }

    return (
      <div className="container-fluid">
        <Header handleContentBodyChange={this.handleContentBodyChange} />
        <Hero />
        <AboutMe />
        <Skills />
        <Projects />
        <ContactMe />
      </div>
    );
  }
}
