import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from "../Layout/Layout";
import Blog from "../Blog/Blog";
import { PostsProvider } from "../../context/postsContext";

const App = () => {
  return (
    <PostsProvider>
      <Routes>
        <Route path='/' element={ <Layout/> }>
          <Route index element={ <Blog/> }/>
        </Route>
      </Routes>
    </PostsProvider>
  );
};

export default App;
