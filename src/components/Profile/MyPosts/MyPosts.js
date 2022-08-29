import React from 'react';
import Post from './Post/Post';
import css from './MyPosts.module.css';


const MyPosts = (props) => {

  let postsElements = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount} />)
  return (

    <div className={css.myPosts}>
      My posts
      <div className={css.textInfo}>
        <textarea></textarea>
        <button className={css.postButton}>Add post</button>
      </div>
      <div className={css.posts}>
        {postsElements}
      </div>
    </div>


  );
}

export default MyPosts;