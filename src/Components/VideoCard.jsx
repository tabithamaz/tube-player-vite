import React from "react";
import { Avatar } from "@material-ui/core";
import "./VideoCard.css";
import { useEffect, useState } from "react";
import {Link} from "react-router-dom";

function VideoCard({ image, title, channel, views, timestamp, channelImage }) {
  //  const token= localStorage.setItem("token")
  const clef = "AIzaSyAftn3ekR_UveYUZts3w79bc9E10aeN7Ow";
  const [video, setVideo] = useState([]);
  const fetchvideo = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=US&key=${clef}`;
  useEffect(() => {
    fetch(fetchvideo)
      .then((reponse) => reponse.json())
      .then((data) => setVideo(data.items));
  }, []);
  console.log(video);
  return (
    <>
      {video.map((element) => (
        
        <Link to={`/ReadVideo/${ element.id}`} className="videoCard" key={element.id}>
          <img src={element.snippet.thumbnails.default.url} alt=""></img>
          <h6>{element.snippet.title}</h6>
        </Link>
      ))}
      ;
    </>
  );
}
export default VideoCard;
