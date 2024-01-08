import React, { useEffect, useState } from "react";
import "./questiontitle.css";
import { BsPencilSquare } from "react-icons/bs";
import { BiWifi2 } from "react-icons/bi";
import { RiUserShared2Line } from "react-icons/ri";
import { MdInfoOutline } from "react-icons/md";
import { FaRegComment } from "react-icons/fa6";
import { BiDownvote } from "react-icons/bi";
import { IoIosMore } from "react-icons/io";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { modalforAddAnswer } from "../App";
import Addanswer from "../modalcomponents/Addanswer";
export const Questiontitle = () => {
  const {createportalforaddanswer, setCreateportalforaddanswer}=useContext(modalforAddAnswer)
  const [getonequestion, setGetoneQuestion] = useState();
  const { userId } = useParams();
  console.log(userId);
  const token = JSON.parse(sessionStorage.getItem("token"));
  // console.log("token", token);

  const getSingleQuestionwithId = async (qId) => {
    let questionId = await qId; // we are getting array of objects but we need single question of the respected user
    // console.log("questionId", questionId);
    questionId = questionId.find((details) => {
      // for getting the single question data we are applying the find method so that we can get the single question by comparing with its iD
      return details._id === userId;
    });
    console.log("questionId", questionId);
    setGetoneQuestion(questionId);
  };
  console.log('getonequestion', getonequestion);


  const getsingleQuestion = async () => {
    // const config = {
    //   headers: {
    //     "Content-Type": "application/json",
    //     projectID: "swetyjh5u32c",
    //   },
    // };
    try {
      const response = await axios.get(
        "https://academics.newtonschool.co/api/v1/quora/post?limit=1000",
        {
          headers: {
            projectID: "swetyjh5u32c",
          },
        }
      );
      console.log('responsequest',response);
      getSingleQuestionwithId(response.data.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getsingleQuestion();
  }, []);

  return (
    <div className="quora__questionTitlesection">
      <h2 className="quora__questiontitle">{getonequestion?.content}</h2>
      <div className="quora__questiontitleLowerSection">
        <div className="quora__questiontitleAnswerSection">
          <div className="quora__questiontitleIconSection">
            <BsPencilSquare className="quora__questiontitleIcon" />
            <span className="questiontitleText" onClick={()=>setCreateportalforaddanswer(true)}>Answer</span>
          </div>
          <div className="quora__questiontitleIconSection">
            <BiWifi2 className="quora__questiontitleIcon" />
            <span className="questiontitleText">
              Follow - <span className="quora__followText">2.3K</span>
            </span>
          </div>
          <div className="quora__questiontitleIconSection">
            <RiUserShared2Line className="quora__questiontitleIcon" />
            <span className="questiontitleText">Request</span>
          </div>
        </div>
        <div className="quora__questiontitleCommentSection">
          <div className="quora__questiontitleIconSection">
            <MdInfoOutline className="quora__questiontitleIcon" />
          </div>
          <div className="quora__questiontitleIconSection">
            <FaRegComment className="quora__questiontitleIcon" />
          </div>
          <div className="quora__questiontitleIconSection">
            <BiDownvote className="quora__questiontitleIcon" />
          </div>
          <div className="quora__questiontitleIconSection">
            <IoIosMore className="quora__questiontitleIcon" />
          </div>
        </div>
      </div>
      <Addanswer/>
    </div>
  );
};
