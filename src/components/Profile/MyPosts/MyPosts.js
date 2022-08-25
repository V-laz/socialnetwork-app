import React from 'react';
import Post from './Post/Post';
import css from './MyPosts.module.css';


const MyPosts = () => {
  return (

    <div className={css.myPosts}>
      My post
      <div className={css.textInfo}>
        <textarea></textarea>
        <button className={css.postButton}>Add post</button>
      </div>
      <div className={css.posts}>
        <Post message="Hi,how are you?" />
        <Post message="Hello,not bad!" />
      </div>
    </div>


  );
}

export default MyPosts;