import React, { createContext, useEffect } from 'react';
import { mockupApi } from "../utils/Mockup";

export const PostsContext = createContext([]);

export const PostsProvider = ({ children }) => {
  useEffect(() => {
    mockupApi.getPosts()
      .then(posts => {
        localStorage.setItem('posts', JSON.stringify(posts))
      })
      .catch(err => {
        console.error(err)
      })
  }, []);

  const getPostsByCurrentPage = (currentPage) => {
    const posts = JSON.parse(localStorage.getItem('posts'));
    const sliceStart = ( currentPage - 1 ) * 6;
    const lastMovieIndex = currentPage * 6;

    return posts.slice(sliceStart, lastMovieIndex);
  }

  const getCurrentPost = (postId) => {
    return mockupApi.getPostById(postId)
  }

  const value = { getCurrentPost, getPostsByCurrentPage }

  return (
    <PostsContext.Provider value={ value }>
      { children }
    </PostsContext.Provider>
  );
};

