import "./header.css";
import { MdHome } from "react-icons/md";
import { FaRegListAlt } from "react-icons/fa";
import { BsPencilSquare } from "react-icons/bs";
import { LuUsers } from "react-icons/lu";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";
import { Createpost } from "../modalcomponents/Createpost";
import { useContext, useState } from "react";
import { modalforAddQuestion, modalforCreatePost, modalforuserProfile } from "../App";
import Addquestion from "../modalcomponents/Addquestion";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate=useNavigate();
  const { createPortalforaddpost, setCreateportalforaddpost } =
    useContext(modalforCreatePost);
  const { createPortalforaddquestion, setCreateportalforaddquestion } =
    useContext(modalforAddQuestion);
    const { createPortalforuserProfile, setCreatePortaluserProfile } =
    useContext(modalforuserProfile);

    const HandleNavigate=()=>{
      navigate("/");
    }
  return (
    <div className="qHeader">
      <div className="qHeader__content">
        <img
        onClick={HandleNavigate}
          src="/images/quora-new-logo.jpg"
          alt="logo"
          className="quora__logo"
        />

        <div className="qHeader__icons">
          <div className="qHeader__icon">
            <MdHome />
          </div>
          <div className="qHeader__icon">
            <FaRegListAlt />
          </div>
          <div className="qHeader__icon">
            <BsPencilSquare />
          </div>
          <div className="qHeader__icon">
            <LuUsers />
          </div>
          <div className="qHeader__icon">
            <IoNotificationsOutline />
          </div>
        </div>
        <div className="qHeader__input">
          <IoIosSearch className="qHeader__searchlogo" />
          <input
            type="text"
            placeholder="Search Quora"
            className="qHeader__inputbox"
          />
        </div>
        <div className="qHeader__Rem">
          <RxAvatar className="qHeader__userlogo" onClick={()=>setCreatePortaluserProfile(!createPortalforuserProfile)}/>
          <div className="qHeader__addQcreateQ">
            <button
              className="addQ"
              onClick={() => setCreateportalforaddquestion(true)}
            >
              Add question
            </button>
            <button
              className="createQ"
              onClick={() => setCreateportalforaddpost(true)} // if the create post button gets clicked the modal state gets true and it opens the modal(used context api)
            >
              Create post
            </button>
          </div>
        </div>
      </div>
      <Addquestion />
      <Createpost />
    </div>
  );
};
