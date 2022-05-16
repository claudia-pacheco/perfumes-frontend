import { useEffect, useState } from "react";
import axios from "axios";
import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "./Typography";
import { useParams } from "react-router-dom";
import withRoot from './withRoot.js'

const item = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    px: 5,
    mb: 5,
    mt: 5
};
function Brand() {

    const [brand, setBrand] = useState([]);
    const { brandId } = useParams();

    useEffect(() => {
        console.log(brandId);
        axios({
            method: "get",
            url: `https://cloud9-scents.herokuapp.com/brands/${brandId}`,
        })
            .then((response) => {
                console.log(`brand data: `);
                console.log(response.data);

                // reload
                // Setting the data to State
                setBrand(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [brandId]);

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
