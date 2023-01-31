import React from "react";
import "../scss/Receipt.scss"
import Divider from "./Divider";
import EmailForm from "./EmailForm";

export default function ResultsBox({id, keys, values, total }) {
  console.log(id);
  console.log(values);
  return (
    <box id="receipt">
      <div id="receipt_title">receipt</div>
      <div
        style={{
          marginTop: "5%",
        }}
      >
        <Divider />
      </div>
      <div id = "receipt_headercon">
      <div id="receipt_header_layout">
        <div id="receipt_header">Item Details</div>
        <div id="receipt_header">#</div>
        <div id="receipt_header">Price</div>
      </div>
      </div>
      <Divider />
      <div>
        <Divider />
      </div>
      <div id="fruitscontainer">
        {values.map(function (a, i) {
          return (
            <div id="fruitinfocontainer">
              <div id="receiptfruitnames">{keys[i]}</div>
              <div id="receiptfruitcount">{values[i].count}</div>
              <div id="receiptfruitprice">
                {values[i].price * values[i].count}
              </div>
            </div>
          );
        })}
      </div>
      <div id="receipttotal">
        <b>total:</b> {total}
      </div>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        marginTop: '18.8vw'
      }}>
        <EmailForm id = {id}/>
      </div>
    </box>
  );
}
