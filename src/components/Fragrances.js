import * as React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from './Typography';

const item = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};

function Fragrances() {
  return (
    <Box
      component="section"
      sx={{ display: 'flex', overflow: 'hidden', bgcolor: 'secondary.light' }}
    >
      <Container sx={{ mt: 15, mb: 30, display: 'flex', position: 'relative' }}>
        <Box
          component="img"
          src=""
          alt="Fragrance"
          sx={{ pointerEvents: 'none', position: 'absolute', top: -180 }}
        />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src=""
                alt="Fragrance"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                Fragrance1
              </Typography>
              <Typography variant="h5">
                {'Fragrance caption'}
                {'caption continued.'}
              </Typography>
            </Box>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
}

export default Fragrances;