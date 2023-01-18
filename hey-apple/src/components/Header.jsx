import React from 'react';
import '../scss/Common.scss';
function Header() {
  return (
<div id="header">
  <div id = "header_contents">
  <div id = "header_home" >
    <a href="http://localhost:3000" style={{ textDecoration: 'none', color: '#000000', fontFamily: 'Quicksand', fontWeight: '400' }}>
      Home
    </a>
  </div>
  <div id = "header_aboutus" style={{ fontFamily: 'Quicksand', fontWeight: '500' }}>
    about us
  </div>
  <div id = "header_products">
    <a href="http://localhost:3000/products" style={{ textDecoration: 'none', color: '#000000', fontFamily: 'Quicksand', fontWeight: '600' }}>
      products
    </a>
  </div>
  </div>
</div>
  );
}

export default Header;
