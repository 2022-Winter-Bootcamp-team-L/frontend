import React from "react";
import '../scss/Result.scss'
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import { useState } from "react";
import { motion } from "framer-motion"
export default function EmailCheck() {
  let navigate = useNavigate();
  const [homelink,sethomelink] = useState(false)
  const spring = {
    type: "spring",
    damping: 10,
    stiffness: 100
  }
  const texttrans = {

  }
  useEffect(()=>{let hometimeout= setTimeout(()=>{sethomelink(true);},1000); return()=>{clearTimeout(hometimeout)}},[])
    return(
        
         <div   id = "emailsuccess" >
          <motion.div transition={spring}  initial= {{scale:0.3}}animate={{ scale:1.1}}>
          <div id = "emailcheckimage" >
          <img src={process.env.PUBLIC_URL + "/image/emailsuccess.png"} width="100%"  alt="이미지안나옴" />
          </div>
          
          <div id = "emailratio"></div>
          <div id = "emailcheckcircle">

          </div>
          </motion.div>
          <motion.div id = "emailtext" initial= {{opacity:0}} animate={{ opacity:1}} transition={{ delay: 0.5,  type: "spring",
    damping: 10, }}>
            email's sended successfully
          </motion.div>
          
          {(homelink)?(<div id = "emailhomelink"  onClick = {()=>navigate('/')}>
            go to home
          </div>):null}
         </div>  
    );
}