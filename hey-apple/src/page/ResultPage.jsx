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
import axiosCustom from '../apis/axiosCustom';

function ResultPage(){
  const {id} = useParams();
  const [data,setdata] = useState('');
  const [loading,setloading] = useState();
  const [length, setlength] = useState(0);
  const [delay, setdelay] = useState(2000);
  const [fruitnames,setfruitnames] = useState();
  const [fruitimages,setfruitimages] = useState();
  const [fruitvalues,setfruitvalues] = useState();
  const [totalprice,settotal] = useState(0);
  const [fruitid,setfruitid] = useState('');
 useEffect(()=>{setfruitid(id)},[])

  function delaytime(){
    return (length<=1)?1000:null
  }
  useEffect(()=>{
      axiosCustom.get(`/api/v1/orders/tasks/${id}`).then(response => {setdata(response.data)})
      
      if(length<=1){
        setloading(true)
      } else{
        setloading(false)
      }
      
  },[]);
    

      useInterval(()=>{
      
      if(length<=1){
        axiosCustom.get(`/api/v1/orders/tasks/${id}`).then(response => {setdata(response.data)})
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
   
useEffect(()=>{
if(length>1){
const fruitnames = Object.keys(data.fruit_list)
// const fruitcount = Object.values(data.fruit_list.count)
const fruitimages = Object.values(data.result_url_list)
const total = data.total_price;
console.log(fruitnames)
// console.log(fruitcount)
setfruitnames(fruitnames);
setfruitimages(fruitimages);
setfruitvalues(Object.values(data.fruit_list));
settotal(total);
}    
},[length]);

  
    
  return(
    <div id = "wrap">
      <Header/>
      {(loading===true)?<Loading/>:null}
      {(loading==false)?(
      <div id = "imagescontainer">
        <div id = "imagescontainerratio">
        </div>
        <div id = "resultimages">
          {fruitimages.map(function(a,i){
          return(<div id = "eachresultimages" style = {{backgroundImage: `url(${fruitimages[i]})`}}>
          </div>)})}
        </div>
      </div>):null}
      {(loading==false)?(<ResultsBox id = {fruitid} keys = {fruitnames} values = {fruitvalues} total = {totalprice}/>):null}
    </div>
  );
}
export default ResultPage;