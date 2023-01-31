import React from "react";
import { useEffect,useRef } from "react";
import "../scss/Receipt.scss"
import Divider from "./Divider";
import EmailForm from "./EmailForm";

export default function ResultsBoxTest() {
  const todays = useRef([]);
  useEffect(()=>{
    let today = new Date();
  todays.current = [today.getFullYear(),today.getMonth() + 1,today.getDate(),today.getHours(),today.getMinutes()];
},[])
  let values = [{count:3,price:5000},{count:4,price:3000},{count:4,price:3000},{count:4,price:3000},{count:4,price:3000}]
  let keys = ['Apple','Banana','Banana','Banana','Mandraine']
  let total =  1000;
  let id = 1233;
  
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
        <div id="receipt_header">{todays[2]}-{todays[1]}-{todays[0]} </div>
        <div id="receipt_header">{todays[3]}:{todays[4]}</div>
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
      ￦100000
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
