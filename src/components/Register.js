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
import backgroundImg from '../assets/register-pic.webp';
import { useNavigate } from 'react-router-dom';
import withRoot from './withRoot';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="#FABB51" href="/">Cloud9</Link>{' '}
      {new Date().getFullYear()}{'.'}
    </Typography>
  );
}

function Register() {
  const navigate = useNavigate();
  const [error, setError] = React.useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setError('');

    const password = data.get('password');
    const passwordRepeat = data.get('password_repeat');
    if (password !== passwordRepeat) {
      setError('Passwords do not match.');
      return;
    }

    try {
      const resp = await api.post('/users/register/', {
        first_name: data.get('first_name'),
        last_name: data.get('last_name'),
        username: data.get('username'),
        password: data.get('password'),
        password2: data.get('password_repeat'),
        email: data.get('email'),
        age: data.get('age'),
        is_premium: data.get('is_premium') === 'is_premium',
      });
      if (resp.status === 201) {
        navigate('/login');
      }
    } catch (e) {
      setError(
        e.response?.data
          ? Object.values(e.response.data).flat().join(' ')
          : 'Registration failed. Please try again.'
      );
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
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box sx={{ my: 8, mx: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Avatar sx={{ m: 1, bgcolor: '#FABB51' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">Register</Typography>
          {error && (
            <Typography color="error" variant="body2" sx={{ mt: 1 }}>
              {error}
            </Typography>
          )}
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  margin="normal" required fullWidth
                  name="first_name" label="First Name"
                  type="text" id="first_name" autoComplete="given-name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  margin="normal" required fullWidth
                  name="last_name" label="Last Name"
                  type="text" id="last_name" autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  margin="normal" required fullWidth
                  id="username" label="Username" name="username"
                  autoComplete="username" autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  margin="normal" required fullWidth
                  name="password" label="Password"
                  type="password" id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  margin="normal" required fullWidth
                  name="password_repeat" label="Confirm Password"
                  type="password" id="password_repeat"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  margin="normal" required fullWidth
                  name="email" label="Email"
                  type="email" id="email" autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  margin="normal" fullWidth
                  name="age" label="Age"
                  type="number" id="age"
                  inputProps={{ min: 1, max: 120 }}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="is_premium" color="primary" name="is_premium" />}
                  label="Sign up for Premium"
                />
              </Grid>
            </Grid>
            <Button
              type="submit" fullWidth variant="contained"
              sx={{ mt: 3, mb: 2, bgcolor: '#FABB51' }}
            >
              Register
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/login" variant="body2" color="#B07C36">
                  Already have an account? Sign In
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

export default withRoot(Register);
