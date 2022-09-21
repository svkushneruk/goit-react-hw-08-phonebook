import { useDispatch, useSelector } from 'react-redux';

import { getAuthError } from './../../redux/auth/auth-selectors';
import { login } from 'redux/auth/auth-operations';
import LoginForm from 'components/LoginForm/LoginForm';

const LoginPage = () => {
  const dispatch = useDispatch();
  const { status, message } = useSelector(getAuthError);

  const onLogin = data => {
    dispatch(login(data));
  };

  return (
    <div>
      <h1>Страница логина</h1>
      <LoginForm onSubmit={onLogin} />
      {status && <p style={{ color: 'red' }}>{message}</p>}
    </div>
  );
};

export default LoginPage;
