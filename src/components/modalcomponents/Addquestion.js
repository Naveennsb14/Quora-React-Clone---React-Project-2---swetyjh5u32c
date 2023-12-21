import React, { useContext } from "react";
import { createPortal } from "react-dom";
import "./addquestion.css"
import { modalforAddQuestion } from "../App";

const Addquestion = () => {
  const { createPortalforaddquestion, setCreateportalforaddquestion } =
    useContext(modalforAddQuestion);

    function handleOverlayClick(event) {
      if (event.target === event.currentTarget) {
        setCreateportalforaddquestion(false); // it diffrentiates between the parent and the child div so that the child div once clicked wont make state FALSE
      }
      console.log(event.currentTarget);
  }
  return createPortal(
    createPortalforaddquestion &&
    
      <div className="quora_AddquestionModal" onClick={handleOverlayClick}>
        <div className="quora_AddchildquestionModal">
          modal for add question
        </div>
      </div>,
    document.querySelector(".quora__addQuestion")
  );
};

export default Addquestion;
