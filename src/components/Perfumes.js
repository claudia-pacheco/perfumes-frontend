import * as React from 'react';
import { useEffect, useState } from "react";
import axios from 'axios';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from './Typography';
import Button from "./Button";
import { styled } from "@mui/material/styles";
import ButtonBase from "@mui/material/ButtonBase";


const ImageBackdrop = styled("div")(({ theme }) => ({
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: "#000",
    opacity: 0.5,
    transition: theme.transitions.create("opacity"),
}));

const ImageIconButton = styled(ButtonBase)(({ theme }) => ({
    position: "relative",
    display: "flex",
    padding: 20,
    borderRadius: 0,
    height: "40vh",
    [theme.breakpoints.down("md")]: {
        width: "100% !important",
        height: 100,
    },
    "&:hover": {
        zIndex: 1,
    },
    "&:hover .imageBackdrop": {
        opacity: 0.15,
    },
    "&:hover .imageMarked": {
        opacity: 0,
    },
    "&:hover .imageTitle": {
        border: "4px solid currentColor",
    },
    "& .imageTitle": {
        position: "relative",
        padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
    },
    "& .imageMarked": {
        height: 3,
        width: 18,
        background: theme.palette.common.white,
        position: "absolute",
        bottom: -2,
        left: "calc(50% - 9px)",
        transition: theme.transitions.create("opacity"),
    },
}));

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
        <Container component="section" sx={{ mt: 8, mb: 4 }}>
            <Typography variant="h4" marked="center" align="center" component="h2">
                For all tastes and all desires
            </Typography>
            <Typography variant="body2" align="center" color="inherit" sx={{ mt: 2 }}>
                Discover the experience
            </Typography>
            <Box sx={{ mt: 8, display: "flex", flexWrap: "wrap" }}>
                {perfumes ? (
                    perfumes.map((perfume) => (
                        <ImageIconButton
                            key={perfume.id}
                            component="a"
                            href={`/perfumes/${perfume.id}`
                            }
                        >
                            <Box
                                sx={{
                                    position: "absolute",
                                    left: 0,
                                    right: 0,
                                    top: 0,
                                    bottom: 0,
                                    backgroundSize: "cover",
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "center 40%",
                                    backgroundImage: `url(${perfume.perfume_image})`,
                                }}
                            />
                            <ImageBackdrop className="imageBackdrop" />
                            <Button
                                sx={{
                                    left: 0,
                                    right: 0,
                                    top: 0,
                                    bottom: 0,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: "common.white",
                                }}
                            >
                                <Typography
                                    component="h3"
                                    variant="h6"
                                    color="inherit"
                                    className="imageTitle"
                                >
                                    {perfume.perfume_name}
                                    <div className="imageMarked" />
                                </Typography>
                            </Button>
                        </ImageIconButton>

                    ))
                ) : (
                    <Box> <Typography
                        component="h3"
                        variant="h6"
                        color="inherit"
                        className="imageTitle">Loading</Typography></Box>
                )}
            </Box>
        </Container>
    )
}


export default Perfumes;