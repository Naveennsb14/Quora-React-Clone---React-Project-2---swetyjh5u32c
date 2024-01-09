import { createPortal } from "react-dom";
import { RxCross1 } from "react-icons/rx";
import { LuUserCircle2 } from "react-icons/lu";
import { MdArrowRight } from "react-icons/md";
import { IoImagesOutline } from "react-icons/io5";
import { useContext, useEffect, useState } from "react";
import { modalforAddAnswer, postAddrefresh } from "../App";
import { useParams } from "react-router-dom";
import axios from "axios";
const Addanswer = () => {
  const {postcalled, setPostcalled} = useContext(postAddrefresh)
  const { userId } = useParams();
  const { createportalforaddanswer, setCreateportalforaddanswer } =
    useContext(modalforAddAnswer);
  const [answerdata, setAnswerdata] = useState();
  function handleOverlayClick(event) {
    if (event.target === event.currentTarget) {
      setCreateportalforaddanswer(false); // it diffrentiates between the parent and the child div so that the child div once clicked wont make state FALSE
    }
    console.log(event.currentTarget);
  }
  const token = JSON.parse(sessionStorage.getItem("token"));

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setAnswerdata((prev) => ({
      ...prev,
      [name]: value
    }));
  };
  // console.log('answerData',answerdata);

  //calling the API to get all answers 
  const getAnswers = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        projectID: "swetyjh5u32c", // passing the project id in header in key value form
      },
    };
    try {
      const response = await axios.get(
        `https://academics.newtonschool.co/api/v1/quora/post/${userId}/comments`, // fetching the data by provided API aloong with config
        config
      );
      console.log("AnswerCalled Successfully", response.data.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  

  // calling the api for posting the Answers in UI
  const postAnswers = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        projectID: "swetyjh5u32c", // passing the project id in header in key value form
      },
    };

    try {
      const res = await axios.post(
        `https://academics.newtonschool.co/api/v1/quora/comment/${userId}`,
        {
          content: answerdata.body,
        },
        config
      );
      console.log("Answer added successfully", res);
      setCreateportalforaddanswer(false);
      setPostcalled(res);
      getAnswers();
    } catch (error) {
      console.log(error);
    }
  };

  return createPortal(
    createportalforaddanswer && (
      <div className="quora_createPostmodal" onClick={handleOverlayClick}>
        <div className="quora_childPostmodal">
          <div className="quora_AddchildQuestion">
            <RxCross1
              className="quora_AddquestionModalCrossLogo"
              onClick={handleOverlayClick}
            />
          </div>
          <div className="quoraAddquestionModalHeaderSection">Add Answer</div>
          <div class="quora__createPostInputSectionhorizontal-line"></div>
          <div className="quora__createPostprofileSection">
            <LuUserCircle2 className="quora__createPostprofileSectionUserLogo" />
            <div className="quora__createPostprofileSectionuserDetails">
              <span className="quora__createPostprofileuserName">
                {JSON.parse(sessionStorage.getItem("name"))}
              </span>
              <div className="createPostprofileuserCredentialsdetails">
                <span className="quora__credentials">Choose Credentials</span>
                <MdArrowRight className="quora__rightLogo" />
              </div>
            </div>
          </div>

          <div class="quora__createPostInputhorizontal__line"></div>
          <form action="" className="quora_createPostFormDetails">
            <input
              name="body"
              type="text"
              className="quora__createPostInputDetails"
              placeholder="Write your answer"
              onChange={handleOnChange}
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
            <button type="submit" className="quora__createPostbutton" onClick={postAnswers}>
              Add Answer
            </button>
          </form>
        </div>
      </div>
    ),
    document.querySelector(".quora__addAnswer")
  );
};

export default Addanswer;
