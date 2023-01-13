import '../scss/Products.scss';
// import DragDrop from './components/DragDrop.jsx';
import { useRef, useCallback, useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
function Products() {
  const [productinfo,setproductinfo] = useState([{name:"APPLE",color:"#FFCBCB"},{name:"AVOCADO",color:"#B7C89B"},{name:
  "BANANA",color:"#FFF282"},{name:
    "GRAPE",color:"#EFD3FF"},{name:
      "KIWI",color:"#D2E39F"},{name:
        "LEMON",color:"#FFF8B9"},{name:
          "MANDARINE",color:"#FFBB58"},{name:
            "MANGO",color:"#FFDA58"},{name:
              "ORANGE",color:"#FEC975"},{name:
                "PEAR",color:"#FFECA9"},{name:
                  "PERSIMMON",color:"#FFBB89"},{name:
                    "PINEAPPLE",color:"#F6CF6B"}]);
console.log(productinfo[2].name);
   
return (
  <div id = "productwrap">
    <div id = "productshead">
      <div id = "productsheadletter">
    🔍 Explore more Fruits!
    </div>
    </div>
    <div id = "productscontents">
      {productinfo.map(function(a,i){
        return(<ProductCard name = {productinfo[i].name} color={productinfo[i].color}/>);
      })
    }
    </div>
  </div>
);
}
export default Products;
