import React from "react";
import { useEffect,useRef } from "react";
import "../scss/Receipt.scss"
import Divider from "./Divider";
import EmailForm from "./EmailForm";

export default function ResultsBox({id, keys, values, total }) {
  let todays =[];

    let today = new Date();
  todays = [today.getFullYear(),today.getMonth() + 1,today.getDate(),today.getHours(),today.getMinutes()];

  console.log(id);
  console.log(values);
  return (
    <box id="receipt">
      <div id="receipt_title">Receipt</div>
      <div
        style={{
          marginTop: "5%",
        }}
      >
        <div id = "stardivider">****************</div>
      </div>
      <div id = "receipt_headercon">
      <div id="receipt_header_layout">
        <div id="receipt_header">#</div>
        <div id="receipt_header">Fruit name </div>
        <div id="receipt_header">Price</div>
      </div>
      </div>
      <div id = "divider" className="divider1"/>
      <div>
      </div>
      <div id="fruitscontainer">
        {values.map(function (a, i) {
          return (
            <div id="fruitinfocontainer">
              <div id="receiptfruitcount">{values[i].count}</div>
              <div id = "mulitiplesymbol"> x</div>
              <div id="receiptfruitnames">{keys[i]}</div>
              <div id="receiptfruitprice">
              ￦{values[i].price * values[i].count}
              </div>
            </div>
          );
        })}
      </div>
      <div id = "divider" className="divider2"/>
      <div id="receipttotal">
        <b>TOTAL PAYMENT:</b> 
      </div>
     
      <div id = "receipttotalwon">
      ￦{total}
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
