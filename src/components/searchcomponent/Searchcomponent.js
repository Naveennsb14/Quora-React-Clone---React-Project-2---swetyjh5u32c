import React, { useContext } from "react";
import "./searchcomponent.css"
import { toggleTheme } from "../App";
import { CgProfile } from "react-icons/cg";
import { BiUpvote } from "react-icons/bi";
import { BiDownvote } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa6";
import { PiShareFatThin } from "react-icons/pi";
import { MdMoreHoriz } from "react-icons/md";

const Searchcomponent = ({ details }) => {
  const {
    author,
    channel,
    commentCount,
    content,
    likeCount,
    title,
    _id,
    createdAt,
  } = details;
  const { darkMode, setDarkMode } = useContext(toggleTheme);
  const dateString = createdAt;
  const dateObject = new Date(dateString);

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZoneName: "short",
  };
  const readableDate = dateObject.toLocaleDateString("en-US", options);
  return (
    <div className="quora__searchResult">
        <div className={darkMode ? "quora_timeLineDark" : "quora_timeLine"}>
      <div className="quoraprofileSection_details">
        <CgProfile
          className={darkMode ? "quoraprofile_LogoDark" : "quoraprofile_Logo"}
        />
        <div className="quoraProfile_Info">
          <div className="quoraProfile_Nameinfo">
            <h5
              className={
                darkMode ? "quoraProfile_NameDark" : "quoraProfile_Name"
              }
            >
              {author?.name}
            </h5>
            <span className="quoraProfile_followLink">Follow</span>
          </div>
          <p
            className={
              darkMode ? "quoraProfile_paragraphDark" : "quoraProfile_paragraph"
            }
          >
            {readableDate}
          </p>
        </div>
      </div>
      <div className={darkMode ? "quoraPostSectionDark" : "quoraPostSection"}>
        <h3 className="quoraPostSection_header">{title}</h3>
        <p className="quoraPostSection_paragraph">{content}</p>
        {channel && (
          <img src={channel.image} alt="" className="quoraTimeline_image" />
        )}
      </div>
      <div className="quora_Voteandcommentsection">
        <div className="quoraVoteandcomment">
          <div
            className={darkMode ? "quoraUpvoteDark" : "quoraUpvote"}
          >
            <BiUpvote
              className={
                darkMode
                  ? "quoravoteandcomment_IconDark"
                  : "quoravoteandcomment_Icon"
              }
            />
            <span className={darkMode ? "upVote_textDark" : "upVote_text"}>
              Upvote-{" "}
              <span className={darkMode ? "totalupVoteDark" : "totalupVote"}>
                {likeCount}
              </span>
            </span>
          </div>
          <div className={darkMode ? "downVoteDark" : "downVote"}></div>
          <div
            className={darkMode ? "quoraDownvoteDark" : "quoraDownvote"}
            
          >
            <BiDownvote
              className={
                darkMode
                  ? "quoravoteandcomment_IconDark"
                  : "quoravoteandcomment_Icon"
              }
            />
          </div>
          <div className="quora_comment">
            <FaRegComment
              className={
                darkMode
                  ? "quoravoteandcomment_IconDark"
                  : "quoravoteandcomment_Icon"
              }
            />
            <span className={darkMode ? "comment_textDark" : "comment_text"}>
              {commentCount}
            </span>
          </div>
          <div className="quora_Share">
            <PiShareFatThin
              className={
                darkMode
                  ? "quoravoteandcomment_IconDark"
                  : "quoravoteandcomment_Icon"
              }
            />
            <span className={darkMode ? "share_textDark" : "share_text"}>
              165
            </span>
          </div>
        </div>
        <div className="quora_More">
          <MdMoreHoriz className="quoraMore_Icon" />
        </div>
      </div>
      <div
        className={
          darkMode
            ? "quora__lowerCommentprofileSectionDark"
            : "quora__lowerCommentprofileSection"
        }
      >
      </div>
    </div>
    </div>
  );
};

export default Searchcomponent;
