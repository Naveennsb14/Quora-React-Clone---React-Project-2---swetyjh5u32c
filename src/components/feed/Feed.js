import "./feed.css"

import Postbox from "../postbox/Postbox";
import Timeline from "../timeline/Timeline";

const Feed = () => {
  return (
    <div className="feed-bar">
        <Postbox/>
        <Timeline/>
        <Timeline/>
        <Timeline/>
        <Timeline/>
        <Timeline/>
        <Timeline/>
        <Timeline/>
    </div>
  )
}

export default Feed