import { useEffect, useState } from 'react';
import api from '../api';
import Button from './Button';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import { Link } from 'react-router-dom';

const ImageBackdrop = styled('div')(({ theme }) => ({
  position: 'absolute',
  left: 0, right: 0, top: 0, bottom: 0,
  background: '#000',
  opacity: 0.5,
  transition: theme.transitions.create('opacity'),
}));

const ImageIconButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  padding: 20,
  borderRadius: 0,
  height: '40vh',
  [theme.breakpoints.down('md')]: {
    width: '100% !important',
    height: 100,
  },
  '&:hover': { zIndex: 1 },
  '&:hover .imageBackdrop': { opacity: 0.15 },
  '&:hover .imageMarked': { opacity: 0 },
  '&:hover .imageTitle': { border: '4px solid currentColor' },
  '& .imageTitle': {
    position: 'relative',
    padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
  },
  '& .imageMarked': {
    height: 3, width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

function Brands() {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    api.get('/brands/')
      .then((response) => {
        setBrands(response.data);
      })
      .catch(() => {
        setError('Failed to load brands. Please try again later.');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <Container component="section" sx={{ mt: 8, mb: 4 }}>
      <Typography variant="h4" marked="center" align="center" component="h2">
        Our Niche Portfolio
      </Typography>
      <Typography variant="body2" align="center" color="inherit" sx={{ mt: 2 }}>
        Discover the experience
      </Typography>

      {loading && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 8 }}>
          <CircularProgress />
        </Box>
      )}

      {error && (
        <Alert severity="error" sx={{ mt: 4 }}>{error}</Alert>
      )}

      {!loading && !error && brands.length === 0 && (
        <Typography align="center" sx={{ mt: 8 }}>No brands found.</Typography>
      )}

      <Box sx={{ mt: 8, display: 'flex', flexWrap: 'wrap' }}>
        {brands.map((brand) => (
          <ImageIconButton
            key={brand.id}
            component={Link}
            to={`/brands/${brand.id}`}
          >
            <Box
              sx={{
                position: 'absolute', left: 0, right: 0, top: 0, bottom: 0,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center 40%',
                backgroundImage: `url(${brand.creators_pic})`,
              }}
            />
            <ImageBackdrop className="imageBackdrop" />
            <Button
              sx={{
                left: 0, right: 0, top: 0, bottom: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'common.white',
              }}
            >
              <Typography component="h3" variant="h6" color="inherit" className="imageTitle">
                {brand.brand_name}
                <div className="imageMarked" />
              </Typography>
            </Button>
          </ImageIconButton>
        ))}
      </Box>
    </Container>
  );
}

export default Brands;
