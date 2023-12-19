import "./timeline.css";
import { CgProfile } from "react-icons/cg";
import { BiUpvote } from "react-icons/bi";
import { BiDownvote } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa6";
import { PiShareFatThin } from "react-icons/pi";
import { MdMoreHoriz } from "react-icons/md";

const Timeline = () => {
  return (
    <div className="quora_timeLine">
      <div className="quoraprofileSection_details">
        <CgProfile className="quoraprofile_Logo" />
        <div className="quoraProfile_Info">
          <div className="quoraProfile_Nameinfo">
            <h5 className="quoraProfile_Name">John Doe</h5>
            <span className="quoraProfile_followLink">Follow</span>
          </div>
          <p className="quoraProfile_paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
      <div className="quoraPostSection">
        <h3 className="quoraPostSection_header">
          Which cricket Player Destroyed his own Career
        </h3>
        <p className="quoraPostSection_paragraph">
          Very few make the cut at Google interviews. It all boils down to how
          well prepped you are. A structured, 360° prep strategy can go a long
          way in helping you bag that coveted Google tech job. And if you’re on
          the lookout for an interview prep program, interview Kickstart is a
          good place to start.
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
            <span className="upVote_text">Upvote - <span className="totalupVote">1K</span></span>
          </div>
          <div className="downVote"></div>
          <div className="quoraDownvote">
            <BiDownvote className="quoravoteandcomment_Icon"/>
          </div>
          <div className="quora_comment">
          <FaRegComment className="quoravoteandcomment_Icon"/>
          <span className="comment_text">134</span>
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
