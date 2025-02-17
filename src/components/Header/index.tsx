import React from 'react';
import NavBar from '../NavBar/index.tsx';
import { StyledHeader } from './index.style.ts';

const Header = () => {
    return (
        <StyledHeader>
            <NavBar/>
            <hr/>
        </StyledHeader>
    );
}

export default Header;