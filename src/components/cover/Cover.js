import "./cover.css";
import { IoIosMore } from "react-icons/io";
import { MdNotificationsActive } from "react-icons/md";
import { GrShield } from "react-icons/gr";
import { GoChevronDown } from "react-icons/go";
import { LuUserPlus2 } from "react-icons/lu";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { LuUsers2 } from "react-icons/lu";
import { GoClock } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { TfiMenuAlt } from "react-icons/tfi";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { GrInbox } from "react-icons/gr";
const Cover = () => {
  return (
    <div className="quora__createSpacepage">
      <div className="quora__createSpacecoverBackground">
        <div className="quora__createSpacebackgroundSection">
          <div className="quora__createSpacebackgroundprofileSection">
            <img
              className="quora__createSpacebackgroundCoverImage"
              src="https://qsf.cf2.quoracdn.net/-4-ans_frontend_assets.images.tribes.defaults.space_banner_yellow.png-26-0cad087b263ce130.png"
              alt=""
            />
            <img
              className="quora__createSpaceMiniImage"
              src="https://qsf.cf2.quoracdn.net/-4-ans_frontend_assets.images.tribes.defaults.space_icon_yellow.png-26-fe83a11d61dd4889.png"
              alt=""
            />

            <div className="quora__createSpaceNameSection">
              <h1 className="quora__createSpaceName">John Doe's Space</h1>
            </div>
            <div className="quora__createSpacecontributorSection">
              <span className="quora__contributorText">
                1 Contributor - 1 Post in the last month
              </span>
              <div className="quora__createSpaceIconSection">
                <div className="quora__createSpacemoreIcons">
                  <IoIosMore className="quora__moreIcon" />
                </div>
                <div className="quora__createSpacenotificationsIcons">
                  <MdNotificationsActive className="quora__notificationsIcon" />
                </div>
                <div className="quora__createSpaceshieldIcons">
                  <GrShield className="quora__shieldIcon" />
                  <span className="quora__createSpaceText">Admin</span>
                  <GoChevronDown className="quora__dropdownIcon" />
                </div>
                <div className="quora__createSpaceinviteIcons">
                  <LuUserPlus2 className="quora__inviteIcon" />
                  <span className="quora__createSpaceinviteText">Invite</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="quora__createSpaceAdminandContributorSection">
        <div className="quora__createSpaceLeftside">
          <div className="quora__createSpaceAdminSection">
            <span className="quora__createSpaceAdminDashboardText">
              Admin dashboard
            </span>
            <hr className="quora__createSpaceAdmindashboardHorizontalLine" />
            <div className="quora__createSpaceviews_follow_upvote_commentSection">
              <div className="quora__createSpaceviewsSection">
                <span className="createSpace__viewsText">Views</span>
                <span className="createSpace__viewsCount">5</span>
              </div>
              <div className="quora__createSpaceviewsSection">
                <span className="createSpace__viewsText">Follows</span>
                <span className="createSpace__viewsCount">1</span>
              </div>
              <div className="quora__createSpaceviewsSection">
                <span className="createSpace__viewsText">Upvotes</span>
                <span className="createSpace__viewsCount">0</span>
              </div>
              <div className="quora__createSpaceviewsSection">
                <span className="createSpace__viewsText">Comments</span>
                <span className="createSpace__viewsCount">0</span>
              </div>
            </div>
            <hr className="quora__createSpaceAdmindashboardHorizontalLine" />

            <div className="createSpace__settingSpace">
              <span className="createSpace__settingspaceText">
                Continue Setting your space
              </span>
            </div>
            <hr className="createSpace__settingspaceTextHorizontalLine" />
            <div className="createSpace__EditVisuals">
              <IoIosCheckmarkCircleOutline className="createSpace__EditVisualsIcon" />
              <span className="createSpace__EditVisualsText">
                Edit visuals of your Space
              </span>
            </div>
            <hr className="createSpace__settingspaceTextHorizontalLine" />
            <div className="createSpace__EditVisuals">
              <IoIosCheckmarkCircleOutline className="createSpace__EditVisualsIcon" />
              <span className="createSpace__EditVisualsText">
                Invite people to follow your Space
              </span>
            </div>
            <hr className="createSpace__settingspaceTextHorizontalLine" />
            <div className="createSpace__EditVisuals">
              <IoIosCheckmarkCircleOutline className="createSpace__EditVisualsIcon" />
              <span className="createSpace__EditVisualsText">
                Share your Space to feed
              </span>
            </div>
            <hr className="quora__createSpaceAdmindashboardHorizontalLine" />
            <div className="createSpace__invite_queue_peope_settings_adminlog">
              <div className="createSpace__AdminIconSection">
                <LuUserPlus2 className="createSpace__AdminIconLogo" />
                <span className="createSpace__AdminIconText">Invite</span>
              </div>
              <div className="createSpace__AdminIconSection">
                <LuUsers2 className="createSpace__AdminIconLogo" />
                <span className="createSpace__AdminIconText">People</span>
              </div>
              <div className="createSpace__AdminIconSection">
                <GoClock className="createSpace__AdminIconLogo" />
                <span className="createSpace__AdminIconText">Queue</span>
              </div>
              <div className="createSpace__AdminIconSection">
                <IoSettingsOutline className="createSpace__AdminIconLogo" />
                <span className="createSpace__AdminIconText">Settings</span>
              </div>
              <div className="createSpace__AdminIconSection">
                <TfiMenuAlt className="createSpace__AdminIconLogo" />
                <span className="createSpace__AdminIconText">Admin log</span>
              </div>
            </div>
          </div>
          <div className="quora__createSpacePostInputSection">
            <HiOutlineUserCircle className="quora__createSpaceUserlogo" />
            <input
              type="text"
              className="createSpace__CreateSpaceInput"
              placeholder="Post in Naveen Singh Baghel's Space 3..."
            />
            <div className="createSpace__InboxSection">
              <GrInbox className="createSpace__inboxlogo" />
              <span className="createSpace__inboxText">Inbox</span>
            </div>
          </div>
          <div className="createSpace__storiesSection">
            <img
              src="https://qsf.fs.quoracdn.net/-4-ans_frontend_assets.images.empty_states.dormant_lightmode.png-26-c4532c98034818a0.png"
              alt=""
              className="createSpace__storiesImage"
            />
            <span className="HeaderText">No Stories</span>
            <span className="lowerText">There are no stories in this Space yet.</span>
          </div>
        </div>
        <div className="quora__createSpaceContributorSection">
            <img src="https://s0.2mdn.net/simgad/5829679842727353805" alt="" />
            <img src="https://s0.2mdn.net/simgad/5829679842727353805" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Cover;
