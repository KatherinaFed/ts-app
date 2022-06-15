import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import ProfileItem from '../../componentsNew/Profile/ProfileItem';
import { palette } from '../../models/palette';
import { ProfileWrapper } from './styles';

const Main = () => {
  let activeClass = {
    color: 'white',
    backgroundColor: palette.grey,
  };

  let inactiveClass = {
    color: 'black',
    backgroundColor: 'white',
  };

  return (
    <ProfileWrapper>
      <div className="profile-item">
        <ProfileItem />
      </div>
      <div className="navlinks">
        <NavLink
          to="/events"
          style={({ isActive }) => (isActive ? activeClass : inactiveClass)}
          className="navlink"
        >
          <p className="text">Events</p>
        </NavLink>
        <NavLink
          to="/friends"
          style={({ isActive }) => (isActive ? activeClass : inactiveClass)}
          className="navlink"
        >
          <p className="text">Friends</p>
        </NavLink>
      </div>
    </ProfileWrapper>
  );
};

export default Main;
