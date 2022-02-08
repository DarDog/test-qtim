import React from 'react';
import { Link } from "react-router-dom";

const Card = ({ post }) => {
  return (
    <article className='hentry card'>
      <div className='entry-thumbnail' id='primary'>
        <Link to={ `posts/${ post.id }` }>
          <img
            src={ post.image }
            alt={ post.title } className='attachment-post-thumbnail size-post-thumbnail wp-post-image'/>
        </Link>
        <h2 className='entry-title'>
          <Link to={ `posts/${ post.id }` }>{ post.title }</Link>
        </h2>
        <Link to={ `posts/${ post.id }` } className='portfoliotype'>{ post.preview }</Link>
      </div>
    </article>
  );
};

export default Card;
