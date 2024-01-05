import "./timeline.css";
import { CgProfile } from "react-icons/cg";
import { BiUpvote } from "react-icons/bi";
import { BiDownvote } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa6";
import { PiShareFatThin } from "react-icons/pi";
import { MdMoreHoriz } from "react-icons/md";
import axios from "axios";
import { useEffect, useState } from "react";
import Commentsection from "../commentsection/Commentsection";
import { useParams } from "react-router-dom";

const Timeline = ({details}) => {
  const {userId} = useParams();
  // console.log('userId', userId);

  const {author, channel, commentCount, content, likeCount, title, _id} = details;
  const [showCommentSection, setShowCommentSection] = useState(false);
  const [getallComments, setGetallComments] = useState();
  const toggleCommentSection = () => {
    setShowCommentSection((prev) => !prev);
  };
  const token = JSON.parse(sessionStorage.getItem("token"));
  const getComments = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        projectID: "swetyjh5u32c", // passing the project id in header in key value form
      },
    };
    try {
      const response = await axios.get(
        `https://academics.newtonschool.co/api/v1/quora/post/${_id}/comments`, // fetching the data by provided API aloong with config
        config
      );
      console.log("commentResponse", response);
      setGetallComments(response.data.data);
      
    } catch (error) {
      console.log("error", error);
    }
  };
  console.log('comments fetched successfully', getallComments);
  

  
  return (
    <div className="quora_timeLine">
      <div className="quoraprofileSection_details">
        <CgProfile className="quoraprofile_Logo" />
        <div className="quoraProfile_Info">
          <div className="quoraProfile_Nameinfo">
            <h5 className="quoraProfile_Name">{author.name}</h5>
            <span className="quoraProfile_followLink">Follow</span>
          </div>
          <p className="quoraProfile_paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
      <div className="quoraPostSection">
        <h3 className="quoraPostSection_header">
          {title}
        </h3>
        <p className="quoraPostSection_paragraph">
         {content}
        </p>
       {channel && 
        <img
          src={channel.image}
          alt=""
          className="quoraTimeline_image"
        />
       }
      </div>
      <div className="quora_Voteandcommentsection">
        <div className="quoraVoteandcomment">
          <div className="quoraUpvote">
            <BiUpvote className="quoravoteandcomment_Icon" />
            <span className="upVote_text">Upvote- <span className="totalupVote">{likeCount}</span></span>
          </div>
          <div className="downVote"></div>
          <div className="quoraDownvote">
            <BiDownvote className="quoravoteandcomment_Icon"/>
          </div>
          <div className="quora_comment">
          <FaRegComment className="quoravoteandcomment_Icon" onClick={()=>{toggleCommentSection(); getComments();}}/>
          <span className="comment_text">{commentCount}</span>
          </div>
          <div className="quora_Share">
          <PiShareFatThin className="quoravoteandcomment_Icon"/>
          <span className="share_text">165</span>
          </div>
        </div>
        <div className="quora_More">
          <MdMoreHoriz className="quoraMore_Icon" />
        </div>
        
      </div>
      {showCommentSection && (
              <Commentsection/>
            
          )}
    </div>
  );
};

export default Timeline;
