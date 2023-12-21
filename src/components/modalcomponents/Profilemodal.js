import { useContext } from "react";
import "./profilemodal.css";
import { modalforuserProfile } from "../App";

export const Profilemodal = () => {
  const { createPortalforuserProfile, setCreatePortaluserProfile } =
    useContext(modalforuserProfile);
    
  return (
    createPortalforuserProfile && (
      <div className="quora__profileModal">Profilemodal</div>
    )
  );
};
