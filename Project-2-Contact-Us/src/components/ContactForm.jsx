import { useState } from "react";
import Buttons from "./Buttons";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const onViaCallSubmit = () => {
    console.log("Button Called");
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);

    event.target[0].value = "";
    event.target[1].value = "";
    event.target[2].value = "";
  };

  return (
    <div className="container py-4">
      <div className="row align-items-md-stretch">
        <div className="col-md-6">
          <div className="h-100 p-5 text-bg-dark rounded-3">
            <Buttons onClick={onViaCallSubmit} />
            <form onSubmit={onSubmit} className="col g-3">
              <div className="col-md-12">
                <label htmlFor="inputName4" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control input-box"
                  id="inputName4"
                />
              </div>
              <div className="col-md-12">
                <label htmlFor="inputEmail4" className="form-label ">
                  E-Mail
                </label>
                <input
                  type="email"
                  className="form-control input-box"
                  id="inputEmail4"
                />
              </div>
              <div className="col-md-12">
                <label htmlFor="inputText4" className="form-label ">
                  Text
                </label>
                <textarea
                  type="text"
                  cols="5"
                  rows="7"
                  className="form-control input-box"
                  id="inputText4"
                />
              </div>
              <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <button type="submit" className="btn btn-light submit-btn ">
                  SUBMIT
                </button>
              </div>
            </form>
            <br />
            <div>{name}</div>
            <div>{email}</div>
            <div>{text}</div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="h-50 p-3">
            <img className="img-fluid" src="./images/contact.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
