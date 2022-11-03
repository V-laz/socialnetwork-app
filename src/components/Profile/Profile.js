import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';

import MyPostsContainer from './MyPosts/MyPostsContainer';
// import css from './Profile.module.css';


const Profile = (props) => {

  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer store={props.store} />
    </div>
  );
}

export default Profile;