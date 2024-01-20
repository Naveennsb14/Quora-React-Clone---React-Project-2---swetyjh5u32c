import "./feed.css";

import Postbox from "../postbox/Postbox";
import Timeline from "../timeline/Timeline";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { postAddrefresh } from "../App";


const Feed = () => {

  const [postData, setPostData]= useState([]); // for storing the timeline data which we will receive from api
  const{postcalled, setPostcalled}=useContext(postAddrefresh);


  // calling the API to get all the Post from DB
  const getPostList = async () => {
    const config = {
      headers: {
        projectID: "swetyjh5u32c", // passing the project id in header in key value form
      },
    };

    try {
      const response = await axios.get(
        "https://academics.newtonschool.co/api/v1/quora/post?limit=1000", // fetching the data by provided API aloong with config
        config
      );
      setPostData(response.data.data); // storing the complete api data in state
      console.log("response", response.data.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    setPostcalled(null); // setting the state to null so that whenever the postcalled state changes  the useeffect hook run again
    getPostList();
  }, [postcalled]);

  return (
    <div className="feed-bar">
      <Postbox />
      {postData.length>0 && postData.map((post)=>{
        return <Timeline getPostList={getPostList} details={post} key={post._id}/>
      })}
      
    </div>
  );
};

export default Feed;
