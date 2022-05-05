import { Container, ListItemButton, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
// import * as runningIcon from '../assets/running.png'

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
            <Typography style={{ fontWeight: 500, fontSize: '20px' }}>
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
            <Typography style={{ fontWeight: 500, fontSize: '20px' }}>
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
            <Typography style={{ fontWeight: 500, fontSize: '20px' }}>
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
            <Typography style={{ fontWeight: 500, fontSize: '20px' }}>
              Climbing
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
            <Typography style={{ fontWeight: 500, fontSize: '20px' }}>
              Yoga
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
            <Typography style={{ fontWeight: 500, fontSize: '20px', alignItems: 'center' }}>
              Boxing
            </Typography>
          </ListItemButton>
        </NavLink>
      </Container>
    </>
  );
};

export default Sidebar;
