import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <>
      <div className='container'>
        <Header/>
        <div className='site-content'>
          { <Outlet /> }
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Layout;
