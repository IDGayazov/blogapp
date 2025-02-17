import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

const gradientAnimation = keyframes`
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
`;

export const StyledHeader = styled.header`
    padding: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    osition: relative; 
`;

export const StyledLogo = styled.div`
    position: absolute; 
    left: 40px;
    top: 30px;
`;

export const StyledLogoLink = styled(NavLink)`
    text-decoration: none;
    color: white;

    h1 {
        background-size: 200% 200%;
        background: linear-gradient(90deg,rgb(130, 187, 209),rgb(188, 236, 255),rgb(130, 187, 209));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: ${gradientAnimation} 5s ease infinite;
    }
`;
