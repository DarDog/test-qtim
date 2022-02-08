import React from 'react';
import Card from "../Card/Card";
import Pagination from "../Pagination/Pagination";

const Blog = () => {
  return (
    <>
      <div className='grid portfoliogrid'>
        <Card/>
      </div>
      <Pagination />
    </>
  );
};

export default Blog;
