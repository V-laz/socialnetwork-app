import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';
import css from './Profile.module.css';


const Profile = () => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts/>
    </div>
  );
}

export default Profile;