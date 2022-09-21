import { useSelector, useDispatch } from 'react-redux';
import { logout } from 'redux/auth/auth-operations';
import { getAuth } from 'redux/auth/auth-selectors';

import { Wrapper, Email, Button } from './UserMenu.styled';

const UserMenu = () => {
  const { email } = useSelector(getAuth);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <Wrapper>
      <Email>{email}</Email> |
      <Button type="button" onClick={onLogout}>
        LogOut
      </Button>
    </Wrapper>
  );
};

export default UserMenu;
