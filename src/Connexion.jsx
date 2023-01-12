// import  {  GoogleLogin  }  from  '@react-oauth/google' ;
import { gapi, loadAuth2 } from "gapi-script";
import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import  { useContext}  from "react";
import { ChangeContexte } from "./ChangeContexte";

function Connexion() {
  const {user, setUser} = useContext(ChangeContexte)

  const Navigate = useNavigate();
  const clef =
    "312763566205-gaqcra14dhkb9b8ui112o0fip104r3t9.apps.googleusercontent.com";
  useEffect(() => {
    const setAuth2 = async () => {
      const auth2 = await loadAuth2(
        gapi,
        clef,
        "https://www.googleapis.com/auth/youtube.force-ssl"
      );
      if (auth2.isSignedIn.get()) {
        //updateUser(auth2.currentUser.get());
        attachSignin(document.getElementById("connexion"), auth2);
      } else {
        attachSignin(document.getElementById("connexion"), auth2);
      }
    };
    setAuth2();
  }, []);
  const attachSignin = (element, auth2) => {
    auth2.attachClickHandler(
      element,
      {},
      (googleUser) => {
        const token = googleUser.xc.acces_token;

        console.log("Google user : ",googleUser);
         
        Navigate("/home");
       localStorage.setItem("token", googleUser.xc.acces_token);
        updateUser(googleUser); 
      },
      (googleUser) => {
       
        updateUser(googleUser);
      },
      (error) => {
        console.log(JSON.stringify(error));
      }
    );
  };
  const updateUser = (user) => {
    console.log(user.wt.hk);
    localStorage.setItem("profil",user.wt.hk);
      // console.log(user.xc.access_token);
    localStorage.setItem("token", user.xc.access_token);
   
     Navigate("/home");

     console.log("user : ", user)
     
     setUser(user)
  }


  //  axios({
  //        method:"POST",
  //        url:"http://localhost:4000/user/add",
  //        data:{
  //            name: googleUser.Nw.wt.Ad,
  //            email:googleUser.Nw.wt.cu,
  //            img:googleUser.Nw.wt.hK
  //        }
  //        })
  //        .then((res)=>{
  //           setUser({...user, user: res.data.user})
  //           console.log(res.data);
  //        }).catch(error  => console.log(error))

  return (
    <>
      <div id="connexion">
        <button>connect!</button>
      </div>
    </>
  );
}
export default Connexion;
