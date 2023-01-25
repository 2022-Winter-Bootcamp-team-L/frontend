import React from "react";
import MainPage from './page/MainPage';
import ProductsMain from "./page/ProductsMain";
import ResultsPage from "./page/ResultsPage";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/products" element={<ProductsMain />} />
        <Route path="/payment" element={<ResultsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
