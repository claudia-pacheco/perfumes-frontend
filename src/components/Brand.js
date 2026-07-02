import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "./Typography";
import { useParams } from "react-router-dom";
import withRoot from './withRoot.js'
import seedData from '../data/seedData.json';

const item = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    px: 5,
    mb: 5,
    mt: 5
};
function Brand() {
    const { brandId } = useParams();
    const brand = seedData.brands.find((item) => String(item.id) === String(brandId));

    if (!brand) {
        return (
            <Container component="section" sx={{ mt: 8, mb: 4 }}>
                <Typography variant="h4" marked="center" align="center" component="h2">
                    Brand not found
                </Typography>
            </Container>
        );
    }

    return (
        <Container component="section" sx={{ mt: 8, mb: 4 }}>
            <Typography variant="h4" marked="center" align="center" component="h2">
                Discover Our Brand
            </Typography>
            <Typography variant="body2" align="center" color="inherit" sx={{ mt: 2 }}>
                {brand.brand_name}
            </Typography>

            < Box sx={item}>

                <Box display='flex' alignItems="center">
                    <Box component="img"
                        height='450px'
                        src={brand.creators_pic}
                        alt="brand-creator"
                        sx={{ mr: 4 }}>

                    </Box>
                    <Box>
                        <Box
                            component="img"
                            src={brand.logo}
                            alt="brand-logo"
                            sx={{ height: '110px', width: 'auto', mt: 10 }}
                        />
                        <Typography variant="h5" align="center" sx={{ mt: 5, width: '600px' }}>
                            {brand.description}
                        </Typography>
                        <Typography variant="h5" align="center" sx={{ mt: 5, width: '600px' }}>
                            Country: {brand.country} < br />
                            Creator: {brand.creators}
                        </Typography>
                    </Box>

                </Box>


            </Box>
        </Container >
    );
}
export default withRoot(Brand);
