import React from 'react';
import MavBar from "../NavBar/NavBar";

const Header = () => {
  return (
    <header className='site-header'>
      <div className='site-branding'>
        <h1 className='site-title'>
          <a href="https://qtim.pro/" target='_blank'>QTIM test</a>
        </h1>
        <h2 className='site-description'>Тестовое задание для QTIM</h2>
      </div>
      <MavBar />
    </header>
  );
};

export default Header;
