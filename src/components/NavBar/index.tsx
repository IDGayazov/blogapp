import React from "react";
import { StyledUl, StyledLi, StyledLink } from "./index.style.ts";

const NavBar = () => {
    return (
        <nav>
            <StyledUl>
                <StyledLi>
                    <StyledLink to="/">Home</StyledLink>
                </StyledLi>
                <StyledLi>
                    <StyledLink to="/about">About</StyledLink>
                </StyledLi>
                <StyledLi>
                    <StyledLink to="/blog">Blog</StyledLink>
                </StyledLi>
            </StyledUl>
        </nav>
    );
}

export default NavBar;