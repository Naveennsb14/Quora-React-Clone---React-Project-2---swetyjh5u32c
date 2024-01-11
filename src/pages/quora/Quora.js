import React, { useContext } from "react";
import "./quora.css"
import { Header } from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Widget from "../../components/widget/Widget";
import { toggleTheme } from "../../components/App";

export const Quora = () => {
  const {darkMode, setDarkMode} = useContext(toggleTheme)
  return (
    <div className={darkMode ? "quora__dark" : "quora"}>
      <Header />
      <div className="quora__contents" >
        <div className="quora__content">
          <Sidebar/>
          <Feed/>
          <Widget/>
        </div>
      </div>
    </div>
  );
};
