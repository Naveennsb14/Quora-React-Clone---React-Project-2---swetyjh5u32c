import "./timeline.css";
import { CgProfile } from "react-icons/cg";

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
    </div>
  );
};

export default Timeline;
