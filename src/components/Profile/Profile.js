import React from 'react';
import css from './Profile.module.css';
  
  
const Profile = () => {
  return (

      <div className={css.content}>
        <div className={css.bodyHeader}>
          <img src="https://cdn.vox-cdn.com/thumbor/g67BVRfF03xzo-yOTwunt1HtAPg=/0x0:2550x1700/1200x800/filters:focal(1071x646:1479x1054)/cdn.vox-cdn.com/uploads/chorus_image/image/59517127/My_Post__6_.0.jpg" alt="fonImg" />
        </div>
        <div className={css.contentdescription}>
          <div>
            ava + description
          </div>
          <div>My post
            <div>New post</div>

          </div>
          <div>
            <div>post 1</div>
            <div>post 2</div>
          </div>
        </div>
      </div>

  );
}

export default Profile;