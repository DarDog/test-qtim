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
          <div className='content-area column full'>
            <main className='site-main'>
              { <Outlet /> }
            </main>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Layout;
