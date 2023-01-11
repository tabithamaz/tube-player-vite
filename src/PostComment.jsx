import React, { useEffect, useState } from "react";
import axios from "axios";

 function PostComment({videoId}){
    const [comments ,setComments] = useState([])
    console.log(videoId);
   
    const onSubmit = (e)=>{
        e.preventDefault()
         axios({
        method:"POST",
        url:"http://localhost:4000/comment/add",
        data:{
              desc:comments,
              videoId:videoId
        }
      })
      .then((res)=>{
        
      console.log(res);
        console.log(res.data);
      });
    }
    
     return(
         <>
          <form onSubmit={onSubmit}>
            <input onChange={(e)=>{setComments(e.target.value)}} type="text" placeholder="commentaires"/>
            <button type="submit"> Envoyer</button>
          </form>
         </>
     )
 }
 export default PostComment;