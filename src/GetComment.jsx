import React, { useEffect, useState } from "react";
import { Avatar } from "@mui/material";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';

function GetComment(){
   const [comments ,setComments] = useState([])
   const url = "http://localhost:4000/comment"
   useEffect(()=>{
    fetch(url)
    .then(res=>res.json())
    .then(data => {setComments(data.comment)
        console.log(data.comment)
    }

    )
  
   },[])

    return(
       <>
       {
             comments?.map((comments)=>(
        <div className="comment-data">
            <Avatar />

            <div className="comment-info">
            <h5>tabitha</h5>
            <p>{comments.desc}</p>

            <div className="icon">
             <h5>2</h5><ThumbUpIcon/>
             <h5>5</h5><ThumbDownAltIcon/>
              </div> 

            </div>
          </div>
             ))
       }
      
       </>
  
    )
    
}
export default GetComment;