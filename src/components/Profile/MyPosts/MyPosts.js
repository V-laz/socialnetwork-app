import React from 'react';
import Post from './Post/Post';
import css from './MyPosts.module.css';


const MyPosts = () => {
  const postData = [
    {id:1, message:"hi Gyver", likesCount:5},
    {id:2, message:'what are you doing?', likesCount:8},
    {id:3, message:"Yo man!", likesCount:12}
    
  ]
  return (

    <div className={css.myPosts}>
      My posts
      <div className={css.textInfo}>
        <textarea></textarea>
        <button className={css.postButton}>Add post</button>
      </div>
      <div className={css.posts}>
        <Post message={postData[0].message} likesCount={postData[0].likesCount} />
        <Post message={postData[1].message} likesCount={postData[1].likesCount} />
        <Post message={postData[2].message} likesCount={postData[2].likesCount} />
      </div>
    </div>


  );
}

export default MyPosts;