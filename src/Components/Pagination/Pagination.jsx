import React from 'react';

const Pagination = ({ onChange, currentPage }) => {
  const showNextPage = () => {
    onChange(currentPage + 1)
  }

  const showPreviousPage = () => {
    onChange(currentPage - 1)
  }

  const maxPages = Math.ceil(JSON.parse(localStorage.getItem('posts')).length / 6);

  return (
    <nav className='pagination'>
      { currentPage > 1 &&
        <button onClick={ showPreviousPage } type='button' className='page-numbers'>Previous</button>
      }
      <span className='page-numbers current'>{ currentPage }</span>
      { currentPage < maxPages &&
      <>
        <button onClick={ showNextPage } type='button' className='page-numbers'>{ currentPage + 1 }</button>
        <button type='button' onClick={ showNextPage } className='next page-numbers'>Next</button>
      </>
      }
    </nav>
  );
};

export default Pagination;
