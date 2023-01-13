import React, {useState,
  useCallback,
  useEffect,
  ChangeEvent,
  useRef} from 'react';
import '../scss/Products.scss' 
function ProductCard({name,color,setheadbg}){
  const imgurl = `/image/${name}.png`;
  return(<div id = "productcard" style={{backgroundColor: `${color}`}} onMouseEnter={() => setheadbg(`${color}`)} 
  onMouseLeave={() => setheadbg(`${color}`)}>  
    <div id="productname" >{name}</div>
    <img src={imgurl} className = "productimg"/>
  </div>)
}
export default ProductCard;