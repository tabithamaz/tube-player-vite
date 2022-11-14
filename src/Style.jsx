import React from "react";
import Abonnement from "./Abonnement";
import ReadVideo from "./ReadVideo.jsX";
import "./style.css";

function Style() {
  return (
    <>
      <div className="affichage">
        <h2> style</h2>
        <div className=" affichage_video">
          <ReadVideo />
          <Abonnement />
        </div>
      </div>
    </>
  );
}
export default Style;
