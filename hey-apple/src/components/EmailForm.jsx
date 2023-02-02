import React, { useState } from "react";
import axios from "axios";
import "../scss/EmailForm.scss";
import DialogDivider from "./DialogDivider";
import axiosCustom from "../apis/axiosCustom";
import SendId from "../page/ResultPage";


export default function EmailForm({id,setemailsuccess}) {
  const [email, setEmail] = useState("");
  const [open, setOpen] = useState(false);
  const [waitforemail,setwait] = useState(false);
  console.log(id)
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function handleSubmit(e) {
    
    e.preventDefault();
    setwait(true);
    axiosCustom
      .get(
        `/api/v1/bills?email=${email}&orderpayment_id=${id}`

      )
      .then((response) => {
       setemailsuccess(response.data.result)
       if(response.data.result!=='sucess'){
        alert('이메일 전송이 실패하였습니다. 다시시도해주세요.');
        setwait(false)
       }
     
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
      <button id="payment_button" onClick={handleClickOpen}>
        PAY
      </button>
      <dialog
        id="email_dialog"
        open={open}
        onClose={handleClose}
        style={{position: "absolute",
        top: "7vh",
        left: "-54vw"}}
        
      >
      {(waitforemail==false)?(<div><form onSubmit={handleSubmit}>
        <div id="dialog_header">
            Receipt
          </div>
          <DialogDivider/>
          <div id="dialog_text">
            Your payment was successful.
            <br />
            If you want a digital receipt,
            <br />
            enter your email address below.
          </div>
          <textarea
            id="textarea"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </form>
        <div>
          <div id="dialog_btn_layout">
            <button id="dialog_btn" type="submit" onClick={handleSubmit}>
              SUBMIT
            </button>
            <button id="dialog_btn" onClick={handleClose}>
              CANCEL
            </button>
          </div>
        </div></div>):(<div><div id="dialog_header">
            Receipt
          </div>
          <DialogDivider/><div id="waitemail">Sending Email...</div></div>)}
      </dialog>
    </div>
  );
}
