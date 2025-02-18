import React from 'react';
import NavBar from '../NavBar/index.tsx';
import { StyledHeader, StyledLogo, StyledLogoLink } from './index.style.ts';
import LanguageSwitcher from '../LanguageSwitcher/index.tsx';

const Logo = () => {
    return (
        <StyledLogo>
            <StyledLogoLink to="/">
                <h1>Storia</h1>
            </StyledLogoLink>
        </StyledLogo>
    );
}

const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <NavBar/>
            <LanguageSwitcher/>
        </StyledHeader>
    );
}

export default Header;