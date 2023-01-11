import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../style/logo192.png";
import "../style/home.css";
import { Avatar, Grid } from "@mui/material";
import CardVideo from "../Components/cardVideo";
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

            

              <CardVideo data={data} key={key}/>

            

            // <Link to={`/PlayVideo/${data.id}`} className="card-content">
            //   <div key={key}>
            //     <img
            //       src={data.snippet.thumbnails.medium.url}
            //       alt="photo"
            //       className="video-img"
            //     />
            //     <div>
            //       <div className="Ava">
            //         <Avatar alt='Remy sharp' src='data:image/jpeg;base64,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' />
            //       </div>
            //       <h2>{data.snippet.title}</h2>
            //       <h3></h3>
            //     </div>
            //   </div>
            // </Link>
          );
        })}
      </div>
    </>
  );
}
export default Home;
