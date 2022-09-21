import { useSelector } from 'react-redux';
import { getAuth } from 'redux/auth/auth-selectors';

const UserMenu = () => {
  const { email } = useSelector(getAuth);
  return (
    <div>
      <span>{email}</span> |<button type="button">LogOut</button>
    </div>
  );
};

export default UserMenu;
