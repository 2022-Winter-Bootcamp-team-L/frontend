import React, {useState,
  useCallback,
  useEffect,
  ChangeEvent,
  useRef} from 'react';
  import { useNavigate } from 'react-router-dom';

import '../scss/Products.scss' 

function ProductCard({id,name,color,setheadbg}){
  const navigate = useNavigate();
  const imgurl = `/image/${name}.png`;
  function move(){
    navigate(`/productdetail/${name}`,{
      state: {
        id: `${id}`,
        color: `${color}`,
        image: `${imgurl}`
        }
      })
    }
  return(<div id = "productcard" style={{backgroundColor: `${color}`}} onMouseEnter={() => setheadbg(`${color}`)} 
  onMouseLeave={() => setheadbg(`${color}`)} onClick = {()=>{move()}}>  
    <div id="productname" >{name}</div>
    <img src={imgurl} className = "productimg"/>
  </div>)
}
export default ProductCard;