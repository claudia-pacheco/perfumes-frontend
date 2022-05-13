import React from "react";
import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import { Button, Toolbar } from "@mui/material";
import logo from "../assets/cloud9-logoo.png";
function Nav() {
    return (
        <>
            <header>
                <Toolbar justifyContent="space-between" position="fixed" >
                    <img src={logo} alt="logo" height="100"></img>
                    <Button href="/" sx={{ color: "#ff8396" }}> Home</Button>
                    <Button href="/brands" sx={{ color: "#ff8396" }}> Brands</Button>
                    <Button href="/perfumes" sx={{ color: "#ff8396" }}>Perfumes</Button>
                    <Box sx={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
                        <Button href="/login" sx={{ color: "#ff8396" }} >Sign In</Button>
                        <Button href="/register" sx={{ color: "#ff8396" }}>Register</Button>
                    </Box>
                </Toolbar>
            </header>
            <main>
                <Outlet />
            </main>
        </>
    );
}
export default Nav;
