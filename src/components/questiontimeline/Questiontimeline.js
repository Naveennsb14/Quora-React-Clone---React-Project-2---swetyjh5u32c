import "./questiontimeline.css";
import { FaRegCircleUser } from "react-icons/fa6";
import { BiUpvote } from "react-icons/bi";
import { BiDownvote } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa6";
import { PiShareFatThin } from "react-icons/pi";
import { MdMoreHoriz } from "react-icons/md";
import { useParams } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const Questiontimeline = () => {
  const token = JSON.parse(sessionStorage.getItem("token"));
  const { userId } = useParams();
  const [answers, setAnswers] = useState();

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
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getAnswers();
  }, []);

  const timestamp = answers?.createdAt;
const date = new Date(timestamp);

// Convert to a normal date format
const normalDate = date.toDateString();

  return (
    <>
      {answers?.map((result) => (
        <div key={result._id} className="quora__addquestionTimelineContainer">
          <div className="quora__addquestionProfileDetails">
            <FaRegCircleUser className="quora__addquestionprofileLogo" />
            <div className="quora__addquestionprofileSection">
              <span className="quora__addquestionprofileName">John Doe</span>
              <span className="quora__addquestionprofileheading">
                {normalDate}
              </span>
            </div>
          </div>
          <div className="quora__addquestionSummary">
          {result.content}
          </div>
          <div className="quora_Voteandcommentsection">
            <div className="quoraVoteandcomment">
              <div className="quoraUpvote">
                <BiUpvote className="quoravoteandcomment_Icon" />
                <span className="upVote_text">
                  Upvote- <span className="totalupVote">5</span>
                </span>
              </div>
              <div className="downVote"></div>
              <div className="quoraDownvote">
                <BiDownvote className="quoravoteandcomment_Icon" />
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
