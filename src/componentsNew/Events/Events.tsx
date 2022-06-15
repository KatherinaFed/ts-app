import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Filters from '../Filters/Filters';
import { EventsWrapper } from './styles';

const Events = () => {
  const activeClass = {
    fontWeight: 'bold',
  };

  const inactiveClass = {
    textDecoration: 'none',
  };

  return (
    <EventsWrapper>
      <div className="navlinks">
        <NavLink
          to="/events/all-events"
          style={({ isActive }) => (isActive ? activeClass : inactiveClass)}
          className="navlink"
        >
          <p className="text">All events</p>
        </NavLink>
        <NavLink
          to="/events/my-events"
          style={({ isActive }) => (isActive ? activeClass : inactiveClass)}
          className="navlink"
        >
          <p className="text">My events</p>
        </NavLink>
      </div>
      {/* <Filters /> */}
      <Outlet />
    </EventsWrapper>
  );
};

export default Events;
