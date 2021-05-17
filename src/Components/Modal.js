import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function Modal() {
  const [state, handleSubmit] = useForm("xbjpjlrb");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
      <div className="row formrow">
          <div className="col-md-6 formcol">
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">
                    Email Address
                </label>
                <input
                    id="email"
                    type="email" 
                    name="email"
                />
                <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                />
                <br></br>
                <textarea
                    rows="10"
                    id="message"
                    name="message"
                />
                <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                />
                <br></br>
                <button className="btn contactbtn" type="submit" disabled={state.submitting}>
                    Submit
                </button>
            </form>
          </div>
      </div>
  );
}
export default Modal;