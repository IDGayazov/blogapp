import React from 'react';
import { StyledFooter, StyledFooterText } from './index.style.ts';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const {t} = useTranslation();

    return  <StyledFooter>
                <hr/>
                <StyledFooterText>&copy; {t('footer')}</StyledFooterText>
            </StyledFooter>;
}

export default Footer;