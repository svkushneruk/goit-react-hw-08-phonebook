import { Link } from 'react-router-dom';

import NavbarMenu from './NavbarMenu/NavbarMenu';
import UserMenu from './UserMenu/UserMenu';

import css from '../Navbar/Navbar.module.css';

const Navbar = () => {
  return (
    <div className={css.wrapper}>
      <Link to="/" className={css.logoLink}>
        {' '}
        Phonebook
      </Link>
      <NavbarMenu />
      <UserMenu />
    </div>
  );
};

export default Navbar;
