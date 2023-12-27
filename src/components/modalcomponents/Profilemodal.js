import { useContext } from "react";
import "./profilemodal.css";
import { modalforuserProfile } from "../App";
import { FaRegCircleUser } from "react-icons/fa6";
import { LuMessageSquarePlus } from "react-icons/lu";
import { IoCreateOutline } from "react-icons/io5";
import { FiDollarSign } from "react-icons/fi";
import { IoIosStats } from "react-icons/io";
import { IoBookmarksOutline } from "react-icons/io5";
import { MdOutlineDrafts } from "react-icons/md";
import { GiNinjaStar } from "react-icons/gi";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
export const Profilemodal = () => {
  const { createPortalforuserProfile, setCreatePortaluserProfile } =
    useContext(modalforuserProfile);

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    navigate("/login");
  };
  
  const navigate = useNavigate();

  return (
    createPortalforuserProfile && (
      <div className="quora__profileModal">
        <div className="quora_profileModalTopSection">
          <FaRegCircleUser className="quora_profileModalTopSectionLogo" />
          <div className="quora_profileModalTopSectionuserNameandlogo">
            <span className="quora_profileModalTopSectionuserName">
              John doe
            </span>
            <IoIosArrowForward className="quora_profileModalTopSectionuserlogo" />
          </div>
        </div>
        <div class="quora_profileModalTopSectionhorizontal-line"></div>
        <div className="quora_profileModalNavigationSection">
          <div className="quora_ProfileModaleNavigation">
            <LuMessageSquarePlus className="quora_profileModalIcon" />
            <span className="quora_profileModalNavText">Messages</span>
          </div>
          <div className="quora_ProfileModaleNavigation">
            <IoCreateOutline className="quora_profileModalIcon" />
            <span className="quora_profileModalNavText">Create ad</span>
          </div>
          <div className="quora_ProfileModaleNavigation">
            <FiDollarSign className="quora_profileModalIcon" />
            <span className="quora_profileModalNavText">Monetisation</span>
          </div>
          <div className="quora_ProfileModaleNavigation">
            <IoIosStats className="quora_profileModalIcon" />
            <span className="quora_profileModalNavText">
              Your Content & Stats
            </span>
          </div>
          <div className="quora_ProfileModaleNavigation">
            <IoBookmarksOutline className="quora_profileModalIcon" />
            <span className="quora_profileModalNavText">Bookmarks</span>
          </div>
          <div className="quora_ProfileModaleNavigation">
            <MdOutlineDrafts className="quora_profileModalIcon" />
            <span className="quora_profileModalNavText">Drafts</span>
          </div>
          <div className="quora_ProfileModaleNavigation">
            <GiNinjaStar className="quora_profileModalIcon" />
            <span className="quora_profileModalNavText">Try Quora+</span>
          </div>
        </div>
        <div class="quora_profileModalTopSectionhorizontal-line"></div>
        <div className="quora_profileModalBottomSection">
          <div className="quora_profileModalToggleMode">
            <span className="quora_profileModalBottomtext">Dark mode</span>
            <span className="quora_profileModalToggleModebutton">OFF</span>
          </div>
          <span className="quora_profileModalBottomSectiontext">Settings</span>
          <span className="quora_profileModalBottomSectiontext">Languages</span>
          <span className="quora_profileModalBottomSectiontext">Help</span>
          <span
            className="quora_profileModalBottomSectiontext"
            onClick={handleLogout}
          >
            Logout
          </span>
        </div>
      </div>
    )
  );
};
