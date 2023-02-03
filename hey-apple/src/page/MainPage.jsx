import '../scss/MainPage.scss';
import Header from '../components/Header'
// import DragDrop from './components/DragDrop.jsx';
import React, { useRef, useCallback, useEffect, useState } from 'react';
import logoImg from '../image/icon4.png';
import logoName from '../image/name3.png';
import classNames from 'classnames';
import DragDrop from '../components/DragDrop';
import Loading from '../components/Loading';
import ImagePreview from '../components/ImagePreview';
import axiosCustom from '../apis/axiosCustom'
import axios from 'axios';
import { hasSelectionSupport } from '@testing-library/user-event/dist/utils';
import { useNavigate } from 'react-router-dom';
import useInterval from '../components/useInterVal';
import {motion,AnimatePresence} from 'framer-motion'
function MainPage() {
  const [intro, setintro] = useState(true);
  const [dropbox,setdropbox] = useState(false);
  const [logotrans,setlogotrans] = useState("");
  const introimage = useRef(null);
  const [f,setf] = useState("");
  const [loading,setLoading] = useState(false);
  const [preimg,setpreimg] = useState("");
  const navigate = useNavigate()
  const dis = "nodisplay";
  useEffect(()=>{console.log(preimg)},[f])
    function handlemainclicked() {
    setdropbox(true)
    setlogotrans(true)
    setintro(false)
    setTimeout(() => {
      setlogotrans(false);
    }, 990);
    console.log(logotrans);
  }
  async function transmitimg(e) {
    e.preventDefault();
    console.log(f[0].object)
    const formData = new FormData();
    for(let i=0; i<f.length; i++){
      formData.append('filename',f[i].object);
    }
    
    try{
 
    setdropbox(false);
    setLoading(true);
    await axiosCustom.post(
      '/api/v1/orders/tasks',
      
       formData, {
  headers: {
    'Content-Type': 'multipart/form-data'
  }
},{
  withCredentials: true 
}
    ).then((response)=>{
        navigate(`/result/${response.data.task_id}`)
    }
      );

  

  } catch(err){
  setdropbox(true)
  }
  }
  const exitani = {
    //등장 애니메이션 (애니메이션 진행률:0%)
    
    //종료 애니메이션 (100%)
    exit:{
      x: -1000,
      opacity: 0,
     
      transition: { duration: 0.5 }
    }
  }
    const enterani = {
      entry:{
        x: 1000,
        opacity: 0,
        
      },
      //메인 애니메이션 (50%, 슬라이드가 가운데로 왔을 때의 상태)
      center: {
        opacity: 1,
        x: 0,
       
        transition: {duration: 1.0 }
      }, 
    
  };
  return (
  <motion.div id="mainwrap" initial={{opacity:0}} animate = {{opacity:1, transition: { duration: 0.3 }}}  exit={{opacity:0, transition: { duration: 0.3 }}}>
      <Header/>
      <AnimatePresence>
        {(!loading)&&(<motion.div id = "mainwrap" key="beforeload" variants={exitani}  exit="exit"
  >
    <div id = "maincontainer">
     <div id = "mainintro" className = {classNames((f.length>0)?'goleft':'center')} onMouseDown={(e) => {
      e.preventDefault()}
    } onClick = {()=>{handlemainclicked();}}>
    {intro?
    <IntroLogo/>:null}
    
     {(loading===false)?     <div id = "intrologoimage" ref={introimage} className={classNames((dropbox==false)?'fade-in-box':"",(logotrans===false&&dropbox==true)?"logoflex":"",(logotrans==true&&dropbox==true)?"logotrans":"")} />:null} 
   
     {(dropbox&&loading===false)? <DragDrop f = {f} setf={setf} preimg = {preimg} loading={loading} setpreimg={setpreimg}/> :null}
     

     
    </div>
    {(f.length>0&&(loading===false))? <ImagePreview file={f} setfile = {setf} setpreimg = {setpreimg} preimg = {preimg}/>: null}
    
    </div>
    {(f.length>0&&dropbox&&loading===false)?<div onClick={(e)=>{transmitimg(e)}} id = "nextupload" className='fade-in-box' >next {'>'}</div>:null}
    </motion.div>)}
    {(loading)&& (<motion.div id = "mainwrap" variants={enterani} key="afterload"  initial ="entry" animate="center"><Loading/></motion.div>)} 
    </AnimatePresence>
    </motion.div>

  );
}
function IntroLogo() {
  const [intrologoName,setintrologoName] = useState(false)
  const [introdes, setintrodes] = useState(false);
  const [putmouse, setputmouse] = useState(false);
  useEffect(() => {
      let logo = setTimeout(() => {
        setintrologoName(true);
      }, 500);
      let des = setTimeout(()=>{
        setintrodes(true);
      },800)
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
