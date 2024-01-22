import React, { useContext, useState } from "react";
import { createPortal } from "react-dom";
import { modalforSignup } from "../App";
import "./signupmodal.css";
import { RxCross1 } from "react-icons/rx";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../pages/authprovider/Authprovider";

export const Signupmodal = () => {
  const navigate = useNavigate();
  const [signupForm, setSignupForm] = useState({
    // created the state for storing the values of input by onChange method in Input section
    fullname: "",
    email: "",
    password: "",
  });
  const { setIsLoggedIn } = useAuth();
  const { state } = useLocation();

  const { createSignupModal, setCreatesignupModal } =
    useContext(modalforSignup);
  function handleOverlayClick(event) {
    if (event.target === event.currentTarget) {
      setCreatesignupModal(false); // it diffrentiates between the parent and the child div so that the child div once clicked wont make state FALSE
    }
    console.log(event.currentTarget);
  }
  const createUser = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        projectID: "swetyjh5u",
      },
    };
    try {
      const response = await axios.post(
        "https://academics.newtonschool.co/api/v1/user/signup",
        {
          name: signupForm.fullname,
          email: signupForm.email,
          password: signupForm.password,
          appType: "quora",
        },
        config
      );
      console.log("response", response);
      const token = response.data.token;
      console.log("token", token);
      if (token) {
        sessionStorage.setItem("token", JSON.stringify(token));
        sessionStorage.setItem("name", JSON.stringify(response.data.data.user.name));
        setIsLoggedIn(true);
        if(state){
          navigate(state.prevPath)
        }else{
          navigate("/")
        }
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  const onChange = (event) => {
    const { value, name } = event.target; // we are extracting form name email and password with Input fiels
    setSignupForm((prev) => ({
      // we are storing the input values in Signup State
      ...prev,
      [name]: value,
    }));
    console.log("signup", signupForm);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    createUser();
  };
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
          <form
            onSubmit={onSubmit}
            action=""
            className="quora__signupFormdetails"
          >
            <label htmlFor="quora__name" className="quora__signupformName">
              Name
            </label>
            <input
              name="fullname"
              type="text"
              id="quora__name"
              className="quora__signupformNameInput"
              placeholder="What Would like you to be called"
              onChange={onChange}
            />
            <label htmlFor="quora__email" className="quora__signupformEmail">
              Email
            </label>
            <input
              name="email"
              type="text"
              id="quora__email"
              className="quora__signupformEmailInput"
              placeholder="Your Email"
              onChange={onChange}
            />
            <label
              htmlFor="quora__password"
              className="quora__signupformPassword"
            >
              Password
            </label>
            <input
              name="password"
              type="password"
              id="quora__password"
              className="quora__signupformPasswordInput"
              placeholder="Type Your Password"
              onChange={onChange}
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
