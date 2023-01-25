import React from "react";
import MainPage from './page/MainPage';
import ProductsMain from "./page/ProductsMain";
import ResultsPage from "./page/ResultsPage";
import ProductDetail from "./page/ProductDetail";
import Products from "./page/Products";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<MainPage />} />
        <Route path="/products" element={<ProductsMain />} />
        <Route path="/payment" element={<ResultsPage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/productdetail/:id" element={<ProductDetail/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;