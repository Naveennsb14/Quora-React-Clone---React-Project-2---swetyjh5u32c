import React, { useContext, useState } from "react";
import { createPortal } from "react-dom";
import { modalforCreateSpace, toggleTheme } from "../App";
import "./createspace.css";
import { RxCross1 } from "react-icons/rx";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Createspace = () => {
  const navigate = useNavigate();

  const { createPortalforcreatespace, setCreateportalforcreatespace } =
    useContext(modalforCreateSpace);

  const [createspaceText, setCreatespaceText] = useState({
    name: "",
    description: "",
  });

  const {darkMode, setDarkMode}= useContext(toggleTheme)

  function handleOverlayClick(event) {
    if (event.target === event.currentTarget) {
      setCreateportalforcreatespace(false); // it diffrentiates between the parent and the child div so that the child div once clicked wont make state FALSE
    }
    console.log(event.currentTarget);
  }

  const token = JSON.parse(sessionStorage.getItem("token"));
  console.log("token", token);

  const postSpace = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        projectID: "swetyjh5u32c",
        "content-type": "multipart/form-data",
      },
    };
    try {
      const response = await axios.post(
        "https://academics.newtonschool.co/api/v1/quora/channel/",
        {
          name: createspaceText.name,
        },
        config
      );
      console.log("response", response);
      navigate(`/createspace/${response.data.data._id}`);
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setCreatespaceText((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  console.log(createspaceText);

  return createPortal(
    createPortalforcreatespace && (
      <div className="quora__modalforCreatespace" onClick={handleOverlayClick}>
        <div className={darkMode?"quora__childmodalforcreatespaceDark":"quora__childmodalforcreatespace"}>
          <div className={darkMode?"quora_AddchildQuestionDark":"quora_AddchildQuestion"}>
            <RxCross1
              className={darkMode?"quora_AddquestionModalCrossLogoDark":"quora_AddquestionModalCrossLogo"}
              onClick={handleOverlayClick}
            />
          </div>
          <div className="quora__createSpaceHeaderSection">
            <span className={darkMode?"quora__createSpaceTextDark":"quora__createSpaceText"}>Create a Space</span>
            <span className={darkMode?"quora__createSpacesubTextDark":"quora__createSpacesubText"}>
              Share your interests, curate content, host discussions and more.
            </span>
          </div>
          <form action="" className="quora__createSpaceformContainer">
            <label htmlFor="name" className={darkMode?"quora__createSpaceformNameDark":"quora__createSpaceformName"}>
              Name*
            </label>
            <span className="quora__createSpaceformsubName">
              This can be changed in Space settings.
            </span>
            <input
              name="name"
              type="text"
              id="name"
              className={darkMode?"quora__createSpaceformNameinputDark":"quora__createSpaceformNameinput"}
              onChange={handleOnChange}
            />
            <label
              htmlFor="brief"
              className={darkMode?"quora__createSpaceformBriefdescriptionDark":"quora__createSpaceformBriefdescription"}
            >
              Brief description
            </label>
            <span className="quora__createSpaceformbriefsubText">
              Include a few keywords to show people what to expect if they join.
            </span>
            <input
              name="description"
              type="text"
              id="brief"
              className={darkMode?"quora__createSpaceformBriefdescriptionInputDark":"quora__createSpaceformBriefdescriptionInput"}
              onChange={handleOnChange}
            />
            <button
              className="quora__createSpaceformCreate_btn"
              onClick={postSpace}
            >
              Create
            </button>
          </form>
        </div>
      </div>
    ),
    document.querySelector(".quora_createSpace")
  );
};

export default Createspace;
