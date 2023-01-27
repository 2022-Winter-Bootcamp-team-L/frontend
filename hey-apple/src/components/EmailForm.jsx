import React, { useState } from "react";
import axios from "axios";
import '../scss/EmailForm.scss'

function EmailForm() {
  const [email, setEmail] = useState("joohee11014@naver.com");
  const [open, setOpen] = useState(false);
  const [orderpaymentId, setOrderpaymentId] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .get(
        `http://localhost:8000/api/v1/bills?email=${email}&orderpayment_id=${orderpaymentId}`
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
      <button onClick={handleClickOpen}> get receipt by email </button>
      <dialog id="dialog" open={open}>
        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <textarea
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <br />
          <label>
            orderpayment_id:
            <textarea
              style={{
                background: "#FFB986",
              }}
              value={orderpaymentId}
              onChange={(e) => setOrderpaymentId(e.target.value)}
            />
          </label>
          <br />
          <button id="dialog_inner_btn" type="submit">
            SUBMIT
          </button>
          <br/>
          <button id="dialog_inner_btn" type="button" onClick={handleClose}>CANCEL</button>
        </form>
      </dialog>
    </div>
  );
}

export default EmailForm;
