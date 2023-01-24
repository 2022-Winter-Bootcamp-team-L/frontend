import React from 'react';
import '../scss/Common.scss';
import { useNavigate } from 'react-router-dom';
function Header() {
  const navigate = useNavigate();
  return (
<div id="header">
  <div id = "header_contents">
  <div id = "header_home" onClick={()=>{navigate('/')}} style={{ textDecoration: 'none', color: '#000000', fontFamily: 'Quicksand', fontWeight: '600' }}>
      Home
  </div>
  <div id = "header_aboutus" onClick={()=>{navigate('/aboutus')}} style={{ textDecoration: 'none', color: '#000000', fontFamily: 'Quicksand', fontWeight: '600' }}>
    about us
  </div>
  <div id = "header_products" onClick={()=>{navigate('/products')}} style={{ textDecoration: 'none', color: '#000000', fontFamily: 'Quicksand', fontWeight: '600' }}>
      products
  </div>
  </div>
</div>
  );
}

export default Header;
