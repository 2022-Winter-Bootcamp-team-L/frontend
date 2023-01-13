import '../scss/MainPage.scss';
// import DragDrop from './components/DragDrop.jsx';
import { useRef, useCallback, useEffect, useState } from 'react';
import logoImg from '../image/icon4.png';
import logoName from '../image/name3.png';
import classNames from 'classnames';
import DragDrop from '../components/DragDrop';
import { hasSelectionSupport } from '@testing-library/user-event/dist/utils';
function MainPage() {
  const [intro, setintro] = useState(true);
  const [dropbox,setdropbox] = useState(false);
  const [logotrans,setlogotrans] = useState("");
  const introimage = useRef(null);
  const [f,setf] = useState("");
  const dis = "nodisplay";
  function handlemainclicked() {
    setdropbox(true)
    setlogotrans(true)
    setintro(false)
    setTimeout(() => {
      setlogotrans(false);
    }, 1500);
    console.log(logotrans);
  }
  console.log(f);
return (
  <div id="mainwrap">
    <div id = "maincontainer" onMouseDown={(e) => {
      e.preventDefault()}
    } onClick = {()=>{handlemainclicked();}}> 
    {intro?
    <IntroLogo/>:null}
    {dropbox? <DragDrop setf={setf}/> :null}
    <div id = "intrologoimage" ref={introimage} className={classNames('fade-in-box',(logotrans===false&&dropbox==true)?"logoflex":"",(logotrans==true&&dropbox==true)?"logotrans":"")} >
    </div>
    
    </div>
    {(f!=='')?<div id = "nextupload" className='fade-in-box'>next {'>'}</div>:null}
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
