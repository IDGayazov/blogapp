import React from 'react';
import { useParams } from 'react-router-dom';
import { articles } from '../stubs/api/articles';
import styled from "@emotion/styled";
import img1 from '../stubs/images/more.jpg';
import BlogImage from '../components/BlogImage/index.tsx';
import { StyledPageWrapper } from '../ui-kit/PageWrapper.tsx';

const StyledDescriptionText = styled.div`
    position: relative;
    line-height: 1.5;
    text-align: justify;
    overflow: hidden;
    margin-bottom: 30px;
`;

const StyledTitle = styled.h3`
    padding: 10px 0;
`;

const Article = () => {

    const params = useParams();
    
    const article = articles.find(article => article.id === params.id);

    return (
        <StyledPageWrapper>
            <BlogImage url={img1}/>
            <StyledTitle>{article?.name}</StyledTitle>
            <StyledDescriptionText>{article?.description}</StyledDescriptionText>
        </StyledPageWrapper>
    );
}

export default Article;