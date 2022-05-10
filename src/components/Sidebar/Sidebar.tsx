import { Container, ListItemButton, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { FaRunning, FaSwimmingPool } from 'react-icons/fa';
import { BiCycling } from 'react-icons/bi';
import { GiMountainClimbing, GiBoxingGlove } from 'react-icons/gi';
import { GrYoga } from 'react-icons/gr';

const Sidebar = () => {
  return (
    <>
      <Container
        style={{
          height: '100vh',
          backgroundColor: 'white',
          position: 'sticky',
          top: '0',
          color: '#555',
          border: '1px solid #ece7e7',
          padding: '10px 0',
        }}
      >
        <NavLink to="/running" style={{ textDecoration: 'none' }}>
          <ListItemButton
            style={{
              display: 'flex',
              alignItems: 'center',
              height: '60px',
              color: '#000',
            }}
          >
            <FaRunning />
            <Typography
              style={{ fontWeight: 500, fontSize: '20px', marginLeft: '10px' }}
            >
              Running
            </Typography>
          </ListItemButton>
        </NavLink>
        <NavLink to="/cycling" style={{ textDecoration: 'none' }}>
          <ListItemButton
            style={{
              display: 'flex',
              alignItems: 'center',
              height: '60px',
              color: '#000',
            }}
          >
            <BiCycling />
            <Typography
              style={{ fontWeight: 500, fontSize: '20px', marginLeft: '10px' }}
            >
              Cycling
            </Typography>
          </ListItemButton>
        </NavLink>
        <NavLink to="/swimming" style={{ textDecoration: 'none' }}>
          <ListItemButton
            style={{
              display: 'flex',
              alignItems: 'center',
              height: '60px',
              color: '#000',
            }}
          >
            <FaSwimmingPool />
            <Typography
              style={{ fontWeight: 500, fontSize: '20px', marginLeft: '10px' }}
            >
              Swimming
            </Typography>
          </ListItemButton>
        </NavLink>
        <NavLink to="/climbing" style={{ textDecoration: 'none' }}>
          <ListItemButton
            style={{
              display: 'flex',
              alignItems: 'center',
              height: '60px',
              color: '#000',
            }}
          >
            <GiMountainClimbing />
            <Typography
              style={{ fontWeight: 500, fontSize: '20px', marginLeft: '10px' }}
            >
              Climbing
            </Typography>
          </ListItemButton>
        </NavLink>
        <NavLink to="/boxing" style={{ textDecoration: 'none' }}>
          <ListItemButton
            style={{
              display: 'flex',
              alignItems: 'center',
              height: '60px',
              color: '#000',
            }}
          >
            <GiBoxingGlove />
            <Typography
              style={{
                fontWeight: 500,
                fontSize: '20px',
                alignItems: 'center',
                marginLeft: '10px',
              }}
            >
              Boxing
            </Typography>
          </ListItemButton>
        </NavLink>
        <NavLink to="/yoga" style={{ textDecoration: 'none' }}>
          <ListItemButton
            style={{
              display: 'flex',
              alignItems: 'center',
              height: '60px',
              color: '#000',
            }}
          >
            <GrYoga />
            <Typography
              style={{ fontWeight: 500, fontSize: '20px', marginLeft: '10px' }}
            >
              Yoga
            </Typography>
          </ListItemButton>
        </NavLink>
      </Container>
    </>
  );
};

export default Sidebar;
