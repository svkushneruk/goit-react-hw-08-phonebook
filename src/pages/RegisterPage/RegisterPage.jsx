import { useDispatch, useSelector } from 'react-redux';
import { signup } from 'redux/auth/auth-operations';

import RegisterForm from 'components/RegisterForm/RegisterForm';
import { getAuthError, isAuth } from './../../redux/auth/auth-selectors';
import { Navigate } from 'react-router-dom';

export default function RegisterView() {
  const dispatch = useDispatch();
  const { status, message } = useSelector(getAuthError);

  const isLogin = useSelector(isAuth);

  const onRegister = data => {
    dispatch(signup(data));
  };

  if (isLogin) {
    return <Navigate to="/contacts" />;
  }
  return (
    <div>
      <h1>Страница регистрации</h1>
      <RegisterForm onSubmit={onRegister} />
      {status && <p style={{ color: 'red' }}>{message}</p>}
    </div>
  );
}
