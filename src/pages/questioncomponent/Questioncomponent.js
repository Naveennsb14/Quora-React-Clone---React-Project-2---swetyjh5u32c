import React from "react";
import "./questioncomponent.css";
import { Header } from "../../components/header/Header";
import { Questiontitle } from "../../components/questiontitle/Questiontitle";
import Questiontimeline from "../../components/questiontimeline/Questiontimeline";
import { useParams } from "react-router-dom";


const Questioncomponent = () => {
  

  const {userId}=useParams();

  return (
    <>
      <Header />
      <div className="quora__questionComponentSection">
        <div className="quora__questionComponentDetailsSection">
          <div className="quora__questionComponentHeaderSection">
            <Questiontitle />
          </div>
          <Questiontimeline />
        </div>
        <div className="quora__questionComponentSideSection">
          <img
            className="quora__questionComponentaddSection"
            src="https://static.criteo.net/design/dt/100890/5126370/46421be057d742cc855e113a6274b2d2_300x250-in_extra_trading.jpg"
            alt=""
          />
          <img
            className="quora__questionComponentaddSection"
            src="https://static.criteo.net/design/dt/100890/5126370/46421be057d742cc855e113a6274b2d2_300x250-in_extra_trading.jpg"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Questioncomponent;
