import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import HomeIcon from "@material-ui/icons/Home";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
// import HistoryIcon from "@material-ui/icons/History";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbDownAlt";
import ExpandMoreOutlineIcon from "@material-ui/icons/ExpandMoreOutlined";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
       <Link to={"/home"}>
        <SidebarRow selected Icon={HomeIcon} title="home" />
      </Link> 
       <Link to="/subscription">
        <SidebarRow Icon={SubscriptionsIcon} title="subscription" />
      </Link> 
      <hr />
      {/* <SidebarRow Icon={VideoLibraryIcon} title="Library" /> 
      <SidebarRow Icon={HistoryIcon} title="History" />
      <SidebarRow Icon={WatchLaterIcon} title="Watch Later" />
      <SidebarRow Icon={ThumbUpAltOutlinedIcon} title="Liked Video" />
      <SidebarRow Icon={ExpandMoreOutlineIcon} title="Show more" />
      <hr /> */}
    </div>
  );
}

export default Sidebar;
