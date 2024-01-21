import "./timeline.css";
import { CgProfile } from "react-icons/cg";
import { BiUpvote } from "react-icons/bi";
import { BiDownvote } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa6";
import { PiShareFatThin } from "react-icons/pi";
import { MdMoreHoriz } from "react-icons/md";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Commentsection from "../commentsection/Commentsection";
import { useParams } from "react-router-dom";
import { modalforEditQuestion, searchTerm, toggleTheme } from "../App";
import Editquestion from "../modalcomponents/Editquestion";

const Timeline = ({ details, getPostList }) => {
  const { userId } = useParams();
  // console.log('userId', userId);
  const { createportalforeditquestion, setCreateportalforeditquestion } =
    useContext(modalforEditQuestion);

  const { darkMode, setDarkMode } = useContext(toggleTheme);
  const { query, setQuery } = useContext(searchTerm);
  const [textSearch, setTextSearch]=useState("");

  const {
    author,
    channel,
    commentCount,
    content,
    likeCount,
    title,
    _id,
    createdAt,
  } = details;
  const [showCommentSection, setShowCommentSection] = useState(false); // state for conditionally rendering the comment box
  const [showAction, setshowAction] = useState(false); // state for conditionally rendering the update and delete UI
  const [getallComments, setGetallComments] = useState(); // for getting all the comments
  const [getInput, setGetInput] = useState(""); // for getting the input in comment box
  const toggleCommentSection = () => {
    setShowCommentSection((prev) => !prev);
  };

  const toggleAction = () => {
    setshowAction((prev) => !prev);
  };
  const token = JSON.parse(sessionStorage.getItem("token"));

  const dateString = createdAt;
  const dateObject = new Date(dateString);

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZoneName: "short",
  };
  const readableDate = dateObject.toLocaleDateString("en-US", options);

  // calling the api for fetching all comments in UI
  const getComments = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        projectID: "swetyjh5u32c", // passing the project id in header in key value form
      },
    };
    try {
      const response = await axios.get(
        `https://academics.newtonschool.co/api/v1/quora/post/${_id}/comments`, // fetching the data by provided API aloong with config
        config
      );
      // console.log("commentResponse", response);
      setGetallComments(response.data.data);
    } catch (error) {
      console.log("error", error);
    }
  };
  // console.log("comments fetched successfully", getallComments);

  // calling the api for posting the comments in UI
  const postComments = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        projectID: "swetyjh5u32c", // passing the project id in header in key value form
      },
    };

    try {
      const res = await axios.post(
        `https://academics.newtonschool.co/api/v1/quora/comment/${_id}`,
        {
          content: getInput.comment,
        },
        config
      );
      // console.log("comments added successfully", res);
      getComments();
      setShowCommentSection(true);
      setGetInput("");
    } catch (error) {
      console.log(error);
    }
  };

  // calling the api for deleting the post
  const deletePost = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        projectID: "swetyjh5u32c", // passing the project id in header in key value form
      },
    };
    try {
      const deleted = await axios.delete(
        `https://academics.newtonschool.co/api/v1/quora/post/${_id}`,
        config
      );
      getPostList(); // calling the main post api again so that page dont get refreshed as well as we get the updated data
      // console.log("Post deleted successfully", deleted);
    } catch (error) {
      console.log(error);
    }
  };

  //calling this api for upvoting the post
  const upVotepost = async () => {
    const body = {
      appType: "Quora",
    };
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        projectID: "swetyjh5u32c", // passing the project id in header in key value form
      },
    };
    try {
      const upVote = await axios.post(
        `https://academics.newtonschool.co/api/v1/quora/like/${_id}`,
        body,
        config
      );
      getPostList(); // calling the main post api again so that page dont get refreshed as well as we get the updated data
      // console.log("post upvoted successfully", upVote);
    } catch (error) {
      console.log(error);
    }
  };

  // calling this API for downVoting the post
  const downVotepost = async () => {
    // const body = {
    //   appType: "Quora",
    // };
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        projectID: "swetyjh5u32c", // passing the project id in header in key value form
      },
    };
    try {
      const downVote = await axios.delete(
        `https://academics.newtonschool.co/api/v1/quora/like/${_id}`,
        config
      );
      getPostList(); // calling the main post api again so that page dont get refreshed as well as we get the updated data
      // console.log("post downvoted successfully", downVote);
    } catch (error) {
      console.log(error);
    }
  };

  //calling the API for implementing the Searching functionality
  // const searchData = async () => {
  //   const config = {
  //     headers: {
  //       projectID: "swetyjh5u32c",
  //     },
  //   };
  //   try {
  //     const searchpost = await axios.get(
  //       `https://academics.newtonschool.co/api/v1/quora/post?search=${JSON.stringify({ content: query, title: query })}`,
  //       config
  //     );
  //     // console.log("Searching done successfully", searchpost);
  //     setTextSearch(searchpost.data.data)
  //     console.log('searchdata', textSearch);
  //   } catch (error) {
  //     console.log("error", error);
  //   }
  // };
  // useEffect(() => {
  //   searchData();
  // },[query]);


  const handelOnchange = (e) => {
    const { name, value } = e.target;
    setGetInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEdit = (postId) => {
    setCreateportalforeditquestion(true);
    sessionStorage.setItem("postId", postId);
    console.log("testing", postId);
  };

  // console.log(getInput);

  return (
    <>
      {
        <div className={darkMode ? "quora_timeLineDark" : "quora_timeLine"}>
        <div className="quoraprofileSection_details">
          <CgProfile
            className={darkMode ? "quoraprofile_LogoDark" : "quoraprofile_Logo"}
          />
          <div className="quoraProfile_Info">
            <div className="quoraProfile_Nameinfo">
              <h5
                className={
                  darkMode ? "quoraProfile_NameDark" : "quoraProfile_Name"
                }
              >
                {author.name}
              </h5>
              <span className="quoraProfile_followLink">Follow</span>
            </div>
            <p
              className={
                darkMode
                  ? "quoraProfile_paragraphDark"
                  : "quoraProfile_paragraph"
              }
            >
              {readableDate}
            </p>
          </div>
        </div>
        <div className={darkMode ? "quoraPostSectionDark" : "quoraPostSection"}>
          <h3 className="quoraPostSection_header">{title}</h3>
          <p className="quoraPostSection_paragraph">{content}</p>
          {channel && (
            <img src={channel.image} alt="" className="quoraTimeline_image" />
          )}
        </div>
        <div className="quora_Voteandcommentsection">
          <div className="quoraVoteandcomment">
            <div
              className={darkMode ? "quoraUpvoteDark" : "quoraUpvote"}
              onClick={upVotepost}
            >
              <BiUpvote
                className={
                  darkMode
                    ? "quoravoteandcomment_IconDark"
                    : "quoravoteandcomment_Icon"
                }
              />
              <span className={darkMode ? "upVote_textDark" : "upVote_text"}>
                Upvote-{" "}
                <span className={darkMode ? "totalupVoteDark" : "totalupVote"}>
                  {likeCount}
                </span>
              </span>
            </div>
            <div className={darkMode ? "downVoteDark" : "downVote"}></div>
            <div
              className={darkMode ? "quoraDownvoteDark" : "quoraDownvote"}
              onClick={downVotepost}
            >
              <BiDownvote
                className={
                  darkMode
                    ? "quoravoteandcomment_IconDark"
                    : "quoravoteandcomment_Icon"
                }
              />
            </div>
            <div className="quora_comment">
              <FaRegComment
                className={
                  darkMode
                    ? "quoravoteandcomment_IconDark"
                    : "quoravoteandcomment_Icon"
                }
                onClick={() => {
                  toggleCommentSection();
                  getComments();
                }}
              />
              <span className={darkMode ? "comment_textDark" : "comment_text"}>
                {commentCount}
              </span>
            </div>
            <div className="quora_Share">
              <PiShareFatThin
                className={
                  darkMode
                    ? "quoravoteandcomment_IconDark"
                    : "quoravoteandcomment_Icon"
                }
              />
              <span className={darkMode ? "share_textDark" : "share_text"}>
                165
              </span>
            </div>
          </div>
          {showAction && (
            <div className="quora__deleteAndupdatesection">
              <span className="quora__deleteOption" onClick={deletePost}>
                Delete
              </span>
              <span
                className="quora__updateOption"
                onClick={() => handleEdit(_id)}
              >
                Edit
              </span>
            </div>
          )}
          <div className="quora_More">
            <MdMoreHoriz className="quoraMore_Icon" onClick={toggleAction} />
          </div>
        </div>
        <div
          className={
            darkMode
              ? "quora__lowerCommentprofileSectionDark"
              : "quora__lowerCommentprofileSection"
          }
        >
          <CgProfile className="quora__lowerCommentprofileLogo" />
          <form action="" onSubmit={postComments}>
            <input
              name="comment"
              type="text"
              className={
                darkMode
                  ? "quora__lowerCommentInputSectionDark"
                  : "quora__lowerCommentInputSection"
              }
              placeholder="Add a comment..."
              onChange={handelOnchange}
            />
            <button className="quora__lowerCommmentbuttonSection" type="submit">
              Add comment
            </button>
          </form>
        </div>
        {showCommentSection &&
          getallComments?.map((fetchedComments) => {
            return (
              <Commentsection
                getComments={getComments}
                comments={fetchedComments}
                key={fetchedComments._id}
              />
            );
          })}
      </div>
      }
      <Editquestion id={_id} postdata={getPostList} />
    </>
  );
};

export default Timeline;
