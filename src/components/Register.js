import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";

import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import backgroundImg from "../assets/register-pic.webp";
import { useNavigate } from "react-router-dom";

function Copyright(props) {
    return (
        <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            {...props}
        >
            {"Copyright © "}
            <Link color="#FABB51" href="https://cloud9-scents.herokuapp.com/home">
                Cloud9
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

const theme = createTheme();

export default function Register() {
    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        try {
            const resp = await axios.post(
                "https://cloud9-scents.herokuapp.com/users/register",
                data
            );
            console.log(resp);
            if (resp.status == 201) {
                navigate("/login")
            }
        } catch (e) { }

        console.log({
            username: data.get("username"),
            password: data.get("password"),
        });
    };

    return (
        <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{ height: "100vh" }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: `url(${backgroundImg})`,
                        backgroundRepeat: "no-repeat",
                        backgroundColor: (t) =>
                            t.palette.mode === "light"
                                ? t.palette.grey[50]
                                : t.palette.grey[900],
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: "#FABB51" }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Register
                        </Typography>
                        <Box
                            component="form"
                            noValidate
                            onSubmit={handleSubmit}
                            sx={{ mt: 1 }}
                        >
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        name="first_name"
                                        label="First Name"
                                        type="first_name"
                                        id="first_name"
                                        autoComplete="first_name"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        xs={12}
                                        sm={6}
                                        margin="normal"
                                        required
                                        fullWidth
                                        name="last_name"
                                        label="Last Name"
                                        type="last_name"
                                        id="last_name"
                                        autoComplete="last_name"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="username"
                                        label="Username"
                                        name="username"
                                        autoComplete="username"
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    {" "}
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        autoComplete="current-password"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    {" "}
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        name="password_repeat"
                                        label="Password repeat"
                                        type="password"
                                        id="password_repeat"
                                        autoComplete="current-password_repeat"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    {" "}
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        name="email"
                                        label="Email"
                                        type="email"
                                        id="email"
                                        autoComplete="email"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        name="age"
                                        label="Age"
                                        type="age"
                                        id="age"
                                        autoComplete="age"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControlLabel
                                        control={<Checkbox value="is_premium" color="primary" />}
                                        label="Sign up for Premium"
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2, bgcolor: "#FABB51" }}
                            >
                                Sign In
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="login" variant="body2" color="#B07C36">
                                        {"Already have an account? Sign In"}
                                    </Link>
                                </Grid>
                            </Grid>
                            <Copyright sx={{ mt: 5 }} />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}
