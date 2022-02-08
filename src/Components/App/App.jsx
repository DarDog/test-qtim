import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from "../Layout/Layout";
import Blog from "../Blog/Blog";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Blog />} />
      </Route>
    </Routes>
  );
};

export default App;
