import React from "react";
import Sidebar from "./Components/Sidebar";
import RecommandedVideo from "./Components/RecommandedVideo";
import VideoCard from "./Components/VideoCard";
import Header from "./Header";

function Home() {
  return (
    <div className="home">
      <div className="app_page">
        <RecommandedVideo />
      </div>
    </div>
  );
}
export default Home;
