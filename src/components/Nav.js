import React from "react";
import { Link, Outlet } from "react-router-dom";


function Nav() {
    return (
        <>
            <header>
                <nav className="nav-bar">

                    <ul>

                        <li>
                            <Link to="/"> Home</Link>
                        </li>
                        <li>
                            <Link to="/dogs"> View Dogs</Link>
                        </li>
                        <li>
                            <Link to="/dogs/create">Create Dog</Link>
                        </li>
                        <li>
                            <Link to="/messages">Messages</Link>
                        </li>

                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/register">Register</Link>
                        </li>

                    </ul>
                </nav>
            </header>

            <main>
                <Outlet />
            </main>


        </>
    );
}
export default Nav;
