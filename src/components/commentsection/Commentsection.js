import "./commentsection.css";
import { CgProfile } from "react-icons/cg";
import { BiUpvote } from "react-icons/bi";
import { BiDownvote } from "react-icons/bi";
import { useParams } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import axios from "axios";
import { useContext } from "react";
import { toggleTheme } from "../App";


const Commentsection = ({comments, getComments}) => {
  const {darkMode, setDarkMode} = useContext(toggleTheme)
  const token = JSON.parse(sessionStorage.getItem("token"));
  //api for deleting the comments in UI
  const deleteComments = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        projectID: "swetyjh5u32c", // passing the project id in header in key value form
      },
    };
    try {
      const deletedcomments = await axios.delete(
        `https://academics.newtonschool.co/api/v1/quora/comment/${comments._id}`,
        config
      );
      getComments();
      console.log('Comments deleted Successfully', deletedcomments)
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <div className="quora__lowercommentSection">
      
      <div className="quora__addedCommentSection">
        <div className="quora__addedCommentprofileSection">
          <CgProfile className="quora__lowerCommentprofileLogo" />
          <span className={darkMode?'quora__adddedCommentuserNameDark': "quora__adddedCommentuserName"}>{comments.author}</span>
        </div>
        <div className="quora__addedCommentDetails">
          <p className={darkMode?"quora__addedCommentTextDark":"quora__addedCommentText"}>
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
        <div className="quora__deletePostSection">
        <MdDelete className="quora__deletePostIcon" onClick={deleteComments}/>
        </div>
      </div>
      <hr className="quora__commentsectionHorizontalLine"/>
    </div>
  );
};

export default Commentsection;
