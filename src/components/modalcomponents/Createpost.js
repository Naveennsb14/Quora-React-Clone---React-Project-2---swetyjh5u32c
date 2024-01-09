import React, { useContext, useEffect, useState } from "react";
import "./createpost.css";
import { createPortal } from "react-dom";
import { modalforCreatePost, postAddrefresh } from "../App";
import { RxCross1 } from "react-icons/rx";
import { LuUserCircle2 } from "react-icons/lu";
import { MdArrowRight } from "react-icons/md";
import { IoImagesOutline } from "react-icons/io5";
import axios from "axios";

export const Createpost = () => {
  const{postcalled, setPostcalled}=useContext(postAddrefresh);
  const [selectedtext, setSelectedtext] = useState({
    text: "",
    body: "",
  });
  const handleonChange = (e) => {
    const { value, name } = e.target;
    setSelectedtext((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const { createPortalforaddpost, setCreateportalforaddpost } =
    useContext(modalforCreatePost); // for toggling the modal for create post
  function handleOverlayClick(event) {
    if (event.target === event.currentTarget) {
      setCreateportalforaddpost(false); // it diffrentiates between the parent and the child div so that the child div once clicked wont make state FALSE
    }
    console.log(event.currentTarget);
  }
  const token = JSON.parse(sessionStorage.getItem("token"));
  console.log("token", token);


  // Calling the API for posting The post to DB

  const newPost = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        projectID: "swetyjh5u32c",
      },
    };
    const formData = new FormData();
    formData.append("title", "postTitle");
    formData.append("content", selectedtext.body);
    // formData.append("images", "postImage");
    try {
      // console.log(selectedtext.body);
      const response = await axios.post(
        "https://academics.newtonschool.co/api/v1/quora/post/",
        formData,
        config
      );
      console.log("response", response);
      setPostcalled(response); // storing the response in state so that we can use it in dependency array
    } catch (error) {
      console.log("error", error);
    }
  };
  const handleonSubmit = (e) => {
    e.preventDefault();
    console.log("Function Ran");
    newPost();
    setCreateportalforaddpost(false);
  };
 
  console.log(selectedtext);
  return createPortal(
    createPortalforaddpost && ( // if the state will be true then only it will show the modal
      <div className="quora_createPostmodal" onClick={handleOverlayClick}>
        <div className="quora_childPostmodal">
          <div className="quora_AddchildQuestion">
            <RxCross1
              className="quora_AddquestionModalCrossLogo"
              onClick={handleOverlayClick}
            />
          </div>
          <div className="quoraAddquestionModalHeaderSection">Create Post</div>
          <div class="quora__createPostInputSectionhorizontal-line"></div>
          <div className="quora__createPostprofileSection">
            <LuUserCircle2 className="quora__createPostprofileSectionUserLogo" />
            <div className="quora__createPostprofileSectionuserDetails">
              <span className="quora__createPostprofileuserName">{JSON.parse(sessionStorage.getItem('name'))}</span>
              <div className="createPostprofileuserCredentialsdetails">
                <span className="quora__credentials">Choose Credentials</span>
                <MdArrowRight className="quora__rightLogo" />
              </div>
            </div>
          </div>

          <div class="quora__createPostInputhorizontal__line"></div>
          <form
            onSubmit={handleonSubmit}
            action=""
            className="quora_createPostFormDetails"
          >
            <input
              name="body"
              type="text"
              className="quora__createPostInputDetails"
              placeholder="Say Something..."
              onChange={handleonChange}
            />
            <div className="quora__createPostselectImage">
              <label htmlFor="img" className="quora__selectImage">
                <IoImagesOutline className="quora__selectImageLogo" />
              </label>
              <input
                type="file"
                id="img"
                name="img"
                accept="image/*"
                className="quora__otherInputs"
              />
            </div>
            <button type="submit" className="quora__createPostbutton">
              Post
            </button>
          </form>
        </div>
      </div>
    ),
    document.querySelector(".quora_createpost")
  );
};
