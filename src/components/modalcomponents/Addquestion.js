import React, { useContext } from "react";
import { createPortal } from "react-dom";
import "./addquestion.css"
import { modalforAddQuestion } from "../App";

const Addquestion = () => {
  const { createPortalforaddquestion, setCreateportalforaddquestion } =
    useContext(modalforAddQuestion);
  return createPortal(
    createPortalforaddquestion &&
    
      <div className="quora_AddquestionModal" onClick={()=>setCreateportalforaddquestion(false)}>
        <div className="quora_AddchildquestionModal">
          modal for add question
        </div>
      </div>,
    document.querySelector(".quora__addQuestion")
  );
};

export default Addquestion;
