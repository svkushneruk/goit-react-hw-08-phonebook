import NavbarMenu from './NavbarMenu/NavbarMenu';
import NavbarAuth from './NavbarAuth/NavbarAuth';
import UserMenu from './UserMenu/UserMenu';

import useAuth from 'shared/hooks/useAuth';

import { Wrapper, LogoLink } from './Navbar.styled';

const Navbar = () => {
  const isLogin = useAuth();
  return (
    <Wrapper>
      <LogoLink to="/"> Phonebook</LogoLink>
      {isLogin && <NavbarMenu />}
      {isLogin ? <UserMenu /> : <NavbarAuth />}
    </Wrapper>
  );
};

export default Navbar;
