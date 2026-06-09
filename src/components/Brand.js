import { useEffect, useState } from 'react';
import api from '../api';
import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from './Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import { useParams } from 'react-router-dom';
import withRoot from './withRoot';

const item = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5, mb: 5, mt: 5,
};

function Brand() {
  const [brand, setBrand] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { brandId } = useParams();

  useEffect(() => {
    api.get(`/brands/${brandId}/`)
      .then((response) => {
        setBrand(response.data);
      })
      .catch(() => {
        setError('Failed to load brand details. Please try again later.');
      })
      .finally(() => {
        setLoading(false);
      });
  }, [brandId]);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 12 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return <Alert severity="error" sx={{ m: 4 }}>{error}</Alert>;
  }

  return (
    <Container component="section" sx={{ mt: 8, mb: 4 }}>
      <Typography variant="h4" marked="center" align="center" component="h2">
        Discover Our Brand
      </Typography>
      <Typography variant="body2" align="center" color="inherit" sx={{ mt: 2 }}>
        {brand.brand_name}
      </Typography>
      <Box sx={item}>
        <Box display="flex" alignItems="center">
          <Box
            component="img"
            height="450px"
            src={brand.creators_pic}
            alt={`${brand.brand_name} creator`}
            sx={{ mr: 4 }}
          />
          <Box>
            <Box
              component="img"
              src={brand.logo}
              alt={`${brand.brand_name} logo`}
              sx={{ height: '110px', width: 'auto', mt: 10 }}
            />
            <Typography variant="h5" align="center" sx={{ mt: 5, width: '600px' }}>
              {brand.description}
            </Typography>
            <Typography variant="h5" align="center" sx={{ mt: 5, width: '600px' }}>
              Country: {brand.country}<br />
              Creator: {brand.creators}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default withRoot(Brand);
