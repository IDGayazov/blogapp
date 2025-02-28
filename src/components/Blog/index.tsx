import React from 'react';

import { StyledBlogWrapper } from './index.style.ts';
import Article from '../Article/index.tsx';

const Blog = ({ articles }) => {
    return (
        <StyledBlogWrapper>
            {articles.map(article => (
                <Article key={article.id} article={article} />
            ))}
        </StyledBlogWrapper>
    );
};

export default Blog;