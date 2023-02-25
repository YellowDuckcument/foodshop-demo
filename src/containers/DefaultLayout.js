// import React, { useState, useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import routes from "../routes";
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
};

export default DefaultLayout;
