import React from 'react';

const Pagination = () => {
  return (
    <nav className='pagination'>
      <span className='page-numbers current'>1</span>
      <a href="" className='page-numbers'>2</a>
      <a href="" className='next page-numbers'>Next</a>
    </nav>
  );
};

export default Pagination;
