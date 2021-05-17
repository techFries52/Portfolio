import React from "react";

const ContactMe = (props) => {
  const { handleModalOpen } = props;

 
  

  return (
    <>
      <div className="row justify-content-center contactme align-items-center fix-bottom">
        <div className="col-md-4">
          <h4>Have a Project in Mind?</h4>
        </div>
        <div className="col-md-4">
          <h5>Lets have a chat</h5>
        </div>
        <div className="col-md-4">
            <button className="contactbtn btn" onClick={() => handleModalOpen()} type="button">
              Contact Me
            </button>
          
        </div>
      </div>      
    </>
  );
};

export default ContactMe;
