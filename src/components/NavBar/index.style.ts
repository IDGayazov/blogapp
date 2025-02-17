import styled from "@emotion/styled/macro";
import { NavLink } from "react-router-dom";

export const StyledNav = styled.nav`
    margin: 0 auto;
`;

export const StyledUl = styled.ul`
    display : flex;
    justify-content: center;
    list-style: none;
    gap: 50px;
`;

export const StyledLi = styled.li`
    margin: 0 auto;
`;

export const StyledLink = styled(NavLink)`
    color: white;
    text-decoration: none;
    
    &:hover {
        color: #82bbd1;
    }

    &.active {
        color: #82bbd1;
    }
`;