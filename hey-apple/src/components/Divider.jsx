import React from "react";
import '../scss/Receipt.scss'

export default function Divider() {
    return(
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '0.5%'
        }}>
            <div id="divider"/>
        </div>
    );
}