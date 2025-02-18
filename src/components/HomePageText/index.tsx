import React from 'react';
import { StyledMain, StyledPageWrapper, StyledText, StyledTextLess } from './index.style.ts';

import Button from '../Button/index.tsx';

const HomePageText = () => {
    return (
            <StyledPageWrapper>
                <StyledMain>
                    <StyledText>
                        Делитесь своими увлечениями
                    </StyledText>
                    <StyledTextLess>
                        Чтобы создать свой собственный блог, потребуется лишь несколько минут.
                    </StyledTextLess>
                    <Button name="Создать блог"/>
                </StyledMain>
            </StyledPageWrapper>
    );
}

export default HomePageText;