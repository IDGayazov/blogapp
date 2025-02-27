import React from 'react';

import BlogImage from '../BlogImage/index.tsx';
import { articles } from '../../stubs/api/articles';
import img1 from '../../stubs/images/more.jpg';
import { StyledBlogWrapper, StyledDescriptionText, StyledTitle } from './index.style.ts';

const Blog = () => {
    return (
        <StyledBlogWrapper> 
            {articles.map(article => (
                <div key={article.name}>
                    <BlogImage url={img1}/>
                    <StyledTitle>{article.name}</StyledTitle>
                    <StyledDescriptionText>{article.description}</StyledDescriptionText>
                </div>))
            }
        </StyledBlogWrapper>
    );
}

export default Blog;