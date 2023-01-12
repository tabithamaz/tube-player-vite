import React, { useEffect, useState, useContext } from "react";
import { Avatar } from "@mui/material";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import {ChangeContexte} from "./ChangeContexte";

function GetComment({videoId}){
    const {comments, setComments} = useContext(ChangeContexte);

   const url = "http://localhost:4000/comment"
   useEffect(()=>{
    fetch(url)
    .then(res=>res.json())
    .then(data => {setComments(data.comment)
        console.log(data.comment)
    }

    )
  
   },[])

   console.log(videoId)
    return(
       <>
       {
             comments?.map((comment)=>
             videoId ===comment.videoId && (
        <div className="comment-data">
            <Avatar />

            <div className="comment-info">
            <h5>tabitha</h5>
            <p>{comment.desc}</p> 

            <div className="icon">
             <h5>2</h5><ThumbUpIcon/>
             <h5>5</h5><ThumbDownAltIcon/>
              </div> 

            </div>
          </div>)
             )
       }
      
       </>
  
    )
    
}
export default GetComment;