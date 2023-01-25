import React, {useState,
  useCallback,
  useEffect,
  ChangeEvent,
  useRef} from 'react';
import '../scss/MainPage.scss';
import useInterval from './useInterVal';
import classNames from 'classnames';


function Loading({name,color,setheadbg}){
  const [spot,setspot] = useState(0);
  const [loadmesindex,setmesindex] = useState(0);
  const imgpostloadmessages = ["cherry-picking fruits","cherry on top","going bananas","peaches and cream"];
  const [loadmessage,setloadmessage] = useState(imgpostloadmessages[0]);
  const [fade,setfade] = useState("");
  function increasespot(){

    if(spot>2){
      setspot((spot)=>spot=0);
    } else
    setspot((spot)=>spot+1);

  }
  function increaseindex(){

    if(loadmesindex===imgpostloadmessages.length-1){
      setmesindex((loadmesindex)=>loadmesindex=0);
    } else
    setmesindex((loadpot)=>loadmesindex+1);

  }
  useInterval(() => {
        increasespot();
          
    
        
      }, 500);
  useInterval(()=>{
    increaseindex();
    setloadmessage(imgpostloadmesages[loadmesindex]);
  },1500);
 


  return(<div id = "loading">
    <div id = "loadingspinner">
    </div>
    <div id = "loadingmessage" >
      <span className='loadmessage loadfade'>{loadmessage}</span>
      <span className='loadspots'>{'.'.repeat(spot)}</span>
    </div>
  </div>)
}
export default Loading;