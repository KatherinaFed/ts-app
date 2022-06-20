import React from 'react';
import { FriendItemWrapper } from './styles';

const FriendItem = () => {
  return (
    <FriendItemWrapper>
      <div className="avatar">
        <img src="" alt="user-image" />
      </div>
      <div className="user-info">
        <h2 className="username">Ekaterina Fedoseeva</h2>
        <p className="city">Berlin</p>
      </div>
      <div className="menu-button">X</div>
    </FriendItemWrapper>
  );
};

export default FriendItem;
