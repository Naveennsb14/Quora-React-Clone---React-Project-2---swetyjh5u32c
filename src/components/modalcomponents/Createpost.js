import React, { useContext, useState } from "react";
import "./createpost.css";
import { createPortal } from "react-dom";
import { modalforCreatePost } from "../App";

export const Createpost = () => {
  const { createPortalforaddpost, setCreateportalforaddpost } =
    useContext(modalforCreatePost); // for toggling the modal for create post
  return createPortal(
    createPortalforaddpost && ( // if the state will be true then only it will show the modal
      <div className="quora_createPostmodal" onClick={()=>setCreateportalforaddpost(false)}> 
        <div className="quora_childPostmodal">Modal for create post</div>
      </div>
    ),
    document.querySelector(".quora_createpost")
  );
};
