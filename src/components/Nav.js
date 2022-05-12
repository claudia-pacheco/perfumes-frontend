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
                            <Link to="/brands"> Brands</Link>
                        </li>
                        <li>
                            <Link to="/perfumes">Perfumes</Link>
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
