import React, {useState,
    useCallback,
    useEffect,
    ChangeEvent,
    useRef} from 'react';
  import '../scss/Products.scss'
  import { useLocation,useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom'; 
import axios from 'axios'
import axiosCustom from '../apis/axiosCustom';

axiosCustom.post('/api/v1/fruits/12')
.then(function (response) {
  // 성공 핸들링
  console.log(response);
})
.catch(function (error) {
  // 에러 핸들링
  console.log(error);
})
.then(function () {
  // 항상 실행되는 영역
});

  function ProductDetail(){
    let navigate = useNavigate();
    const location = useLocation();
    let contents = [];
    let contents2 = [];
    const [detailcontent,setdetailcontent] = useState(contents[0]);
    let { name } = useParams();
    const color = location.state.color;
    const image = location.state.image;
    const id = location.state.id;
    console.log("id"+id);
    
    //let i=1;
    axios.get(`http://localhost:8000/api/v1/fruits/${id}`)
    .then(function (response) {
      // 성공 핸들링
        console.log(JSON.stringify(response));
        //const obj=JSON.parse(result);
        // console.log(response);
        // console.log(response.data["name"]);
        // console.log(response.data["price"]);
        // console.log(response.data["harvest"]);
        // console.log(response.data["calorie"]);
        let price=response.data["price"];
        let season=response.data["season"];
        let calories=response.data["calories"];
        let details=response.data["details"];
        let nutrition=response.data["nutrition"];
        contents2.push("price: "+[price]+"\n");
        contents2.push("season: "+[season]+"\n");
        contents2.push("colories: "+[price]);
        contents.push([contents2],[details],[nutrition]);
        console.log(contents);
        
    })
    .catch(function (error) {
      // 에러 핸들링
      //console.log(error);
    });

    console.log(id)

    function goback(){
      navigate(-1);
    }
    //contents=contents.filter((element, index) => contents.indexOf(element) === index);
    return(
    <div id = "productwrap2">
      <div id = "detailimagecontainer" style={{backgroundColor: `${color}`}}>
        <div id = "detailarrowleft"onClick={()=>{goback()}}><img src={process.env.PUBLIC_URL + "/image/arrow.png"} alt = "이미지안나옴"/></div>
        <div id = "contentname">{name}</div>
        <div className = "detailimage"><img src={image}/></div>
      </div>
      <div id = "detailcontentcontainer">
        <div id = "contentname">{name}</div>
        <div id = "btninner">
          <button class="custom-btn btn-1" style={{backgroundColor: `${color}`}} onClick = {()=>{setdetailcontent(contents[0])}}></button>
          <button class="custom-btn btn-2" style={{backgroundColor: `${color}`}} onClick = {()=>{setdetailcontent(contents[1])}}></button>
          <button class="custom-btn btn-3" style={{backgroundColor: `${color}`}} onClick = {()=>{setdetailcontent(contents[2])}}></button>
          </div>
          <div id = "detailcontent">
            {detailcontent}
          </div>
          <div id="previous">
          </div>
      </div>
    </div>
  )

  }
  
  export default ProductDetail;
  