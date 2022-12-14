import { Avatar } from "@mui/material";
import { useParams } from "react-router-dom";

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
      <div className="commenter">
         <form>
          <textarea>bonjour</textarea>
          <button> Envoyer</button>
          <p> tabitha</p>
          <p> je suis interessée par votre vidéo</p>
          <Avatar />
        </form>
        </div>
      </div>
    </>
  
  );
}

export default PlayVideo;
