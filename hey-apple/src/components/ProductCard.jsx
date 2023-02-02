import React, {useState,
  useCallback,
  useEffect,
  ChangeEvent,
  useRef} from 'react';
  import { useNavigate } from 'react-router-dom';

import '../scss/Products.scss' 

function ProductCard({layout,id,name,color,setheadbg}){

  const navigate = useNavigate();

  const imgurl = `/image/${name.toUpperCase()}.png`;
  console.log(id)
  console.log(layout)
  function move(){
    navigate(`/productdetail/${name}`,{
      state: {
        id: `${id}`,
        color: `${color}`,
        image: `${imgurl}`,
        layout: `${layout}`
        }
      })
    }
  return(<div id = "productcard" style={{backgroundColor: `${color}`}} onMouseEnter={() => setheadbg(`${color}`)} 
  onMouseLeave={() => setheadbg(`${color}`)} onClick = {()=>{move()}}>
    <div id = "productcardratio"></div>  
    <div id="productname" >{name}</div>
    <img src={imgurl} className = "productimg"/>
  </div>)
}
export default ProductCard;