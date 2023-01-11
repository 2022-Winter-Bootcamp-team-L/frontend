import './scss/mainpage.scss';
// import DragDrop from './components/DragDrop.jsx';
import { useCallback, useEffect, useState } from 'react';
import logoImg from './image/icon4.png';
import logoName from './image/name3.png';
import classNames from 'classnames';
import DragDrop from './components/DragDrop';
function MainPage() {
  const [intro, setintro] = useState(true);
  const [logotrans,setlogotrans] = useState("");
  const [dropbox,setdropbox] = useState(false);
  const [file,setfile] = useState('');
  const dis = "nodisplay";
  useEffect(()=>{
  if(intro==false){
    setlogotrans("logotrans")
    setdropbox(true)
   
}
},[intro]);
  return (
  <div id="wrap">
    <div id = "maincontainer" onMouseDown={(e) => {
      e.preventDefault()}
    } onClick = {()=>{setintro(false)}}> 
    {intro?
    <IntroLogo/>:null}
    {dropbox? <DragDrop setfile={setfile}/> :null}

    <div id = "intrologoimage" className={classNames('fade-in-box', {logotrans})}/>
    </div>
    
    </div>
  );
}
function IntroLogo() {
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
        clearTimeout(put);
        clearTimeout(des);
        clearTimeout(logo); //useEffect동작하기전에 특정코드실행(기존데이터요청충돌방지),unmount시에실행
      };
    }, []); //count변할때만실행[count], [] mount시에만실행
  return(<div id = "intrologo">
  {intrologoName===true?<div id = "intrologoname" className='smoothAppearX'/>: null}
  {introdes===true?<div id = "introdes" className='fade-in-box'>comfortable food calculator</div>: null}
   {putmouse===true? <div id = "putmouse" className='blinking'>↑   Click Here to use </div>: null}
   </div>)
}

export default MainPage;
