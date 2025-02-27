import React from "react";
import { useTranslation } from 'react-i18next';

import BlogImage from "../BlogImage/index.tsx";
import { BlurredText, ReadMoreOverlay, StyledDescriptionText, StyledTitle, VisibleText } from "./index.style.ts";
import img1 from '../../stubs/images/more.jpg';

const Article = ({ article }) => {
    const {t} = useTranslation()
    const wordLimit = 100;

    const showReadMore = article.description.split(' ').length > wordLimit;

    const visibleText = article.description.split(' ').slice(0, wordLimit/2).join(' ');
    const blurredText = article.description.split(' ').slice(wordLimit/2, wordLimit).join(' ');

    return (
        <div key={article.name}>
            <BlogImage url={img1} />
            <StyledTitle>{article.name}</StyledTitle>
            <StyledDescriptionText>
                <VisibleText>{visibleText}</VisibleText>
                <BlurredText>{blurredText}</BlurredText>
                {showReadMore && (
                    <ReadMoreOverlay onClick={() => {console.log("read more clicked")}}>
                        {t('read_more')}
                    </ReadMoreOverlay>
                )}
            </StyledDescriptionText>
        </div>
    );
};

export default Article;