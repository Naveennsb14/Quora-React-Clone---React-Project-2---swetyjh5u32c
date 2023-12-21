import "./feed.css";

import Postbox from "../postbox/Postbox";
import Timeline from "../timeline/Timeline";
import axios from "axios";
import { useEffect } from "react";

const Feed = () => {
  const getPostList = async () => {
    const config = {
      headers: {
        projectID: "swetyjh5u32c", // passing the project id in header in key value form
      },
    };

    try {
      const response = await axios.get(
        "https://academics.newtonschool.co/api/v1/quora/post", // fetching the data by provided API aloong with config
        config
      );
      console.log("response", response);
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
      <Timeline />
      <Timeline />
      <Timeline />
      <Timeline />
      <Timeline />
      <Timeline />
      <Timeline />
    </div>
  );
};

export default Feed;
