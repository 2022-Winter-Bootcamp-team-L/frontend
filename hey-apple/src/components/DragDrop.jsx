import classNames from 'classnames';
import React, {useState,
  useCallback,
  useEffect,
  ChangeEvent,
  useRef} from 'react';
import '../scss/DragDrop.scss' 
  const DragDrop = ({f,setf,preimg,loading,setpreimg}) => {
    // 드래그 중일때와 아닐때의 스타일을 구분하기 위한 state 변수
    const [isDragging, setIsDragging] = useState(false);
    const [files, setFiles] = useState('');
    // 각 선택했던 파일들의 고유값 id
    const fileId = useRef(0);
    const [forward,setforward] = useState('');
    const [borders, setborders] = useState('');
    const notimageborder = "data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='50' ry='50' stroke='%23333' stroke-width='7' stroke-dasharray='18' stroke-dashoffset='30' stroke-linecap='square'/%3e%3c/svg%3e"
    const [img,setimg] = useState(notimageborder);
    console.log(preimg)
        const onChangeFiles = useCallback(
      (e) => {
        let selectFiles = [];
        let tempFiles = f;
  
        if (e.type === "drop") {
          selectFiles = e.dataTransfer.files;
        } else {
          selectFiles = e.target.files;
        }
       if(f.length>=4){
        alert('넣을 수 있는 사진은 4개가 최대입니다.')
       }else{
        for (const file of selectFiles) {
          
          tempFiles = [
            ...tempFiles,
            {
              id: fileId.current++,
              object: file
            }
          ];
        }
          setf(tempFiles);
          setFiles(selectFiles);
      }
      },
      [f]
    );
    const handleFilterFile = useCallback(
      (id)=> {
        setFiles(files.filter((file) => file.id !== id));
      },
      [files]
    );
    // 드래그 이벤트를 감지하는 ref 참조변수 (label 태그에 들어갈 예정)
    const dragRef = useRef(null);
    const handleDragIn = useCallback((e) => {
      e.preventDefault();
      e.stopPropagation();
    }, []);
  
    const handleDragOut = useCallback((e) => {
      e.preventDefault();
      e.stopPropagation();
  
      setIsDragging(false);
    }, []);
    
    const handleDragOver = useCallback((e)=> {
      e.preventDefault();
      e.stopPropagation();
  
      if (e.dataTransfer.files) {
        setIsDragging(true);
      }
    }, []);
  
    const handleDrop = useCallback(
      (e) => {
        e.preventDefault();
        e.stopPropagation();
  
        onChangeFiles(e);
        setIsDragging(false);
      },
      [onChangeFiles]
    );
  
    const initDragEvents = useCallback(()=> {
      // 앞서 말했던 4개의 이벤트에 Listener를 등록합니다. (마운트 될때)
      
      if (dragRef.current !== null) {
        dragRef.current.addEventListener("dragenter", handleDragIn);
        dragRef.current.addEventListener("dragleave", handleDragOut);
        dragRef.current.addEventListener("dragover", handleDragOver);
        dragRef.current.addEventListener("drop", handleDrop);
      }
    }, [handleDragIn, handleDragOut, handleDragOver, handleDrop]);
  
    const resetDragEvents = useCallback(()=> {
      // 앞서 말했던 4개의 이벤트에 Listener를 삭제합니다. (언마운트 될때)
      
      if (dragRef.current !== null) {
        dragRef.current.removeEventListener("dragenter", handleDragIn);
        dragRef.current.removeEventListener("dragleave", handleDragOut);
        dragRef.current.removeEventListener("dragover", handleDragOver);
        dragRef.current.removeEventListener("drop", handleDrop);
      }
    }, [handleDragIn, handleDragOut, handleDragOver, handleDrop]);
    useEffect(() => {
      initDragEvents();
  
      return () => resetDragEvents();
    }, [initDragEvents, resetDragEvents]);
     // 위에서 선언했던 files state 배열을 deps에 넣어줍니다.

    useEffect(()=>{
    console.log(preimg)
    if(f.length>0&&preimg!==''){
    const imgurl = URL.createObjectURL(preimg);
    setimg(imgurl);
    setforward('forword');
      setborders('bord');
    }
    else{
      setforward('');
     setborders('');
     setimg(notimageborder)
     }}
  ,[preimg])
  function preview(){
    if(!files) return false;
    const imgEl = document.querySelector('#previewimage');
    const text = document.querySelector('.fileuploadtext');
    document.querySelector(".fileuploadtext").classList.add("nodisplay")

   
    setpreimg(files[0]);
   
  }
 useEffect(()=>{
  preview();

},[files]);
  function changeimg(){
    console.log(img)
    return img;
  }

    
    return (
      
      <div className={classNames('DragDrop',{forward},{borders},'longfade-in-box',(f.length>0)?'Dragdroppre':'Dragdropnotpre',((f.length>0)&&(preimg!==''))?'':'notfileborder')}
     
      >
     
        <input
          type="file"
          id="fileUpload"
          accept='image/*'
          style={{ display: "none" }} // label을 이용하여 구현하기에 없애줌
          onChange ={onChangeFiles}
          
        />
        
        <label
        id = "previewlabel"
          className={isDragging ? "DragDrop-File-Dragging" : "DragDrop-File"}
          // 드래그 중일때와 아닐때의 클래스 이름을 다르게 주어 스타일 차이
          style={{ 
            width: "100%", height: "100%", display:"block",
             }}
          htmlFor="fileUpload"
          ref={dragRef}
          onDragEnter={(e) => { e.preventDefault(); e.stopPropagation(); console.log('onDragEnter')}}
                onDragOver={(e) => { e.preventDefault(); e.stopPropagation(); console.log('dragover') }} // 추가한 이벤트. onDrop을 위해선 반드시 필요함.
                onDrop={(e) => { e.preventDefault(); e.stopPropagation(); console.log('drop') }} 
        >
         {((f.length>0)&&(preimg!==''))? <div id = "previewimage" className='longfade-in-box' style={{ 
            width: "99%", height: "100%",
            backgroundImage: `url(${changeimg()})` }}> 
          </div>:null}
         <div className={classNames('fileuploadtext',(preimg!==''&&f.length>0)?'nodisplay':'')}>  
          drag or click to add image</div>
         
        </label>
        {(f.length>0&&preimg!=='')?<div id = "dropguide" className='fade-in-box'>↑ drag or click to add photo</div>:null}
    </div>
    
    );
  };
export default DragDrop;