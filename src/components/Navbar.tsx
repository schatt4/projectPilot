import {
  StyledHeader,
  StyledNav,
  StyledLogo,
  StyledNavLink,
} from "./Navbar.styled";
import { StyledButton } from "./shared/Button.styled";

const Navbar = () => {
  const styledActiveLink = ({ isActive }: { isActive: boolean }) => {
    return {
      backgroundColor: isActive ? "rgb(232, 232, 178)" : "",
    };
  };
  return (
    <StyledHeader>
      <StyledLogo>Logo</StyledLogo>
      <StyledNav>
        <StyledNavLink to="/" style={styledActiveLink}>
          Overview
        </StyledNavLink>
        <StyledNavLink to="/bills" style={styledActiveLink}>
          Bills & Payment
        </StyledNavLink>
        <StyledNavLink to="/usage" style={styledActiveLink}>
          Usage
        </StyledNavLink>
        <StyledNavLink to="/rewards" style={styledActiveLink}>
          Rewards
        </StyledNavLink>
        <StyledNavLink to="/goals" style={styledActiveLink}>
          Goals
        </StyledNavLink>
      </StyledNav>

      <StyledNav>
        <div>Settings</div>
        <StyledButton>Logout</StyledButton>
      </StyledNav>
    </StyledHeader>
  );
};

export default Navbar;
