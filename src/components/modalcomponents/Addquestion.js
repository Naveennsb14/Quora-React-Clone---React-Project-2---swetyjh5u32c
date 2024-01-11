import React, { useContext, useState } from "react";
import { createPortal } from "react-dom";
import "./addquestion.css";
import { modalforAddQuestion, toggleTheme } from "../App";
import { RxCross1 } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";
import { MdArrowRight } from "react-icons/md";
import { HiOutlineUsers } from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Addquestion = () => {
  const navigate = useNavigate();
  const { createPortalforaddquestion, setCreateportalforaddquestion } =
    useContext(modalforAddQuestion);
    const {darkMode, setDarkMode}= useContext(toggleTheme)

  const [addquestiontext, setAddquestiontext] = useState({
    text: "",
    body: "",
  });

  const handleonChange = (e) => {
    const { value, name } = e.target;
    setAddquestiontext((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  function handleOverlayClick(event) {
    if (event.target === event.currentTarget) {
      setCreateportalforaddquestion(false); // it diffrentiates between the parent and the child div so that the child div once clicked wont make state FALSE
    }
    console.log(event.currentTarget);
  }

  const token = JSON.parse(sessionStorage.getItem("token"));
  console.log("token", token);

  const newQuestion = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        projectID: "swetyjh5u32c",
      },
    };
    const formData = new FormData();
    formData.append("title", "PostTitle");
    formData.append("content", addquestiontext.body);

    try {
      console.log(addquestiontext);
      const response = await axios.post(
        "https://academics.newtonschool.co/api/v1/quora/post/",
        formData,
        config
      );
      console.log("response", response);
      navigate(`/addquestion/${response.data.data._id}`)
      setCreateportalforaddquestion(false)
    } catch (error) {
      console.log("error", error);
    }
  };

  // const handleonSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("AddQuestion Ran");
  //   newQuestion();
    
  // };
  return createPortal(
    createPortalforaddquestion && (
      <div className="quora_AddquestionModal" onClick={handleOverlayClick}>
        <div className={darkMode?"quora_AddchildquestionModalDark":"quora_AddchildquestionModal"}>
          <div className="quora_AddchildQuestion">
            <RxCross1
              className={darkMode?"quora_AddquestionModalCrossLogoDark":"quora_AddquestionModalCrossLogo"}
              onClick={handleOverlayClick}
            />
          </div>
          <div className={darkMode?"quoraAddquestionModalHeaderSectionDark":"quoraAddquestionModalHeaderSection"}>Add Question</div>
          <div className={darkMode?"quoraquestionTipsDetailsDark":"quoraquestionTipsDetails"}>
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
            <div className={darkMode?"quora__addQuestionModalprofileSectionPublicDark":"quora__addQuestionModalprofileSectionPublic"}>
              <HiOutlineUsers className={darkMode?"quora__addQuestionModalprofileSectionPublicusersLogoDark":"quora__addQuestionModalprofileSectionPublicusersLogo"} />
              <span className={darkMode?"quora__addQuestionModalprofileSectionPublicTextDark":"quora__addQuestionModalprofileSectionPublicText"}>
                Public
              </span>
              <IoIosArrowDown className="quora__addQuestionModalprofileSectionarrowLogo" />
            </div>
          </div>
          <form action="">
            <div className="quora__addQuestionModalInputSection">
              <input
                name="body"
                type="text"
                className={darkMode?"quora__addQuestionDetailsDark":"quora__addQuestionDetails"}
                placeholder='Start your question with "What", "How", "Why", etc.'
                onChange={handleonChange}
              />
            </div>
            <div class={darkMode?"quora__addQuestionModalInputSectionhorizontalDark":"quora__addQuestionModalInputSectionhorizontal-line"}></div>
            <div class={darkMode?"quora__addQuestionModalInputSectionhorizontalDark":"quora__addQuestionModalInputSectionhorizontal-line"}></div>

            <div className="quora__addQuestionModalButtonSection">
              <button
                className={darkMode?"quoraAddquestionModalCancel_btnDark":"quoraAddquestionModalCancel_btn"}
                onClick={handleOverlayClick}
              >
                Cancel
              </button>
              <button type="submit" className="quoraAddquestionModalAdd_btn" onClick={newQuestion}>
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
