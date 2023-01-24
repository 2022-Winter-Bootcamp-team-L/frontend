import React from "react";
import MainPage from './page/MainPage';
import Products from "./page/Products";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
<<<<<<< HEAD
import AboutUs from "./page/AboutUs";
import ProductDetail from "./page/ProductDetail";
import { TransitionGroup,CSSTransition } from "react-transition-group";
import DragDrop2 from "./components/DragDrop2";
function App(props) {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path="/products" element={<Products/>}/>
          <Route path="/productdetail/:id" element={<ProductDetail/>}/>
          </Routes>
          </BrowserRouter>
         
    
=======
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
>>>>>>> develop
  );
}

export default App;