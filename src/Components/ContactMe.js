import React from "react";

const ContactMe = () => {
  return (
    <div className="oj">
      <div className="row justify-content-center contactme align-items-center fix-bottom">
        <div className="col-md-4">
          <h4>Have a Project in Mind?</h4>
        </div>
        <div className="col-md-4">
          <h5>Lets have a chat</h5>
        </div>
        <div className="col-md-4">
          <form className="text-center">
            <button className="contactbtn btn" type="button">
              Contact Me
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
