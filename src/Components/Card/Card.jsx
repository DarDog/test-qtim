import React from 'react';

const Card = () => {
  return (
    <article className='hentry'>
      <div className='entry-thumbnail' id='primary'>
        <a href='https://sa'>
          <img
            src="https://sun9-79.userapi.com/impg/UNNsPwvOp3BZIil4jO23M9rSxpjC5hBjb3DqTw/2RerGfe7TJo.jpg?size=1400x934&quality=96&sign=b4e0c3a162765733fa367a2291d1926d&type=album"
            alt="Заглушка" className='attachment-post-thumbnail size-post-thumbnail wp-post-image'/>
        </a>
        <h2 className='entry-title'>
          <a href="">SUNSET BEACH</a>
        </h2>
        <a href="" className='portfoliotype'>summer</a>
        <a href="" className='portfoliotype'>woman</a>
        <a href="" className='portfoliotype'>yellow</a>
      </div>
    </article>
  );
};

export default Card;
