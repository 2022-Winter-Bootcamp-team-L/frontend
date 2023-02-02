import Graph from '../components/Graph'
import '../scss/Graph.scss'
import Header from '../components/Header'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import axiosCustom from '../apis/axiosCustom'
import { motion } from "framer-motion"
function GraphPage(){
  const [fruitsearch,setsearch] = useState('Apple')
  const [buttonsdisplay, setdisplay] = useState(1);
  const [manufactured, setmanufactured] = useState([])
  const graphcolors = {'Apple':'#FFCBCB','Avocado':'#B7C89B','Banana':'#FFF282','Grape':'#EFD3FF','Kiwi':'#D2E39F',
  'Lemon':'#FFF8B9',
  'Mandarine':'#FFBB58',
  'Mango':'#FFDA58',
  'Orange':'#FEC975',
  'Pear':'#FFECA9',
  'Persimmon':'#FFBB89','Pineapple':'#F6CF6B'}
const [graphcolor,setcolor] = useState('#FFCBCB')

  useEffect(()=>{getgraph()},[fruitsearch])
  
  const getgraph = async() => {
    await axiosCustom.get(`/heyapple/_search?q=name:${fruitsearch}`).then(response => {
    const firstdata = response.data.hits.hits[0]._source
    console.log('firstdata : ',firstdata)
    const tempArr = []
    tempArr.push({"date":firstdata.date6,"date1":firstdata.price6,})
    tempArr.push({"date":firstdata.date5,"date2":firstdata.price5,})
    tempArr.push({"date":firstdata.date4,"date3":firstdata.price4,})
    tempArr.push({"date":firstdata.date3,"date4":firstdata.price3,})
    tempArr.push({"date":firstdata.date2,"date5":firstdata.price2,})
    tempArr.push({"date":firstdata.date1,"date6":firstdata.avg,})
    setmanufactured(tempArr)
    setcolor(graphcolors[`${fruitsearch}`])
    });
    // manufactured.push({"date":firstdata.date7,"date7":firstdata.price7,})
  }


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
<Graph data = {manufactured} name = {fruitsearch} color={graphcolor}/>
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
  const list = {
    hidden:{scale:0.3},
    show:{scale:1.0},
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 100,
      staggerChildren: 0.2
    }
    }
  
  const item1 = {
    hidden:{opacity:0},
    show:{opacity:1},
    transition: {
      type: "spring",
    damping: 10,
    stiffness: 100,
    duration:0.3,
    }
  }
  const item2 = {
    hidden:{opacity:0},
    show:{opacity:1},
    transition: {
      delay:0.2,
      type: "spring",
    damping: 10,
    stiffness: 100,
    duration:0.3,
    }
  }
  return(
    <div  id = "buttonscontainer" >
   {(display==1)? (btn1.map(function(a,i){
      let image = `/image/${btn1[i].toUpperCase()}.png`
    return(<div  onClick={()=>{setsearch(btn1[i])}} id="eachbuttons"  >
    <div id = "eachbuttonsratio"></div>
   <div id = "eachbuttonsimage" className='defaultline'><img width = "100%" height="100%" src={image}/></div>
</div>);
    })):(btn2.map(function(a,i){
      let image = `/image/${btn2[i].toUpperCase()}.png`
      let buttonposition = 'defaultline';
      if(i==4){buttonposition='fixline'}
      if(i==5){buttonposition='fixline2'}
    return(<div  onClick={()=>{setsearch(btn2[i])}}  id="eachbuttons" >
    <div id = "eachbuttonsratio"></div>
   <div id = "eachbuttonsimage" className={buttonposition}><img width = "100%" height="100%" src={image}/></div>
</div>);}))}
    </div>
  );
}
export default GraphPage;