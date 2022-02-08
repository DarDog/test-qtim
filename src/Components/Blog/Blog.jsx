import React, { useState } from 'react';
import Card from "../Card/Card";
import Pagination from "../Pagination/Pagination";
import { usePosts } from "../../hooks/usePosts";

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { getPostsByCurrentPage } = usePosts();
  const posts = getPostsByCurrentPage(currentPage);


  const handleChangePage = (newPage) => {
    setCurrentPage(newPage)
  }

  return (
    <div className='content-area column full'>
      <main className='site-main'>
        <div className='grid portfoliogrid posts'>
          { posts.map(post => {
            return ( <Card key={ post.id } post={ post }/> );
          }) }
        </div>
        <Pagination onChange={ handleChangePage } currentPage={ currentPage }/>
      </main>
    </div>
  );
};

export default Blog;
