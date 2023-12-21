import React, { useContext, useState } from "react";
import "./createpost.css";
import { createPortal } from "react-dom";
import { modalforCreatePost } from "../App";

export const Createpost = () => {
  const { createPortalforaddpost, setCreateportalforaddpost } =
    useContext(modalforCreatePost); // for toggling the modal for create post
    function handleOverlayClick(event) {
      if (event.target === event.currentTarget) {
        setCreateportalforaddpost(false); // it diffrentiates between the parent and the child div so that the child div once clicked wont make state FALSE
      }
      console.log(event.currentTarget);
  }
  return createPortal(
    createPortalforaddpost && ( // if the state will be true then only it will show the modal
      <div className="quora_createPostmodal" onClick={handleOverlayClick}> 
        <div className="quora_childPostmodal">Modal for create post</div>
      </div>
    ),
    document.querySelector(".quora_createpost")
  );
};
