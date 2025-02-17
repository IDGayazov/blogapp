import React from "react";
import { NavLink } from "react-router-dom";
import { StyledUl } from "./index.style.ts";

const NavBar = () => {
    return (
        <nav>
            <StyledUl>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/blog">Blog</NavLink>
                </li>
            </StyledUl>
        </nav>
    );
}

export default NavBar;