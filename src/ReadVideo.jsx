import React from "react";
import Header from "./Header";
import Sidebar from "./Components/Sidebar.jsX";
import { useParams } from "react-router-dom";
import "./Components/VideoCard.css";
import VideoCard from "./Components/VideoCard";
import "./style.css";
import Style from "./Style.jsX";

function ReadVideo() {
  let { id } = useParams();
  return (
    <>
      <div className="home">
        <div className="app_page">
          <Style />
        </div>
        <div classNam="ReadVideo">
          <iframe
            width="420"
            height="315"
            src={`https://www.youtube.com/embed/${id}`}
          ></iframe>
        </div>
      </div>
    </>
  );
}
export default ReadVideo;
