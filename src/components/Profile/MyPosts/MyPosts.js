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
        <Post message="Hi,how are you?" />
        <Post message= "Hello,not bad!"/>


      </div>
    </div>


  );
}

export default MyPosts;