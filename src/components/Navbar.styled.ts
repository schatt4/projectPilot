import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
  font-weight: 900;
  font-size: larger;
`;

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const StyledLogo = styled.span``;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  padding: 0 10px;
`;

// export const StyledLinkTab = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   & > div {
//     padding: 0 10px;
//   }
// `;

// export const StyledLinkTab = styled(StyledNav)`
//   & > div {
//     padding: 0 10px;
//   }
// `;
