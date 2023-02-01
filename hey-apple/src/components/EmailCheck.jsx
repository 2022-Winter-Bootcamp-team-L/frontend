import React from "react";
import '../scss/Result.scss'

export default function EmailCheck() {
    return(
        
         <div id = "emailsuccess">
          <div id = "emailcheckimage">
          <img src={process.env.PUBLIC_URL + "/image/emailsuccess.png"} width="100%"  alt="이미지안나옴" />
          </div>
          <div id = "emailratio"></div>
          <div id = "emailcheckcircle">

          </div>
          <div id = "emailtext">
            이메일이 전송되었습니다.
          </div>
         </div>  
    );
}