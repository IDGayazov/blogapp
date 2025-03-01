import styled from "@emotion/styled/macro";
import { NavLink } from "react-router-dom";
import { colors } from "../../styles/colors";

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
        color: ${colors.secondary};
    }

    &.active {
        color: ${colors.secondary};
    }
`;


export const StyledButton = styled.button`
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  font-size: inherit;
  padding: 0;
  text-decoration: none;
`;