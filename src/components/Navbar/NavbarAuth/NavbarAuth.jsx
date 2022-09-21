import { Wrapper, StyledLink } from './Navbar.styled';

const NavbarAuth = () => {
  return (
    <Wrapper>
      <StyledLink to="/register">Register</StyledLink>|
      <StyledLink to="/login">Login</StyledLink>
    </Wrapper>
  );
};

export default NavbarAuth;
