import { NavLink } from 'react-router-dom';

const UserMenu = () => {
  return (
    <div>
      <NavLink to="/register">Register</NavLink>|
      <NavLink to="/login">Login</NavLink>
    </div>
  );
};

export default UserMenu;
