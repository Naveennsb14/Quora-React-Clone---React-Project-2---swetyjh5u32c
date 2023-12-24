import React, { useContext } from "react";
import { createPortal } from "react-dom";
import { modalforCreateSpace } from "../App";
import "./createspace.css";
import { RxCross1 } from "react-icons/rx";

const Createspace = () => {
  const { createPortalforcreatespace, setCreateportalforcreatespace } =
    useContext(modalforCreateSpace);

  function handleOverlayClick(event) {
    if (event.target === event.currentTarget) {
      setCreateportalforcreatespace(false); // it diffrentiates between the parent and the child div so that the child div once clicked wont make state FALSE
    }
    console.log(event.currentTarget);
  }
  return createPortal(
    createPortalforcreatespace && (
      <div className="quora__modalforCreatespace" onClick={handleOverlayClick}>
        <div className="quora__childmodalforcreatespace">
          <div className="quora_AddchildQuestion">
            <RxCross1
              className="quora_AddquestionModalCrossLogo"
              onClick={handleOverlayClick}
            />
          </div>
          <div className="quora__createSpaceHeaderSection">
            <span className="quora__createSpaceText">Create a Space</span>
            <span className="quora__createSpacesubText">
              Share your interests, curate content, host discussions and more.
            </span>
          </div>
          <form action="" className="quora__createSpaceformContainer">
            <label htmlFor="name" className="quora__createSpaceformName">
              Name*
            </label>
            <span className="quora__createSpaceformsubName">
              This can be changed in Space settings.
            </span>
            <input type="text" id="name" className="quora__createSpaceformNameinput" />
            <label
              htmlFor="brief"
              className="quora__createSpaceformBriefdescription"
            >
              Brief description
            </label>
            <span className="quora__createSpaceformbriefsubText">
              Include a few keywords to show people what to expect if they join.
            </span>
            <input type="text" id="brief" className="quora__createSpaceformBriefdescriptionInput" />
            <button className="quora__createSpaceformCreate_btn">Create</button>
          </form>
        </div>
      </div>
    ),
    document.querySelector(".quora_createSpace")
  );
};

export default Createspace;
