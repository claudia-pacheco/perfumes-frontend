import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import api from '../api';
import backgroundImg from '../assets/login-picture.png';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import withRoot from './withRoot';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="#7B3A21" href="/">
        Cloud9
      </Link>{' '}
      {new Date().getFullYear()}{'.'}
    </Typography>
  );
}

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [error, setError] = React.useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setError('');
    try {
      const resp = await api.post('/api/token/', {
        username: data.get('username'),
        password: data.get('password'),
      });
      if (resp.status === 200) {
        login(resp.data.access, resp.data.refresh);
        navigate('/brands');
      }
    } catch (e) {
      setError('Invalid username or password. Please try again.');
    }
  };

  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <Grid
        item xs={false} sm={4} md={7}
        sx={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6}>
        <Box sx={{ my: 8, mx: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Avatar sx={{ m: 1, bgcolor: '#BC773C' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">Sign in</Typography>
          {error && (
            <Typography color="error" variant="body2" sx={{ mt: 1 }}>
              {error}
            </Typography>
          )}
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal" required fullWidth
              id="username" label="Username" name="username"
              autoComplete="username" autoFocus
            />
            <TextField
              margin="normal" required fullWidth
              name="password" label="Password" type="password"
              id="password" autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit" fullWidth variant="contained"
              sx={{ mt: 3, mb: 2, bgcolor: '#7B3A21' }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2" color="#BC773C">Forgot password?</Link>
              </Grid>
              <Grid item>
                <Link href="/register" variant="body2" color="#BC773C">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Copyright sx={{ mt: 5 }} />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default withRoot(Login);
