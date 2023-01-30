import React from "react";
import '../scss/EmailForm.scss'

export default function DialogDivider() {
    return(
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '0.5%'
        }}>
            <div id="divider_line"/>
        </div>
    );
}