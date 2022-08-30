import React from 'react';
import Post from './Post/Post';
import css from './MyPosts.module.css';
import { scryRenderedComponentsWithType } from 'react-dom/test-utils';


const MyPosts = (props) => {
  
  let newPostElement=React.createRef();

  let addPost =()=>{
   let text =newPostElement.current.value;
   props.addPost(text);
  }

  let postsElements = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount} />)
  return (

    <div className={css.myPosts}>
      My posts
      <div className={css.textInfo}>
        <textarea ref={newPostElement} ></textarea>
        <button onClick={addPost} className={css.postButton}>Add post</button>
      </div>
      <div className={css.posts}>
        {postsElements}
      </div>
    </div>


  );
}

export default MyPosts;