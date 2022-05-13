import React from "react";
import { Link, Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import { Button, Toolbar } from "@mui/material";
import logo from "../assets/cloud9-logoo.png"
function Nav() {
    return (
        <>
            <header>

                <Toolbar justifyContent='space-between' position='fixed' >
                    <img src={logo} height='100'></img>
                    <Button href="/"> Home</Button>
                    <Button href="/brands"> Brands</Button>
                    <Button href="/perfumes">Perfumes</Button>
                    <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
                        <Button href="/login">Sign In</Button>
                        <Button href="/register">Register</Button></Box>
                </Toolbar>
            </header>
            <main>
                <Outlet />
            </main>
        </>
    );
}
export default Nav;
