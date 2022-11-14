import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function Subscription() {
  const clef = "AIzaSyAftn3ekR_UveYUZts3w79bc9E10aeN7Ow";
  const token = localStorage.getItem("token");
  const {id} = useParams()
  const [channel, setChannel] = useState([]);

  useEffect(() => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${id}&maxResults=25&key=${clef}`,
      {
        method: "GET",
        headers: new Headers({ 'Authorization': `Bearer ${token}`})
      }
    )
      .then((reponse) => reponse.json())
      .then((data) => setChannel(data.items));
  }, []);
  console.log(channel);
  return (
    <>
      <div className="card-main">
        {channel.map((data, key) => {
          return (
            <Link to={`/PlayVideo/${data.id.videoId}`} className="card-content">
              <div>
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
