import React from "react";
import { Avatar } from "@material-ui/core";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../style/logo192.png";
import "../style/home.css";

function Home({}) {
  const clef = "AIzaSyAftn3ekR_UveYUZts3w79bc9E10aeN7Ow";
  const [video, setVideo] = useState([]);
  const fetchvideo = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=25&regionCode=US&key=${clef}`;
  useEffect(() => {
    fetch(fetchvideo)
      .then((reponse) => reponse.json())
      .then((data) => setVideo(data.items));
  }, []);
  console.log(video);
  return (
    <>
      {/* {video.map((element) => (
        <Link
          to={`/ReadVideo/${element.id}`}
          className="videoCard"
          key={element.id}
        >
          <img src={element.snippet.thumbnails.default.url} alt=""></img>
          <h6>{element.snippet.title}</h6>
        </Link>
      ))} */}
      <div className="card-main">
        {video.map((data, key) => {
          return (
            <Link to={`/PlayVideo/${data.id}`} className="card-content">
              <div key={key}>
                <img
                  src={data.snippet.thumbnails.medium.url}
                  alt="photo"
                  className="video-img"
                />
                <div>
                  <h2>{data.snippet.title}</h2>
                  <h3></h3>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
export default Home;
