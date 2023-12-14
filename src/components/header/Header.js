import { MdHome } from "react-icons/md";
import { FaRegListAlt } from "react-icons/fa";
import { BsPencilSquare } from "react-icons/bs";
import { LuUsers } from "react-icons/lu";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";

export const Header = () => {
  return (
    <div className='qHeader'>
        <div className="qHeader-content">
            <div className='qHeader__logo'>
                <img src='/images/Quora-Logo-1.jpg' alt='logo'/>
            </div>
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
            <IoIosSearch /> 
            <input type="text" placeholder="Search Quora"/>
            </div>
        </div>
    </div>
  )
}
