import React from "react";
import Hero from "./Hero";

const ContactMe = () => {
    return(
        <div>
            <div className="row justify-content-center">
                <Hero />
            </div>
            <div class="row has-text-centered align-items-center">
                <div className="col-md-4">
                    <h4>Have a Project in Mind?</h4>
                </div>
                <div className="col-md-4">
                    <h5>Lets have a chat</h5>
                </div>
                <div className="col-md-4">
                    <form className="text-center">
                        <button className="btn btn-outline contactbtn" type="button">Contact Me</button>             
                    </form>
                </div>
            </div>
        </div>
        
    )
}

export default ContactMe;