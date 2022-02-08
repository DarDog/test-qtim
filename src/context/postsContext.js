import React, { createContext, useState, useEffect } from 'react';
import { mockupApi } from "../utils/Mockup";

export const PostsContext = createContext([]);

export const PostsProvider = ({ children }) => {
  const [currentPost, setCurrentPost] = useState({})

  useEffect(() => {
    mockupApi.getPosts()
      .then(posts => {
        localStorage.setItem('posts', JSON.stringify(posts))
      })
      .then(err => {
        console.error(err)
      })
  }, []);

  const getPost = (postId) => {
    mockupApi.getPostById(postId)
      .then(post => {
        setCurrentPost(post);
      })
      .catch(err => {
        console.error(err)
      })
  };

  const value = { currentPost, getPost }

  return (
    <PostsContext.Provider value={ value }>
      { children }
    </PostsContext.Provider>
  );
};

