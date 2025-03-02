import React, { useContext } from "react";
import { useTranslation } from "react-i18next";

import { 
    StyledUl, StyledLi, 
    StyledLink, StyledNav, StyledButton 
} from "./index.style.ts";
import { AuthContext } from "../../AuthContext.tsx";

const NavBar = () => {
    const {t} = useTranslation();
    const {token, setToken} = useContext(AuthContext);

    const handleLogout = () => {
        localStorage.removeItem('token');
        setToken(null);
        window.location.reload();
    }

    return (
        <StyledNav>
            <StyledUl>
                <StyledLi>
                    <StyledLink to="/">{t('home')}</StyledLink>
                </StyledLi>
                {
                    token &&
                    <StyledLi>
                        <StyledLink to="/profile/:id">
                            {t('profile')}
                        </StyledLink>
                    </StyledLi> 
                }
                <StyledLi>
                    <StyledLink to="/about">{t('about')}</StyledLink>
                </StyledLi>
                <StyledLi>
                    <StyledLink to="/blog">{t('blog')}</StyledLink>
                </StyledLi>
                {
                    token ?
                    <StyledLi>
                        <StyledButton as="button" onClick={handleLogout}>
                            {t('logout')}
                        </StyledButton>
                    </StyledLi> 
                    : 
                    <StyledLi>
                        <StyledLink to="/auth">{t('auth')}</StyledLink>
                    </StyledLi> 
                }
            </StyledUl>
        </StyledNav>
    );
}

export default NavBar;