import React, { useContext, useState } from "react";
import "./editquestion.css";
import { createPortal } from "react-dom";
import { modalforEditQuestion, toggleTheme } from "../App";
import { RxCross1 } from "react-icons/rx";
import { useParams } from "react-router-dom";
import axios from "axios";

const Editquestion = ({id, postdata}) => {
  const { createportalforeditquestion, setCreateportalforeditquestion } =
    useContext(modalforEditQuestion);
  const { userId } = useParams();
  const {darkMode, setDarkMode}= useContext(toggleTheme)
  const [editquestiontext, setEditquestiontext] = useState({
    text: "",
    body: "",
  });

  //caliing the API for updating the post to DB
  const token = JSON.parse(sessionStorage.getItem("token"));
  // console.log("token", token);
  

  const updatePost = async (e) => {
    e.preventDefault();
    console.log('userId',id);
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        projectID: "swetyjh5u32c",
      },
    };
    const formData = new FormData();
    formData.append("title", "postTitle");
    formData.append("content", editquestiontext.body);

    try {
      const updateResponse = await axios.patch(
        `https://academics.newtonschool.co/api/v1/quora/post/${sessionStorage.getItem("postId")}`,
        formData,
        config
      );
      console.log('post updated successfully', updateResponse)
      setCreateportalforeditquestion(false);
      postdata();
    } catch (error) {
        console.log("error", error);
    }
  };

  function handleOverlayClick(event) {
    if (event.target === event.currentTarget) {
      setCreateportalforeditquestion(false); // it diffrentiates between the parent and the child div so that the child div once clicked wont make state FALSE
    }
    console.log(event.currentTarget);
  }

  const handleonChange = (e) => {
    const { value, name } = e.target;
    setEditquestiontext((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  // console.log("EditQuestiontext", editquestiontext);

  return createPortal(
    createportalforeditquestion && (
      <div
        className="quora__editquestioncontainer"
        onClick={handleOverlayClick}
      >
        <div className={darkMode?"quora__editquestionSectionDark":"quora__editquestionSection"}>
          <div className="quora__editquestionSectionInnercontainer">
            <RxCross1
              className={darkMode?"quora__editquestioncrosslogoDark":"quora__editquestioncrosslogo"}
              onClick={handleOverlayClick}
            />
            <h3 className={darkMode?"quora__editquestionTextDark":"quora__editquestionText"}>Edit question</h3>
            <form action="">
              <input
                name="body"
                type="text"
                className={darkMode?"quora__editquestionInputDark":"quora__editquestionInput"}
                onChange={handleonChange}
              />
              <button className="quora__editquestionSubmitbtn" onClick={updatePost}>Save</button>
            </form>
          </div>
        </div>
      </div>
    ),
    document.querySelector(".quora__editquestion")
  );
};

export default Editquestion;
