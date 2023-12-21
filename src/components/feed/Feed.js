import "./feed.css";

import Postbox from "../postbox/Postbox";
import Timeline from "../timeline/Timeline";
import axios from "axios";
import { useEffect, useState } from "react";

const Feed = () => {

  const [postData, setPostData]= useState([]); // for storing the timeline data which we will receive from api

  const getPostList = async () => {
    const config = {
      headers: {
        projectID: "swetyjh5u32c", // passing the project id in header in key value form
      },
    };

    try {
      const response = await axios.get(
        "https://academics.newtonschool.co/api/v1/quora/post?limit=100", // fetching the data by provided API aloong with config
        config
      );
      setPostData(response.data.data); // storing the complete api data in state
      console.log("response", response.data.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getPostList();
  }, []);

  return (
    <div className="feed-bar">
      <Postbox />
      {postData.length>0 && postData.map((post)=>{
        return <Timeline details={post} key={post._id}/>
      })}
    </div>
  );
};

export default Feed;
