import './scss/mainpage.scss';
// import DragDrop from './components/DragDrop.jsx';
import { useCallback, useEffect, useState } from 'react';
import logoImg from './image/icon4.png';
import logoName from './image/name3.png';

function MainPage() {
  const [intro, setintro] = useState(true);
  const dis = "nodisplay";
    
  return (

    <div id = "maincontainer" onMouseDown={(e) => {
      e.preventDefault()}
    } onClick = {()=>{setintro(false)}}> 
    {intro===false?
    <IntroLogo  dis = {dis}/>:<IntroLogo/>}

    <div id = "intrologoimage" className='fade-in-box'/>
    </div>
  );
}
function IntroLogo({dis}) {
  const [intrologoName,setintrologoName] = useState(false)
  const [introdes, setintrodes] = useState(false);
  const [putmouse, setputmouse] = useState(false);
  useEffect(() => {
      let logo = setTimeout(() => {
        setintrologoName(true);
      }, 300);
      let des = setTimeout(()=>{
        setintrodes(true);
      },600)
      let put = setTimeout(()=>{
        setputmouse(true);
      },2000) 
      return () => {
        clearTimeout(des);
        clearTimeout(des);
        clearTimeout(logo); //useEffect동작하기전에 특정코드실행(기존데이터요청충돌방지),unmount시에실행
      };
    }, []); //count변할때만실행[count], [] mount시에만실행
  return(<div id = "intrologo" className = {dis}>
  {intrologoName===true?<div id = "intrologoname" className='smoothAppearX'/>: null}
  {introdes===true?<div id = "introdes" className='fade-in-box'>comfortable food calculator</div>: null}
   <div id = "introhov" >         ↑   Click Here to use                  </div>
   {putmouse===true? <div id = "putmouse" className='blinking'>↑ put your mouse here</div>: null}
   </div>)
}

export default MainPage;
