import React,{ Component } from "react";
import Hero from "./Hero";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import ContactMe from "./ContactMe";
import Header from "./Header";



export default class Container extends Component {    
    constructor(props) {
        super(props);
        this.state = {
            activeBlock: "hero"
        };
    }

    handleContentBodyChange = (value) => {
        this.setState({ activeBlock: value})
    }
    



    render() {
        let containerBlock;
        let contentBody = this.state.activeBlock;

        if (contentBody === "hero"){
            containerBlock = <Hero />
        } else if (contentBody === "about me"){
            containerBlock = <AboutMe />
        } else if (contentBody === "skills"){
            containerBlock = <Skills />
        } else if (contentBody === "contact me"){
            containerBlock = <ContactMe />
        }

        return(

            <div className="container-fluid">
                <Header handleContentBodyChange={this.handleContentBodyChange} />
                {containerBlock}
            </div>
        );
    }  
};