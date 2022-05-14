import * as React from 'react';
import { useEffect, useState } from "react";
import axios from 'axios';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from './Typography';
import withRoot from './withRoot.js'

const item = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    px: 5
};

function Perfumes() {
    const [perfumes, setPerfumes] = useState([]);

    useEffect(() => {
        axios({
            method: "get",
            url: "https://cloud9-scents.herokuapp.com/perfumes/",
        })
            .then((response) => {
                console.log(`perfumes data: `);
                console.log(response.data);

                // reload
                // Setting the data to State
                setPerfumes(response.data);

            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    console.log('this is id', perfumes.id);
    return (
        <Box
            component="section"
            sx={{ display: 'flex', overflow: 'hidden', bgcolor: 'white' }}
        >
            <Container component="section" sx={{ mt: 8, mb: 4 }} >
                <Box sx={{ mt: 8, display: "flex", flexDirection: 'row', flexWrap: "wrap" }} >
                    {
                        perfumes ? (
                            perfumes.map(perfume => (
                                <Grid >
                                    <Grid >
                                        <Box sx={item}>
                                            <Box
                                                component="img"
                                                height='600px'
                                                width='400px'
                                                src={perfume.perfume_image}
                                                alt="Fragrance"
                                                sx={{ pointerEvents: 'none', position: 'top', top: -180, height: 'auto' }}
                                            />

                                            <Typography variant="h6" sx={{ my: 5 }}>
                                                {perfume.perfume_name}
                                            </Typography>
                                        </Box>
                                    </Grid>

                                </Grid>



                            )))
                            : <Box> <Typography>Loading</Typography ></Box >
                    }</Box>
            </Container >
        </Box >
    )
}


export default withRoot(Perfumes);