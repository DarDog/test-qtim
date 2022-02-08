import { useContext } from 'react';
import { PostsContext } from "../context/postsContext";

export function usePosts () {
  return useContext(PostsContext);
}
