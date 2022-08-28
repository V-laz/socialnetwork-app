import React from 'react';
import Post from './Post/Post';
import css from './MyPosts.module.css';


const MyPosts = (props) => {
  const posts = [
    { id: 1, message: "hi Gyver", likesCount: 5 },
    { id: 2, message: 'what are you doing?', likesCount: 8 },
    { id: 3, message: "Yo man!", likesCount: 12 }

  ]
  let postsElements = posts.map(post => <Post message={post.message} likesCount={post.likesCount} />)
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