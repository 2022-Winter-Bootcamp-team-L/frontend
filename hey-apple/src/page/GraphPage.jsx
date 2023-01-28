import Graph from '../components/Graph'
import '../scss/Graph.scss'
import data from './data'
import Header from '../components/Header'
import { useState } from 'react'
import axios from 'axios'
function GraphPage(){
  // const [data,setdata] = useState();
  const [fruitsearch,setsearch] = useState('Apple')
  const [buttonsdisplay, setdisplay] = useState(1);
  const url = `http://localhost:9200/heyapple/_search?q=name:${fruitsearch}`
  console.log(url)
  // axios.get(`http://localhost:9200/heyapple/_search?q=name:${fruitsearch}`).then(response => {setdata(response.data)})
  const firstdata = data.hits.hits[0]._source
  const manufactured = []
  manufactured.push({"date":firstdata.date1,"date1":firstdata.avg,})
  manufactured.push({"date":firstdata.date2,"date2":firstdata.price2,})
  manufactured.push({"date":firstdata.date3,"date3":firstdata.price3,})
  manufactured.push({"date":firstdata.date4,"date4":firstdata.price4,})
  manufactured.push({"date":firstdata.date5,"date5":firstdata.price5,})
  manufactured.push({"date":firstdata.date6,"date6":firstdata.price6,})
  // manufactured.push({"date":firstdata.date7,"date7":firstdata.price7,})
  console.log(fruitsearch)
console.log(firstdata)
console.log(manufactured)
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
<Graph data = {manufactured}/>
</div>
<div id = "graphbuttonscontainer">
<div id = "graphleft" onClick={()=>{changebuttons()}}>

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