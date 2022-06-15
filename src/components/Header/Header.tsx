import { AccountCircle, Mail, More, Notifications } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  IconButton,
  InputBase,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const Header = () => {
  return (
    <AppBar position="static" sx={{ background: '#424242' }}>
      <Toolbar>
        <Link
          to="/"
          style={{
            textDecoration: 'none',
            color: 'white',
          }}
        >
          <Typography variant="h6">{`Friends & Events`}</Typography>
        </Link>
        <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        <Box sx={{ flexGrow: 1 }} />
       

        <Box sx={{ display: { xs: 'flex', md: 'flex' } }}>
          <IconButton
            size="large"
            aria-label="show more"
            aria-haspopup="true"
            color="inherit"
          >
            <Avatar />
          </IconButton>
          <Box sx={{ display: 'flex', alignItems: 'center'}}>
            <Typography variant="h6">User</Typography>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
