import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from "../Layout/Layout";
import Blog from "../Blog/Blog";
import { PostsProvider } from "../../context/postsContext";
import Post from "../Post/Post";

const App = () => {
  return (
    <PostsProvider>
      <Routes>
        <Route path='/' element={ <Layout/> }>
          <Route index element={ <Blog/> }/>
          <Route path='post/:id' element={ <Post/> }/>
        </Route>
      </Routes>
    </PostsProvider>
  );
};

export default App;
