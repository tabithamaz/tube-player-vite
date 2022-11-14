import React from "react";
import Sidebar from "./Components/Sidebar.jsX";
import RecommandedVideo from "./Components/RecommandedVideo";
import VideoCard from "./Components/VideoCard";
import Header from "./Header.jsx";

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
