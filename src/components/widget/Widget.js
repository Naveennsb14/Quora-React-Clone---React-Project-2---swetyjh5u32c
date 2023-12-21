import { useContext } from "react";
import { Profilemodal } from "../modalcomponents/Profilemodal";
import "./widget.css";

const Widget = () => {
 
  return (
    <div className="quora_widget">
      <img
        src="https://static.criteo.net/design/dt/100890/5126370/46421be057d742cc855e113a6274b2d2_300x250-in_extra_trading.jpg"
        alt=""
      />
      <img
        src="https://static.criteo.net/design/dt/100890/5126370/46421be057d742cc855e113a6274b2d2_300x250-in_extra_trading.jpg"
        alt=""
      />
      <Profilemodal />
    </div>
  );
};

export default Widget;
