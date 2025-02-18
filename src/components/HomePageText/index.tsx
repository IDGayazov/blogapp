import React from 'react';
import { StyledMain, StyledPageWrapper, StyledText, StyledTextLess } from './index.style.ts';

import Button from '../Button/index.tsx';
import { useTranslation } from 'react-i18next';

const HomePageText = () => {
    const {t} = useTranslation();

    return (
            <StyledPageWrapper>
                <StyledMain>
                    <StyledText>
                        {t('home_page_text_big')}
                    </StyledText>
                    <StyledTextLess>
                        {t('home_page_text_small')}
                    </StyledTextLess>
                    <Button name={t('home_page_button')}/>
                </StyledMain>
            </StyledPageWrapper>
    );
}

export default HomePageText;