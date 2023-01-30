import '../scss/Products.scss';
// import DragDrop from './components/DragDrop.jsx';
import React, { useRef, useCallback, useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import Header from '../components/Header'
function Products() {
  const [productinfo,setproductinfo] = useState([{id:1,name:"APPLE",color:"#FFCBCB"},{id:12,name:"AVOCADO",color:"#B7C89B"},{id:5,name:
    "BANANA",color:"#FFF282"},{id:3,name:
      "GRAPE",color:"#EFD3FF"},{id:6,name:
        "KIWI",color:"#D2E39F"},{id:9,name:
          "LEMON",color:"#FFF8B9"},{id:4,name:
            "MANDARINE",color:"#FFBB58"},{id:10,name:
              "MANGO",color:"#FFDA58"},{id:8,name:
                "ORANGE",color:"#FEC975"},{id:2,name:
                  "PEAR",color:"#FFECA9"},{id:11,name:
                    "PERSIMMON",color:"#FFBB89"},{id:7,name:
                      "PINEAPPLE",color:"#F6CF6B"}]);
  const [headbg,setheadbg] = useState("#FFF1D7");
return (
  <div id = "productwrap">
    <Header />
    <div id = "productshead" style={{backgroundColor: `${headbg}`}} >
      <div id = "productsheadletter">
    🔍 Explore more Fruits!
    </div>
    </div>
    <div id = "productscontents" >
      {productinfo.map(function(a,i){
        return(<ProductCard id={productinfo[i].id} name = {productinfo[i].name} color={productinfo[i].color} setheadbg = {setheadbg}/>);
      })
    }
    </div>
  </div>
);
}
export default Products;
