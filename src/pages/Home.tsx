import React from 'react';
import HomePageText from '../components/HomePageText/index.tsx';
import Blog from '../components/Blog/index.tsx';

import { StyledPageWrapper } from '../ui-kit/PageWrapper.tsx';

const Home = () => {

    return (
        <StyledPageWrapper>
            <HomePageText/>
            <Blog/>
            <Blog/>
        </StyledPageWrapper>
    );
}

export default Home;