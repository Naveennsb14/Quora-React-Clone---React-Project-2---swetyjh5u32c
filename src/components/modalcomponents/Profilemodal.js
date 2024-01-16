import { useContext, useEffect } from "react";
import "./profilemodal.css";
import { modalforuserProfile, toggleTheme } from "../App";
import { FaRegCircleUser } from "react-icons/fa6";
import { LuMessageSquarePlus } from "react-icons/lu";
import { IoCreateOutline } from "react-icons/io5";
import { FiDollarSign } from "react-icons/fi";
import { IoIosStats } from "react-icons/io";
import { IoBookmarksOutline } from "react-icons/io5";
import { MdOutlineDrafts } from "react-icons/md";
import { GiNinjaStar } from "react-icons/gi";
import { IoIosArrowForward } from "react-icons/io";
import { json, useNavigate } from "react-router-dom";
export const Profilemodal = () => {
  const { createPortalforuserProfile, setCreatePortaluserProfile } =
    useContext(modalforuserProfile);
  const { darkMode, setDarkMode } = useContext(toggleTheme);
  console.log('darkMode',darkMode);



  const handleToggle = () => {
    setDarkMode((prev) => {
      return !prev;
    });
    console.log('themeMode', darkMode);
    // sessionStorage.setItem('themeMode')
  };

  useEffect(()=>{
    sessionStorage.setItem('themeMode', JSON.stringify(darkMode));
  },[darkMode]) // if the state of dark mode gets changes then only the value will be updated in sessionStorage

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    navigate("/login");
  };

  const navigate = useNavigate();

  return (
    createPortalforuserProfile && (
      <div className={darkMode?"quora__profileModalDark":"quora__profileModal"}>
        <div className={darkMode?"quora_profileModalTopSectionDark":"quora_profileModalTopSection"}>
          <FaRegCircleUser className={darkMode?"quora_profileModalTopSectionLogoDark":"quora_profileModalTopSectionLogo"} />
          <div className="quora_profileModalTopSectionuserNameandlogo">
            <span className={darkMode?"quora_profileModalTopSectionuserNameDark":"quora_profileModalTopSectionuserName"}>
              {JSON.parse(sessionStorage.getItem("name"))}
            </span>
            <IoIosArrowForward className="quora_profileModalTopSectionuserlogo" />
          </div>
        </div>
        <div class="quora_profileModalTopSectionhorizontal-line"></div>
        <div className={darkMode?"quora_profileModalNavigationSectionDark":"quora_profileModalNavigationSection"}>
          <div className={darkMode?"quora_ProfileModaleNavigationDark":"quora_ProfileModaleNavigation"}>
            <LuMessageSquarePlus className={darkMode?"quora_profileModalIconDark":"quora_profileModalIcon" }/>
            <span className={darkMode?"quora_profileModalNavTextDark":"quora_profileModalNavText"}>Messages</span>
          </div>
          <div className={darkMode?"quora_ProfileModaleNavigationDark":"quora_ProfileModaleNavigation"}>
            <IoCreateOutline className={darkMode?"quora_profileModalIconDark":"quora_profileModalIcon"} />
            <span className={darkMode?"quora_profileModalNavTextDark":"quora_profileModalNavText"}>Create ad</span>
          </div>
          <div className={darkMode?"quora_ProfileModaleNavigationDark":"quora_ProfileModaleNavigation"}>
            <FiDollarSign className={darkMode?"quora_profileModalIconDark":"quora_profileModalIcon"} />
            <span className={darkMode?"quora_profileModalNavTextDark":"quora_profileModalNavText"}>Monetisation</span>
          </div>
          <div className={darkMode?"quora_ProfileModaleNavigationDark":"quora_ProfileModaleNavigation"}>
            <IoIosStats className={darkMode?"quora_profileModalIconDark":"quora_profileModalIcon"}/>
            <span className={darkMode?"quora_profileModalNavTextDark":"quora_profileModalNavText"}>
              Your Content & Stats
            </span>
          </div>
          <div className={darkMode?"quora_ProfileModaleNavigationDark":"quora_ProfileModaleNavigation"}>
            <IoBookmarksOutline className={darkMode?"quora_profileModalIconDark":"quora_profileModalIcon"} />
            <span className={darkMode?"quora_profileModalNavTextDark":"quora_profileModalNavText"}>Bookmarks</span>
          </div>
          <div className={darkMode?"quora_ProfileModaleNavigationDark":"quora_ProfileModaleNavigation"}>
            <MdOutlineDrafts className={darkMode?"quora_profileModalIconDark":"quora_profileModalIcon"} />
            <span className={darkMode?"quora_profileModalNavTextDark":"quora_profileModalNavText"}>Drafts</span>
          </div>
          <div className={darkMode?"quora_ProfileModaleNavigationDark":"quora_ProfileModaleNavigation"}>
            <GiNinjaStar className={darkMode?"quora_profileModalIconDark":"quora_profileModalIcon"} />
            <span className={darkMode?"quora_profileModalNavTextDark":"quora_profileModalNavText"}>Try Quora+</span>
          </div>
        </div>
        <div class="quora_profileModalTopSectionhorizontal-line"></div>
        <div className="quora_profileModalBottomSection">
          <div className={darkMode?"quora_profileModalToggleModeDark":"quora_profileModalToggleMode"} onClick={handleToggle}>
            <span className={darkMode?"quora_profileModalBottomtextDark":"quora_profileModalBottomtext"}>Dark mode</span>
            <span className={darkMode?"quora_profileModalToggleModebuttonDark":"quora_profileModalToggleModebutton"}>{darkMode?"ON":"OFF"}</span>
          </div>
          <span className={darkMode?"quora_profileModalBottomSectiontextDark":"quora_profileModalBottomSectiontext"}>Settings</span>
          <span className={darkMode?"quora_profileModalBottomSectiontextDark":"quora_profileModalBottomSectiontext"}>Languages</span>
          <span className={darkMode?"quora_profileModalBottomSectiontextDark":"quora_profileModalBottomSectiontext"}>Help</span>
          <span
            className={darkMode?"quora_profileModalBottomSectiontextDark":"quora_profileModalBottomSectiontext"}
            onClick={handleLogout}
          >
            Logout
          </span>
        </div>
      </div>
    )
  );
};
