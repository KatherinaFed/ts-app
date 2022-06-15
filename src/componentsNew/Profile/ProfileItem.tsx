import React from 'react';
import { ItemContainer, Button } from './styles';
import userImg from '../../assets/userImage.png';

const ProfileItem = () => {
  return (
    <ItemContainer>
      <div className="avatar-wrapper">
        <img className="avatar" alt="profilePhoto" src={userImg} />
      </div>
      <div className="name-wrapper">
        <h2 className="name">Ekaterina Fedoseeva</h2>
        <p className="isOnline">online</p>
      </div>
      <div className="info-wrapper-one">
        <div className="info-item">
          Location: Berlin
        </div>
        <div className="info-item">Followers: 2</div>
        <div className="info-item">Following: 5</div>
      </div>
      <div className="info-wrapper-two">
        <div className="info-item">Events: 2</div>
        <div className="info-item">Favorite sports:</div>
      </div>
      <div className="button-wrapper">
        <Button>Create</Button>
      </div>
    </ItemContainer>
  );
};

export default ProfileItem;
