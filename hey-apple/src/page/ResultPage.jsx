import Header from '../components/Header';
import React, {useState,
  useCallback,
  useEffect,
  ChangeEvent,
  useRef} from 'react';
import '../scss/Result.scss';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import useInterval from '../components/useInterVal';
import Loading from '../components/Loading';
import ResultsBox from '../components/ResultsBox'
function ResultPage(){
  const {id} = useParams();
  const [data,setdata] = useState('');
  const [loading,setloading] = useState();
  const [length, setlength] = useState(0);
  const [delay, setdelay] = useState(2000);
  const geturl = `http://localhost:8000/api/v1/orders/tasks/${id}`;
  const fruits = useState([{name:"",fruit:"",price:""}]);
  const totalprice = useState(0);
  function delaytime(){
    return (length<=1)?2000:null
  }
  useEffect(()=>{
      axios.get(geturl).then(response => {setdata(response.data)})
      
      if(length<=1){
        setloading(true)
      } else{
        setloading(false)
      }
      
  },[]);
    

      useInterval(()=>{
      
      if(length<=1){
      axios.get(geturl).then(response=>{setdata(response.data)});
      setloading(true);
      console.log(data)
      setlength(Object.keys(data).length)
      let delaytime = (length<=1)?2000:null;
      setdelay(delaytime)
      }
      else{
        
        setloading(false);
        
        setlength(Object.keys(data).length)
        
       
}},delaytime())
   
// if(length>1){
// const fruitnames = Object.keys(data.fruit_list)
// const fruitcount = Object.values(data.fruit_list)    
// }
console.log();
  
    
  const url = 'https://heyapple.s3.ap-northeast-2.amazonaws.com/image/253469f5-1b64-44bf-afb3-5b8d808b2d76.jpg';
  return(
    <div id = "wrap">
      <Header/>
      {(loading===true)?<Loading/>:null}
      <div id = "imagescontainer">
        <div id = "imagescontainerratio">
        </div>
        <div id = "resultimages">
          <div id = "eachresultimages" style = {{backgroundImage: `url(${url})`}}>
          </div>
        </div>
      </div>
      <ResultPage/>
    </div>
  );
}
export default ResultPage;