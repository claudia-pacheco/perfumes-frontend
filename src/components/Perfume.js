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

function Perfume() {
  const [perfume, setPerfume] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { perfumeId } = useParams();

  useEffect(() => {
    api.get(`/perfumes/${perfumeId}/`)
      .then((response) => {
        setPerfume(response.data);
      })
      .catch(() => {
        setError('Failed to load perfume details. Please try again later.');
      })
      .finally(() => {
        setLoading(false);
      });
  }, [perfumeId]);

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
        Discover Our Scent
      </Typography>
      <Typography variant="body2" align="center" color="inherit" sx={{ mt: 2 }}>
        {perfume.perfume_name}
      </Typography>
      <Box sx={item}>
        <Box display="flex" alignItems="center" flexWrap="wrap" gap={4}>
          {perfume.perfume_image && (
            <Box
              component="img"
              height="450px"
              src={perfume.perfume_image}
              alt={perfume.perfume_name}
              sx={{ mr: 4, maxWidth: '100%' }}
            />
          )}
          <Box>
            <Typography variant="h5" align="center" sx={{ mt: 5, maxWidth: '600px' }}>
              {perfume.description}
            </Typography>
            {perfume.brand_name && (
              <Typography variant="h5" align="center" sx={{ mt: 5, maxWidth: '600px' }}>
                Brand: {perfume.brand_name}
              </Typography>
            )}
            {perfume.concentration && (
              <Typography variant="h5" align="center" sx={{ mt: 2, maxWidth: '600px' }}>
                Concentration: {perfume.concentration}
              </Typography>
            )}
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default withRoot(Perfume);
