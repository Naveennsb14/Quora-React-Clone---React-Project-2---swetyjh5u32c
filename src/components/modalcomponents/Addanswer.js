import { createPortal } from "react-dom";
import { RxCross1 } from "react-icons/rx";
import { LuUserCircle2 } from "react-icons/lu";
import { MdArrowRight } from "react-icons/md";
import { IoImagesOutline } from "react-icons/io5";
import { useContext } from "react";
import { modalforAddAnswer } from "../App";
const Addanswer = () => {
  const { createportalforaddanswer, setCreateportalforaddanswer } =
    useContext(modalforAddAnswer);
    function handleOverlayClick(event) {
        if (event.target === event.currentTarget) {
          setCreateportalforaddanswer(false); // it diffrentiates between the parent and the child div so that the child div once clicked wont make state FALSE
        }
        console.log(event.currentTarget);
      }
  return createPortal(
    createportalforaddanswer &&(
        <div className="quora_createPostmodal" onClick={handleOverlayClick}>
        <div className="quora_childPostmodal">
          <div className="quora_AddchildQuestion">
            <RxCross1
              className="quora_AddquestionModalCrossLogo"
              onClick={handleOverlayClick}
            />
          </div>
          <div className="quoraAddquestionModalHeaderSection">Add Answer</div>
          <div class="quora__createPostInputSectionhorizontal-line"></div>
          <div className="quora__createPostprofileSection">
            <LuUserCircle2 className="quora__createPostprofileSectionUserLogo" />
            <div className="quora__createPostprofileSectionuserDetails">
              <span className="quora__createPostprofileuserName">
                {JSON.parse(sessionStorage.getItem("name"))}
              </span>
              <div className="createPostprofileuserCredentialsdetails">
                <span className="quora__credentials">Choose Credentials</span>
                <MdArrowRight className="quora__rightLogo" />
              </div>
            </div>
          </div>
  
          <div class="quora__createPostInputhorizontal__line"></div>
          <form
            action=""
            className="quora_createPostFormDetails"
          >
            <input
              name="body"
              type="text"
              className="quora__createPostInputDetails"
              placeholder="Write your answer"
              
            />
            <div className="quora__createPostselectImage">
              <label htmlFor="img" className="quora__selectImage">
                <IoImagesOutline className="quora__selectImageLogo" />
              </label>
              <input
                type="file"
                id="img"
                name="img"
                accept="image/*"
                className="quora__otherInputs"
              />
            </div>
            <button type="submit" className="quora__createPostbutton">
              Add Answer
            </button>
          </form>
        </div>
      </div>
    ),document.querySelector(".quora__addAnswer")
   
  );
};

export default Addanswer;
