import "./questiontimeline.css";
import { FaRegCircleUser } from "react-icons/fa6";
import { BiUpvote } from "react-icons/bi";
import { BiDownvote } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa6";
import { PiShareFatThin } from "react-icons/pi";
import { MdMoreHoriz } from "react-icons/md";
import { useParams } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { useContext, useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { postAddrefresh, toggleTheme } from "../App";


const Questiontimeline = () => {
  const token = JSON.parse(sessionStorage.getItem("token"));
  const { userId } = useParams();
  const [answers, setAnswers] = useState();
  const {postcalled, setPostcalled} = useContext(postAddrefresh)
  const {darkMode, setDarkMode}= useContext(toggleTheme)

  //caliing the API to get all answers 
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
      console.log("AnswerResponse", response.data.data);
      setAnswers(response.data.data);
      setPostcalled(null)
    } catch (error) {
      console.log("error", error);
    }
  };

  

  useEffect(() => {
    getAnswers();
  }, [postcalled]);

  const timestamp = answers?.createdAt;
const date = new Date(timestamp);

// Convert to a normal date format
const normalDate = date.toDateString();

  return (
    <>
      {answers?.map((result) => (
        <div key={result._id} className={darkMode?"quora__addquestionTimelineContainerDark":"quora__addquestionTimelineContainer"}>
          <div className="quora__addquestionProfileDetails">
            <FaRegCircleUser className="quora__addquestionprofileLogo" />
            <div className="quora__addquestionprofileSection">
              <span className={darkMode?"quora__addquestionprofileNameDark":"quora__addquestionprofileName"}>John Doe</span>
              <span className={darkMode?"quora__addquestionprofileheadingDark":"quora__addquestionprofileheading"}>
                {normalDate}
              </span>
            </div>
          </div>
          <div className={darkMode?"quora__addquestionSummaryDark":"quora__addquestionSummary"}>
          {result.content}
          </div>
          <div className="quora_Voteandcommentsection">
            <div className="quoraVoteandcomment">
              <div className={darkMode?"quoraUpvoteDark":"quoraUpvote"}>
                <BiUpvote className={darkMode?"quoravoteandcomment_IconDark":"quoravoteandcomment_Icon" }/>
                <span className={darkMode?"upVote_textDark":"upVote_text"}>
                  Upvote- <span className={darkMode?"totalupVoteDark":"totalupVote"}>5</span>
                </span>
              </div>
              <div className="downVote"></div>
              <div className={darkMode?"quoraDownvoteDark":"quoraDownvote"}>
                <BiDownvote className={darkMode?"quoravoteandcomment_IconDark":"quoravoteandcomment_Icon"} />
              </div>
              <div className="quora_comment">
                <FaRegComment className="quoravoteandcomment_Icon" />
                <span className="comment_text">4</span>
              </div>
              <div className="quora_Share">
                <PiShareFatThin className="quoravoteandcomment_Icon" />
                <span className="share_text">165</span>
              </div>
            </div>
            <div className="quora_More">
              <MdMoreHoriz className="quoraMore_Icon" />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Questiontimeline;
