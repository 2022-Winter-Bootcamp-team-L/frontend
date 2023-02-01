import React from "react";
import '../scss/Result.scss'
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import { useState } from "react";
export default function EmailCheck() {
  let navigate = useNavigate();
  const [homelink,sethomelink] = useState(false)
  useEffect(()=>{let hometimeout= setTimeout(()=>{sethomelink(true);},1000); return()=>{clearTimeout(hometimeout)}},[])
    return(
        
         <div id = "emailsuccess" className = "fade-in-box">
          <div id = "emailcheckimage" >
          <img src={process.env.PUBLIC_URL + "/image/emailsuccess.png"} width="100%"  alt="이미지안나옴" />
          </div>
          <div id = "emailratio"></div>
          <div id = "emailcheckcircle">

          </div>
          <div id = "emailtext">
            email's sended successfully
          </div>
          {(homelink)?(<div id = "emailhomelink"  onClick = {()=>navigate('/')}>
            go to home
          </div>):null}
         </div>  
    );
}