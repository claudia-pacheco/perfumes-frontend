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
function Perfume() {

    const [perfume, setPerfume] = useState([]);
    const { perfumeId } = useParams();

    useEffect(() => {
        console.log(perfumeId);
        axios({
            method: "get",
            url: `https://cloud9-scents.herokuapp.com/perfumes/${perfumeId}`,
            headers: {
                Authorization: `Bearer ${localStorage.getItem("access")}`,
            },
        })
            .then((response) => {
                console.log(`perfume data: `);
                console.log(response.data);

                // reload
                // Setting the data to State
                setPerfume(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [perfumeId]);

    return (
        <Container component="section" sx={{ mt: 8, mb: 4 }}>
            <Typography variant="h4" marked="center" align="center" component="h2">
                Discover Our Scent
            </Typography>
            <Typography variant="body2" align="center" color="inherit" sx={{ mt: 2 }}>
                {perfume.perfume_name}
            </Typography>

            < Box sx={item}>

                <Box display='flex' alignItems="center">
                    <Box component="img"
                        height='450px'
                        src={perfume.creators_pic}
                        alt="perfume-creator"
                        sx={{ mr: 4 }}>

                    </Box>
                    <Box>
                        <Box
                            component="img"
                            src={perfume.logo}
                            alt="perfume-logo"
                            sx={{ height: '110px', width: 'auto', mt: 10 }}
                        />
                        <Typography variant="h5" align="center" sx={{ mt: 5, width: '600px' }}>
                            {perfume.description}
                        </Typography>
                        <Typography variant="h5" align="center" sx={{ mt: 5, width: '600px' }}>
                            Country: {perfume.country} < br />
                            Creator: {perfume.creators}
                        </Typography>
                    </Box>

                </Box>


            </Box>
        </Container >
    );
}
export default withRoot(Perfume);
