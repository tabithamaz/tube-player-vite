import React, { useState } from "react";
import "./Header.css";
import MenuIcone from "@mui/icons-material/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications"
import { Avatar, } from "@mui/material";
import { Link } from "react-router-dom";

function Header() {

const [inputValue, setInputValue] = useState("")
const handleChange = event =>{
  setInputValue(event.target.value)
}

  return (
    <div className="header">
      <div className=" header_left">
      <MenuIcone />
      <img className="header-logo" src="" alt="" />
    </div>
    <form className="header_input">
      
      <input onChange={handleChange} placeholder="Search" type=" text" />
     
      {/* <SearchIcon className="header_inputButton"/> */}
      <Link to={`/search/${inputValue}`}><button type="submit" className="btn-search">Clique</button></Link>  
    </form>
       <div className="header_icones">
      <VideoCallIcon className="header_icon"/>
      <AppsIcon />
      <NotificationsIcon />
      <Avatar alt=" Tabitha" src="" />
      </div>
    </div>
  );
}

export default Header;
