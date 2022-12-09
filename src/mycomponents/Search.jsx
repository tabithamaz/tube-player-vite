import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Search(){
    const {id} = useParams()
     const clef = "AIzaSyAftn3ekR_UveYUZts3w79bc9E10aeN7Ow";
    const [video, setVideo] = useState([]);

    const fetchvideo = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${id}&key=${clef}`;
    useEffect(() => {
    fetch(fetchvideo)
      .then((reponse) => reponse.json())
      .then((data) => setVideo(data.items));
    }, [id]);

    return(
        <>
           <div className="card-main">
        {video.map((data, key) => {
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
    )
}
export default Search;