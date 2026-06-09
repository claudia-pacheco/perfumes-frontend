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

const fragranceCategories = [
  {
    label: 'Floral',
    description: 'Delicate and romantic notes of rose, jasmine, and peony.',
    icon: '🌸',
  },
  {
    label: 'Woody & Oud',
    description: 'Rich, deep compositions of sandalwood, cedar, and rare agarwood.',
    icon: '🪵',
  },
  {
    label: 'Fresh & Citrus',
    description: 'Crisp, uplifting blends of bergamot, neroli, and sea salt.',
    icon: '🍋',
  },
];

function Fragrances() {
  return (
    <Box
      component="section"
      sx={{ display: 'flex', overflow: 'hidden', bgcolor: 'secondary.light' }}
    >
      <Container sx={{ mt: 15, mb: 15, display: 'flex', position: 'relative' }}>
        <Grid container spacing={5}>
          {fragranceCategories.map((category) => (
            <Grid item xs={12} md={4} key={category.label}>
              <Box sx={item}>
                <Typography variant="h2" sx={{ mb: 2 }}>
                  {category.icon}
                </Typography>
                <Typography variant="h6" sx={{ my: 3 }}>
                  {category.label}
                </Typography>
                <Typography variant="h5" align="center">
                  {category.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Fragrances;
