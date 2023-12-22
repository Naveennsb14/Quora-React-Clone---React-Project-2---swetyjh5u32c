import React, { useContext } from "react";
import { createPortal } from "react-dom";
import "./addquestion.css";
import { modalforAddQuestion } from "../App";
import { RxCross1 } from "react-icons/rx";

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
    createPortalforaddquestion && (
      <div className="quora_AddquestionModal" onClick={handleOverlayClick}>
        <div className="quora_AddchildquestionModal">
          <div className="quora_AddchildQuestion">
            <RxCross1
              className="quora_AddquestionModalCrossLogo"
              onClick={handleOverlayClick}
            />
          </div>
          <div className="quoraAddquestionModalHeaderSection">Add Question</div>
          <div className="quoraquestionTipsDetails">
            <span className="quoraquestionTips">Tips on getting good answers quickly</span>
            <ul className="quora__questionTipsList">
              <li>Make Sure your answer has not been asked already</li>
              <li>Keep your question short and to the point</li>
              <li>Double-check grammar and spelling</li>
            </ul>
          </div>
        </div>
      </div>
    ),
    document.querySelector(".quora__addQuestion")
  );
};

export default Addquestion;
