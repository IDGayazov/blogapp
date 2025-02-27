import React from 'react';
import { StyledMain, StyledText, StyledTextLess } from './index.style.ts';

import Button from '../Button/index.tsx';
import { useTranslation } from 'react-i18next';

const HomePageText = () => {
    const {t} = useTranslation();

    return (
            <StyledMain>
                <StyledText>
                    {t('home_page_text_big')}
                </StyledText>
                <StyledTextLess>
                    {t('home_page_text_small')}
                </StyledTextLess>
                <Button name={t('home_page_button')}/>
            </StyledMain>
    );
}

export default HomePageText;