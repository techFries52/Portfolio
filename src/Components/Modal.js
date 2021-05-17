import React from "react";

const Modal = () => {
    return(
        <form className="">
            <div className="row justify-content-center formrow">
                <div className="col-md-6">
                    <h2>Contact Me</h2>
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" />
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" />
                    <button>Subscribeish</button>
                    <span className="modal-close" >X</span>
                </div>
            </div> 
        </form>
    )
}

export default Modal;