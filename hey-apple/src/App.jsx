import React from "react";
import MainPage from './page/MainPage';
import ProductDetail from "./page/ProductDetail";
import Products from "./page/Products";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ResultPage from "./page/ResultPage";
import GraphPage from './page/GraphPage';
import AboutUs from "./page/AboutUs";
import {AnimatePresence} from 'framer-motion'

function App() {

  return (
   
    
    <AnimatePresence>
      <Routes>
      
        <Route path="/" element={<MainPage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/productdetail/:name" element={<ProductDetail/>}/>
        <Route path="/result/:id" element = {<ResultPage/>}/>
        <Route path="/graph" element = {<GraphPage/>}/>
        <Route path="/aboutus" element ={<AboutUs />} />
      </Routes>
      </AnimatePresence>

  );
}

export default App;