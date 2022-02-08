import React from 'react';

const Post = () => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
  }

  return (
    <>
      <div className='content-area column two-thirds single-portfolio'>
        <main className='site-main'>
          <article className='portfolio hentry'>
            <div className='entry-header'>
              <div className='entry-thumbnail'>
                <img width='800' height='533' src="" alt=""/>
              </div>
              <h2 className='entry-title'>title</h2>
              <div className='entry-content'>description</div>
            </div>
          </article>
        </main>
      </div>
      <div className='column third'>
        <div className='widget-area'>
          <aside className='widget'>
            <h4 className='widget-aside'>request similar project</h4>
            <form onSubmit={ handleSubmit } className='wpcf7' noValidate>
              <div className='form'>
                <p>
                  <input type="text" name='name' placeholder='Name *'/>
                </p>
                <p>
                  <input type="email" name='email' placeholder='E-mail Address *'/>
                </p>
                <p>
                  <textarea name='comment' rows='3' placeholder='Message *'/>
                </p>
                <input type="submit" className='clearfix btn' value='Send'/>
              </div>
            </form>
          </aside>
        </div>
      </div>
    </>
  );
};

export default Post;
