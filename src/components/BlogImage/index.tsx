import React from 'react';

import {StyledBlogImage} from './index.style.ts';

const BlogImage = (props) => {
    return <StyledBlogImage src={props.url} alt="blog image"/>;
}

export default BlogImage;