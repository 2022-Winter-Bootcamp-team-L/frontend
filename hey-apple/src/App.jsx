import React from "react";
import MainPage from './page/MainPage';
import ProductDetail from "./page/ProductDetail";
import Products from "./page/Products";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ResultPage from "./page/ResultPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<MainPage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products" element={<Products />} />
        <Route path="/productdetail/:id" element={<ProductDetail/>}/>
        <Route path="/result/:id" element = {<ResultPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;