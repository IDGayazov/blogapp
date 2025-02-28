import React from "react";
import { StyledUl, StyledLi, StyledLink, StyledNav } from "./index.style.ts";
import { useTranslation } from "react-i18next";

const NavBar = () => {
    const {t} = useTranslation();

    return (
        <StyledNav>
            <StyledUl>
                <StyledLi>
                    <StyledLink to="/">{t('home')}</StyledLink>
                </StyledLi>
                <StyledLi>
                    <StyledLink to="/about">{t('about')}</StyledLink>
                </StyledLi>
                <StyledLi>
                    <StyledLink to="/blog">{t('blog')}</StyledLink>
                </StyledLi>
                <StyledLi>
                    <StyledLink to="/auth">{t('auth')}</StyledLink>
                </StyledLi>
            </StyledUl>
        </StyledNav>
    );
}

export default NavBar;