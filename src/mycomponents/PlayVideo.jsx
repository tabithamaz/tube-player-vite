import { Avatar } from "@mui/material";
import { useParams } from "react-router-dom";
import GetComment from "../GetComment";
import '../style/playvideo.css';
import PostComment from "../PostComment";

function PlayVideo() {
  const { id } = useParams();

  return (
    <>
    <div className="contener">
    <div className="playVideo">
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <hr/>
      </div>
      <div className="main-comment">
        <div className="comment-form">
          <Avatar />
      <PostComment videoId={id}/>
        </div>
      <GetComment videoId={id}/>

        <div>
          
          
        </div>
        </div>
      </div>
    </>
  
  );
}

export default PlayVideo;
