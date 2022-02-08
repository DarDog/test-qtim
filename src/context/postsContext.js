import React, { createContext, useState, useEffect } from 'react';
import { mockupApi } from "../utils/Mockup";

export const PostsContext = createContext([]);

export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    mockupApi.getPosts()
      .then(posts => {
        setPosts(posts)
      })
      .catch(err => {
        console.error(err)
      })
  }, []);

  const getPostsByCurrentPage = (currentPage) => {
    const sliceStart = ( currentPage - 1 ) * 6;
    const lastMovieIndex = currentPage * 6;

    return posts.slice(sliceStart, lastMovieIndex);
  }

  const getCurrentPost = (postId) => {
    return mockupApi.getPostById(postId)
  }

  const value = { getCurrentPost, getPostsByCurrentPage, posts }

  return (
    <PostsContext.Provider value={ value }>
      { children }
    </PostsContext.Provider>
  );
};

