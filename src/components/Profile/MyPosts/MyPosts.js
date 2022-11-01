import React from 'react';
import Post from './Post/Post';
import css from './MyPosts.module.css';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';



const MyPosts = (props) => {
  let postsElements = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount} />)
  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    props.dispatch(addPostActionCreator());


  }
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(updateNewPostTextActionCreator(text));


  }


  return (

    <div className={css.myPosts}>
      My posts
      <div className={css.textInfo}>
        <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
        <button onClick={addPost} className={css.postButton}>Add post</button>
      </div>
      <div className={css.posts}>
        {postsElements}
      </div>
    </div>


  );
}

export default MyPosts;