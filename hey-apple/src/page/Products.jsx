import '../scss/Products.scss';
// import DragDrop from './components/DragDrop.jsx';
import React, { useRef, useCallback, useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import Header from '../components/Header'
import { motion } from "framer-motion"
function Products() {
  const [productinfo,setproductinfo] = useState([{layout:1, id:1,name:"Apple",color:"#FFCBCB"},{layout:2, id:12,name:"Avocado",color:"#B7C89B"},{layout:3,id:5,name:
    "Banana",color:"#FFF282"},{layout:4, id:3,name:
      "Grape",color:"#EFD3FF"},{layout:5, id:6,name:
        "Kiwi",color:"#D2E39F"},{layout:6, id:9,name:
          "Lemon",color:"#FFF8B9"},{layout:7, id:4,name:
            "Mandarine",color:"#FFBB58"},{layout:8, id:10,name:
              "Mango",color:"#FFDA58"},{layout:9, id:8,name:
                "Orange",color:"#FEC975"},{layout:10, id:2,name:
                  "Pear",color:"#FFECA9"},{layout:11, id:11,name:
                    "Persimmon",color:"#FFBB89"},{layout:12, id:7,name:
                      "Pineapple",color:"#F6CF6B"}]);

  const [headbg,setheadbg] = useState("#FFF1D7");
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5
      }
    }
  }
  

return (
  <motion.div  initial={{opacity:0}} animate={{opacity:1,transition: { duration: 0.3 }}}  exit={{opacity:0, transition: { duration: 0.3 }}} id = "productwrap">
    <Header />
    <div id = "productshead" style={{backgroundColor: `${headbg}`}} >
      <div id = "productsheadletter">
    🔍 Explore more Fruits!
    </div>
    </div>
    <motion.div id = "productscontents" 
    initial="hidden"
    animate="show">
      {productinfo.map(function(a,i){
        return(<ProductCard layout = {i} id={productinfo[i].id} name = {productinfo[i].name} color={productinfo[i].color} setheadbg = {setheadbg}/>);

      })
    }
    </motion.div>
  </motion.div>
);
}
export default Products;
