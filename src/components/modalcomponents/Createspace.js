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
        </div>
      </div>
    ),
    document.querySelector('.quora_createSpace')
  );
};

export default Createspace;
