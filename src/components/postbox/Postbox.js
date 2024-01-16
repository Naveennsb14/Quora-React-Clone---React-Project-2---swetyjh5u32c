import { RxAvatar } from "react-icons/rx";
import { RiQuestionnaireLine } from "react-icons/ri";
import { BsPencilSquare } from "react-icons/bs";
import { LuPencil } from "react-icons/lu";
import "./postbox.css";
import { useContext } from "react";
import { modalforAddQuestion, toggleTheme } from "../App";

const Postbox = () => {
  const {darkMode, setDarkMode}= useContext(toggleTheme)
  const { createPortalforaddquestion, setCreateportalforaddquestion } =
    useContext(modalforAddQuestion);
  return (
    <div className={darkMode?"quora_postboxDark":"quora_postbox"}>
      <div className="quora__AskPost">
        <div className="quora_feedInputSection">
          <RxAvatar className={darkMode?"quora_feedUserlogoDark":"quora_feedUserlogo"} />
          <input
            type="text"
            className={darkMode?"quora_feedUserInputDark":"quora_feedUserInput"}
            placeholder="What do you want to ask or share?"
            onClick={() => setCreateportalforaddquestion(true)}
          />
        </div>
      </div>
      <div className={darkMode?"quora_AnswerboxDark":"quora_Answerbox"}>
        <div className="quora_Ask">
          <RiQuestionnaireLine className="quora_postlogo" />
          <span className="quora_postText">Ask</span>
        </div>
        <div class="vertical-line"></div>
        <div className="quora_Answer">
          <BsPencilSquare className="quora_postlogo" />
          <span className="quora_postText">Answer</span>
        </div>
        <div class="vertical-line"></div>
        <div className="quora_postFeed">
          <LuPencil className="quora_postlogo" />
          <span className="quora_postText">Post</span>
        </div>
      </div>
    </div>
  );
};

export default Postbox;
