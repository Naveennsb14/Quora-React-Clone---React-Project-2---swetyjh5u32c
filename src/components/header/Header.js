import "./header.css"
import { MdHome } from "react-icons/md";
import { FaRegListAlt } from "react-icons/fa";
import { BsPencilSquare } from "react-icons/bs";
import { LuUsers } from "react-icons/lu";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";

export const Header = () => {
  return (
    <div className='qHeader'>
        <div className="qHeader__content">
                <img src='/images/quora-new-logo.jpg' alt='logo' className="quora__logo"/>
            
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
            <IoIosSearch className="qHeader__searchlogo"/> 
            <input type="text" placeholder="Search Quora" className="qHeader__inputbox"/>
            </div>
            <div className="qHeader__Rem">
            <RxAvatar className="qHeader__userlogo"/>
            <div className="qHeader__addQcreateQ">
              <button className="addQ">Add question</button>
              <button className="createQ">Create post</button>
            </div>

            </div>
        </div>
    </div>
  )
}
