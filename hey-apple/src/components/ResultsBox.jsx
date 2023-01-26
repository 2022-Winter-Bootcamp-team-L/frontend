import React from "react";
import '../scss/Receipt.scss'
import Divider from "./Divider";

export default function ResultsBox({keys,values,total}) {
    console.log(keys)
    console.log(values)
    return (
        <box id="receipt">
            
            <div id="receipt_title">
                receipt
            </div>
            <div style={{
                marginTop: '5%'
            }}>
                <Divider/>
            </div>
            <div id="receipt_header_layout">
                <div id="receipt_header">
                    Item Details
                </div>
                <div id="receipt_header">
                    #
                </div>
                <div id="receipt_header">
                    Price
                </div>
            </div>
            <Divider/>
            <div>
                <Divider/>
            </div>
            <div id = "fruitscontainer">
                {values.map(function(a,i){
                return(
                <div id = "fruitinfocontainer">
                    <div id = "receiptfruitnames">{keys[i]}</div>
                    <div id = "receiptfruitcount">{values[i].count}</div>
                    <div id = "receiptfruitprice">{values[i].price}</div>
                </div>);})}
            </div>
            <div id = "receipttotal">
                    <b>total:</b> {total}
            </div>
            {/* <Divider style={{ 
                marginTop:'5%',
                marginBottom: '5%'
            }} /> */}
            <button
                id="payment_button"
                onClick={() => {
                    alert('Your payment was successful.');
                }}
            >
                PAY
            </button>
            
          
        </box>
    );
}