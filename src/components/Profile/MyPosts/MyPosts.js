import React from 'react';
import Post from './Post/Post';
import css from './MyPosts.module.css';


const MyPosts = () => {
  return (

    <div>
      My post
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={css.posts}>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>

      </div>
    </div>


  );
}

export default MyPosts;