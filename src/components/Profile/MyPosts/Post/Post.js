import React from 'react';
import css from './Post.module.css';


const Post = (props) => {
  return (
    <div className={css.item}>
      <img src="https://images.ua.prom.st/1544251707_w640_h640_figurka-dedpul-.jpg" alt="ava" />
      {props.message}
      <div>
        <span> Likes {props.likesCount}</span>
      </div>
    </div>




  );
}

export default Post;