import React, { useEffect, useState, useContext} from "react";
import axios from "axios";
import {ChangeContexte} from "./ChangeContexte";

 function PostComment({videoId}){
   const {comments, setComments} = useContext(ChangeContexte);

   const [comment, setComment] = useState("");
   
    const onSubmit = (e)=>{
        e.preventDefault()
         axios({
        method:"POST",
        url:"http://localhost:4000/comment/add",
        data:{
              desc:comment,
              videoId:videoId
        }, 
        

      })
      .then((res)=>{
        setComments([...comments, res.data.comment ])
        
      console.log(res);
        console.log(res.data);
      });



      e.target.reset()
    }

    
     return(
         <>
          <form onSubmit={onSubmit}>
            <input onChange={(e)=>{setComment(e.target.value)}} type="text" placeholder="commentaires"/>
            <button type="submit"> Envoyer</button>
          </form>
         </>
     )
 }
 export default PostComment;