import "./questiontimeline.css";
import { FaRegCircleUser } from "react-icons/fa6";
import { BiUpvote } from "react-icons/bi";
import { BiDownvote } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa6";
import { PiShareFatThin } from "react-icons/pi";
import { MdMoreHoriz } from "react-icons/md";

const Questiontimeline = () => {
  return (
    <div className="quora__addquestionTimelineContainer">
      <div className="quora__addquestionProfileDetails">
        <FaRegCircleUser className="quora__addquestionprofileLogo" />
        <div className="quora__addquestionprofileSection">
          <span className="quora__addquestionprofileName">John Doe</span>
          <span className="quora__addquestionprofileheading">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus, praesentium.
          </span>
        </div>
      </div>
      <div className="quora__addquestionSummary">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit iure,
        velit quos possimus delectus incidunt quae. Quisquam libero soluta
        facere, ea esse reiciendis assumenda repellendus tempore, laborum itaque
        fuga vitae qui corrupti perspiciatis asperiores doloremque, pariatur
        ipsa fugit consequuntur. Animi consectetur, quo dolores expedita
        obcaecati repudiandae harum ab esse quas.
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
  );
};

export default Questiontimeline;
