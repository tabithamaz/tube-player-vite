import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Abonnement.css";
import Sidebar from "./Components/Sidebar.jsX";
import Header from "./Header.jsX";
import "./style.css";

const Abonnement = () => {
  const [Abonnement, setAbonnement] = useState([]);
  let token = window.localStorage.getItem("token");
  useEffect(() => {
    fetch(
      "https://youtube.googleapis.com/youtube/v3/subscriptions?part=snippet&maxResults=20&mine=true&key=AIzaSyAftn3ekR_UveYUZts3w79bc9E10aeN7Ow",
      {
        method: "GET",
        headers: new Headers({ Authorization: `Bearer ${token}` }),
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setAbonnement(data);
        // console.log(data);
      });
  }, [token]);

  return (
    <>
      <div className="app_page">
        {Abonnement.items?.map((item, index) => {
          const videoItem = item.snippet.resourceId.channelId;
          return (
            <div key={index}>
              <Link
                key={item.id}
                className="affichage_video"
                to={`/SingleVideo/${videoItem}`}
              >
                <img src={item.snippet.thumbnails.default.url} alt="" />
                <p>{item.snippet.title}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Abonnement;
