import "./commentsection.css";
import { CgProfile } from "react-icons/cg";
import { BiUpvote } from "react-icons/bi";
import { BiDownvote } from "react-icons/bi";

const Commentsection = () => {
  return (
    <div className="quora__lowercommentSection">
      <div className="quora__lowerCommentprofileSection">
        <CgProfile className="quora__lowerCommentprofileLogo" />
        <form action="">
          <input
            type="text"
            className="quora__lowerCommentInputSection"
            placeholder="Add a comment..."
          />
          <button className="quora__lowerCommmentbuttonSection" type="submit">
            Add comment
          </button>
        </form>
      </div>
      <div className="quora__addedCommentSection">
        <div className="quora__addedCommentprofileSection">
          <CgProfile className="quora__lowerCommentprofileLogo" />
          <span className="quora__adddedCommentuserName">John Doe</span>
        </div>
        <div className="quora__addedCommentDetails">
          <p className="quora__addedCommentText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            sunt accusantium repellendus suscipit quod iure rem nostrum
            recusandae obcaecati facere, nihil quia labore praesentium quaerat
            eveniet laboriosam velit dolore aperiam in culpa earum magni.
            Repudiandae dolore voluptatibus eligendi hic debitis.
          </p>
        </div>
      </div>
      <div className="quora__addedCommentUpVotedownVoteAndMoreSection">
        <div className="quora__addedCommentupVoteSection">
          <BiUpvote  className="quora__addedCommentupVoteIcon"/>
          <span className="quora__adedCommentUpVotedigit">22</span>
        </div>
        <div className="quora__addedCommentdownVoteSection">
            <BiDownvote className="quora__addedCommentdownVoteIcon"/>
          </div>
      </div>
    </div>
  );
};

export default Commentsection;
