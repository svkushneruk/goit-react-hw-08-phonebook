import { Link } from 'react-router-dom';

import NavbarMenu from './NavbarMenu/NavbarMenu';
import NavbarAuth from './NavbarAuth/NavbarAuth';
import UserMenu from './UserMenu/UserMenu';

import useAuth from 'shared/hooks/useAuth';

import css from '../Navbar/Navbar.module.css';

const Navbar = () => {
  const isLogin = useAuth();
  return (
    <div className={css.wrapper}>
      <Link to="/" className={css.logoLink}>
        {' '}
        Phonebook
      </Link>
      {isLogin && <NavbarMenu />}
      {isLogin ? <UserMenu /> : <NavbarAuth />}
    </div>
  );
};

export default Navbar;
