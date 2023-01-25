import React from "react";
import '../scss/Receipt.scss'
import Divider from "./Divider";

export default function ResultsBox() {
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
            <button
                id="payment_button"
                onClick={() => {
                    alert('Your payment was successful.');
                }}
            >
                PAY
            </button>
            
            {/* <Divider style={{ 
                marginBottom: '5%'
            }} /> */}
        </box>
    );
}