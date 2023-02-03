import classNames from 'classnames';
import React, {useState,
  useCallback,
  useEffect,
  ChangeEvent,
  useRef} from 'react';
import {AnimatePresence, motion} from 'framer-motion'
import '../scss/DragDrop.scss' 
function ImagePreview({file,setfile,setpreimg,preimg}){  
    return(
  <div id = "previewcontainer" className='previewtranslate'>
    <div id = "previewimages">
      <AnimatePresence>
    {(file!=='')? file.map(function(a,i){
 return(< Images key = {i} imagefile = {file[i]} file={file} setfile={setfile} preimg = {preimg} setpreimg = {setpreimg}/>);
 } ):null}
 </AnimatePresence>
 </div>
</div>)
 }

function Images({key,imagefile,file,setfile,preimg,setpreimg}){
  const [image,setimage] = useState('');
  function resetpreimg(preimg,object){
   
    if(preimg.name===object.name){
      setpreimg('')
      console.log('좀되라!')
      
    }
    console.log(preimg)
  }
  const handleFilterFile = useCallback(
    (id,object,preimg)=> {
   
      console.log(preimg)
    resetpreimg(preimg,object)
  
    setfile(file.filter((file) => file.id !== id));
},
    [file]
  );  
  const handlepreFile = useCallback(
    (img)=> {
      setpreimg(img);
      
      }
    ,
    [file]
  );  
  const preview = () => {
    if(file!==''&&typeof(imagefile.object)!=="undefined"){
    const imgEl = document.querySelector('#eachimages');
    const imgurl = URL.createObjectURL(imagefile.object);
    setimage(imgurl);
    }
  }  
  useEffect(() =>{preview()},[file])
  console.log(preimg)
  return(<motion.div key = {imagefile} initial = {{scale:0,opacity:0}} animate = {{scale:1,opacity:1, transition: { duration: 0.3 }}} exit = {{scale:0,opacity:0}}id = "eachimages">
    <div id = "img" style={{ 
    backgroundImage: `url(${image})` 
  }} key={imagefile.id} onClick = {()=>{handlepreFile(imagefile.object)}} >
     

  </div>
  <div id = "deleteimg" onClick = {()=>{handleFilterFile(imagefile.id,imagefile.object,preimg)}}><img src={process.env.PUBLIC_URL + "/image/xsymbol.png"} width="100%" height="100%" alt = "이미지안나옴"/></div>
  </motion.div>)
}
export default ImagePreview;