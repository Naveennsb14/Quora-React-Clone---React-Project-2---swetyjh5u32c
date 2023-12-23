import React, { useContext } from "react";
import { createPortal } from "react-dom";
import "./addquestion.css";
import { modalforAddQuestion } from "../App";
import { RxCross1 } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";
import { MdArrowRight } from "react-icons/md";
import { HiOutlineUsers } from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";

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
            <span className="quoraquestionTips">
              Tips on getting good answers quickly
            </span>
            <ul className="quora__questionTipsList">
              <li className="quora__questionTipsListdetails">
                Make Sure your answer has not been asked already
              </li>
              <li className="quora__questionTipsListdetails">
                Keep your question short and to the point
              </li>
              <li className="quora__questionTipsListdetails">
                Double-check grammar and spelling
              </li>
            </ul>
          </div>
          <div className="quora__addQuestionModalprofileSection">
            <CgProfile className="quora__addQuestionModalprofileSectionuserLogo" />
            <MdArrowRight className="quora__addQuestionModalprofileSectionrightLogo" />
            <div className="quora__addQuestionModalprofileSectionPublic">
              <HiOutlineUsers className="quora__addQuestionModalprofileSectionPublicusersLogo" />
              <span className="quora__addQuestionModalprofileSectionPublicText">
                Public
              </span>
              <IoIosArrowDown className="quora__addQuestionModalprofileSectionarrowLogo" />
            </div>
          </div>
          <form action="">
            <div className="quora__addQuestionModalInputSection">
              <input
                type="text"
                className="quora__addQuestionDetails"
                placeholder='Start your question with "What", "How", "Why", etc.'
              />
            </div>
            <div class="quora__addQuestionModalInputSectionhorizontal-line"></div>
            <div class="quora__addQuestionModalInputSectionsecondhorizontal-line"></div>

            <div className="quora__addQuestionModalButtonSection">
              <button
                className="quoraAddquestionModalCancel_btn"
                onClick={handleOverlayClick}
              >
                Cancel
              </button>
              <button type="submit" className="quoraAddquestionModalAdd_btn">
                Add question
              </button>
            </div>
          </form>
        </div>
      </div>
    ),
    document.querySelector(".quora__addQuestion")
  );
};

export default Addquestion;
