import "./timeline.css";
import { CgProfile } from "react-icons/cg";
import { BiUpvote } from "react-icons/bi";
import { BiDownvote } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa6";
import { PiShareFatThin } from "react-icons/pi";
import { MdMoreHoriz } from "react-icons/md";
import axios from "axios";
import { useEffect } from "react";

const Timeline = ({details}) => {

  const {author, channel, commentCount, content, likeCount, title, _id} = details;
  
  return (
    <div className="quora_timeLine">
      <div className="quoraprofileSection_details">
        <CgProfile className="quoraprofile_Logo" />
        <div className="quoraProfile_Info">
          <div className="quoraProfile_Nameinfo">
            <h5 className="quoraProfile_Name">{channel.name}</h5>
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
        <img
          src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1702944000&semt=sph"
          alt=""
          className="quoraTimeline_image"
        />
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
          <FaRegComment className="quoravoteandcomment_Icon"/>
          <span className="comment_text">{commentCount}</span>
          </div>
          <div className="quora_Share">
          <PiShareFatThin className="quoravoteandcomment_Icon"/>
          <span className="share_text">165</span>
          </div>
        </div>
        <div className="quora_More">
          <MdMoreHoriz className="quoraMore_Icon"/>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
