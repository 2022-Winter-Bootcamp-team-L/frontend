import '../scss/AboutUs.scss';
import Header from '../components/Header'
import { useRef, useCallback, useEffect, useState,axios } from 'react';
import logoImg from '../image/icon4.png';
import logoName from '../image/name3.png';
import classNames from 'classnames';
import DragDrop from '../components/DragDrop';
import Loading from '../components/Loading';
import React from "react";
function AboutUs() {
  return(<div id = "aboutuswrap">
    <Header/>
    <div id = "aboutuspart1">
    <div id="rec1container">
  <div id = "aboutusrec1">
    <div id="rec2container"><div id = "aboutusrec2"></div><div className = "title">ring up your fruit!</div>
    <div class="start">start now{'->'}</div>
    </div>
  </div>
  <div className="smallrec1container"><div id = "smallrec"></div><div className = "smallrecbg1"/></div>
 <div className="smallrec2container"><div id = "smallrec"></div><div className = "smallrecbg2"/></div>
  <div className="smallrec3container"><div id = "smallrec"></div><div className = "smallrecbg3"/></div> 
  </div>
  </div>
  </div>);
}
export default AboutUs;