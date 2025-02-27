import React from 'react';
import HomePageText from '../components/HomePageText/index.tsx';
import Blog from '../components/Blog/index.tsx';

import { articles } from '../stubs/api/articles';
import { StyledPageWrapper } from '../ui-kit/PageWrapper.tsx';

const Home = () => {

    return (
        <StyledPageWrapper>
            <HomePageText/>
            <Blog articles={articles}/>
        </StyledPageWrapper>
    );
}

export default Home;