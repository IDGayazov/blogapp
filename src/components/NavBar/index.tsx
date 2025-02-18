import React from "react";
import { StyledUl, StyledLi, StyledLink, StyledNav } from "./index.style.ts";

const NavBar = () => {
    return (
        <StyledNav>
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
        </StyledNav>
    );
}

export default NavBar;