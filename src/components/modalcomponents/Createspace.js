import React, { useContext } from "react";
import { createPortal } from "react-dom";
import { modalforCreateSpace } from "../App";
import "./createspace.css";

const Createspace = () => {
  const { createPortalforcreatespace, setCreateportalforcreatespace } =
    useContext(modalforCreateSpace);
  return createPortal(
    createPortalforcreatespace && (
      <div className="quora__modalforCreatespace" onClick={()=>setCreateportalforcreatespace(false)}>
        <div className="quora__childmodalforcreatespace">
          modal for create space
        </div>
      </div>
    ),
    document.querySelector('.quora_createSpace')
  );
};

export default Createspace;
