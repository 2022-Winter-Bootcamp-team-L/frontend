import React from 'react';

import '../scss/Common.scss';
import Products from '../page/Products';
import Header from '../components/Header';

export default function ProductsMain() {
    return (
        <div id="wrap">
            <Header />
            <Products />
        </div>
    );
}