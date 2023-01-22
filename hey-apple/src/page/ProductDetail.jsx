import React, {useState,
    useCallback,
    useEffect,
    ChangeEvent,
    useRef} from 'react';
  import '../scss/Products.scss'
  import { useLocation,useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom'; 
  function ProductDetail(){
    let navigate = useNavigate();
    const location = useLocation();
    const contents = ["사과설명1","사과설명2","사과설명3"];
    const [detailcontent,setdetailcontent] = useState(contents[0]);
    let { id } = useParams();
    const color = location.state.color;
    const image = location.state.image;
  
    
    function goback(){
      navigate(-1);
    }
    return(
    <div id = "productwrap2">
      <div id = "detailimagecontainer" style={{backgroundColor: `${color}`}}>
        <div id = "detailarrowleft"onClick={()=>{goback()}}><img src={process.env.PUBLIC_URL + "/image/arrow.png"} alt = "이미지안나옴"/></div>
        <div className = "detailimage"><img src={image}/><div className = "imagecontainer"></div></div>
      </div>
      <div id = "detailcontentcontainer">
        <div id = "contentname">{id}</div>
        <div id = "btninner">
          <button class="custom-btn btn-1" style={{backgroundColor: `${color}`}} onClick = {()=>{setdetailcontent(contents[0])}}></button>
          <button class="custom-btn btn-2" style={{backgroundColor: `${color}`}} onClick = {()=>{setdetailcontent(contents[1])}}></button>
          <button class="custom-btn btn-3" style={{backgroundColor: `${color}`}} onClick = {()=>{setdetailcontent(contents[2])}}></button>
          </div>
          <div id = "detailcontent">
            {detailcontent}
          </div>
      </div>
    </div>
  )
  }
  export default ProductDetail;
  