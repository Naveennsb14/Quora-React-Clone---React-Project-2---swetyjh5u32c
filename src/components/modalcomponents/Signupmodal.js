import React, { useContext } from "react";
import { createPortal } from "react-dom";
import { modalforSignup } from "../App";
import "./signupmodal.css";
import { RxCross1 } from "react-icons/rx";

export const Signupmodal = () => {
  const { createSignupModal, setCreatesignupModal } =
    useContext(modalforSignup);
  function handleOverlayClick(event) {
    if (event.target === event.currentTarget) {
      setCreatesignupModal(false); // it diffrentiates between the parent and the child div so that the child div once clicked wont make state FALSE
    }
    console.log(event.currentTarget);
  }
  return createPortal(
    createSignupModal && (
      <div className="quora__signupModal">
        <div className="quora__childsignupModal">
          <div className="quora_AddchildQuestion">
            <RxCross1
              className="quora_AddquestionModalCrossLogo"
              onClick={handleOverlayClick}
            />
          </div>
          <span className="quora__signupText">Sign up</span>
          <form action="" className="quora__signupFormdetails">
            <label htmlFor="quora__name" className="quora__signupformName">
              Name
            </label>
            <input
              type="text"
              id="quora__name"
              className="quora__signupformNameInput"
              placeholder="What Would like you to be called"
            />
            <label htmlFor="quora__email" className="quora__signupformEmail">
              Email
            </label>
            <input
              type="text"
              id="quora__email"
              className="quora__signupformEmailInput"
              placeholder="Your Email"
            />
            <label
              htmlFor="quora__password"
              className="quora__signupformPassword"
            >
              Password
            </label>
            <input
              type="password"
              id="quora__password"
              className="quora__signupformPasswordInput"
              placeholder="Type Your Password"
            />
            <button type="submit" className="quora__signupButton">
              Next
            </button>
          </form>
        </div>
      </div>
    ),
    document.querySelector(".quora_signupModal")
  );
};
