import React, { useEffect, useState } from "react";
import Sidebar from "./Components/Sidebar.jsX";
import Header from "./Header";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function SingleVideo() {
  let { id } = useParams();
  let [videos, setVideos] = useState([]);
  useEffect(() => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${id}&type=video&maxResults=15&key=AIzaSyAftn3ekR_UveYUZts3w79bc9E10aeN7Ow`
    )
      .then((response) => response.json())
      .then((data) => {
        setVideos(data.items);
        console.log(data);
      });
  }, []);

  return (
    <>
  

      <div className="SingleVideo">
        <h1>videos</h1>
        {videos?.map((item, index) => {
          return (
            <div key={index}>
              <Link className="" to={`/ReadVideo/${item.id}`}>
                <img src={item.snippet.thumbnails.default.url} alt="" />
                <p>{item.snippet.title}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default SingleVideo;
