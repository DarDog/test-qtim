import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from "../Header/Header";

const Layout = () => {
  return (
    <div className='container'>
      <Header />
    </div>
  );
};

export default Layout;