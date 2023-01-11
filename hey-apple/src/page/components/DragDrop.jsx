import React, {useState,
  useCallback,
  useEffect,
  ChangeEvent,
  useRef} from 'react';
import './App.scss' 
  const DragDrop = () => {
    // 드래그 중일때와 아닐때의 스타일을 구분하기 위한 state 변수
    const [isDragging, setIsDragging] = useState(false);
    const [files, setFiles] = useState('');
    // 각 선택했던 파일들의 고유값 id
    const fileId = useRef(0);
    const onChangeFiles = useCallback((e) => {
      let selectFiles =[];
  
    
      // 드래그 했을 때와 안했을 때 가리키는 파일 배열을 다르게 해줍니다.
      if (e.type === "drop") {
        // 드래그 앤 드롭 했을때
        selectFiles = e.dataTransfer.files;
      } else {
        // "파일 첨부" 버튼을 눌러서 이미지를 선택했을때
        selectFiles = e.target.files;
      }
    
     
    
    
      setFiles(selectFiles);
   } ,[files]);
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
      preview();

      
    },[files])
    const preview = () => {
      if(!files) return false;
      const imgEl = document.querySelector('.DragDrop');
      const text = document.querySelector('.fileuploadtext');
      document.querySelector(".fileuploadtext").classList.add("nodisplay")
 
      const reader = new FileReader();
      reader.onload = () => 
      (imgEl.style.backgroundImage = `url(${reader.result})`);
      reader.readAsDataURL(files[0]);
      console.log(files);
    }


    
    return (
      
      
      <div className="DragDrop">
        <input
          type="file"
          id="fileUpload"
          accept='image/*'
          style={{ display: "none" }} // label을 이용하여 구현하기에 없애줌
          onChange ={onChangeFiles}
          
        />
  
        <label
          className={isDragging ? "DragDrop-File-Dragging" : "DragDrop-File"}
          // 드래그 중일때와 아닐때의 클래스 이름을 다르게 주어 스타일 차이
          
          htmlFor="fileUpload"
          ref={dragRef}
          onDragEnter={(e) => { e.preventDefault(); e.stopPropagation(); console.log('onDragEnter')}}
                onDragOver={(e) => { e.preventDefault(); e.stopPropagation(); console.log('dragover') }} // 추가한 이벤트. onDrop을 위해선 반드시 필요함.
                onDrop={(e) => { e.preventDefault(); e.stopPropagation(); console.log('drop') }} style={{ width: "100%", height: "100%", display:"block" }}
        >
          <div className="fileuploadtext">파일 첨부</div>
        </label>
       
    </div>
     
    );
  };
export default DragDrop;