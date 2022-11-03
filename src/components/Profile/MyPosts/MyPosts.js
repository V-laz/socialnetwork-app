import React from 'react';
import Post from './Post/Post';
import css from './MyPosts.module.css';



const MyPosts = (props) => {
  let postsElements =
    props.posts.map(post => <Post message={post.message} likesCount={post.likesCount} />)

  let newPostElement = React.createRef();

  let onAddPost = () => {

    props.addPost();
  }
  let onPostChange = () => {

    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  return (
    <div className={css.myPosts}>
      My posts
      <div className={css.textInfo}>
        <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} placeholder='Enter your message'></textarea>/>
        <button onClick={onAddPost} className={css.postButton}>Add post</button>
      </div>
      <div className={css.posts}>
        {postsElements}
      </div>
    </div>
  );
}

export default MyPosts;