// import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Product from '../pages/Product';
import ShopBasket from '../pages/ShopBasket';
import ShopStore from '../pages/ShopStore';
import Footer from './Footer';
import Header from './Header';
const DefaultLayout = () => {
    return ( 
        <>
            <Header></Header>
            <Routes>
                <Route path='' element={<Home/>}/>
                <Route path='home' element={<Home/>}/>
                <Route path='product' element={<Product/>}/>
                <Route path='shopbasket' element={<ShopBasket />}/>
                <Route path='shopstore' element={<ShopStore />}/>
            </Routes>
            <Footer></Footer>
        </>
     );
}
 
export default DefaultLayout;