// import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Product from '../pages/Product';
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
            </Routes>
            <Footer></Footer>
        </>
     );
}
 
export default DefaultLayout;