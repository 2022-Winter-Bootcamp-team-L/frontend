import classNames from 'classnames';
import React, {useState,
  useCallback,
  useEffect,
  ChangeEvent,
  useRef} from 'react';
import '../scss/DragDrop.scss' 
function ImagePreview({file,setfile,setpreimg}){  
    return(
  <div id = "previewcontainer" className='previewtranslate'>
    <div id = "previewimages">
    {(file!=='')? file.map(function(a,i){
 return(< Images imagefile = {file[i]} file={file} setfile={setfile} setpreimg = {setpreimg}/>);
 } ):null}
 </div>
</div>)
 }

function Images({imagefile,file,setfile,setpreimg}){
  const [image,setimage] = useState('');
  const handleFilterFile = useCallback(
    (id)=> {
      setfile(file.filter((file) => file.id !== id));
    },
    [file]
  );  
  const handlepreFile = useCallback(
    (img)=> {
      setpreimg(img);
    },
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
  return(<div id = "eachimages">
    <div id = "img" style={{ 
    backgroundImage: `url(${image})` 
  }} key={imagefile.id} onClick = {()=>{handlepreFile(imagefile.object)}} ></div>
    <div id = "deleteimg" onClick = {()=>{handleFilterFile(imagefile.id)}}><img src={process.env.PUBLIC_URL + "/image/xsymbol.png"} alt = "이미지안나옴"/></div>
  </div>)
}
export default ImagePreview;