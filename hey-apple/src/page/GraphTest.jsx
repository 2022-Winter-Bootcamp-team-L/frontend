import Graph from '../components/Graph'
import '../scss/Graph.scss'
import Header from '../components/Header'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import data from './data'
function GraphPage(){
  const [fruitsearch,setsearch] = useState('Apple')
  const [buttonsdisplay, setdisplay] = useState(1);
  const [manufactured, setmanufactured] = useState([])


  useEffect(()=>{getgraph()},[fruitsearch])
  
  const getgraph = async() => {
    const firstdata = data.hits.hits[0]._source
    const tempArr = []
    tempArr.push({"date":firstdata.date6,"date6":firstdata.price6,})
    tempArr.push({"date":firstdata.date5,"date5":firstdata.price5,})
    tempArr.push({"date":firstdata.date4,"date4":firstdata.price4,})
    tempArr.push({"date":firstdata.date3,"date3":firstdata.price3,})
    tempArr.push({"date":firstdata.date2,"date2":firstdata.price2,})
    tempArr.push({"date":firstdata.date1,"date1":firstdata.avg,})
    setmanufactured(tempArr)
    };
    // manufactured.push({"date":firstdata.date7,"date7":firstdata.price7,})
  


const changebuttons =  () =>{
  (buttonsdisplay==1)?setdisplay(2):setdisplay(1);
}
  const graphbuttons1 = 
    ['Apple','Avocado','Banana','Grape','Kiwi','Lemon',]
  const graphbuttons2 = ['Mandarine','Mango'
  ,'Orange','Pear','Persimmon','Pineapple',]
  
return (<div id = "graphwrap">
  <Header/>
  
  <div id = "graphposition">
  <div id = "graphname">{fruitsearch}</div>
<Graph data = {manufactured}/>
</div>
<div id = "graphbuttonscontainer">
<div id = "graphleft" onClick={()=>{changebuttons()}}>
<img src={process.env.PUBLIC_URL + "/image/graph_back.png"}/>
      </div>
  <div id = "graphbuttons">
    <ButtonsContainer display = {buttonsdisplay} setsearch = {setsearch} btn1 = {graphbuttons1} btn2 = {graphbuttons2}/>
      {/* {graphbuttons2.map(function(a,i){
      let image = `/image/${graphbuttons2[i].toUpperCase()}.png`
    return(<div id="eachbuttons">
    <div id = "eachbuttonsratio"></div>
  <div id = "eachbuttonsimage"><img width = "100%" height="100%" src={image}/></div>
</div>);
    })} */}
    </div>
    <div id = "graphright" onClick={()=>{changebuttons()}}>
    <img src={process.env.PUBLIC_URL + "/image/graph_forward.png"}/>
    </div>
</div>

</div>
  )};
function ButtonsContainer({display,setsearch,btn1,btn2}){
  return(
    <div id = "buttonscontainer">
   {(display==1)? (btn1.map(function(a,i){
      let image = `/image/${btn1[i].toUpperCase()}.png`
    return(<div onClick={()=>{setsearch(btn1[i])}} id="eachbuttons" >
    <div id = "eachbuttonsratio"></div>
   <div id = "eachbuttonsimage"><img width = "100%" height="100%" src={image}/></div>
</div>);
    })):(btn2.map(function(a,i){
      let image = `/image/${btn2[i].toUpperCase()}.png`
    return(<div onClick={()=>{setsearch(btn2[i])}}  id="eachbuttons">
    <div id = "eachbuttonsratio"></div>
   <div id = "eachbuttonsimage"><img width = "100%" height="100%" src={image}/></div>
</div>);}))}
    </div>
  );
}
export default GraphPage;