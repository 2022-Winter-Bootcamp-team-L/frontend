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
import axios from 'axios';
import { hasSelectionSupport } from '@testing-library/user-event/dist/utils';
import { useNavigate } from 'react-router-dom';
import useInterval from '../components/useInterVal';
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
    await axios.post(
      'http://localhost:8000/api/v1/orders/tasks',
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
  return (
  <div id="mainwrap">
      <Header/>
    <div id = "maincontainer">
     <div id = "mainintro" className = {classNames((f.length>0)?'goleft':'center')} onMouseDown={(e) => {
      e.preventDefault()}
    } onClick = {()=>{handlemainclicked();}}>
    {intro?
    <IntroLogo/>:null}
    
     {(loading===false)?     <div id = "intrologoimage" ref={introimage} className={classNames((dropbox==false)?'fade-in-box':"",(logotrans===false&&dropbox==true)?"logoflex":"",(logotrans==true&&dropbox==true)?"logotrans":"")} />:null} 
   
     {(dropbox&&loading===false)? <DragDrop f = {f} setf={setf} preimg = {preimg} loading={loading}/> :null}
     

     
    </div>
    {(f.length>0&&(loading===false))? <ImagePreview file={f} setfile = {setf} setpreimg = {setpreimg} preimg = {preimg}/>: null}
    {(loading)? <Loading />: null} 
    </div>
    {(f.length>0&&dropbox&&loading===false)?<div onClick={(e)=>{transmitimg(e)}} id = "nextupload" className='fade-in-box' >next {'>'}</div>:null}
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
