// import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Product from '../pages/Product';
import ShopBasket from '../pages/ShopBasket';
import Footer from './Footer';
import Header from './Header';
const DefaultLayout = () => {
    return ( 
        <>
            <Header></Header>
            <Routes>
            {routes.map((route, idx) => (
          <Route key={idx} path={route.path} element={route.component} />
        ))}
            </Routes>
            <Footer></Footer>
        </>
     );
}
 
export default DefaultLayout;
