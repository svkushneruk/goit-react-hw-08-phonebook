import { useDispatch, useSelector } from 'react-redux';
import { signup } from 'redux/auth/auth-operations';

import RegisterForm from 'components/RegisterForm/RegisterForm';
import { getAuthError } from './../../redux/auth/auth-selectors';

export default function RegisterView() {
  const dispatch = useDispatch();
  const { status, message } = useSelector(getAuthError);

  const onRegister = data => {
    dispatch(signup(data));
  };

  return (
    <div>
      <h1>Страница регистрации</h1>
      <RegisterForm onSubmit={onRegister} />
      {status && <p style={{ color: 'red' }}>{message}</p>}
    </div>
  );
}
