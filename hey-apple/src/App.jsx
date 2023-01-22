import React from "react";
import MainPage from './page/MainPage';
import Products from "./page/Products";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDetail from "./page/ProductDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/products" element={<Products />} />
        <Route path="/productdetail/:id" element={<ProductDetail/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;