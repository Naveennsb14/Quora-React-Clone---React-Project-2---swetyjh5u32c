import React from "react";
import "./questiontitle.css";
import { BsPencilSquare } from "react-icons/bs";
import { BiWifi2 } from "react-icons/bi";
import { RiUserShared2Line } from "react-icons/ri";
import { MdInfoOutline } from "react-icons/md";
import { FaRegComment } from "react-icons/fa6";
import { BiDownvote } from "react-icons/bi";
import { IoIosMore } from "react-icons/io";
export const Questiontitle = () => {
  return (
    <div className="quora__questionTitlesection">
      <h2 className="quora__questiontitle">What is data science</h2>
      <div className="quora__questiontitleLowerSection">
        <div className="quora__questiontitleAnswerSection">
          <div className="quora__questiontitleIconSection">
            <BsPencilSquare className="quora__questiontitleIcon" />
            <span className="questiontitleText">Answer</span>
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
    </div>
  );
};
