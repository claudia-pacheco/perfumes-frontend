import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import { Button, Toolbar } from '@mui/material';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/cloud9-logoo.png';

function Nav() {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <>
      <header>
        <Toolbar>
          <Link to="/">
            <img src={logo} alt="Cloud9 logo" height="100" />
          </Link>
          <Button component={Link} to="/" sx={{ color: '#ff8396' }}>Home</Button>
          <Button component={Link} to="/brands" sx={{ color: '#ff8396' }}>Brands</Button>
          <Button component={Link} to="/perfumes" sx={{ color: '#ff8396' }}>Perfumes</Button>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            {isAuthenticated ? (
              <Button onClick={handleLogout} sx={{ color: '#ff8396' }}>Sign Out</Button>
            ) : (
              <>
                <Button component={Link} to="/login" sx={{ color: '#ff8396' }}>Sign In</Button>
                <Button component={Link} to="/register" sx={{ color: '#ff8396' }}>Register</Button>
              </>
            )}
          </Box>
        </Toolbar>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Nav;
