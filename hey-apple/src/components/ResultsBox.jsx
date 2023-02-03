import React from "react";
import { useEffect,useRef } from "react";
import "../scss/Receipt.scss"
import Divider from "./Divider";
import EmailForm from "./EmailForm";

export default function ResultsBox({id, keys, values, total,setemailsuccess }) {

  
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
              <div id="receiptfruitcount">{values[i].count.toLocaleString('ko-KR')}</div>
              <div id = "mulitiplesymbol"> x</div>
              <div id="receiptfruitnames">{keys[i]}</div>
              <div id="receiptfruitprice">
              <div id = "pricewonsym">￦</div><div id = "fruitpricevalue">{(values[i].price * values[i].count).toLocaleString('ko-KR')}</div>
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
      <div id = "pricewonsym">￦</div>{total.toLocaleString('ko-KR')}
      </div>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        marginTop: '18.8vw'
      }}>
        <EmailForm id = {id} setemailsuccess = {setemailsuccess}/>
      </div>
    </box>
  );
}
