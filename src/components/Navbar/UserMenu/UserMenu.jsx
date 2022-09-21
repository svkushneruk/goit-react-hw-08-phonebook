import { useSelector, useDispatch } from 'react-redux';
import { logout } from 'redux/auth/auth-operations';
import { getAuth } from 'redux/auth/auth-selectors';

const UserMenu = () => {
  const { email } = useSelector(getAuth);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <span>{email}</span> |
      <button type="button" onClick={onLogout}>
        LogOut
      </button>
    </div>
  );
};

export default UserMenu;
