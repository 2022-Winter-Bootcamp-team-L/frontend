import React, { useState } from "react";
import axios from "axios";
import "../scss/EmailForm.scss";
import DialogDivider from "./DialogDivider";

export default function EmailForm() {
  const [email, setEmail] = useState("");
  const [open, setOpen] = useState(false);
  const [orderpaymentId, setOrderPaymentId] = useState("");

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
      <button id="payment_button" onClick={handleClickOpen}>
        PAY
      </button>
      <dialog
        id="email_dialog"
        open={open}
        onClose={handleClose}
      >
        <form onSubmit={handleSubmit}>
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
          <br />
          {/* <label>
            orderpayment_id:
            <textarea
              id="textarea"
              value={orderpaymentId}
              onChange={(e) => setOrderPaymentId(e.target.value)}
            />
          </label> */}
        </form>
        <div id="dialog_inner_layout">
          <button id="dialog_btn" type="submit" onClick={handleSubmit}>
            SUBMIT
          </button>
          <button id="dialog_btn" onClick={handleClose}>
            CANCEL
          </button>
        </div>
      </dialog>
    </div>
  );
}
