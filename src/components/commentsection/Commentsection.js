import "./commentsection.css";
import { CgProfile } from "react-icons/cg";
import { BiUpvote } from "react-icons/bi";
import { BiDownvote } from "react-icons/bi";
import { useParams } from "react-router-dom";


const Commentsection = ({comments}) => {
  return (
    <div className="quora__lowercommentSection">
      
      <div className="quora__addedCommentSection">
        <div className="quora__addedCommentprofileSection">
          <CgProfile className="quora__lowerCommentprofileLogo" />
          <span className="quora__adddedCommentuserName">{comments.author}</span>
        </div>
        <div className="quora__addedCommentDetails">
          <p className="quora__addedCommentText">
            {comments.content}
          </p>
        </div>
      </div>
      <div className="quora__addedCommentUpVotedownVoteAndMoreSection">
        <div className="quora__addedCommentupVoteSection">
          <BiUpvote className="quora__addedCommentupVoteIcon" />
          <span className="quora__adedCommentUpVotedigit">22</span>
        </div>
        <div className="quora__addedCommentdownVoteSection">
          <BiDownvote className="quora__addedCommentdownVoteIcon" />
        </div>
      </div>
    </div>
  );
};

export default Commentsection;
